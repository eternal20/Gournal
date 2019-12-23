import React from 'react';
// import update from 'react-addons-update';
import 'moment-timezone';
// import moment from 'moment';
import CatatTransaksi from '../CatatTransaksi';
import JournalTable from '../JournalTable';

const JurnalUmum = () => {
    const entriesData = [
        {
            key: 0,
            date: '5',
            uraian: 'wqwq',
            nominal: 2121,
            jenis: 'kredit',

        },
        {
            key: 1,
            date: '6',
            uraian: 'Akumulasi Penyusutan',
            nominal: 45465,
            jenis: 'debit',
        }
    ];

    const [entries, setEntries] = React.useState(entriesData);

    const addEntry = entry => {
        console.log(entry)
        
        entry = Object.keys(entry).map(i => entry[i])
        console.log(entry)
        entry.forEach(
            item=>{
                item.key = item.key + entries.length;
            }
        )
        setEntries([...entries, ...entry]);
    };

    const deleteEntry = key => {
        console.log(key)
        setEntries(entries.filter(entry => entry.key !== key))
    };

    // console.log(entries);
    return (
        <div className="clearfix mb-2">
            {console.log(entries)}
            <h4>Jurnal Umum</h4>
            <div className="card card-body rounded shadow-sm d-block">
                <button className="btn-sm btn-primary" type="button" data-toggle="collapse" data-target="#inputTransaction" aria-expanded="false" aria-controls="collapseExample">
                    Catat Transaksi
                </button>
                <div className="collapse" id="inputTransaction">
                    <CatatTransaksi addEntry={addEntry} />
                </div>
                    <JournalTable entries={entries} deleteEntry={deleteEntry}/>
            </div>
        </div>
    );
}

// function syncTransaction(e){
//     console.log('The form was change.');
//     var val = document.getElementById("debitDefault").value;
//     document.getElementById("creditDefault").defaultValue = val;
//     console.log(val)
// }

export default JurnalUmum;