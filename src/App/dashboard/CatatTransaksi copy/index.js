import React from 'react';
// import update from 'react-addons-update';
// import Moment from 'react-moment';

const CatatTransaksi = props => {

    const initialFormState=[
        {
            key: null, uraian: '', nominal: '', jenis: 'Jenis Transaksi'
        },
        {
            key: null, uraian: '', nominal: '', jenis: 'Jenis Transaksi'
        }
    ]
    const [entry, setEntries] = React.useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target;
        console.log(name, value);
        setEntries({...entry, [name]: value});
    }
    console.log(entry);
    return (
        <div className="mt-3 p-3 card rounded-lg">
            <div className="date">
                {/* <h5>{this.state.journalDate.date} {this.state.journalDate.month} {this.state.journalDate.year}</h5> */}
            </div>
            <form
                className="input-group-sm"
                onSubmit={event => {
                    event.preventDefault()
                    // if (!entry.name || !entry.username) return
                    props.addEntry(entry);
                    setEntries(initialFormState);
                }}
            >
                {initialFormState.map(
                    init => (
                        <div
                            className="input-group input-group-sm row m-0 mb-1"
                            key="">
                            <select
                                className="form-control form-control-sm mr-1 col-3"
                                value={entry.uraian}
                                name="uraian"
                                onChange={handleInputChange}
                            >
                                <option hidden>Ref | Uraian</option>
                                <optgroup label="10 | Umum">
                                    <option value="kas">11 | Kas</option>
                                    <option value="piutangDagang">12 | Piutang dagang</option>
                                    <option value="perlengkapan">13 | Perlengkapan</option>
                                    <option value="peralatan">14 | Peralatan</option>
                                    <option value="sewaDiMuka">15 | Sewa dibayar di muka</option>
                                    <option value="akumulasiPenyusutan">19 | Akumulasi penyusutan</option>
                                </optgroup>
                                <optgroup label="20 | Modal">
                                    <option value="utangDagang">21 | Utang dagang</option>
                                    <option value="modal">31 | Modal</option>
                                    <option value="prive">32 | Prive</option>
                                    <option value="pendapatan">41 | Pendapatan</option>
                                </optgroup>
                                <optgroup label="50 | Beban">
                                    <option value="bebanPerlengkapan">51 | Beban perlengkapan</option>
                                    <option value="gaji">52 | Beban gaji</option>
                                    <option value="bebanSewa">53 | Beban sewa</option>
                                    <option value="bebanListrik">54 | Beban listrik</option>
                                    <option value="bebanTelepon">55 | Beban telepon</option>
                                    <option value="bebanPenyusutan">57 | Beban penyusutan</option>
                                </optgroup>
                            </select>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend2">Rp</span>
                            </div>
                            <input
                                value={entry.nominal}
                                name="nominal"
                                onChange={handleInputChange}
                                type="number"
                                className="form-control mr-1"
                                placeholder="0"
                                aria-describedby="inputGroupPrepend2"
                                required
                            />
                            <select
                                className="form-control form-control-sm col-2 p-0"
                                name="jenis"
                                value={entry.jenis}
                                onChange={handleInputChange}
                            >
                                <option hidden >Jenis Transaksi</option>
                                <option value="debit" >Debit</option>
                                <option value="kredit" >Kredit</option>
                            </select>
                        </div>
                    )
                )}
                <input
                    type="text"
                    className="form-control mr-1 rounded-lg"
                    id="validation" placeholder="Keterangan"
                    aria-describedby="inputGroupPrepend2"
                    required
                />
                {/* <button
                    type="button"
                    className="btn-sm btn-primary m-1"
                >
                    Tambah transaksi
                </button> */}
                <button
                    className="btn-sm btn-warning float-right m-1"
                    type="submit"
                >
                    Submit form
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