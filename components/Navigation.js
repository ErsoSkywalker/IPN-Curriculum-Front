import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
const Navigation = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Curriculum IPN</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/nosotros">Inicio</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="outline-info">Cerrar Sesión</Button>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
