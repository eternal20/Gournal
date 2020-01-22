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
            className={"btn btn-outline-dark d-inline-block rounded-lg border shadow-sm mr-1 my-2 pt-1 "+((window.location.pathname === props.dashboardURL)?"active":"")}
        >
            <span>{props.dashboardTitle}</span>
            {/* <i className="fas fa-arrow-circle-right"></i> */}
        </Link>
    );
}

export default DashboardItem;