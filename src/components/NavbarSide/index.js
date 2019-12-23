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

const container = (
    <div>
        <div id="navbar-buffer"></div>
        {/* <div id="no-touch"></div> */}
        <div class="" id="navbar">
            <nav class="navbar navbar-dark navbar-expand-lg mx-5 px-0">
                <a class="navbar-brand" href="/">TAPTIX</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item"> 
                        <Link to="/landing" class="nav-link">Landing</Link>
                    </li>
                    <li class="nav-item"> 
                        <Link to="/dashboard" class="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    <a class="btn btn-outline-light my-2 my-sm-0 mr-1" href="#" role="button">Masuk</a>
                    <a class="btn btn-light my-2 my-sm-0 mr-1" href="/account" role="button">Daftar</a>
                </div>
            </nav>
        </div>
        
    </div>
)

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {title: "Landing"};
    }
    render() {
        return container;
    }
}
export default Navbar;