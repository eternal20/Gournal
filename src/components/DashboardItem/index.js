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

const DashboardItem = props => {
    return (
        <Link
            to={props.dashboardURL}
            class={"btn btn-outline-dark rounded-lg border shadow-sm mr-1 mb-1 pt-1 "+((window.location.pathname === props.dashboardURL)?"active":"")}
        >
            <span>{props.dashboardTitle}</span>
            {/* <i className="fas fa-arrow-circle-right"></i> */}
        </Link>
    );
}

export default DashboardItem;