import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Context from "./Store/Context";
import { Col, Row } from "react-bootstrap";

const Cart = ({ onClose, show }) => {
  const { items } = useContext(Context);
  console.log(items);
  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement="end"
      backdrop={false}
      style={{ marginTop: "50px" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {items.map((item, id) => {
          return (
            <Row className="mb-3">
              <Col>
                <img
                  src={item.imageUrl}
                  style={{ height: "5rem", width: "5rem" }}
                  alt="title"
                />
              </Col>
              <Col>{item.title}</Col>
              <Col>{item.price}</Col>
              <Col>{item.quantity}</Col>
            </Row>
          );
        })}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
