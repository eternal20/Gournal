import React from 'react';
import { withNeraca, DatabaseContext, } from '../../../Database'

console.log(withNeraca)

const Neraca = props =>{
    // return 0
    return ((
            <div className="clearfix mt-2">
            {/* {console.log(props)} */}
                <h4>Neraca</h4>
                <div className="card card-body rounded shadow-sm d-block">
                    <h6>Best viewed on widescreen</h6>
                    <div className="m-1">
                        <div className="p-0">
                        <div id="table-scroll" className="table-scroll border">
                            <table id="main-table" className="main-table table-bordered">
                                <thead>
                                    <tr>
                                        <th rowSpan="2" className="align-middle" >Perkiraan</th>
                                        <th scope="col" colSpan="2" className="text-center">Neraca Saldo</th>
                                        <th scope="col" colSpan="2" className="text-center">Penyesuaian</th>
                                        <th scope="col" colSpan="2" className="text-center text-truncate">Setelah Penyesuaian</th>
                                        <th scope="col" colSpan="2" className="text-center">Rugi Laba</th>
                                        <th scope="col" colSpan="2" className="text-center">Neraca</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="text-center">Debit</th>
                                        <th scope="col" className="text-center">Kredit</th>
                                        <th scope="col" className="text-center">Debit</th>
                                        <th scope="col" className="text-center">Kredit</th>
                                        <th scope="col" className="text-center">Debit</th>
                                        <th scope="col" className="text-center">Kredit</th>
                                        <th scope="col" className="text-center">Debit</th>
                                        <th scope="col" className="text-center">Kredit</th>
                                        <th scope="col" className="text-center">Debit</th>
                                        <th scope="col" className="text-center">Kredit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <DatabaseContext.Consumer>
                                        {value => value.map((item,key)=>{
                                            return (
                                                <tr key={key}>
                                                    <th>{item.uraian}</th>
                                                    {isNaN(item.saldoPenyesuaian)
                                                        ?
                                                        <>
                                                            <td></td>
                                                            <td></td>
                                                        </>
                                                        :item.saldoUmum>0
                                                        ?<>
                                                            <td>Rp{item.saldoUmum}</td>
                                                            <td></td>
                                                        </>
                                                        :<>
                                                            <td></td>
                                                            <td>Rp{item.saldoUmum*(-1)}</td>
                                                        </>
                                                    }
                                                    {isNaN(item.saldoPenyesuaian)
                                                        ?
                                                        <>
                                                            <td></td>
                                                            <td></td>
                                                        </>
                                                        :item.saldoPenyesuaian>0
                                                            ?<>
                                                                <td>Rp{item.saldoPenyesuaian}</td>
                                                                <td></td>
                                                            </>
                                                            :<>
                                                                <td></td>
                                                                <td>Rp{item.saldoPenyesuaian*(-1)}</td>
                                                            </>
                                                    }
                                                    {isNaN(item.saldoPenyesuaian)
                                                        ?
                                                        <>
                                                            <td></td>
                                                            <td></td>
                                                        </>
                                                        :item.saldoSetelahPenyesuaian>0
                                                        ?<>
                                                            <td>Rp{item.saldoSetelahPenyesuaian}</td>
                                                            <td></td>
                                                        </>
                                                        :<>
                                                            <td></td>
                                                            <td>Rp{item.saldoSetelahPenyesuaian*(-1)}</td>
                                                        </>
                                                    }
                                                </tr>)
                                        })}
                                    </DatabaseContext.Consumer>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <td>Footer 2</td>
                                    <td>Footer 3</td>
                                    <td>Footer 4</td>
                                    <td>Footer 5</td>
                                    <td>Footer 6</td>
                                    <td>Footer 7</td>
                                    <td>Footer 8</td>
                                </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    );
}
export default withNeraca(Neraca);