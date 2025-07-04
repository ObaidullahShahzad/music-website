"use client";
import React, { useState, useRef, useEffect } from "react";
import { fetchTracks } from "@/lib/api";
import { Track } from "@/types/track";
import Image from "next/image";
import lottie from "lottie-web";

const MusicHeroSection = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading && lottieContainerRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/loader.json",
      });

      return () => animation.destroy();
    }
  }, [isLoading]);

  useEffect(() => {
    const loadTracks = async () => {
      const fetchedTracks = await fetchTracks();
      console.log("Fetched Tracks:", fetchedTracks);
      setTracks(fetchedTracks);
    };
    loadTracks();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
      if (hasNextTrack) {
        handleNext();
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [currentTrack, tracks]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!hasNextTrack) return;
    setDirection("left");
    setCurrentTrack((prev) => prev + 1);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    if (!hasPreviousTrack) return;
    setDirection("right");
    setCurrentTrack((prev) => prev - 1);
    setIsPlaying(false);
  };

  const getTrackData = (index: number) => {
    if (index < 0 || index >= tracks.length || !tracks[index]) {
      return {
        id: -1,
        title: "",
        description: "",
        subtitle: "",
        poster: { url: "" },
        audio: { url: "" },
      };
    }
    return tracks[index];
  };

  const hasPreviousTrack = currentTrack > 0;
  const hasNextTrack = currentTrack < tracks.length - 1;

  const currentTrackData = tracks[currentTrack] || {
    id: -1,
    title: "Loading...",
    description: "Please wait while tracks are loading.",
    subtitle: "",
    poster: { url: "" },
    audio: { url: "" },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-black">
        <div
          ref={lottieContainerRef}
          className="w-full h-[50vh] md:h-auto object-cover"
        />
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url('/background_samples.jpg')` }}
      className="hero-section relative bg-black text-white overflow-hidden w-screen  bg-center bg-no-repeat bg-cover min-h-screen"
    >
      <nav className="relative z-20 max-w-[1280px] mx-auto flex justify-center items-center !pt-[70px] p-6 md:p-8">
        <div className="text-2xl md:text-3xl font-light tracking-wider">
          <Image src="/music-logo.svg" alt="logo" height={102} width={244} />
        </div>
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] mt-[70px] px-6 md:px-8">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 mb-8 md:mb-12">
          <button
            onClick={handlePrevious}
            className="text-white transition-colors p-1 sm:p-2 md:mr-[80px] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!hasPreviousTrack}
          >
            <Image
              src="/back.svg"
              height={20}
              width={20}
              alt="previous"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </button>

          <button
            onClick={handlePlayPause}
            className="bg-white/20 w-[100px] h-[100px] cursor-pointer md:mr-[80px] md:w-[180px] md:h-[180px] lg:w-[237px] lg:h-[237px] rounded-full p-3 sm:p-4 md:p-5 lg:p-6 transition-all transform shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={tracks.length === 0}
          >
            {isPlaying ? (
              <Image
                src="/pause.svg"
                width={100}
                height={100}
                alt="pause"
                className="text-white w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            ) : (
              <Image
                src="/play.svg"
                width={100}
                height={100}
                alt="play"
                className="ml-2 w-[50px] h-[50px] xs:w-[35px] xs:h-[55px] sm:w-[70px] sm:h-[55px] md:w-[90px] md:h-[72px] lg:w-[82px] lg:h-[82px]"
              />
            )}
          </button>

          <button
            onClick={handleNext}
            className="text-white hover:text-gray-300 transition-colors p-1 sm:p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!hasNextTrack}
          >
            <Image
              src="/forward.svg"
              height={20}
              width={20}
              alt="next"
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
          </button>
        </div>

        <div className="w-full flex justify-center items-center max-w-[1440px] mx-auto xl:hidden">
          <div
            className={`w-full px-4 text-center max-w-[700px] transition-transform duration-500 ease-in-out ${
              direction === "left"
                ? "animate-slide-in-left"
                : direction === "right"
                ? "animate-slide-in-right"
                : ""
            }`}
          >
            <h1 className="text-4xl md:text-[36px] lg:text-[54px] font-[800] tracking-wider mb-4 md:mb-6 whitespace-nowrap">
              {currentTrackData.title}
            </h1>
            <div
              className="text-[14px] pb-[30px] font-lexend font-[400] md:text-[16px] text-[#B6B6B6] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentTrackData.description }}
            />
          </div>
        </div>

        <div className="w-full justify-center items-center mx-auto hidden xl:flex">
          <div className="flex justify-center items-center w-full max-w-[1600px]">
            <div
              className={`flex-1 text-center transition-all duration-300 ease-in-out ${
                hasPreviousTrack
                  ? "opacity-60"
                  : "opacity-0 pointer-events-none"
              } ${
                direction === "left"
                  ? "animate-slide-in-left"
                  : direction === "right"
                  ? "animate-slide-in-right"
                  : ""
              }`}
            >
              <div className="max-w-[700px] w-full px-4 mx-auto">
                <h1 className="text-[36px] font-[800] tracking-wider mb-4 md:mb-6 whitespace-pre-wrap">
                  {hasPreviousTrack ? getTrackData(currentTrack - 1).title : ""}
                </h1>
                <div
                  className="text-[16px] pb-[30px] font-lexend font-[400] text-[#B66B6B6] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: hasPreviousTrack
                      ? getTrackData(currentTrack - 1).description
                      : "",
                  }}
                />
              </div>
            </div>

            <div
              className={`flex-1 text-center opacity-100 transition-all duration-200 ease-in-out ${
                direction === "left"
                  ? "animate-slide-in-left"
                  : direction === "right"
                  ? "animate-slide-in-right"
                  : ""
              }`}
            >
              <div className="max-w-[700px] w-full px-4 mx-auto">
                <h1 className="text-[54px] font-[800] tracking-wider mb-4 md:mb-6 whitespace-pre-wrap">
                  {currentTrackData.title}
                </h1>
                <div
                  className="text-[20px] font-lexend font-[400] leading-relaxed text-[#B6B6B6]"
                  dangerouslySetInnerHTML={{
                    __html: currentTrackData.description,
                  }}
                />
              </div>
            </div>

            <div
              className={`flex-1 text-center transition-all duration-300 ease-in-out ${
                hasNextTrack ? "opacity-60" : "opacity-0 pointer-events-none"
              } ${
                direction === "left"
                  ? "animate-slide-in-left"
                  : direction === "right"
                  ? "animate-slide-in-right"
                  : ""
              }`}
            >
              <div className="max-w-[700px] w-full px-4 mx-auto">
                <h1 className="text-[36px] font-[800] tracking-wider mb-4 md:mb-6 whitespace-nowrap">
                  {hasNextTrack ? getTrackData(currentTrack + 1).title : ""}
                </h1>
                <div
                  className="text-[16px] pb-[30px] font-lexend font-[400] text-[#B6B6B6] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: hasNextTrack
                      ? getTrackData(currentTrack + 1).description
                      : "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white h-fit relative z-20 pt-[20px] md:pt-[30px] text-center pb-8 px-4">
        <div className="flex justify-center mb-[30px]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/insta.svg"
              alt="Instagram"
              width={44}
              height={44}
              className="hover:opacity-75 transition"
            />
          </a>
        </div>
        <a
          href="mailto:music4matt@outlook.com"
          className="text-[12px] md:text-[20px] mb-[30px] font-[500] font-lexend tracking-widest hover:underline block"
        >
          music4matt@outlook.com
        </a>
        <p className="text-[12px] md:text-[20px] font-[500] font-lexend tracking-widest">
          ©2025 4MATT - ALL RIGHT RESERVED
        </p>
      </footer>

      <audio
        ref={audioRef}
        src={currentTrackData.audio.url}
        preload="metadata"
      />

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-in-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MusicHeroSection;
