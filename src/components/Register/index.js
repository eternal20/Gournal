import React from 'react';
// import { tsConstructorType } from '@babel/types';

const Register = () => {
    return(
        <div className="shadow card">
            {/* <img className="img-fluid" id="img-hero" src={require("../../assets/img/isometric768px.png")}/> */}
            <div className="card-body" >
                <h1>Register</h1>
                <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                    <label className="form-check-label" htmlFor="exampleCheck2">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                <div className="g-signin2" data-onsuccess="onSignIn">google</div>
            </div>
        </div>
    )
}
export default Register;