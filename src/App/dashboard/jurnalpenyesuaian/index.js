import React from 'react';
import Tools from '../../../components/Tools';
// import update from 'react-addons-update';
import 'moment-timezone';
// import moment from 'moment';
import CatatTransaksi from '../CatatTransaksi';
// import JournalTable from '../JournalTable';
import JournalBlock from '../JournalBlock'
import {DatabaseContext, withJurnalPenyesuaian} from '../../../Database'

const JurnalPenyesuaian = withJurnalPenyesuaian(props => {

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

    const deleteEntry = key => {
        console.log(key)
        props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalpenyesuaian").child(key).remove()
        });

    };

    return (
        <DatabaseContext.Consumer>
            {value => {
                console.log(value)
                return (
                    <div className="row">
                        <div className="col-md-8">
                            <div className="clearfix mb-2">
                                <h4>Jurnal Penyesuaian</h4>
                                <button className="btn btn-sm rounded-lg btn-primary d-block" type="button" data-toggle="collapse" data-target="#inputTransaction" aria-expanded="false">
                                    Catat Transaksi
                                </button>
                                {alert.isShow && alert.component}
                                <div className="collapse show" id="inputTransaction">
                                    <CatatTransaksi addEntry={value.addEntry}/>
                                </div>
                                {/* {entries && <JournalBlock entries={entries} deleteEntry={deleteEntry}/>} */}
                                <div className="mt-3">
                                    {value.entries.isLoading && <span>Memuat</span>}
                                    <JournalBlock items={value.entries} deleteEntry={deleteEntry}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Tools/>
                        </div>
                    </div>
                )
            }}
        </DatabaseContext.Consumer>
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