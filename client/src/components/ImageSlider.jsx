import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import slide1_kungenskurva from "../img/slide1_kungenskurva.jpg";
import slide2_slamcontainer from "../img/slide2_slamcontainer.jpg";

const ImageSlider = () => {
  return (
    <>
      <Carousel id="carousel">
        <Carousel.Item
          style={{ backgroundImage: `url("${slide1_kungenskurva}")` }}
        />
        <Carousel.Item
          style={{ backgroundImage: `url("${slide2_slamcontainer}")` }}
        />
      </Carousel>
      <Container fluid id="carousel-cards">
        <Row>
          <Col id="carousel-card">
            Industriell utveckling av produkter och processer som minskar
            miljöpåverkan men ökar affärsnyttan.
          </Col>
          <Col id="carousel-card">
            Vi hjälper våra kunder förbättra såväl arbetsmiljö som ekonomi.
          </Col>
          <Col id="carousel-card">
            Från förstudie till implementation och driftsättning av en färdig
            modulbaserad anläggning.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImageSlider;
