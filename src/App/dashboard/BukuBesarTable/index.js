import React, {Fragment} from 'react'
import moment from 'moment';

const JournalTable = props =>{

    return props.uraian.map(
        (uraian, key) => {
            const transactionsList = !props.items.data?null:props.items.data.map(item => 
                ({
                    ...item,
                    transaction: item.transaction.filter(item => item.uraian===uraian )
                })
            ).filter(item => item.transaction.length > 0)

            const transactionExtract = transactionsList && transactionsList.map(item => ({...item.transaction.map(item => ({nominal: item.nominal, jenis: item.jenis}))}))
            const saldo = transactionExtract && transactionExtract.map(item => item["0"])
            let subSaldo = 0;
            const totalSaldo = saldo && saldo.map(item =>{
                console.log(item.jenis, item.nominal)

                subSaldo = item.jenis==="debit"?(subSaldo + item.nominal):(subSaldo - item.nominal);
                return {
                    subSaldo: subSaldo
                }
            })
            console.log(transactionsList && transactionsList)
            console.log(saldo && saldo)
            console.log(totalSaldo && totalSaldo)

            return props.items.isLoading || transactionsList.length<=0 ?null:
            (
                <div className="card card-body shadow-sm rounded-lg mb-3" key={key}>
                    <h5>{uraian}</h5>
                    <table className="table table-sm mb-0">
                        <thead>
                            <tr>
                            <th scope="col" className="p-1">Tanggal</th>
                            <th scope="col" className="text-right p-1">Debit</th>
                            <th scope="col" className="text-right p-1">Kredit</th>
                            <th scope="col" className="text-right p-1">Saldo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionsList?transactionsList.map((items, transactionKey)=>(
                                <Fragment key={transactionKey}>
                                    {items.transaction.map( (entry, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{ moment.unix(items.date).format("D") } { moment.unix(items.date).format("MMM") }</td>
                                            {entry.jenis==="debit"
                                            ?   <><td className="text-right p-1">Rp{entry.nominal}</td>
                                                <td></td></>
                                            :   <><td></td>
                                                <td className="text-right p-1">Rp{entry.nominal}</td></>
                                            }
                                            <td className="text-right">Rp{totalSaldo[transactionKey].subSaldo}</td>
                                        </tr>
                                    )
                                    } ) }
                                </Fragment>
                            )):
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Kosong</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    )

    
}

export default JournalTable;