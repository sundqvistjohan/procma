import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import elips from "../img/elips.jpg";
import evoclean from "../img/evoclean.png";

const Products = () => {
  return (
    <>
      <Container id="produkter">
        <h1 style={{ textAlign: "center" }}>PRODUKTER</h1>
        <Row>
          På PROCMA AB arbetar vi med industriell utveckling av produkter och
          processer som minskar miljöpåverkan men ökar affärsnyttan. Våra kunder
          förbättrar såväl arbetsmiljö som ekonomi. Vi hjälper till med allt
          från förstudie till implementation och driftsättning av en färdig
          modulbaserad anläggning.
        </Row>
        {/* <img
          src={elips}
          style={{ height: "600px", paddingTop: "50px" }}
          id="elips"
        /> */}
      </Container>
      <Container fluid id="product-cards">
        <Row>
          <Col sm={8} id="produkt1">
            <h3 id="product-header">EVOCLEAN™</h3>
            <div>
              Vi erbjuder moduluppbyggda Evoclean™. En komplett miljöanläggning
              för automatisk tvätt av betongbilar. Ballast, slam och vatten
              separeras och processvattnet återcirkuleras i anläggningen. Att
              inget förorenat vatten släpps ut från anläggningen ger inte bara
              en konkret miljövinst, det eliminerar ett större pappersarbete
              gällande utsläppstillstånd. Evoclean™ miljöanläggning byggs i
              moduler och kan enkelt och kostnadseffektivt byggas ut med
              Evoclean™ tilläggsutrustning. Modulerna monteras ihop på plats med
              färdiga monteringssatser.
            </div>
            <h5 style={{ paddingTop: "20px" }}>Standardutrustning</h5>
            <div>
              Standardutrustningen i en Evoclean™ miljöanläggning från Procma
              uppfyller nationella och Europeiska säkerhetskrav och levereras CE
              märkt.
            </div>
            <ul>
              <li>
                <span id="bold">In-linetvätt</span> för tvätt av bakstam runt
                trumma och tratt, inkluderar högtrycksspolning från brygga i
                arbetshöjd.
              </li>
              <li>
                <span id="bold">Tvättanläggning</span> som inkludera tvättlans
                och scrubber, för invändig tvätt av trumman och för
                frånskiljning och utmatning av sand, sten och slamvatten från
                betongresterna.
              </li>
              <li>
                <span id="bold">Vattenanläggning</span> som inkluderar
                slamcontainers, för sedimentering, bufferttank för processvatten
                och pumpgrupp för återcirkulering av processvatten.
              </li>
              <li>
                <span id="bold">Styrsystemet Evoclean™</span> för styrning och
                övervakning av enskilda moduler och av hela miljöanläggningen.
              </li>
            </ul>
            <div style={{ paddingTop: "20px" }}>PRODUKTBROSCHYR?!</div>
          </Col>
          <Col sm={4} id="produkt2">
            <h3 id="product-header">EVOCLEAN™ TVÄTTLANS</h3>
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
            <img src={evoclean} width="100%" />
          </Col>
        </Row>
        <Row id="produkt3">
          <Col sm={{ span: 6, offset: 3 }} >
            <h3 id="product-header">TEKNISKA KONSULTTJÄNSTER</h3>
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
    </>
  );
};

export default Products;
