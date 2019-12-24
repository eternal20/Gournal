import React from 'react';
import CatatTransaksi from '../CatatTransaksi';
import JournalTable from '../JournalTable';

const JurnalPenyesuaian = () => {

    

    const meta = {
        transactionNumber: '',
        date: '',
        description: ''
    }

    console.log(meta);

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
        // console.log(entry)
        entry = Object.keys(entry).map(i => entry[i])
        // console.log(entry)
        entry.forEach(
            item=>{
                item.key = item.key + entries.length;
            }
        )
        setEntries([...entries, ...entry]);
    };

    const [metaEntries, setMetaEntries] = React.useState(meta);
    const addMeta = metaEntry => {
        console.log(metaEntry)
        setMetaEntries( metaEntry )
    }

    const deleteEntry = key => {
        // console.log(key)
        setEntries(entries.filter(entry => entry.key !== key))
    };

    // console.log(entries);
    return (
        <div className="clearfix mb-2">
            {console.log(metaEntries)}
            {/* {console.log(entries)} */}
            <h4>Jurnal Penyesuaian</h4>
            <div className="card card-body rounded shadow-sm d-block">
                <button className="btn-sm btn-primary" type="button" data-toggle="collapse" data-target="#inputTransaction" aria-expanded="false" aria-controls="collapseExample">
                    Catat Transaksi
                </button>
                <div className="collapse" id="inputTransaction">
                    <CatatTransaksi addEntry={addEntry} addMeta={addMeta}/>
                </div>
                    <JournalTable entries={entries} deleteEntry={deleteEntry}/>
            </div>
        </div>
    );
}

export default JurnalPenyesuaian;