import React from "react";
import { Container, Col, Nav, Navbar, Row } from "react-bootstrap";
import ProcmaLogo from "../img/PROCMA-logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Products = () => {
  return (
    <Container fluid id="produkter">
      <Row>
        <Col id="produkt1">
          <h3 id="product-header">TVÄTTLANSEN</h3>
          En världsunik tvättrobot som utför en grundlig tvätt av betongbil på
          två minuter.
          <ul>
            <li>Låg ställtid</li>
            <li>Bättre arbetsmiljö</li>
            <li>Återcirkulerar restprodukter</li>
            <li>Modulärt och skalerbart</li>
            <li>Robust teknik</li>
            <li>Kvalitetssäkrad automatik</li>
            <li>Kan fjärrövervakas över krypterad kanal</li>
            <li>CE-märkt med nationella och europeiska säkerhetskrav</li>
          </ul>
          <div style={{ paddingTop: "20px" }}>PRODUKTBROSCHYR?!</div>
        </Col>
        <Col id="produkt2">
          <h3>EVOCLEAN</h3>
          <div>
            Vi erbjuder moduluppbyggda Evoclean™ Ballast, slam och vatten
            separeras och processvattnet återcirkuleras i anläggningen. Att
            inget förorenat vatten släpps ut från anläggningen ger inte bara en
            konkret miljövinst, det eliminerar ett större pappersarbete gällande
            utsläppstillstånd.
          </div>
          <div>
            Hela anläggningar byggs med moduler, och kan därför enkelt flyttas
            med när betongfabriken flyttas. I övrigt CE märkt och under samma
            säkerhetskrav som Tvättlansen.
          </div>
          <div style={{ paddingTop: "20px" }}>PRODUKTBROSCHYR?!</div>
        </Col>
        <Col id="produkt3">
          <h3>TEKNISKA KONSULTTJÄNSTER</h3>
          Vi har hög kompetens och mycket lång erfarenhet inom de områden vi
          verkar. Våra tekniska konsulttjänster finns inom:
          <ul>
            <li>Analys och förstudier</li>
            <li>Projektledning</li>
            <li>El och automation</li>
            <li>Industriell IT</li>
            <li>Mekanik</li>
            <li>Miljöteknik</li>
            <li>Maskinsäkerhet och certifiering</li>
            <li>Teknisk dokumentation</li>
          </ul>
          <div style={{ paddingTop: "20px" }}>PRODUKTBROSCHYR?!</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;