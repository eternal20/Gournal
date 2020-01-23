import React from 'react';
// import update from 'react-addons-update';
// import Moment from 'react-moment';

import moment from 'moment';

const CatatTransaksi = props => {

    // const month = moment(new Date().now).format("MMMM")
    // const year = moment(new Date().now).format("YYYY")

    const initialMetaState = {
        date: moment(new Date().now).format("YYYY-MM-DD"),
        transaction: [],
        description: '',
    }

    const emptyFormState = {
        key: 0,
        uraian: '',
        nominal: '',
        jenis: 'kredit'
    }

    const initialFormState = [
        {
            key: 0,
            uraian: '',
            nominal: '',
            jenis: 'debit',
        },
        {
            key: 1,
            uraian: '',
            nominal: '',
            jenis: 'kredit',
        },
    ]

    const [metaEntry, setMetaEntry] = React.useState(initialMetaState)
    const [emptyEntry, setEmptyEntry] = React.useState(initialFormState)
    const [entry, setEntry] = React.useState(initialFormState)

    const handleMetaChange = (e) => {
        let {name, value} = e.target;
        value = name==="date"?moment(value, "YYYY-MM-DD").unix():value
        console.log(name, value, metaEntry);
        setMetaEntry({ ...metaEntry, [name]: value })
    }

    const lastEntry = emptyEntry.length - 1;    
    const subset = Object.keys(entry).slice(0,lastEntry)
    const debitArr = Object.keys(subset).map( itemKey => {
        return entry[itemKey].jenis==="debit"?parseInt(entry[itemKey].nominal):0;
    });
    const kreditArr = Object.keys(subset).map( itemKey => {
        return entry[itemKey].jenis==="kredit"?parseInt(entry[itemKey].nominal):0;
    });
    // console.log(debitArr, kreditArr)

    const totalDebit = debitArr.reduce((cnt,o)=>{return cnt + o; }, 0);
    const totalKredit = kreditArr.reduce((cnt,o)=>{return cnt + o; }, 0);
    // console.log(totalDebit, totalKredit)

    const totalBalance = totalDebit - totalKredit
    entry[lastEntry].nominal = isNaN(totalBalance)?'':totalBalance;
    
    const isInvalid = totalBalance<=0?true:false || entry[lastEntry].jenis === "debit"
    
    const handleInputChange = (e, itemKey) => {
        const {name, value} = e.target;
        const val = name==="nominal"?parseInt(value):value
        setEntry( { ...entry, [itemKey]: { ...entry[itemKey], key: itemKey, [name]: val} });
    }

    const handleAddTransaction = () => {
        emptyFormState.key = emptyEntry.length;
        setEntry( { ...entry,
            [emptyFormState.key]: {...emptyFormState},
        } );
        entry[emptyFormState.key - 1].jenis = "";
        setEmptyEntry( [ ...emptyEntry, emptyFormState ] );
    }

    const submitEntry = event => {
        props.addEntry(entry, metaEntry);
        setEntry(initialFormState);
        setEmptyEntry(initialFormState);
        setMetaEntry(initialMetaState);
        event.preventDefault()
    }

    return (
        <div className="mt-3 p-3 card rounded-lg">
            {/* {console.log("metaEntry: ", metaEntry)}
            {console.log("entry: ", entry)} */}
            {/* {Object.keys(entry).map(items =>
                items.map(item => console.log(item))    
            )} */}
            {/* {console.log("emptryEntry: ", emptyEntry)} */}
            <form
                className="input-group-sm"
                onSubmit={submitEntry}
            >   
                <div className="mb-2 row clearfix">
                    <div className="col-sm-6 mb-1">
                        <span className="h4">{moment(metaEntry.date).format("D MMMM YYYY")} </span>
                        <a className="text-decoration-none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Ganti
                        </a>
                    </div>
                    <div className="collapse col-sm-6" id="collapseExample">
                        {/* input tanggal */}
                        <input
                            name="date"
                            type="date"
                            defaultValue={moment(new Date().now).format("YYYY-MM-DD")}
                            className="p-1 border w-100"
                            onChange={handleMetaChange}
                        />
                    </div>
                </div>
                {emptyEntry.map(
                    item=>(
                        <div className="input-group input-group-sm row m-0 mb-1" key={item.key}>
                            {/* {console.log("uraian: ", entry[item.key].uraian)} */}
                            <select
                                className="form-control form-control-sm mr-1 col-md-3"
                                value={entry[item.key].uraian}
                                name="uraian"
                                onChange={(e)=>handleInputChange(e, item.key)}
                                required
                            >
                                <option value="" hidden>Uraian</option>
                                <optgroup label="Umum">
                                    <option value="Kas">Kas</option>
                                    <option value="Piutang Dagang">Piutang dagang</option>
                                    <option value="Perlengkapan">Perlengkapan</option>
                                    <option value="Peralatan">Peralatan</option>
                                    <option value="Sewa di Muka">Sewa dibayar di muka</option>
                                    <option value="Akumulasi Penyusutan">Akumulasi penyusutan</option>
                                </optgroup>
                                <optgroup label="Modal">
                                    <option value="Utang Dagang">Utang dagang</option>
                                    <option value="Modal">Modal</option>
                                    <option value="Prive">Prive</option>
                                    <option value="Pendapatan">Pendapatan</option>
                                </optgroup>
                                <optgroup label="Beban">
                                    <option value="Beban Perlengkapan">Beban perlengkapan</option>
                                    <option value="Gaji">Beban gaji</option>
                                    <option value="Beban Sewa">Beban sewa</option>
                                    <option value="Beban Listrik">Beban listrik</option>
                                    <option value="Beban Telepon">Beban telepon</option>
                                    <option value="Beban Penyusutan">Beban penyusutan</option>
                                </optgroup>
                            </select>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend2">Rp</span>
                            </div>
                            <input
                                value={entry[item.key].nominal}
                                name="nominal"
                                onChange={(e)=>handleInputChange(e, item.key)}
                                type="text"
                                step="1"
                                className="form-control mr-1 text-right col-md-6"
                                placeholder="0"
                                aria-describedby="inputGroupPrepend2"
                                required
                            />
                            <select
                                className="form-control form-control-sm col-md-3 p-0"
                                name="jenis"
                                value={entry[item.key].jenis}
                                onChange={(e)=>handleInputChange(e, item.key)}
                                required
                            >
                                <option value="" hidden >Jenis Transaksi</option>
                                <option value="debit" >Debit</option>
                                <option value="kredit" >Kredit</option>
                            </select>
                        </div>
                    )
                )}
                <input
                    type="text"
                    name="description"
                    value={metaEntry.description}
                    onChange={handleMetaChange}
                    className="form-control mr-1 rounded-lg"
                    // id="validation"
                    placeholder="Keterangan"
                    aria-describedby="inputGroupPrepend2"
                    // required
                />
                {metaEntry.error && "wkwk"}
                <button
                    type="button"
                    className="btn btn-sm btn-primary mt-1 rounded-lg"
                    onClick={handleAddTransaction}
                >
                    Tambah transaksi
                </button>
                <button
                    className={`btn btn-sm float-right mt-1 rounded-lg ${isInvalid?"btn-warning":"btn-primary"}`}
                    type="submit"
                    disabled={isInvalid}
                >
                    {isInvalid && <span>Transaksi tidak valid!</span>}
                    {!isInvalid && <span>Catat</span>}
                </button>
            </form>
        </div>
    );
       
}


// function syncTransaction(e){
//     console.log('The form was change.');
//     var val = document.getElementById("debitDefault").value;
//     document.getElementById("creditDefault").defaultValue = val;
//     console.log(val)
// }

export default CatatTransaksi;