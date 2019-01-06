import React, { Component} from 'react';
import { withProducts } from '../../context/ProductProvider'
// import { withProducts } from '../../context/BBuyProvider'


  class ProductDetails extends Component{
      constructor(props){
        super(props)
        this.state = {
            product: {}
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

    render(){
          
        return (
            <div>
            Product Details Page
            Pull data from state into JSX here to display product details.
            </div>
        );
    }
};

export default withProducts(ProductDetails);

