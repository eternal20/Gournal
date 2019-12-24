import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

const Landing = () => {
    return(
        <div className="">
            <div className="px-5 pt-5" style={{background:"   rgba(181, 64, 73, 0.8)", minHeight: "42vw"}}>
                <div className="clearfix  mx-5 px-5 pt-5">
                    <div className="float-left text-white ml-5 mt-5 pt-5">
                        <h1 className="display-3" >Gournal</h1>
                        <h3>Catat transaksi dengan mudah dan efisien </h3>
                        <Link to="/dashboard"><button type="button" className="btn shadow btn-light h3">Lihat lebih lanjut</button></Link>
                    </div>
                    <img className="float-right img-fluid mr-5" style={{width: "30vw"}} src={require('../../assets/img/bank.png')} alt="Gournal Hero"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;
