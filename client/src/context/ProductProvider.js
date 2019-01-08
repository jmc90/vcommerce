import React, { Component } from "react";
import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      singleProduct: {}
    };
  }

  getData = () => {
    axios
      .get("/products")
      .then(response => {
        console.log(response);
        this.setState({
          products: response.data.products
        });
      })
      .catch(err => console.log(err));
  };

  getSingleProduct = sku => {
    axios
      .get(`/products/${sku}`)
      .then(res => {
        this.setState({
          singleProduct: res.data.products[0]
        });
      })
      .catch(err => console.log(err));
  };

  handleAddItemToWishlist = (wishlistItem) => {
    // push object to wishlisht array in DB
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getData: this.getData,
          getSingleProduct: this.getSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductProvider;

export const withProducts = C => props => (
  <ProductContext.Consumer>
    {value => <C {...props} {...value} />}
  </ProductContext.Consumer>
);
