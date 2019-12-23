import React from 'react'



const JournalTable = props =>{

    return (
        <table className="table table-sm mt-3">
            <thead>
                <tr>
                    <th scope="col" style={{width: "5%"}}>Tanggal</th>
                    <th scope="col" style={{width: "25%"}}>Uraian</th>
                    <th scope="col" style={{width: "25%"}}>Nominal</th>
                    <th scope="col" style={{width: "14%"}}>Jenis Transaksi</th>
                    <th scope="col" style={{width: "30%"}}>Keterangan</th>
                    <th scope="col" style={{width: "1%"}}></th>
                </tr>
            </thead>
            <tbody>
                {props.entries.length>0?(
                    props.entries.map(
                        entry=>(
                            <tr key={entry.key}>
                                <td>{entry.date}</td>
                                <td>{entry.uraian}</td>
                                <td>{entry.nominal}</td>
                                <td>{entry.jenis}</td>
                                <td>{entry.description}</td>
                                <td>
                                    <div className="btn-group dropleft float-right">
                                        <button type="button" className="btn-xs btn-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            > <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="/">Sunting</a>
                                            <button
                                                className="dropdown-item"
                                                onClick={()=>props.deleteEntry(entry.key)}
                                            >
                                                Hapus transaksi
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            )
                        )
                    ):(
                        <tr>
                            <td>Data</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default JournalTable;