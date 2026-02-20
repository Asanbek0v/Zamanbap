import React from "react";
import AboutBrand from "./homeSections/AboutBrand";
import Reviews from "./homeSections/Reviews";
import Faq from "./homeSections/Faq";
import Process from "./homeSections/Process";
import Hero from "./homeSections/Hero";
import Popular from "./homeSections/Popular";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <AboutBrand />
      <Reviews />
      <Faq />
      <Process />
    </div>
  );
};

export default HomePage;
