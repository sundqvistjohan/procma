import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import Patrik from "../img/Patrik.jpg";
import Erik from "../img/Erik.jpg";
import ProcmaLogo from "../img/PROCMA-logo.png";

const Contact = () => {
  return (
    <Container fluid id="kontakt">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>KONTAKTA OSS</h1>
        Vare sig det gäller mer information eller konkreta förfrågningar så
        svarar vi efter bästa förmåga.
      </div>
      <Row>
        <Col id="contact-card" style={{ left: "26%" }}>
          <Image
            src={ProcmaLogo}
            style={{ height: "30px", marginTop: "50px", marginBottom: "30px" }}
          />
          <h5 id="contact-header">PROCMA AB</h5>
          <ul>
            <li>Samueldalsvägen 4</li>
            <li>791 61 Falun</li>
          </ul>
        </Col>
        <Col style={{ left: "3%" }}>
          <Row>
            <Col id="contact-card" md="auto" >
              <Image src={Patrik} />
              <h5 id="contact-header">PATRIK SVEDER</h5>
              <ul>
                <li>Försäljning och Marknad</li>
                <li>070-677 88 49</li>
                <li>
                  <a href="mailto:patrik.sveder@procma.se">
                    patrik.sveder@procma.se
                  </a>
                </li>
              </ul>
            </Col>
            <Col id="contact-card">
              <Image src={Erik} />
              <h5 id="contact-header">ERIK SVEDBERG</h5>
              <div>Försäljning och Marknad</div>
              <div>070-420 32 03</div>
              <a href="mailto:erik.svedberg@procma.se">
                erik.svedberg@procma.se
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
