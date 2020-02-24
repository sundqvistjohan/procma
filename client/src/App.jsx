import React from "react";
import Navigation from "./components/Navigation";
import ImageSlider from "./components/ImageSlider";
import News from "./components/News";
import Products from "./components/Products"
import Contact from "./components/Contact"
import EmbedVideo from "./components/EmbedVideo";

const App = () => {
  return (
    <>
      <Navigation />
      <ImageSlider />
      <News />
      <Products />
      <EmbedVideo />
      <Contact />
    </>
  );
};

export default App;
