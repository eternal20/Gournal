import React from 'react';
// import { tsConstructorType } from '@babel/types';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

const Navbar =() =>{
    return (
        <div>
            <div id="navbar-buffer"></div>
            {/* <div id="no-touch"></div> */}
            <div className="" id="navbar">
                <nav className="navbar navbar-dark navbar-expand-lg mx-5 px-0">
                    <Link className="navbar-brand" to="/landing">Gournal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/account">Account</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}

export default Navbar;