import React, { Component} from 'react';
import { Card } from 'reactstrap';

  class Store extends Component{
    render(){
        return (
            <div style={{width: '90%'}}>
                <Card>
                   This is the store component.  Add products and set up grids in here.
                </Card>
            </div>
        );
    }
};

export default Store;