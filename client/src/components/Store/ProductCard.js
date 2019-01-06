import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardSubtitle, Button } from 'reactstrap';
import './productCardStyle.css';
import { withProducts } from '../../context/ProductProvider';
// import { withProducts } from '../../context/BestBuyProvider'
import ProductDetail from '../Product Detail/ProductDetail';
import { Switch, Route, Link } from "react-router-dom";

  class ProductCard extends Component{
      constructor(props){
        super(props)
        this.state = {
            products: []
        }
      }
    
      //  Need to pull product list from context on mount here in order to have data available for
      //  routes and links to product details page.
      //  Dont actually need to set state, can just pull from context provider.

      //  Right now that location is Product Provider -> TestDatabase Array
      componentDidMount() {
        this.setState({
            products: []
        })
    }

    handleClick = () => {
        
    }

    render(){
            let mappedItems = this.props.testDatabase.map(item => {
                let title = item.title
                let subtitle = item.subtitle
                let price = item.price
                let description = item.description
                let image = item.imageUrl
                let id = item._id
                
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
                            <Link to="/productDetail"> <Button id={id} onClick={this.handleClick}>View Details</Button> </Link>
                                
                            </div>
                            </CardBody>

                        {/* The following Div should probably be nested in the view details button above, but I wanted a proof of concept before implementing into working code, so i seperated it out for the moment. */}
                            <div>
                                info here
                                <div>
                                    {this.props.testDatabase.map(product => <Link to={`/products/${product._id}`} key={product._id}>{product.name}</Link>)}
                                </div>
                                <Switch> 
                                    {/* I can not pull props from browser router below.  I believe this is the only thing preventing dynaimic routes from working */}
                                    {/* <Route path={`${this.props.match.url}/:productId`} component={ProductDetail} /> */}
                                </Switch>
                            </div>

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

