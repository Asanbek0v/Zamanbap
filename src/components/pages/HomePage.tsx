import React from "react";
import AboutBrand from "./aboutBrand/AboutBrand";
import Reviews from "./reviews/Reviews";
import Faq from "./faq/Faq";
import Process from "./process/Process";
import Hero from "./homeSections/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <AboutBrand />
      <Reviews />
      <Faq />
      <Process />
    </div>
  );
};

export default HomePage;
