import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './productCardStyle.css'
import { withProducts } from '../context/ProductProvider'

  class ProductCard extends Component{
      constructor(props){
        super(props)
        this.state = {

        }
      }
    
    render(){
            let mappedItems = this.props.testDatabase.map(item => {
                let title = item.title
                let subtitle = item.subtitle
                let price = item.price
                let description = item.description
            
                return (
                    <div style={{width: '318px'}} className='productCard'>
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                            <h4> {title} </h4>
                            <CardSubtitle> {subtitle} </CardSubtitle>
                            <CardSubtitle> ${price} </CardSubtitle>
                            <CardText> {description} </CardText>
                            <div className='buttonContainer'>
                                <Button>Add to Wish List</Button>
                                <Button>Add to Cart</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </div> 
                )
            })
          
        return (
            <div className='mappedItemsContainer'>
                {mappedItems}
            </div>
        );
    }
};

export default withProducts(ProductCard);

