import React, {  } from 'react';
import {withAuthorization} from '../../Session';
import Profile from "../../components/Profile"
import ChangePassword from "../../components/ChangePassword"
// import Register from "../../components/Register"
import SignOutButton from "./SignOut"
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useRouteMatch,
    // useParams
    // withRouter,
} from "react-router-dom";

const Account = () => {
    return(
        <div className="mt-3">
            <div className="row m-0">
                <div className="col-lg-4 pb-5 text-center">
                    <Profile />
                    <br/>
                    <SignOutButton />
                </div>
                <div className="col-lg-3 pt-0">
                    <ChangePassword />
                </div>
                <div className="col-lg-2 pt-0">
                </div>
                <div className="col-lg-2 pt-0">
                </div>
            </div>
        </div>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
