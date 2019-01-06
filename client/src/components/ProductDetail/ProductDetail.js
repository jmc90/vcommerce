import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider'
import { Button } from 'reactstrap';

  class ProductDetails extends Component{
      constructor(props){
        super(props)
        this.state = {
            product: {},
            quantity: 1,
        }
      }
    
    componentDidMount() {
       //   Will need to do an axios request here to pull details from database of specific product they clicked on in order to render the product details page for that specific item.

    // axios.get(`http://api.mysite.com/services/${this.props.match.params.productId}`)
    //     .then(response => {
    //         this.setState({
    //             service: response.data
    //         });
    //     });
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleKeypress (e) {
        const characterCode = e.key
        if (characterCode === 'Backspace') return
        const characterNumber = Number(characterCode)
        if (characterNumber >= 0 && characterNumber <= 9) {
          if (e.currentTarget.value && e.currentTarget.value.length) {
            return
          } 
        } else {
          e.preventDefault()
        }
    }

    handleAddWishlist = () => {

    }
    
    handleAddCart = () => {
        
    }

    render(){
          
        return (
            <div>
                <h2> Lets Put product name here</h2>
                <h4>Product Subtitle goes here</h4>
                <img src='https://nestle.promo.eprize.com/hotpockets18/public/COMPILED/images/hero.214d902f519f6eecfa538c5b826013f6.jpg'></img>
                <h6>Put a price here</h6>
                <p>Product description will go here</p>
                <form name='quantityForm'>
                    <input  name='quantity'
                            type='number' 
                            placeholder='1'
                            min='0' 
                            step='1'
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeypress}>
                    </input>
                </form>
            <Button color="secondary" onClick={this.handleAddWishlist}>Add to Wishlist</Button>
            <Button color="secondary" onClick={this.handleAddCart}>Add to Cart</Button>{' '}
            </div>
        );
    }
};

export default withProducts(ProductDetails);

