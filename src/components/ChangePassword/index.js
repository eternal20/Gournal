import React from 'react';
// import { tsConstructorType } from '@babel/types';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useRouteMatch,
    // useParams,
    withRouter,
} from "react-router-dom";
import {withFirebase} from '../../Firebase';

const ChangePassword = withRouter(withFirebase( props => {

    // console.log(props.firebase)
    // console.log(props.history)

    const initialChangePwState = {
        passwordOne: '',
        passwordTwo: '',
        error: null,
    };
    
    const [changePwState, setChangePwState] = React.useState(initialChangePwState)
    
    const onSubmit = event => {
        props.firebase
            .doPasswordUpdate(changePwState.passwordOne)
            .then(() => {
                setChangePwState({ ...initialChangePwState});
                // props.history.push('/home');
            })
            .catch(error => {
                setChangePwState({ error });
            });
        event.preventDefault();
    };

    const onChange = event => {
        setChangePwState( { ...changePwState,  [event.target.name]: event.target.value } );
    };

    const isInvalid = changePwState.passwordOne !== changePwState.passwordTwo || changePwState.passwordOne === '';

    return(
        <div className="shadow-sm card">
            {/* {console.log(changePwState)} */}
            <div className="card-body" >
                <h1>Ganti Password</h1>
                <form onSubmit={onSubmit} >
                    <label htmlFor="inputPassword1">Password</label>
                    <input
                        className="mb-2 form-control"
                        name="passwordOne"
                        id="inputPassword1"
                        value={changePwState.passwordOne}
                        onChange={onChange}
                        type="password"
                        placeholder="New Password"
                    />
                    <label htmlFor="inputPassword2">Password</label>
                    <input
                        className="mb-2 form-control"
                        name="passwordTwo"
                        id="inputPassword2"
                        value={changePwState.passwordTwo}
                        onChange={onChange}
                        type="password"
                        placeholder="Confirm New Password"
                    />
                    <button disabled={isInvalid} type="submit" className="btn-sm shadow-sm btn-dark float-right">Change password</button>
                    {changePwState.error && <p>{changePwState.error.message}</p>}
                </form>
            </div>
        </div>
    )
}))

export default ChangePassword;