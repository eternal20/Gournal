import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";

class JurnalUmum extends React.Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div className="clearfix mt-2">
                <h4>Neraca</h4>
                <div className="card card-body rounded shadow-sm d-block">
                    <table className="table table-sm mt-3">
                        <thead>
                            <tr>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Uraian</th>
                            <th scope="col">Nominal</th>
                            <th scope="col">Jenis transaksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default JurnalUmum;