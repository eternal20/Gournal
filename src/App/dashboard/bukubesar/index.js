import React, {useEffect} from 'react';
// import update from 'react-addons-update';
import 'moment-timezone';
// import moment from 'moment';
import BukuBesarTable from '../BukuBesarTable';
// import JournalBlock from '../JournalBlock'
import { withFirebase } from '../../../Firebase';

const uraian = ["Kas", "Piutang Dagang", "Perlengkapan", "Peralatan", "Sewa di Muka", "Akumulasi Penyusutan"]

const BukuBesar = withFirebase(props => {

    const initialEntriesData = {
        isLoading: true,
        data: null
    };
    // const [alert, setAlert] = React.useState({
    //     isShow: false,
    //     component: (
    //         <div className="alert alert-warning mt-3 alert-dismissible fade show" role="alert">
    //             Transaksi berhasil dicatat.
    //             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    //                 <h5 aria-hidden="true">&times;</h5>
    //             </button>
    //         </div>
    //     )
    // })

    const [entries, setEntries] = React.useState(initialEntriesData);    
    
    useEffect(()=>{
        const listener = props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalumum").on( 'value', snapshot => {
                // console.log(snapshot);
                // console.log(snapshot.val());

                const transactionsObject = snapshot.val();
                const transactionsList = !transactionsObject?null:Object.keys(transactionsObject).map(item => ({
                        ...transactionsObject[item],
                        key: item
                    }))

                setEntries({isLoading: false, data: transactionsList && transactionsList.sort()});
            });
        });
        return listener();
    },[props.firebase])

    const deleteEntry = key => {
        console.log(key)
        props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalumum").child(key).remove()
        });

    };

    return (
        <div className="clearfix mb-2">
            <h4>Buku Besar</h4>
            {console.log(entries)}
            {/* {entries && <JournalBlock entries={entries} deleteEntry={deleteEntry}/>} */}
            <div className="mt-3">
                {entries.isLoading && <span>Memuat</span>}
                {/* <JournalBlock items={entries} deleteEntry={deleteEntry}/> */}
                <BukuBesarTable items={entries} uraian={uraian} deleteEntry={deleteEntry}/>
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

export default BukuBesar;