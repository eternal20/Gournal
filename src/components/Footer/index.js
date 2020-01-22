import React from 'react';
// import { tsConstructorType } from '@babel/types';
// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link,
//     // useRouteMatch,
//     // useParams
// } from "react-router-dom";

const container = (
    <footer  className="bg-dark w-100 text-light">
        <div className="mx-5 p-2 clearfix">
            <ul className="list-inline float-left">
                <li className="list-inline-item">
                    <a className="text-light nav-link" href="/">Bantuan</a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light nav-link" href="/">Hubungi Kami</a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light nav-link" href="/">Tentang</a>
                </li>
            </ul>
            {/* <ul className="list-inline float-right">
                <li className="list-inline-item">
                    <a className="text-light nav-link" href="/">Bantuan</a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light nav-link" href="/">Hubungi Kami</a>
                </li>
                <li className="list-inline-item">
                    <a className="text-light nav-link" href="/">Tentang</a>
                </li>
            </ul> */}
        </div>
    </footer>
    
)

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {title: "Landing"};
    }
    render() {
        return container;
    }
}
export default Footer;