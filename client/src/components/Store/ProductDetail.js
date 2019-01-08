import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider'
import { Button } from 'reactstrap';
// import { url } from 'inspector';



  class ProductDetails extends Component{
      constructor(props){
        super(props)
        this.state = {
            quantity: 1,
            productImages: [],
            counter: 0
        }
        this.productImages = []
        this.imageStyles = {
            width: '300px',
            height: '300px', 
            backgroundImage: undefined,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
      }
    
    componentDidMount() {
        this.props.getSingleProduct(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps){
        this.imageStyles = {
            ...this.imageStyles,
            backgroundImage: `url(${nextProps.singleProduct.image})`
        }
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
      this.props.handleAddItemToWishlist(wishlistItem)
    }
    
    handleAddCart = () => {
        
    }

    createImageArray = () => {
        const allImageArray = this.props.singleProduct.images
        allImageArray.forEach(item => {
            this.productImages.push(item.href)
        })
        console.log(this.productImages)
    }
   

    handleImageScrollRight = () => {
        console.log('click works')
        this.imageStyles = {
            ...this.imageStyles,
            backgroundImage: `url(${this.productImages[2]})`
        }
        this.setState({
            counter: +1
        })
    }
        
    render(){
        // let imageStyles = {
        //     width: '300px',
        //     height: '300px', 
        //     backgroundImage: `url(${this.props.singleProduct.image})`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat'
        // }
        
        const {name, shortDescription, regularPrice, longDescription, customerReviewAverage, customerReviewCount, depth, height, modelNumber} = this.props.singleProduct
        
        this.props.singleProduct && this.props.singleProduct.images && this.createImageArray()
        
        return (
            
            <div className='productDetailWrapper' >
                <h2> {name}</h2>
                <h4>{shortDescription}</h4>
                <div className='productGridContainer'>
                    <div style={this.imageStyles}></div>
                    <div className='productGridRows'>
                        <h6 className='descriptionHeader'>Product Description:</h6>
                        <p>{longDescription}</p>
                        <p>Model Number: {modelNumber}</p>
                        <h6>Price: ${regularPrice}</h6>
                        <h6>Average Rating: {customerReviewAverage}</h6>
                        <h6>Reviews: {customerReviewCount}</h6>
                        <h6>Dimensions: {depth} x {height}</h6>
                    </div>
                    <div className='productForm'>
                        <button onClick={this.handleImageScrollRight} >button</button>
                    <form  name='quantityForm'>
                        Quantity: <input  name='quantity'
                                type='number' 
                                placeholder='1'
                                min='0' 
                                step='1'
                                value={this.state.quantity}
                                onChange={this.handleChange}
                                onKeyDown={this.handleKeypress}>
                        </input>
                    </form>
                    <div className='buttonContainer'>
                        <Button className='addButton' color="secondary" onClick={this.handleAddWishlist}>Add to Wishlist</Button>
                        <Button className='addButton' color="secondary" onClick={this.handleAddCart}>Add to Cart</Button>{' '}
                    </div>
                </div>
                </div>
               
            </div>
        );
    }
};

export default withProducts(ProductDetails);

