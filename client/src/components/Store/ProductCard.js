import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './productCardStyle.css'
import { withProducts } from '../../context/ProductProvider'

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
                let image = item.imageUrl
            
                return (
                    <div style={{width: '318px'}} className='productCard'>
                        <Card>
                            <CardImg top width="100%" height='200px' src={image} alt="Card image cap" />
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

