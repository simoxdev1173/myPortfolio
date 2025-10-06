// file: app/page.js

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

      <main className="relative mx-auto flex flex-col items-center overflow-hidden sm:px-10">
        
        <header className="w-full">
          <Navbar />
        </header>

        {/* The Hero component and other page sections go inside. */}
        <div className="w-full max-w-7xl">
          <Hero />
          {/* You can add more sections here */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </div>
      </main>


  );
}
