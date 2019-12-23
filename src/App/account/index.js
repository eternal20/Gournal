import React from 'react';
import Login from "../../components/Login"
import Register from "../../components/Register"
// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link,
//     // useRouteMatch,
//     // useParams
// } from "react-router-dom";

class Account extends React.Component {
    constructor() {
        super();
        this.state = {title: "Account"};
    }
    render() {
        return (
            <div class="container p-3" id="hero">
                <div class="row">
                    <div class="col-lg-8">
                        <div className="">
                            col-sm-8
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div className="">
                            <div className="btn-group-vertical form-account">
                                <button type="button" class="btn mb-1 shadow-sm btn-light">Sign in with Google</button>
                                <button type="button" class="btn mb-1 shadow-sm btn-primary">Sign in with Facebook</button>
                                <button type="button" class="btn mb-1 shadow-sm btn-dark">Sign in with Apple</button>
                                <Login/>
                                --------------
                                <Register/>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
