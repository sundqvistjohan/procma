import React from "react";
import { Container, Col, Nav, Navbar } from "react-bootstrap";
import ProcmaLogo from "../img/PROCMA-logo_neg.png";

const Navigation = () => {
  return (
    <Container>
      <Navbar>
      <Col>
        <Navbar.Brand href="#">
          <img src={ProcmaLogo} alt="logo" id="logo" />
        </Navbar.Brand>
      </Col>
      <Col>
        <Nav className="mr-auto">
          <Nav.Link href="#nyheter"id="nav-link">Nyheter</Nav.Link>
          <Nav.Link href="#produkter">Produkter</Nav.Link>
          <Nav.Link href="#kontakt">Kontakt</Nav.Link>
        </Nav>
      </Col>
      <Col>
      </Col>
      </Navbar>
    </Container>
  );
};

export default Navigation;
