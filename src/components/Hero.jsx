import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#0D0D0D] text-white pt-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Manoj Patil</h1>
        <div className="text-2xl h-20">
          <span className="mr-2">I am a</span>
          <TypeAnimation
            sequence={[
              "Software Developer",
              1000,
              "Technophile",
              1000,
              "Movie Buff",
              1000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            style={{ display: "inline-block" }}
            className="typing-text"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
