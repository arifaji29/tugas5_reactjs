import React, { Component } from 'react';

class FormMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesanan: '',
            jumlah: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeJumlah = this.handleChangeJumlah.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.pesanan = React.createRef();

    }

    handleChange(e) {
        this.setState({ pesanan: e.target.value });
    }

    handleChangeJumlah(e) {
        this.setState({ jumlah: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(
            "pesanan anda adalah:  " + this.state.pesanan + " | jumlah pesanan:  " + this.state.jumlah
        );
        this.setState({
            pesanan: '',
            jumlah: ''
        });
        this.pesanan.current.focus();
    }

    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' onChange={this.handleChange} value={this.state.pesanan} ref={this.pesanan} placeholder='Masukkan Pesanan Anda' />
                        <input type='number' onChange={this.handleChangeJumlah} placeholder='Masukkan jumlah pesanan' />
                        <br></br>
                        <input type='submit' value='pesan'/>
                    </form>
                </center>
            </div>
        )
    }
}

export default FormMakanan;