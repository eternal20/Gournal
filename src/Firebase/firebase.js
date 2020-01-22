// import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAfiop9nwLHjm_Hqs9oM6ohC1eArR52DSE",
    authDomain: "gournal-d912d.firebaseapp.com",
    databaseURL: "https://gournal-d912d.firebaseio.com",
    projectId: "gournal-d912d",
    storageBucket: "gournal-d912d.appspot.com",
    messagingSenderId: "1027129942105",
    appId: "1:1027129942105:web:47e56340e03d346089d148",
    measurementId: "G-NT4LHJM56R"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
    }

    // Auth API
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    onAuthUserListener = (next, fallback) => this.auth.onAuthStateChanged( authUserSrc => {
        if(authUserSrc){
            // this.users().once('value', snapshot => console.log(snapshot.val()));
            this.user(authUserSrc.uid)
                .once('value')
                .then( snapshot => {
                    const dbUser = snapshot.val();
                    if(dbUser.roles === undefined){
                        dbUser.roles = {};
                    };
                    //merge auth and db user
                    authUserSrc = {
                        uid: authUserSrc.uid,
                        email: authUserSrc.email,
                        ...dbUser,
                    };
                    next(authUserSrc);
                    // console.log(authUserSrc)
                })
        }else{
            fallback();
        }
    } )

    // User API

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref(`users`);

    transactions = (uid, kind) => this.db.ref(`users/${uid}/transactions/${kind}`)

}

export default Firebase;