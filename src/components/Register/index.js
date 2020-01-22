import React from 'react';
// import { tsConstructorType } from '@babel/types';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams,
    withRouter,
} from "react-router-dom";
import {withFirebase} from '../../Firebase';

const Register = withRouter(withFirebase( props => {

    console.log(props)
    // console.log(props.history)

    const initialRegistrationState = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        isAdmin: false,
        error: null,
    };
    
    const [registrationState, setRegistrationState] = React.useState(initialRegistrationState)
    
    const onSubmit = event => {

        const roles = {};

        if(registrationState.isAdmin){
            roles["admin"] = "admin";
        }
        // const roles = registrationState.isAdmin?"admin":"user";

        // console.log(roles)

        props.firebase
            .doCreateUserWithEmailAndPassword(registrationState.email, registrationState.passwordOne)
            .then(authUser => {
                console.log(authUser)
                // Create a user in your Firebase realtime database
                return props.firebase
                  .user(authUser.user.uid)
                  .set({
                    username: registrationState.username,
                    email: registrationState.email,
                    roles: roles,
                });
            })
            .then(() => {
                setRegistrationState({ ...initialRegistrationState});
                props.history.push('/home');
            })
            .catch(error => {
                setRegistrationState({ ...registrationState, error });
            });
        event.preventDefault();
    };

    const onChangeCheckbox = event => {
        setRegistrationState({ ...registrationState, [event.target.name]: event.target.checked })
    }

    const onChange = event => {
        setRegistrationState( { ...registrationState,  [event.target.name]: event.target.value } );
    };

    const isInvalid = false
    //   registrationState.passwordOne !== registrationState.passwordTwo ||
    //   registrationState.passwordOne === '' ||
    //   registrationState.email === '' ||
    //   registrationState.username === '';

    return(
        <div className="shadow card mt-2">
            {}
            {/* {console.log(registrationState)} */}
            <div className="card-body" >
                <h1>Register</h1>
                <p>Sudah punya akun? <Link to="/signin" className="text-decoration-none text-secondary">Masuk</Link></p>
                <form onSubmit={onSubmit} >
                    <label htmlFor="inputUsername">Username</label>
                    <input
                    className="mb-2 form-control"
                    id="inputUsername"
                    name="username"
                    value={registrationState.username}
                    onChange={onChange}
                    type="text"
                    placeholder="Full Name"
                    />
                    <label htmlFor="inpuEmail">Email address</label>
                    <input
                    className="mb-2 form-control"
                    id="inpuEmail"
                    name="email"
                    value={registrationState.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                    />
                    <label htmlFor="inputPassword1">Password</label>
                    <input
                    className="mb-2 form-control"
                    name="passwordOne"
                    id="inputPassword1"
                    value={registrationState.passwordOne}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                    />
                    <label htmlFor="inputPassword2">Password</label>
                    <input
                    className="mb-2 form-control"
                    id="inputPassword2"
                    name="passwordTwo"
                    value={registrationState.passwordTwo}
                    onChange={onChange}
                    type="password"
                    placeholder="Confirm Password"
                    />
                    <label>
                        <input
                            className="mr-1"
                            name="isAdmin"
                            type="checkbox"
                            checked={registrationState.isAdmin}
                            onChange={onChangeCheckbox}
                        />
                        {registrationState.username} is Admin
                    </label>
                    <button className="btn-sm btn-dark rounded-lg float-right" disabled={isInvalid} type="submit">Sign Up</button>
                    {registrationState.error && <p>{registrationState.error.message}</p>}
                </form>
            </div>
        </div>
    )
}))

export default Register;