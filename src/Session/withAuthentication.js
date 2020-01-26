import React, { useEffect, useState }from 'react';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';

const withAuthentication = Component => {

    const WithAuthentication = props =>{
        // console.log("withAuthentication: ", props)
        const initialAuthState = {
            defaultUser: {
                displayName: "User0",
                photoURL: require(`../assets/img/default-avatar.jpg`),
            },
            authUser: JSON.parse(localStorage.getItem('authUserSrc')),
        }
        
        const [authState, setAuthState] = useState(initialAuthState)

        useEffect(() => {    
            const listener = props.firebase.onAuthUserListener(
                authUserSrc => {
                    localStorage.setItem('authUserSrc', JSON.stringify(authUserSrc))
                    setAuthState({ defaultUser: authState.defaultUser, authUser: authUserSrc });
                },
                () => {
                    localStorage.removeItem('authUserSrc')
                    setAuthState({ defaultUser: authState.defaultUser, authUser: null});
                }
            );
            return ()=>{listener()}
        },[props.firebase, authState.defaultUser]);

        // console.log("authState: ", authState)

        return (
            <AuthUserContext.Provider value={authState}>
                <Component {...props} />
            </AuthUserContext.Provider>
        );
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;