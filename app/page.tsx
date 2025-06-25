"use client";

import { useState, useEffect } from "react";
import MusicStudioSection from "./components/about";
// import Footer from "./components/footer";
import MusicHeroSection from "./components/hero-section";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-24 h-24 md:w-[800px] md:h-[800px]">
          <Image
            src="/loader.gif"
            alt="Loading"
            width={800}
            height={800}
            className="md:w-full md:h-full h-[300px] w-[300px] object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#151515]">
        <MusicHeroSection />
        <MusicStudioSection />
        {/* <Footer /> */}
      </div>
    </>
  );
}
