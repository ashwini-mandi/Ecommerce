import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function ProductCards() {
  return (
    <Row className="g-4">
      {productsArr.map((product, index) => (
        <Col key={index} xs={12} md={6} col-lg={3}>
          <Card className="product-card h-100">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              className="product-image"
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductCards;
