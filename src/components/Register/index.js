import React from 'react';
// import { tsConstructorType } from '@babel/types';

const container = (
    <div className="shadow card">
        {/* <img className="img-fluid" id="img-hero" src={require("../../assets/img/isometric768px.png")}/> */}
        <div class="card-body" >
            <h1>Register</h1>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            <div class="g-signin2" data-onsuccess="onSignIn">google</div>
        </div>
    </div>
)

class Register extends React.Component {
    constructor() {
        super();
        this.state = {title: "Landing"};
    }
    render() {
        return container;
    }
}
export default Register;