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
        this.imageStyles = {
            width: '300px',
            height: '300px', 
            backgroundImage: `url(${this.props.selectedItemDetails[0].imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
      }
    
    componentDidMount() {
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
                <h2> {this.props.selectedItemDetails[0].title}</h2>
                <h4>{this.props.selectedItemDetails[0].subtitle}</h4>

                <div style={this.imageStyles}></div>

                <h6>${this.props.selectedItemDetails[0].price}</h6>
                <p>{this.props.selectedItemDetails[0].description}</p>
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

