import React from "react";
import { Container, Col, Nav, Navbar, Row } from "react-bootstrap";
import ProcmaLogo from "../img/PROCMA-logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  return (
    <Container fluid id="nav">
      <Navbar>
        <Col>
          <Navbar.Brand href="#">
            <img src={ProcmaLogo} alt="logo" id="logo" />
          </Navbar.Brand>
        </Col>
        <Col>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/#nyheter" id="nav-link">
              Nyheter
            </Nav.Link>
            <Nav.Link as={Link} to="/#produkter">
              Produkter
            </Nav.Link>
            <Nav.Link as={Link} to="/#kontakt">
              Kontakt
            </Nav.Link>
          </Nav>
        </Col>
        <Col></Col>
      </Navbar>
    </Container>
  );
};

export default Navigation;
