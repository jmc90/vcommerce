import React, { Component} from 'react';
import { Card} from 'reactstrap';

  class Store extends Component{
    render(){
        return (
            <div style={{width: '90%'}}>
                <Card>
                    This is the Store component
                </Card>
            </div>
        );
    }
};

export default Store;