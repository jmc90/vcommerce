import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardSubtitle, Button } from 'reactstrap';
import './productCardStyle.css';
import { withProducts } from '../../context/ProductProvider';
import { Link } from "react-router-dom";

  class ProductCard extends Component{
      constructor(props){
        super(props)
        this.state = {
            products: []
        }
      }
    
      componentDidMount() {
        this.setState({
            products: []
        })
    }

    handleViewDetails = (e) => {
        const clickedItemSku = e.target.attributes[2].nodeValue
        this.props.setSelectedItemSku(clickedItemSku)
       
    }

    render(){
            let mappedItems = this.props.testDatabase.map(item => {
                let title = item.title
                let subtitle = item.subtitle
                let price = item.price
                let description = item.description
                let image = item.imageUrl
                let id = item._id
                let sku = item.sku
                
                return (
                    
                    <div style={{width: '318px'}} className='productCard' >
                        <Card>
                            <CardImg top width="100%" height='200px' src={image} alt="Card image cap" />
                            <CardBody>
                            <h4> {title} </h4>
                            <CardSubtitle> {subtitle} </CardSubtitle>
                            <CardSubtitle> ${price} </CardSubtitle>
                            <CardText> {description} </CardText>
                            <div className='buttonContainer'>
                                <Link to="/productDetail"> 
                                    <Button id={id}
                                            sku={sku} 
                                            onClick={this.handleViewDetails} >
                                        View Details
                                    </Button> 
                                </Link>
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

