import React, {Fragment} from 'react'
import moment from 'moment';

const JournalTable = props =>{
    return props.items.isLoading?null:
    (
        <div className="card card-body shadow-sm rounded-lg">
            <h5>Januari</h5>
            <table className="table table-sm mb-0">
                <thead>
                    <tr>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Uraian</th>
                    <th scope="col">Debit</th>
                    <th scope="col">Kredit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.data?props.items.data.map((items, key)=>(
                        <Fragment key={key}>
                            <tr>
                                <th scope="row" rowSpan={items.transaction.length+1}>
                                    <span className="h4">{ moment(items.date).format("D") }</span> { moment(items.date).format("MMMM") }
                                </th>
                                <th colSpan="2" >{items.description?<span>{items.description}</span>:<span>Tidak ada keterangan</span>}</th>
                                <td>
                                    <button id="JournalBlockOptionMobile" type="button" className="btn btn-sm btn-transparent font-weight-bold float-right" data-toggle="modal" data-target="#modalOption">
                                        ⋮
                                    </button>
                                    <div className="modal fade " id="modalOption" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <a className="dropdown-item" href="/">Sunting</a>
                                                    <button
                                                        className="dropdown-item"
                                                        data-dismiss="modal"
                                                        onClick={()=>props.deleteEntry(items.key)}
                                                    >
                                                        Hapus transaksi
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group dropleft float-right">
                                        <button id="JournalBlockOptionDesktop" type="button" className="btn btn-sm btn-transparent font-weight-bold" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ⋮
                                        </button>
                                        <div className="dropdown-menu shadow">
                                            <a className="dropdown-item" href="/">Sunting</a>
                                            <button
                                                className="dropdown-item"
                                                onClick={()=>props.deleteEntry(items.key)}
                                            >
                                                Hapus transaksi
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {items.transaction.map( (entry, key) =>(
                                <tr key={"1"+key}>
                                    <td>{entry.uraian}</td>
                                    {entry.jenis==="debit"
                                    ?   <><td>Rp{entry.nominal}</td>
                                        <td></td></>
                                    :   <><td></td>
                                        <td>Rp{entry.nominal}</td></>
                                    }
                                </tr>
                            ))}
                        </Fragment>
                    )):
                        <tr>
                            <th scope="row">1</th>
                            <td>Kosong</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default JournalTable;