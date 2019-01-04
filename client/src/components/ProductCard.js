import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  class ProductCard extends Component{
    render(){
        return (
            <div style={{width: '318px'}}>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Item Title</CardTitle>
                    <CardSubtitle>Item Subtitle</CardSubtitle>
                    <CardSubtitle>Item Price</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Add to Wish List</Button>
                    <Button>Add to Cart</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default ProductCard;

