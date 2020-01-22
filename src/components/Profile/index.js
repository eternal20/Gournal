import React from 'react';
import {AuthUserContext} from '../../Session';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
// import { tsConstructorType } from '@babel/types';

const Profile = () => {
    return(
        <div>
            <AuthUserContext.Consumer>
                { authState => (authState.authUser ? <><IdCard authState={authState}/></>: <><NotSignedIn authState={authState}/></> )}
            </AuthUserContext.Consumer>
        </div>
    )
}

const NotSignedIn = props => {
    console.log("authState wk: ", props.authState)
    return(
        <div className="sticky-top card shadow-sm rounded-lg mb-2" style={{top:70}}>
            <div className="p-3">
                {/* <img src={props.authState.authUser.photoURL} alt="..." className="rounded-circle m-auto d-block p-1" style={{height: 100}}/> */}
                <div className="m-0 w-100 text-center">
                    {/* <h3>{initialProfileState.committee}</h3> */}
                    <p className="">Informasi pengguna</p>
                    
                    <a className="btn btn-outline-dark my-2 my-sm-0 mr-1" href="/" role="button">Masuk</a>
                    <Link to="/account" className="btn btn-dark my-2 my-sm-0 mr-1">Daftar</Link>
                </div>
            </div>
        </div>
    );
}

const IdCard = props => {

    // console.log("authState wk2: ", props.authState)
    return(
        <div className="my-1" style={{top:70}}>
            {/* <h1 className="text-center">{props.authState.authUser.username}</h1> */}
            {/* <h1 className="text-center">My card</h1> */}
            <div className="id-card">
                <img src={
                    !props.authState.authUser?props.authState.authUser.photoURL:props.authState.defaultUser.photoURL
                    }
                    alt="..."
                    className="rounded-circle m-auto d-block p-1 float-right"
                    style={{height: 50}}/>
                <div className="m-0 w-100">
                    <h4>Gournal</h4><br/><br/>
                    <span className="h6">{props.authState.authUser.email}</span><br/><br/>
                    <span>CREATED ON</span><br/>
                    <span className="h6">12/05</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;