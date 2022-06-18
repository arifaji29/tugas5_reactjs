import React, {Component} from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan';
import FormMakanan from '../Form/FormMakanan';

const listMakanan = [
    {
        NamaMakanan : 'Nasi Padang',
        Harga : '20.000'
    },
    {
        NamaMakanan : 'Sate',
        Harga : '20.000'
    },
    {
        NamaMakanan : 'Soto',
        Harga : '10.000'
    },
    {
        NamaMakanan : 'Nasi Uduk',
        Harga : '10.000'
    },
    {
        NamaMakanan : 'Nasi Kuning',
        Harga : '10.000'
    },
    {
        NamaMakanan : 'Ayam Bakar',
        Harga : '15.000'
    },
    {
        NamaMakanan : 'Pecel Lele',
        Harga : '15.000'
    },
    {
        NamaMakanan : 'Pecel',
        Harga : '15.000'
    },
    {
        NamaMakanan : 'Mie Ayam',
        Harga : '10.000'
    }
   
   
   
   
]

class MenuMakan extends Component{
    render(){
        return(
            <div>
            <h3>Daftar Menu Makanan Favorite</h3>
            <table>
                <tbody>
                    <tr>
                        {DaftarMakanan.map((data,index)=>{
                            return(
                                <td key={index}>
                                    <img src={data.img} alt='product makanan' width='100' height='100'
                                    />
                                    <center>
                                        <p>{data.NamaMakanan}</p>
                                        <p>Harga: Rp. {data.Harga}</p>
                                    </center>
                                </td>
                            )
                        }
                        )}
                    </tr>
                </tbody>
            </table>
            <h4>List Makanan</h4>
            {listMakanan.map((data,index)=>{
                return(
                    <div key={index}>
                        <p>
                        {data.NamaMakanan} | {data.Harga}
                        </p>
                    </div>
                )
            }
            )}
            <FormMakanan/>
            </div>
        );
    }
  
}

export default MenuMakan;