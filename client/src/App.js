import React from "react";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap"

const App = () => {
  return (
    <Container fluid id="nav">
      <Navigation />
    </Container>
  );
};

export default App;
