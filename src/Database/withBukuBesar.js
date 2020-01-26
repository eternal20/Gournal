import React, { useEffect, useState }from 'react';
import { withFirebase} from '../Firebase';

const BukuBesarUmumContext = React.createContext(null);
const BukuBesarPenyesuaianContext = React.createContext(null);

const initialEntriesData = {
    isLoading: true,
    data: null
};

const withBukuBesar = Component => withFirebase(props => {
    
    const [entries, setEntries] = useState(initialEntriesData);    
    
    useEffect(()=>{
        const listener = props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalumum").on( 'value', snapshot => {

                const transactionsObject = snapshot.val();
                const transactionsList = !transactionsObject?null:Object.keys(transactionsObject).map(item => ({
                        ...transactionsObject[item],
                        key: item
                    }))

                setEntries({isLoading: false, data: transactionsList && transactionsList.reverse()});
                return transactionsObject
            })
        });
        return listener();
    },[props.firebase])

    const uraian = ["Kas", "Piutang Dagang", "Perlengkapan", "Peralatan", "Sewa di Muka", "Akumulasi Penyusutan","Utang Dagang","Modal","Prive","Pendapatan","Beban Perlengkapan","Gaji","Beban Sewa","Beban Listrik","Beban Telepon","Beban Penyusutan"]
    const saldo = uraian.map(
        uraian => {
            const transactionsList = !entries.data?null:entries.data.map(item => 
                ({
                    ...item,
                    transaction: item.transaction.filter(item => item.uraian===uraian )
                })
                ).filter(item => item.transaction.length > 0)
            const transactionExtract = transactionsList && transactionsList.map(item => ( { ...item.transaction.map(item => ({nominal: item.nominal, jenis: item.jenis}))} ))
            const saldo = transactionExtract && transactionExtract.map(item => item["0"])
            let totalSaldo = 0;
            const subSaldo = saldo && saldo.map((item,key) =>{
                totalSaldo = item.jenis==="debit"?(totalSaldo + item.nominal):(totalSaldo - item.nominal);
                return {
                    date: transactionsList[key].date, nominal: item.nominal, jenis: item.jenis, saldo: totalSaldo
                }
            })
            return ({uraian, subSaldo})

        })
    return (
            <BukuBesarUmumContext.Provider value={({isLoading: entries.isLoading, data: saldo})}>
                <Component {...props} />
            </BukuBesarUmumContext.Provider>
        )
        
})
const withBukuBesarPenyesuaian = Component => {

    return withFirebase(props => {
        
        const [entries, setEntries] = useState(initialEntriesData);    
    
    useEffect(()=>{
        const listener = props.firebase.auth.onAuthStateChanged(authUserSrc=>{
            props.firebase.transactions(authUserSrc.uid,"jurnalpenyesuaian").on( 'value', snapshot => {
                const transactionsObject = snapshot.val();
                const transactionsList = !transactionsObject?null:Object.keys(transactionsObject).map(item => ({
                        ...transactionsObject[item],
                        key: item
                    }))

                setEntries({isLoading: false, data: transactionsList && transactionsList.reverse()});
                return transactionsObject
            })
        });
        return listener();
    },[props.firebase])

    const uraian = ["Kas", "Piutang Dagang", "Perlengkapan", "Peralatan", "Sewa di Muka", "Akumulasi Penyusutan","Utang Dagang","Modal","Prive","Pendapatan","Beban Perlengkapan","Gaji","Beban Sewa","Beban Listrik","Beban Telepon","Beban Penyusutan"]
    const saldo = uraian.map(
        uraian => {
            const transactionsList = !entries.data?null:entries.data.map(item => 
                ({
                    ...item,
                    transaction: item.transaction.filter(item => item.uraian===uraian )
                })
                ).filter(item => item.transaction.length > 0)
            const transactionExtract = transactionsList && transactionsList.map(item => ( { ...item.transaction.map(item => ({nominal: item.nominal, jenis: item.jenis}))} ))
            const saldo = transactionExtract && transactionExtract.map(item => item["0"])

            let totalSaldo = 0;
            const subSaldo = saldo && saldo.map((item,key) =>{
                totalSaldo = item.jenis==="debit"?(totalSaldo + item.nominal):(totalSaldo - item.nominal);
                return {
                    date: transactionsList[key].date, nominal: item.nominal, jenis: item.jenis, saldo: totalSaldo
                }
            })
            return ({uraian, subSaldo})
        })
    return (
        <BukuBesarPenyesuaianContext.Provider value={({isLoading: entries.isLoading, data: saldo})}>
            <Component {...props}/>
        </BukuBesarPenyesuaianContext.Provider>
        )
        
})}

export default ({umum: withBukuBesar, penyesuaian: withBukuBesarPenyesuaian, context: {BukuBesarPenyesuaianContext, BukuBesarUmumContext}})