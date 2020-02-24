import React from "react";
import Navigation from "./components/Navigation";
import News from "./components/News";
import Products from "./components/Products"
import Contact from "./components/Contact"
import EmbedVideo from "./components/EmbedVideo";

const App = () => {
  return (
    <>
      <Navigation />
      <EmbedVideo />
      <News />
      <Products />
      <Contact />
    </>
  );
};

export default App;
