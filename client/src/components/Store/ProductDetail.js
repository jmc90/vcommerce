import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider'
import { Button } from 'reactstrap';



  class ProductDetails extends Component{
      constructor(props){
        super(props)
        
      }
    
    componentDidMount() {
        this.props.getSingleProduct(this.props.match.params.id)
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
            </div>
        );
    }
};

export default withProducts(ProductDetails);

