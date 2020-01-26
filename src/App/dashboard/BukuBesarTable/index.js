import React from 'react'
import moment from 'moment';

const JournalTable = props => {
    console.log(props.data)
    // return 0
    return !props.data.isLoading && props.data.data.map(
        (item, key) =>  item.subSaldo<=0 ? "Kosong":
            (
                <div className="card card-body shadow-sm rounded-lg mb-3" key={key}>
                    <h5>{item.uraian}</h5>
                    <div className="m-1">
                        <div className="">
                            <div id="table-scroll" className="table-scroll border">
                                <table className="table main-table table-sm my-0 table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th rowSpan="2" className="align-middle" >Tanggal</th>
                                            <th scope="col" colSpan="2" className="text-center">Transaksi</th>
                                            <th scope="col" colSpan="2" className="text-center">Saldo</th>
                                            {/* <th rowSpan="2" className="align-middle" >Saldo</th> */}
                                        </tr>
                                        <tr>
                                            <th scope="col" className="text-center">Debit</th>
                                            <th scope="col" className="text-center">Kredit</th>
                                            <th scope="col" className="text-center">Debit</th>
                                            <th scope="col" className="text-center">Kredit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {item && item.subSaldo.map( (entry, index) => (
                                        <tr key={index}>
                                            <th>{ moment.unix(entry.date).format("D") } { moment.unix(entry.date).format("MMM") }</th>
                                            {entry.jenis==="debit"
                                                ?   <><td className="text-right p-1">Rp{entry.nominal}</td>
                                                    <td></td></>
                                                :   <><td></td>
                                                    <td className="text-right p-1">Rp{entry.nominal}</td></>
                                            }
                                            {/* {console.log(entry.saldo, entry.saldo > 0)} */}
                                            {(entry.saldo > 0)
                                                ?   (<>
                                                        <td className="text-right p-1">Rp{entry.saldo}</td>
                                                        <td></td>
                                                    </>)
                                                :   (<>
                                                        <td></td>
                                                        <td className="text-right p-1">Rp{(entry.saldo*(-1))}</td>
                                                    </>)
                                            }
                                            {/* <td className="text-right">Rp{entry.saldo}</td> */}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
    )
}

export default JournalTable;