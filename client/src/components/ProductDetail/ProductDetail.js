import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider'
import { Button } from 'reactstrap';

  class ProductDetails extends Component{
      constructor(props){
        super(props)
        this.state = {
            product: {},
            quantity: 1,
            selectedItemTitle: '',
            selectedItemSubtitle: '',
            selectedItemPrice: 0,
            selectedItemDescription: '',
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
        this.setState({
            selectedItemTitle: this.props.selectedItemDetails[0].title,
            selectedItemSubtitle: this.props.selectedItemDetails[0].subtitle,
            selectedItemPrice: this.props.selectedItemDetails[0].price,
            selectedItemDescription: this.props.selectedItemDetails[0].description,
        })
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
                <h2> {this.state.selectedItemTitle}</h2>
                <h4>{this.state.selectedItemSubitle}</h4>

                <div style={this.imageStyles}></div>

                <h6>${this.state.selectedItemPrice}</h6>
                <p>{this.state.selectedItemDescription}</p>
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

