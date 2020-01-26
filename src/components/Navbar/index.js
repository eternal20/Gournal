import React from 'react';
import { AuthUserContext } from '../../Session';
// import { tsConstructorType } from '@babel/types';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

const Navbar = props => {

    return(
        <div>
            <AuthUserContext.Consumer>
                { authState => ( authState.authUser ? <><NavbarAuth authState={authState} {...props} /></>: <NavbarNonAuth /> )}
            </AuthUserContext.Consumer>
        </div>
    )
}

const NavbarNonAuth = () => {
    return (
        <>
            {/* <div id="navbar-buffer"></div> */}
            {/* <div className="" id="navbar"> */}
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/landing">Gournal</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <Link to="/account" className=" ml-auto btn rounded-lg btn-outline-light mr-1">Masuk</Link>
            </nav> */}
                {/* <nav className="navbar navbar-dark navbar-expand-lg mx-5 px-0">
                    <Link className="navbar-brand" to="/landing">Gournal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/account" className="btn rounded-lg btn-outline-light mr-1">Masuk</Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            {/* </div> */}
        </>
    )
}

const NavbarAuth = props =>{
    return (
        <>
        <div id="navbar-buffer"></div>
        <div className="collapse fixed-top" id="navbarToggleExternalContent">
            <div className="bg-dark p-4 topbar">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">Toggleable via the navbar brand.</span>
            </div>
        </div>
        <nav className="navbar navbar-dark bg-danger fixed-top navbar-expand-lg">
            <div className="container p-0 row mx-auto">
                <div className="col pl-2">
                    <button className="btn d-lg-none rounded-lg p-1 float-left" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img
                        src={
                            !props.authState.authUser?props.authState.authUser.photoURL:props.authState.defaultUser.photoURL
                        }
                        style={{height: 30}}
                        alt="..."
                        className="rounded-circle m-auto d-inline-block"/>
                    </button>
                    <Link className="navbar-brand p-0" to="/dashboard"><img alt="..." src={require('../../assets/img/logonavbar.png')} style={{height: "2rem"}}/></Link>
                    <h6 className="text-white mb-0 d-inline">{props.pageName} </h6>
                </div>
                <div className="col-6 d-none d-lg-block">
                    <Link to="/account" className="btn rounded-lg btn-outline-light p-1 ml-auto float-right">
                        <span className="mr-2 ml-1 p-0 d-inline-block clearfix">
                            {props.authState.authUser.username}
                        </span >
                        <img
                        src={
                            !props.authState.authUser?props.authState.authUser.photoURL:props.authState.defaultUser.photoURL
                        }
                        style={{height: 30}}
                        alt="..."
                        className="rounded-circle m-auto d-inline-block"/>
                    </Link>
                </div>
                
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        {!!props.authState.authUser.roles["admin"] && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                        )}
                    </ul>
                </div> */}
            </div>
        </nav>
            {/* <div id="navbar-buffer"></div>
            <div className="bg-danger" id="navbar">
                <nav className="navbar navbar-dark navbar-expand-lg mx-5 px-0">
                    <Link className="navbar-brand" to="/dashboard">Gournal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            {!!props.authState.authUser.roles["admin"] && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>
                            )}
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/account" className="btn rounded-lg btn-outline-light mr-1 p-1">
                                    <span className="mr-2 ml-1 p-0 d-inline-block clearfix">
                                        {props.authState.authUser.email}
                                    </span >
                                    <img
                                    src={
                                        !props.authState.authUser?props.authState.authUser.photoURL:props.authState.defaultUser.photoURL
                                    }
                                    style={{height: 30}}
                                    alt="..."
                                    className="rounded-circle m-auto d-inline-block"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> */}
        </>
    )
}

export default Navbar;