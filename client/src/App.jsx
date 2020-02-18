import React from "react";
import Navigation from "./components/Navigation";
import ImageSlider from "./components/ImageSlider";
import News from "./components/News";
import { Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navigation />
      <ImageSlider />
      <News />
    </>
  );
};

export default App;
