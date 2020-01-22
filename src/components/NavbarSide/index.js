import React from 'react';
import {AuthUserContext} from '../../Session';
// import { tsConstructorType } from '@babel/types';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

const NavbarSide = () => {
    return(
            <div className="sticky-top pt-2" style={{top: "3.5rem"}}>
                <AuthUserContext.Consumer>
                    { authState => authState.authUser?(
                        <div className="card card-body rounded-lg shadow-sm mb-2">
                            <div className="d-inline">
                                <img src={
                                        !authState.authUser?authState.authUser.photoURL:authState.defaultUser.photoURL
                                        }
                                alt="..."
                                className="rounded-circle float-left w-25"
                                />
                                <div className="pl-2 float-right w-75">
                                    <span className="h5">Nama pengguna</span><br/>
                                    <span className="text-muted">{authState.authUser.username}</span>
                                </div>

                            </div>
                            {/* <div className="m-0 w-100">
                                <span>CREATED ON</span><br/>
                                <span className="h6">12/05</span>
                            </div> */}
                        </div>
                    ):null}
                </AuthUserContext.Consumer>
                <div className="list-group shadow-sm" id="list-tab" role="tablist">
                    <form className="form-inline my-2">
                        <input className="form-control w-100 rounded-lg" type="search" placeholder="Search" aria-label="Search"/>
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    <Link to="/dashboard" className="list-group-item list-group-item-action active">Dashboard</Link>
                    <Link to="/account" className="list-group-item list-group-item-action">Account</Link>
                </div>
            </div>
    )
}

export default NavbarSide;