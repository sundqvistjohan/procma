import React from "react";
import Navigation from "./components/Navigation";
import ImageSlider from "./components/ImageSlider"
import { Container } from "react-bootstrap";


const App = () => {
  return (
    <>
    <Container fluid id="nav-carousel">
      <Navigation />
      <ImageSlider />
    </Container>
    </>
  );
};

export default App;
