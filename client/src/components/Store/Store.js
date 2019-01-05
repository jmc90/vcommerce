import React, { Component} from 'react';
import ProductCard from './ProductCard'
import './storeStyle.css'

  class Store extends Component{
      constructor(){
          super()
          this.state = {
          }
      }


    render(){
        return (
            <div className='storeWrapper'>
                <h1>Buy this stuff</h1>
                <div className='productCardContainer'>
                    <ProductCard />
                </div>
            </div> 
        );
    }
};

export default Store;