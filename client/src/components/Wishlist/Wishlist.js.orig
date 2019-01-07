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
                <tr key={sku}>
                    <td> { title } </td>
                    <td> ${ price } </td> 
                    <td> { quantity } </td>
                    <td> ${ quantity * price } </td>
                    <td>
                        <button onClick={this.handleRemoveItem} id={sku}>Remove Item</button>
                    </td>
                    <td>
                        <button>Add To Cart</button>
                    </td>
                    
                </tr>
            )
        })

        return (
            <div>
                <table >
                    <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Price</th> 
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {row}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default withProducts(Wishlist);