import React, { useContext } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import "./ProductCards.css"; // Assuming this CSS file is where you define the styles
import Context from "./Store/Context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function ProductCards() {
  const { addToCart, items } = useContext(Context);
  const handleCart = (product) => {
    addToCart(product);
    console.log("Cart Items:", items);
  };
  return (
    <div className="container">
      <Row className="g-4 justify-content-center mx-4">
        {productsArr.map((product, index) => (
          <Col
            key={index}
            md={6}
            className="d-flex flex-column align-items-center"
          >
            {/* Product Title */}
            <div className="fs-4 fw-semibold mt-5 mb-4 text-center">
              {product.title}
            </div>

            {/* Product Image */}
            <Card style={{ width: "16rem" }} className="image-container">
              <Image src={product.imageUrl} className="product-image" />
            </Card>

            {/* Price and Add to Cart Button */}
            <div
              className="d-flex justify-content-between align-items-center mt-4"
              style={{ width: "16rem" }}
            >
              <div className="fw-bold">${product.price}</div>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCards;
