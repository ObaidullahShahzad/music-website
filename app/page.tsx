"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MusicStudioSection from "./components/about";
// import Footer from "./components/footer";
import MusicHeroSection from "./components/hero-section";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-24 h-24 md:w-[800px] md:h-[800px] animate-pulse bg-gray-800 rounded-full"></div>
  ),
});

// Define a generic Lottie animation data type
type LottieAnimationData = Record<string, unknown>;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationData, setAnimationData] =
    useState<LottieAnimationData | null>(null);

  useEffect(() => {
    // Load animation data
    fetch("/logo_animation.json")
      .then((response) => response.json())
      .then((data: LottieAnimationData) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-24 h-24 md:w-[800px] md:h-[800px]">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          )}
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
