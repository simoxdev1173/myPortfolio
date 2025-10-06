import React from "react";
import { Cv } from "./Cv"; // Adjust path if needed
import { TextGenerateEffect } from "./ui/text-generate-effect"; // Adjust path
import GlowButton from "./Glowbutton";
import MacbookScene from "./MacbookScene"; // Adjust path
import { Spotlight } from "./ui/Spotlight"; // Adjust path

const Hero = () => {
  return (
    <>
      {/* Spotlight container is now relative to position them correctly */}
      <div className="relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      {/* Main container with padding and flex column for overall structure */}
      <div className="flex flex-col items-center justify-center w-full px-4 pt-15">

        {/* This is your main title, it remains the same */}
        <h1 className="bg-clip-text text-center font-excon font-bold bg-gradient-to-b text-primary text-xl md:text-2xl lg:text-7xl/13">
          <TextGenerateEffect words="A Full-Stack Developper" />
        </h1>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto mt-10">
          
          {/* First Column: Text and Button */}
        
          <div className="flex flex-col items-center md:items-start">
            <h2 className="bg-clip-text text-center md:text-left font-excon bg-gradient-to-b text-primary text-lg md:text-xl lg:text-3xl">
              <TextGenerateEffect words="Based in Morroco Skhirate-Rabat " />
            </h2>
            <h3 className="max-w-xl text-sm md:text-lg text-secondary text-center md:text-left mt-4">
              <TextGenerateEffect words="I'm a Full-Stack Developer specializing in building fast, responsive, and intuitive web applications. I transform ideas into reality with clean code, ensuring a seamless user experience from start to finish." />
            </h3>
            <div className="mt-8">
              <GlowButton>Get in Touch</GlowButton>
            </div>
          </div>

          {/* Second Column: 3D Model */}
          {/* Added fixed height to prevent layout shifts while the model loads */}
          <div id="root" className="w-full h-[50vh] md:h-[60vh]">
            <MacbookScene />
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
