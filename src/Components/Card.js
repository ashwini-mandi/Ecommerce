import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

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
    <div className="container">
      <Row className="g-4 justify-content-center mx-4">
        {productsArr.map((product, index) => (
          <Col
            key={index}
            md={6}
            className="d-flex flex-column align-items-center"
          >
            <div className="fs-4">{product.title}</div>
            <Card style={{ width: "16rem" }}>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                className="product-image"
              />
            </Card>
            <div
              className="d-flex justify-content-between mt-4 px-2"
              style={{
                width: "16rem",
              }}
            >
              <div>${product.price}</div>
              <Button variant="primary" size="sm" bg="lightblue" active>
                Add to cart
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCards;
