// app/components/ui/HeroPage.jsx

'use client'; // This component can be a client component for future interactivity.

import React from 'react';

// A custom button component to avoid repeating styles
const CustomButton = ({ href, children, primary = false }) => {
  const baseClasses = "rounded-md px-8 py-3 text-base font-medium shadow-lg transition-transform duration-200 hover:scale-105";
  const primaryClasses = "bg-[#A9927D] text-[#5E503F]"; // Light button, dark text
  const secondaryClasses = "bg-[#3F3626] text-[#A9927D]"; // Darker button, light text

  return (
    <a href={href} className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}>
      {children}
    </a>
  );
};

export default function HeroPage() {
  return (
    <>


      {/* --- Section 1: Developer Portfolio Hero --- */}
      <section  className="bg-[#5E503F] overflow-x-hidden
 text-white flex h-screen w-full flex-col items-center justify-center p-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">EL ATTAR MOHAMMED</span>
          <span className="block text-[#A9927D]">Web Developer</span>
        </h1>

        {/* Subheading describing your skills */}
        <p className="mt-6 max-w-lg text-lg text-gray-300 sm:text-xl">
          I craft modern,{' '}
          <span className="font-semibold text-white">responsive</span>, and{' '}
          <span className="font-semibold text-white">performant</span> websites.
          My tool of choice? The powerful and efficient{' '}
          <span className="font-semibold text-[#A9927D]">Tailwind CSS</span>.
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CustomButton href="#projects" primary>
            View My Work
          </CustomButton>
          <CustomButton href="#contact">
            Get in Touch
          </CustomButton>
        </div>
      </section>

      {/* --- Section 2: Fictional Website Welcome --- */}
      <section className="bg-[#A9927D] text-[#5E503F] flex h-screen w-full flex-col items-center justify-center p-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
          Welcome to "Artisan Digital"
        </h2>
        <p className="mt-4 max-w-2xl text-lg">
          This website is a project by <span className="font-semibold">EL ATTAR MOHAMMED</span>, created to explore the intersection of modern web technologies and classic design principles. It serves as a living demonstration of what's possible with clean code and a passion for great user experiences.
        </p>
         <div className="mt-8">
           <CustomButton href="#explore" primary={false}>
              Explore the Gallery
           </CustomButton>
         </div>
      </section>
    </>
  );
}
