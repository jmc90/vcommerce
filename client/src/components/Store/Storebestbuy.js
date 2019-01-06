import React, { Component} from 'react';
import withProducts from '../../context/BBuyProvider'
import ProductCard from './ProductCard'
import './storeStyle.css'

  class Store extends Component{
    componentDidMount(){
        this.props.getProducts() 
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

export default withProducts(Store)