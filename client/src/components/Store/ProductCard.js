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
        <CardImg className="card-img"
          width="100%"
          height="200px"
          margin="20px"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <h4> {title.length >= 60 ? title.slice(0,60) + "..." : title} </h4>
          <CardSubtitle> ${price} </CardSubtitle>
          <CardText> {description.length >= 80 ? description.slice(0, 80) + "[...]" : description } </CardText>
          <div className = "buttons-container"> 
            <div className="butContainer">
              <Link to={`/store/${sku}`}>
                <Button>View Details</Button>
              </Link>
            </div>
            <div className="butContainer">
              {/* set this link to go directly to cart */}
              <Link to={`/store/${sku}`}>
                <Button>Add to Cart</Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
