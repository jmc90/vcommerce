import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider';

  class Wishlist extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){

        let row = this.props.currentWishlist.map(item => {
            let title = item.title
            let price = item.price
            let quantity = item.quantity
            
            return (
                <tr>
                    <td> { title } </td>
                    <td> ${ price } </td> 
                    <td> { quantity } </td>
                    <td> ${ quantity * price } </td>
                    <button>remove item</button>
                </tr>
            )
        })

        return (
            <div>
                <table >
                    <tr>
                        <th>Item</th>
                        <th>Price</th> 
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {row}
                </table>
            </div>
        );
    }
};

export default withProducts(Wishlist);