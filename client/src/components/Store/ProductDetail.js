import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider'
import { Button } from 'reactstrap';



  class ProductDetails extends Component{
      constructor(props){
        super(props)
        this.state = {
            quantity: 1,
        }
        
      }
    
    componentDidMount() {
        this.props.getSingleProduct(this.props.match.params.id)
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
        let wishlistItem =  { 'sku': this.props.selectedItemSku, 'quantity': parseInt(this.state.quantity) }
    //     this.props.handleAddItemToWishlist(wishlistItem)
    }
    
    handleAddCart = () => {
        
    }
    
    render(){
        let imageStyles = {
            width: '300px',
            height: '300px', 
            backgroundImage: `url(${this.props.singleProduct.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        const {name, shortDescription, regularPrice, longDescription} = this.props.singleProduct

        return (
            <div>
                <h2> {name}</h2>
                <h4>{shortDescription}</h4>
                <div style={imageStyles}></div>
                <h6>${regularPrice}</h6>
                <p>{longDescription}</p>
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

