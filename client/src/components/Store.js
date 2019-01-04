import React, { Component} from 'react';
import ProductCard from './ProductCard'
import './storeStyle.css'

  class Store extends Component{
    render(){
        return (
            <div className='storeWrapper'>
                <h1>Buy this stuff</h1>
                <div className='productCardContainer'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div> 
        );
    }
};

export default Store;