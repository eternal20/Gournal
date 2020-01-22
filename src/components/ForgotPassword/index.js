import React from 'react';
// import { tsConstructorType } from '@babel/types';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useRouteMatch,
    // useParams,
    // withRouter,
} from "react-router-dom";
import {withFirebase} from '../../Firebase';

const ForgotPassword = withFirebase( props => {

    // console.log(props.firebase)
    // console.log(props.history)

    const initialForgotPwState = {
        email: '',
        error: null,
    };
    
    const [forgotPwState, setForgotPwState] = React.useState(initialForgotPwState)
    
    const onSubmit = event => {
        props.firebase
            .doPasswordReset(forgotPwState.email)
            .then(() => {
                setForgotPwState({ ...initialForgotPwState, email: 'permintaan telah dikirim'});
            })
            .catch(error => {
                setForgotPwState({ ...forgotPwState, error });
            });
        event.preventDefault();
    };

    const onChangeForm = event => {
        console.log(event.target.name, event.target.value)
        setForgotPwState( { ...forgotPwState,  [event.target.name]: event.target.value } );
    };

    const isInvalid = forgotPwState.email === '';

    return(
        <div className="modal-content border-0" >
            <div className="modal-header">
                <h5>Forgot password</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form onSubmit={onSubmit} >
                    <label htmlFor="inputEmail">Masukkan alamat surel</label>
                    <input
                    className="mb-2 form-control"
                    id="inputEmail"
                    name="email"
                    value={forgotPwState.email}
                    onChange={onChangeForm}
                    type="text"
                    placeholder="Email Address"
                    />
                    <button disabled={isInvalid} type="submit" className="float-right btn-sm shadow-sm btn-dark">Reset My Password</button>
                </form>
                <button type="button" className="float-right btn-sm btn-secondary mr-1" data-dismiss="modal">Close</button>
                {forgotPwState.error && <p>{forgotPwState.error.message}</p>}
            </div>
        </div>
    )
});

export default ForgotPassword;