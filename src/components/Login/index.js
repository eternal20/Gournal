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

const Login = withRouter(withFirebase( props => {

    // console.log(props.firebase)
    // console.log(props.history)

    const initialSignInState = {
        email: '',
        password: '',
        error: null,
    };
    
    const [signInState, setSignInState] = React.useState(initialSignInState)
    
    const onSubmit = event => {
        props.firebase
            .doSignInWithEmailAndPassword(signInState.email, signInState.password)
            .then(() => {
                setSignInState({ ...initialSignInState});
                props.history.push('/dashboard');
            })
            .catch(error => {
                setSignInState({ ...signInState, error });
            });
        console.log(signInState);
        event.preventDefault();
    };

    const onChange = event => {
        setSignInState( { ...signInState,  [event.target.name]: event.target.value } );
    };

    const isInvalid = signInState.email === '' || signInState.password === '';

    return(
        <div className="shadow card mt-5">
            {console.log(signInState)}
            <div className="card-body" >
                <h5 className="text-center">Masuk</h5>
                <form onSubmit={onSubmit}>
                    <label htmlFor="inpuEmail">Email address</label>
                    <input
                    className="mb-2 form-control"
                    id="inpuEmail"
                    name="email"
                    value={signInState.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                    />
                    <label htmlFor="inputPassword">Password</label>
                    <input
                    className="mb-2 form-control"
                    name="password"
                    id="inputPassword"
                    value={signInState.passwordOne}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                    />
                    <p>Belum punya akun? <Link to="/register" className="text-decoration-none text-secondary">Daftar</Link></p>
                    <div className="clearfix mb-2">
                        <button disabled={isInvalid} className="btn-sm shadow-sm btn-dark float-right">Sign In</button>
                        <button type="button" className="btn-sm btn-light float-left" data-toggle="modal" data-target="#forgotPwPopoup">
                            Forgot password
                        </button>
                    </div>
                    {signInState.error && <p>{signInState.error.message}</p>}
                </form>
            </div>
        </div>
    )
}))

export default Login;