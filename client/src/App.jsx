import React from "react";
import Navigation from "./components/Navigation";
import ImageSlider from "./components/ImageSlider";
import News from "./components/News";
import Products from "./components/Products"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <Navigation />
      <ImageSlider />
      <News />
      <Products />
      <Contact />
    </>
  );
};

export default App;
