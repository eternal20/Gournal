import React from 'react'
import moment from 'moment';


const JournalBlock = props =>{
    return props.items.data?props.items.data.map((items, key)=>(
        <div className="card rounded-lg p-2 shadow-sm mb-2" key={key}>
            <div className="row mx-0 ">
                <div className="col-sm-2 px-1">
                    <span className="d-inline mb-0 h3">{ moment.unix(items.date).format("D") } </span>
                    <span className="mr-3">{ moment(items.date).format("MMMM") } </span>
                </div>
                <div className="col-sm-10 px-1 pt-1">
                    <h5 className="">{items.description?items.description:"Tidak ada keterangan"}
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
                    </h5>
                    <span>Debit</span>
                    {items.transaction.map((entry,key)=>
                    entry.jenis === "debit"?
                    (
                        <div className="row m-0 ml-3" key={key}>
                            <div className="col-6 pl-0">
                                <span className="d-block">{entry.uraian}</span>
                            </div>
                            <div className="col-6 pr-0">
                                <span className="d-block text-right">Rp{entry.nominal}</span>
                            </div>
                        </div>
                    ):null
                    )}
                    <span>Kredit</span>
                    {items.transaction.map((entry,key)=>
                    entry.jenis === "kredit"?
                    (
                        <div className="row m-0 ml-3" key={key}>
                            <div className="col-6 pl-0">
                                <span className="d-block">{entry.uraian}</span>
                            </div>
                            <div className="col-6 pr-0">
                                <span className="d-block text-right">Rp{entry.nominal}</span>
                            </div>
                        </div>
                    ):null
                    )}
                </div>
            </div>
        </div>
    )):null
}

export default JournalBlock;