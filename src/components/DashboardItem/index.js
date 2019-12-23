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


class DashboardItem extends React.Component {
    constructor() {
        super();
        this.state = {
            "dashboardTitle":"",
            "dashboardURL": ""
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {dashboardTitle: props.dashboardTitle, dashboardURL: props.dashboardURL};
    }

    render() {
        return (
            <li className="nav-item">
                <Link to={this.state.dashboardURL} className={"text-dark nav-link "+activeStatus(this.state.dashboardURL)} role="tab">
                    <span>{this.state.dashboardTitle}</span>
                    <i className="fas fa-arrow-circle-right"></i>
                </Link>
            </li>
        );
    }
}

const activeStatus = dashboardPath => {
    if(window.location.pathname === dashboardPath){
        return "active"
      }else{
        return ''
      }
}

export default DashboardItem;