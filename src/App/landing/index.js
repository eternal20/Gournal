import React from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {title: "Landing"};
    }
    render() {
        return (
            <div className="">
                <div className="clearfix  px-5" style={{background:"   rgba(181, 64, 73, 0.8)"}}>
                    <div id="headline-container">
                        <h1 id="headline">Gournal</h1>
                        <h3>Catat transaksi dengan mudah dan efisien </h3>
                        <Link to="/dashboard"><button type="button" className="btn shadow btn-light h3">Lihat lebih lanjut</button></Link>
                    </div>
                    <img className="img-fluid" id="img-hero" style={{width: "35vw"}} src="https://cdn2.iconfinder.com/data/icons/isometric-concepts-1/256/Accounting-512.png" alt="Gournal Hero"/>
                </div>
            </div>
        );
    }
}

export default Landing;
