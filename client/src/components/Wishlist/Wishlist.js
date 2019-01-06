import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider';

  class Wishlist extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    handleRemoveItem = (e) => {
        let removedItem = e.target.id
        this.props.handleRemoveItemFromWishlist(removedItem)
    }

    render(){

        let row = this.props.currentWishlist.map(item => {
            let title = item.title
            let price = item.price
            let quantity = item.quantity
            let sku = item.sku
            
            return (
                <tr>
                    <td> { title } </td>
                    <td> ${ price } </td> 
                    <td> { quantity } </td>
                    <td> ${ quantity * price } </td>
                    <button onClick={this.handleRemoveItem} id={sku}>Remove Item</button>
                    <button>Add To Cart</button>
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