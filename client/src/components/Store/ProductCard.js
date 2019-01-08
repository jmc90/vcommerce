import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button
} from "reactstrap";
import "./productCardStyle.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, description, image, sku }) => {
  return (
    <div style={{ width: "318px" }} className="productCard">
      <Card>
        <CardImg
          top
          width="100%"
          height="200px"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <h4> {title} </h4>
          <CardSubtitle> ${price} </CardSubtitle>
          <CardText> {description} </CardText>
          <div className = "buttons-container"> 
            <div className="buttonContainer">
              <Link to={`/store/${sku}`}>
                <Button>View Details</Button>
              </Link>
            </div>
            <div className="buttonContainer">
              {/* set this link to go directly to shopping cart */}
              <Link to={`/store/${sku}`}>
                <Button>Buy Now</Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
