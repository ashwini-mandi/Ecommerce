import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import React from "react";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" className="py-1">
        <Container className="d-flex justify-content-center">
          <div className="d-flex justify-content-center flex-grow-1">
            <Nav className="d-flex justify-content-around w-25">
              <Nav.Link href="#home" className="text-center text-white">
                HOME
              </Nav.Link>
              <Nav.Link href="#features" className="text-center text-light">
                STORE
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-center text-light">
                ABOUT
              </Nav.Link>
            </Nav>
          </div>
          <Button variant="outline-light">
            Cart<Badge bg="secondary">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Container>
      </Navbar>
      <div className="text-center mt-1">
        <h1>
          <Badge
            bg="secondary"
            className="w-100 py-5 border-0 mt-0"
            style={{ fontSize: "6rem" }}
          >
            The Generics
          </Badge>
        </h1>
      </div>
    </>
  );
}

export default NavBar;
