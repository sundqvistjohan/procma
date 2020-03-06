import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import elips from "../img/elips.jpg";
import evoclean from "../img/evoclean.png";
import tvattlans from "../img/tvattlans.png";
import pdf from "../img/pdf.png";

const Products = () => {
  return (
    <>
      <Container id="produkter">
        <h1 id="section-header">PRODUKTER</h1>
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
      <Container id="product-cards">
        <Row>
          <Col id="product-right">
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
            <img src={evoclean} width="100%" style={{padding: "20px"}} />
            <div style={{ paddingTop: "20px" }}>
              <a
                href="/content/Broschyr_Evoclean_tvattanlaggning-v1.pdf"
                id="product-link"
              >
                <img src={pdf} width="42px" style={{ paddingRight: "10px" }} />
                EVOCLEAN™ MILJÖANLÄGGNING
              </a>
            </div>
          </Col>
          <Col>
            <Row>
              <Col id="product-left">
                <h3 id="product-header">EVOCLEAN™ TVÄTTLANS</h3>
                <div>
                  En världsunik tvättrobot som utför en grundlig tvätt av
                  betongbil på två minuter.
                </div>
                <ul>
                  <Row>
                    <Col>
                      <li>Låg ställtid</li>
                      <li>Bättre arbetsmiljö</li>
                      <li>Återcirkulerar restprodukter</li>
                      <li>Modulärt och skalerbart</li>
                      <li>Robust teknik</li>
                    </Col>
                    <Col>
                      <li>Kvalitetssäkrad automatik</li>
                      <li>Kan fjärrövervakas över krypterad kanal</li>
                      <li>
                        CE-märkt med nationella och europeiska säkerhetskrav
                      </li>
                    </Col>
                  </Row>
                </ul>
                <img src={tvattlans} width="100%" style={{padding: "20px"}} />
                <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                  <a
                    href="/content/Broschyr_Evoclean_tvattlans-v1.pdf"
                    id="product-link"
                  >
                    <img
                      src={pdf}
                      width="42px"
                      style={{ paddingRight: "10px" }}
                    />
                    EVOCLEAN™ TVÄTTLANS
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col id="product-left">
                <h3 id="product-header">TEKNISKA KONSULTTJÄNSTER</h3>
                <div>
                  Vi har hög kompetens och mycket lång erfarenhet inom de
                  områden vi verkar. Våra tekniska konsulttjänster finns inom:
                </div>
                <ul>
                  <Row>
                    <Col>
                      <li>Analys och förstudier</li>
                      <li>Projektledning</li>
                      <li>El och automation</li>
                      <li>Industriell IT</li>
                    </Col>
                    <Col>
                      <li>Mekanik</li>
                      <li>Miljöteknik</li>
                      <li>Maskinsäkerhet och certifiering</li>
                      <li>Teknisk dokumentation</li>
                    </Col>
                  </Row>
                </ul>
                <div style={{ paddingTop: "20px" }}>
                  <a
                    href="/content/Broschyr_Om_Procma_AB-v1.pdf"
                    id="product-link"
                  >
                    <img
                      src={pdf}
                      width="42px"
                      style={{ paddingRight: "10px" }}
                    />
                    TEKNISKA KONSULTTJÄNSTER
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
