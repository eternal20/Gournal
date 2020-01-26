import React from 'react';
import 'moment-timezone';
// import { DatabaseContext } from './index'
import withBukuBesar from './withBukuBesar';
import { DatabaseContext } from './context';


const withNeraca = Component => withBukuBesar.penyesuaian(withBukuBesar.umum(props => {
    // console.log(props)
    return (
        <>
            <withBukuBesar.context.BukuBesarPenyesuaianContext.Consumer>
                { valuePenyesuaian => 
                <withBukuBesar.context.BukuBesarUmumContext.Consumer> 
                    { valueUmum => {
                        // console.log(valuePenyesuaian, valueUmum)
                        const dataUmum = valueUmum.data
                        const dataPenyesuaian = valuePenyesuaian.data
                        // console.log(dataUmum, dataPenyesuaian)
                        const data2Umum = dataUmum.map(item => item.subSaldo && item.subSaldo[item.subSaldo.length-1])
                        const data2Penyesuaian = dataPenyesuaian.map(item => item.subSaldo && item.subSaldo[item.subSaldo.length-1])
                        // console.log(data2Umum, data2Penyesuaian)
                        const data2Umumfiltered = data2Umum.filter(item => item!==undefined)
                        const data2Penyesuaianfiltered = data2Penyesuaian.filter(item => item!==undefined)
                        // data2filtered && console.log(data2filtered)
                        const updUmum = dataUmum.map((item,key) => ({uraian: item.uraian, saldo: data2Umumfiltered[key] && data2Umumfiltered[key].saldo}))
                        const updPenyesuaian = dataPenyesuaian.map((item,key) => ({uraian: item.uraian, saldo: data2Penyesuaianfiltered[key] && data2Penyesuaianfiltered[key].saldo}))
                        console.log(updUmum, updPenyesuaian)
                        const dataAkhir = updUmum.map(uraian => {
                            const iniUmum = updUmum.filter(
                                item => item.uraian === uraian.uraian
                            )
                            const iniPenyesuaian = updPenyesuaian.filter(
                                item => item.uraian === uraian.uraian
                            )
                            // console.log(iniUmum, iniPenyesuaian)
                            return ({
                                uraian: uraian.uraian,
                                saldoUmum: iniUmum[0].saldo,
                                saldoPenyesuaian: iniPenyesuaian[0].saldo,
                                saldoSetelahPenyesuaian: (iniUmum[0].saldo+iniPenyesuaian[0].saldo)
                            })
                        })
                        // console.log(updSetelahPenyesuaian)
                        console.log(dataAkhir)
                        return (
                            <DatabaseContext.Provider value={dataAkhir}>
                                <Component {...props} />
                            </DatabaseContext.Provider>
                        )
                    }}
                </withBukuBesar.context.BukuBesarUmumContext.Consumer>
                }
            </withBukuBesar.context.BukuBesarPenyesuaianContext.Consumer>
        </>
        )
}))

export default withNeraca;