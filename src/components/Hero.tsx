import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/banner.jp.png)] bg-cover"
    style={{backgroundSize: "33%" , backgroundPosition:"left 200px top 140px"}}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[130px] font-bold leading-tight flex justify-center items-center">
          <div>
           <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Farwa</p>
            <p data-aos="zoom-in-up">Khan</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;