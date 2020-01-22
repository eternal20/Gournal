import React, {  } from 'react';
import Register from "../../components/Register"
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
    // withRouter,
} from "react-router-dom";
import {AuthUserContext} from '../../Session';

const RegisterPage = () => {
    return(
        <>
        <nav className="navbar navbar-light bg-white">
            <Link class="navbar-brand ml-auto mr-auto" to="/">Gournal</Link>
        </nav>
        <div className="container p-3">
            <div className="row">
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4">
                    <div className="">
                        <div className="btn-group-vertical form-account pt-2">
                            {/* <button type="button" className="btn mb-1 shadow-sm btn-light">Sign in with Google</button>
                            <button type="button" className="btn mb-1 shadow-sm btn-primary">Sign in with Facebook</button>
                            <button type="button" className="btn mb-1 shadow-sm btn-dark">Sign in with Apple</button> */}
                            <Register />
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

const RegisterPage2 = props => (
    <div>
        <AuthUserContext.Consumer>
            { authState => (
                authState.authUser
                ?props.history.push("/dashboard")
                :<RegisterPage authState={authState} />
            )}
        </AuthUserContext.Consumer>
    </div>
)

export default RegisterPage2;
