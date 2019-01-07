import React, { Component } from "react";
import axios from 'axios'

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
      .get(
        `https://api.bestbuy.com/v1/products((search=gpu))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=description.asc&show=description,image,longDescription,name,regularPrice,salePrice,shortDescription,sku&pageSize=20&format=json`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          products: response.data.products
        });
      })
      .catch(err => console.log(err));
  };

  getSingleProduct = (sku) => {
    axios.get(`https://api.bestbuy.com/v1/products(sku=${sku})?apiKey=nsAkGCaJrNdxZwqGredJIoLI&format=json`).then(res => {
        this.setState({
          singleProduct: res.data.products
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          getData: this.getData,
          getSingleProduct: this.getSingleProduct
      }}>
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
