import React from 'react';
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

    const initialFormState = {
        committee: "Nama Akun",
        committeeId: "idakun",
        avaSource: "https://ramcotubular.com/wp-content/uploads/default-avatar.jpg"
    }

    return(
        <div className="sticky-top card shadow-sm rounded-lg mb-2" style={{top:70}}>
            <div className="p-3">
                <img src={initialFormState.avaSource} alt="..." className="rounded-circle m-auto d-block p-1" style={{height: 100}}/>
                <div className="m-0 w-100 text-center">
                    <h3>{initialFormState.committee}</h3>
                    <p className="">Informasi pengguna</p>
                    
                    <a className="btn btn-outline-dark my-2 my-sm-0 mr-1" href="/" role="button">Masuk</a>
                    <Link to="/account" className="btn btn-dark my-2 my-sm-0 mr-1">Daftar</Link>
                </div>
            </div>
        </div>
    )
}

export default Profile;