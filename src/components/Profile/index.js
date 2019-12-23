import React from 'react';
// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link,
//     // useRouteMatch,
//     // useParams
// } from "react-router-dom";
// import { tsConstructorType } from '@babel/types';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            committee: "Nama Akun",
            committeeId: "idakun",
            avaSource: "https://ramcotubular.com/wp-content/uploads/default-avatar.jpg"
        };
    }
    render() {
        return (
            <div className="sticky-top card shadow-sm rounded-lg mb-2" style={{top:70}}>
                <div className="p-3">
                    <img src={this.state.avaSource} alt="..." className="rounded-circle m-auto d-block p-1" style={{height: 100}}/>
                    <div className="m-0 w-100 text-center">
                        <h3>{this.state.committee}</h3>
                        <p className="">Informasi pengguna</p>
                        
                        <a className="btn btn-outline-dark my-2 my-sm-0 mr-1" href="/" role="button">Masuk</a>
                        <a className="btn btn-dark my-2 my-sm-0 mr-1" href="/account" role="button">Daftar</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;