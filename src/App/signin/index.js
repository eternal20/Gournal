import React from 'react';
import ForgotPassword from "../../components/ForgotPassword"
import Login from "../../components/Login"
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
import {AuthUserContext} from '../../Session';

const SignInPage = () => {
    return(
        <>
        <nav className="navbar navbar-light bg-white">
            <Link className="navbar-brand ml-auto mr-auto" to="/">Gournal</Link>
        </nav>
        <div className="container p-3">
            <div className="modal fade" id="forgotPwPopoup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <ForgotPassword/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4">
                    <div className="">
                        <div className="btn-group-vertical form-account pt-4">
                            {/* <button type="button" className="btn mb-1 shadow-sm btn-light">Sign in with Google</button>
                            <button type="button" className="btn mb-1 shadow-sm btn-primary">Sign in with Facebook</button>
                            <button type="button" className="btn mb-1 shadow-sm btn-dark">Sign in with Apple</button> */}
                            <Login />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                </div>
            </div>
        </div>
        </>
    )
}

const SignIn = props => (
    <div>
        <AuthUserContext.Consumer>
            { authState => (
                authState.authUser
                ?props.history.push("/dashboard")
                :<SignInPage authState={authState} />
            )}
        </AuthUserContext.Consumer>
    </div>
)

export default SignIn;