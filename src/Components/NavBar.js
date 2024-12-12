import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import React, { useContext } from "react";
import Context from "./Store/Context";

function NavBar({ showCartHandler }) {
  const { items } = useContext(Context);
  let totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  console.log(totalQuantity);

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" className="py-1 fixed-top">
        <Container className="d-flex justify-content-center">
          <div className="d-flex justify-content-center flex-grow-1">
            <Nav className="d-flex justify-content-around w-25">
              <Nav.Link href="/" className="text-center text-white">
                HOME
              </Nav.Link>
              <Nav.Link href="/store" className="text-center text-light">
                STORE
              </Nav.Link>
              <Nav.Link href="/about" className="text-center text-light">
                ABOUT
              </Nav.Link>
              <Nav.Link href="/contact" className="text-center text-light">
                CONTACT US
              </Nav.Link>
            </Nav>
          </div>
          <Button variant="outline-light" onClick={showCartHandler}>
            Cart<Badge bg="secondary">{totalQuantity}</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
