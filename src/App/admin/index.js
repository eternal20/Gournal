import React, { useEffect, useState } from 'react';
import { withFirebase } from '../../Firebase'
import { withAuthorization } from '../../Session';

const Admin = props => {

    const initialAdminState = {
        loading: false,
        users : [],
    }

    const [adminState , setAdminState] = useState(initialAdminState);

    useEffect(()=>{
        setAdminState({loading: true});
        
        props.firebase.users().on( 'value', snapshot => {
            console.log(snapshot);
            console.log(snapshot.val());

            const usersObject = snapshot.val();
            const usersList = !usersObject?null:Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }))

            setAdminState({
                users: usersList,
                loading: false,
            })
        });

        // return function cleanup(){
        //     props.firebase.users().off();
        // }

    },[props.firebase])

    console.log(adminState)

    return(
        <div>
            <h1 className="display-3 font-weight-bold">Ini halaman admin</h1>
            {adminState.loading && <div>Loading ...</div>}
            {!adminState.loading && <UserList users={adminState.users} />}
        </div>
    );
}

const UserList = ({ users }) => (
    <ul>
        {!users?<span>No Users Found</span>:users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong> | E-Mail:</strong> {user.email}
                </span>
                <span>
                    <strong> | Username:</strong> {user.username}
                </span>
            </li>
        ))}
    </ul>
);

const condition = authUser => authUser && !!authUser.roles["admin"];

export default withAuthorization(condition)(withFirebase(Admin));
