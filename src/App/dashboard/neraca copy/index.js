import React from 'react';
import { withNeraca, DatabaseContext } from '../../../Database'

const Neraca = withNeraca(props =>{
    return (
        <div className="clearfix mt-2">
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
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
                                <tr>
                                    <th>Kas</th>
                                    <td>Rp5000</td>
                                    <td></td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                    <td>Rp5000000</td>
                                </tr>
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
    );
})

export default Neraca;