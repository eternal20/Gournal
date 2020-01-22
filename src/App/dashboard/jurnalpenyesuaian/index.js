import React, {useEffect} from 'react';
// import update from 'react-addons-update';
import 'moment-timezone';
// import moment from 'moment';
import CatatTransaksi from '../CatatTransaksi';
import JournalTable from '../JournalTable';
// import JournalBlock from '../JournalBlock'
import { withFirebase } from '../../../Firebase';

const JurnalPenyesuaian = withFirebase(props => {

    const initialEntriesData = {
        isLoading: true,
        data: null
    };
    const [alert, setAlert] = React.useState({
        isShow: false,
        component: (
            <div className="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
                Transaksi berhasil dicatat.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <h5 aria-hidden="true">&times;</h5>
                </button>
            </div>
        )
    })

    const [entries, setEntries] = React.useState(initialEntriesData);    
    
    useEffect(()=>{
        const listener = props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalpenyesuaian").on( 'value', snapshot => {
                // console.log(snapshot);
                // console.log(snapshot.val());

                const transactionsObject = snapshot.val();
                const transactionsList = !transactionsObject?null:Object.keys(transactionsObject).map(item => ({
                        ...transactionsObject[item],
                        key: item
                    }))

                setEntries({isLoading: false, data: transactionsList && transactionsList.reverse()});
            });
        });
        return listener();
    },[props.firebase])
    
    // console.log(entries)

    const addEntry = (entry, metaEntry) => {
        props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            return props.firebase
                .transactions(authUserSrc.uid,"jurnalpenyesuaian").push()
                .set({
                    ...metaEntry, transaction: entry
                })
        });
        setAlert({...alert, isShow: true});
    };

    const deleteEntry = key => {
        console.log(key)
        props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalpenyesuaian").child(key).remove()
        });

    };

    return (
        <div className="clearfix mb-2">
            <h4>Jurnal Penyesuaian</h4>
            <button className="btn btn-sm rounded-lg btn-primary d-block" type="button" data-toggle="collapse" data-target="#inputTransaction" aria-expanded="false">
                Catat Transaksi
            </button>
            {alert.isShow && alert.component}
            <div className="collapse hidden" id="inputTransaction">
                <CatatTransaksi addEntry={addEntry}/>
            </div>
            {console.log(entries)}
            <div className="mt-3">
                {entries.isLoading && <span>Memuat</span>}
                <JournalTable items={entries} deleteEntry={deleteEntry}/>
            </div>
        </div>
    );
}
)

// function syncTransaction(e){
//     console.log('The form was change.');
//     var val = document.getElementById("debitDefault").value;
//     document.getElementById("creditDefault").defaultValue = val;
//     console.log(val)
// }

export default JurnalPenyesuaian;