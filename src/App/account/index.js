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
            <div className="container p-3">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="">
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="">
                            <div className="btn-group-vertical form-account">
                                <button type="button" className="btn mb-1 shadow-sm btn-light">Sign in with Google</button>
                                <button type="button" className="btn mb-1 shadow-sm btn-primary">Sign in with Facebook</button>
                                <button type="button" className="btn mb-1 shadow-sm btn-dark">Sign in with Apple</button>
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
