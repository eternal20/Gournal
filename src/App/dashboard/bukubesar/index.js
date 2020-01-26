import React from 'react';
import 'moment-timezone';
import BukuBesarTable from '../BukuBesarTable';
import { withBukuBesar  } from '../../../Database'

console.log(withBukuBesar)
const BukuBesar = withBukuBesar.umum(props => {
    // console.log(<DatabaseContext.Consumer>{value => value}</DatabaseContext.Consumer>)
    return (
        <withBukuBesar.context.BukuBesarUmumContext.Consumer>
            {value => {
                console.log(value)
                return (
                    <div className="clearfix mb-2">
                        <h4>Buku Besar</h4>
                        <div className="mt-3">
                            {value.isLoading && <span>Memuat</span>}
                            <BukuBesarTable data={value}/>
                        </div>
                    </div>
                )
            }}
        </withBukuBesar.context.BukuBesarUmumContext.Consumer>
    );
})
export default BukuBesar;