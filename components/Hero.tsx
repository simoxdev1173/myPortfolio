
import React from "react";
import { Cv } from "./Cv"; // Adjust path if needed
import { TextGenerateEffect } from "./ui/text-generate-effect"; // Adjust path
import GlowButton from "./Glowbutton";
import  {Spotlight} from "./ui/Spotlight"; // Adjust path

const Hero = () => {
  return (
    // This container centers the hero content vertically in the viewport.
    <>
     <div>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill="white"'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw] fill="blue"'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw] fill="purple"'/>
            
        </div>
       
    </div>
 
      <div className="flex items-center justify-center w-full flex-col px-4 pt-5">

        <h1 className="bg-clip-text text-center font-excon font-bold  bg-gradient-to-b text-primary text-xl md:text-2xl lg:text-7xl/13 ">
        <TextGenerateEffect words="A Full-Stack Developper" />
        
        
      </h1>
      
      <h2 className="bg-clip-text text-center font-excon bg-gradient-to-b text-primary text-lg md:text-xl lg:text-3xl mt-4">
        <TextGenerateEffect words="Based in Morroco Skhirate-Rabat " />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-secondary text-center">
        <TextGenerateEffect words="Get the best advices from our experts, including expert artists, painters, marathon enthusiasts and RDX, totally free." />
      </p>
        <div className="mt-8">
          <GlowButton>Get Started</GlowButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
