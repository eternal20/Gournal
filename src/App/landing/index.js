import React from 'react';
// import {withAuthorization} from '../../Session';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
    withRouter
} from "react-router-dom";
import {AuthUserContext} from '../../Session';

const LandingPage = () => {
    return(
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
                <Link className="navbar-brand" to="/landing">Gournal</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <Link to="/signin" className=" ml-auto btn rounded-lg btn-outline-light mr-1">Masuk</Link>
            </nav>
            <div className="row mx-0" id="hero">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <img className="img-fluid" id="img-hero" src={require('../../assets/img/bank.png')} alt="Gournal Hero"/>
                </div>
                <div className="col-md-5">
                    <div id="headline-container">
                        <h1>Gournal</h1>
                        <h5>Catat transaksi dengan mudah dan efisien </h5>
                        <Link to="/dashboard"><button type="button" className="btn shadow btn-light">Lihat lebih lanjut</button></Link>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

const Landing = props => (
    <div>
        <AuthUserContext.Consumer>
            { authState => (
                authState.authUser
                ?props.history.push("/dashboard")
                :<LandingPage authState={authState} />
            )}
        </AuthUserContext.Consumer>
    </div>
)

export default withRouter(Landing);
