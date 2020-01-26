import React, { useEffect, useState }from 'react';
import { withFirebase } from '../Firebase';
import { DatabaseContext } from './index'

const withJurnalPenyesuaian = Component => withFirebase(props => {
    
    const initialEntriesData = {
        isLoading: true,
        data: null
    };

    const [entries, setEntries] = useState(initialEntriesData);

    const addEntry = (entry, metaEntry) => {
        props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            return props.firebase
                .transactions(authUserSrc.uid,"jurnalpenyesuaian").push()
                .set({
                    ...metaEntry, transaction: entry
                })
        });
        // setAlert({...alert, isShow: true});
    };
    
    useEffect(()=>{
        const listener = props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalpenyesuaian").on( 'value', snapshot => {
                // console.log(snapshot);
                // console.log(snapshot.val());

                const transactionsObject = snapshot.val();
                const transactionsList = transactionsObject && Object.keys(transactionsObject).map(item => ({
                        ...transactionsObject[item],
                        key: item
                    }))

                setEntries({isLoading: false, data: transactionsList && transactionsList.reverse()});
            });
        });
        return listener();
    },[props.firebase])

    return (
        <DatabaseContext.Provider value={({entries, addEntry})}>
            <Component {...props} pass={initialEntriesData}/>
        </DatabaseContext.Provider>
    );
})

export default withJurnalPenyesuaian