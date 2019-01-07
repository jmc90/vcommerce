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

const ProductCard = ({title, price, description, image, sku, getSingleProduct}) => {
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
              <div className="buttonContainer">
                <Link to="/productDetail">
                  <Button onClick={() => getSingleProduct(sku)}>
                    View Details
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
    )
}


export default ProductCard
