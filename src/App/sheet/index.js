import React from 'react';
import DashboardItem from '../../components/DashboardItem';
import Profile from '../../components/Profile';
import dashboardList from '../../data/index.js';
import JurnalUmum from "./jurnalumum";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

class Sheet extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="">
                <div className="row my-3 mx-5">
                    <div className="col-lg-3 pt-0">
                        <div className="sticky-top" style={{top:"4.5rem"}}>
                            <Profile/>
                        </div>
                    </div>
                    <div className="col-lg-9 pt-2">
                        <Route path="/jurnalumum" component={JurnalUmum}/>
                    </div>
                </div>
            </div>
        );
    }
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("sheet").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "jurnalumum", true);
    xhttp.send();
}

export default Sheet;
