import React, { Component} from 'react';
import { Card } from 'reactstrap';
import ProductCard from './ProductCard'

  class Store extends Component{
    render(){
        return (
            <div style={{width: '90%'}}>
                <Card>
                   This is the store component.  Add products and set up grids in here.
                   <ProductCard />
                   <ProductCard />
                   <ProductCard />
                </Card>
            </div>
        );
    }
};

export default Store;