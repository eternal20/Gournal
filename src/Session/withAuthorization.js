import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';

const withAuthorization = condition => Component => {
    
    const WithAuthorization = props => {
        useEffect(()=> {    
            const listener = props.firebase.onAuthUserListener(
                authUserSrc => {
                    // console.log(!condition(authUserSrc))
                    if(!condition(authUserSrc)){
                        props.history.push("/signin")
                    }
                },
                () => props.history.push("/signin")
            );
            return ()=>{listener()}
        },[props.firebase, props.history]);

        return (
            <AuthUserContext.Consumer>
                {authState => condition(authState.authUser) ? <Component {...props}/> : null }
            </AuthUserContext.Consumer>
        )
    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;