"use client";
import React, { useState, useRef, useEffect } from "react";
import { fetchTracks } from "@/lib/api";
import { Track } from "@/types/track";
import Image from "next/image";

const MusicHeroSection: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const loadTracks = async () => {
      const fetchedTracks = await fetchTracks();
      setTracks(fetchedTracks);
    };
    loadTracks();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("ended", handleTrackEnd);

    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [currentTrack]);

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

  const handleTrackEnd = () => {
    setIsPlaying(false);
    // setCurrentTime(0);
  };

  const handleNext = () => {
    if (tracks.length === 0) return;
    setIsTransitioning(true);

    setTimeout(() => {
      const nextTrack = (currentTrack + 1) % tracks.length;
      setCurrentTrack(nextTrack);
      setIsPlaying(false);
      //   setCurrentTime(0);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  const handlePrevious = () => {
    if (tracks.length === 0) return;
    setIsTransitioning(true);

    setTimeout(() => {
      const prevTrack =
        currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
      setCurrentTrack(prevTrack);
      setIsPlaying(false);
      //   setCurrentTime(0);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  const currentTrackData = tracks[currentTrack] || {
    title: "Loading...",
    description: "Please wait while tracks are loading.",
    subtitle: "",
    poster: { url: "" },
    audio: { url: "" },
  };

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentTrackData.poster.url})`,
            filter: isPlaying ? "" : "grayscale(100%) brightness(2.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      </div>

      <nav className="relative z-10 max-w-[1280px] mx-auto flex justify-between items-center p-6 md:p-8">
        <button className="text-white font-[800] tracking-widest text-sm md:text-[24px] hover:text-gray-300 transition-colors">
          ABOUT
        </button>
        <div className="text-2xl md:text-3xl font-light tracking-wider">
          <Image src="/music-logo.svg" alt="logo" height={102} width={244} />
        </div>
        <button className="text-white font-[800] tracking-widest text-sm md:text-[24px] hover:text-gray-300 transition-colors">
          SOUNDS
        </button>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] mt-[100px] px-6 md:px-8">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 mb-8 md:mb-12">
          <button
            onClick={handlePrevious}
            className="text-white transition-colors p-1 sm:p-2"
            disabled={tracks.length === 0}
          >
            <Image
              src="/back.svg"
              height={20}
              width={20}
              alt="icons"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
          </button>

          <button
            onClick={handlePlayPause}
            className="bg-white/20 w-[100px] h-[100px]  md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full p-3 sm:p-4 md:p-5 lg:p-6 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            disabled={tracks.length === 0}
          >
            {isPlaying ? (
              <Image
                src="/pause.svg"
                width={100}
                height={100}
                alt="icons"
                className="text-white w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
              />
            ) : (
              <Image
                src="/play.svg"
                width={100}
                height={100}
                alt="icons"
                className="text-white w-[50px] h-[50px] xs:w-[60px] xs:h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] xl:w-[127px] xl:h-[127px]"
              />
            )}
          </button>

          <button
            onClick={handleNext}
            className="text-white hover:text-gray-300 transition-colors p-1 sm:p-2"
            disabled={tracks.length === 0}
          >
            <Image
              src="/forward.svg"
              height={20}
              width={20}
              alt="icons"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
          </button>
        </div>

        <div className="text-center max-w-4xl">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isTransitioning
                ? currentTrack > 0
                  ? "transform -translate-x-20 opacity-0"
                  : "transform translate-x-20 opacity-0"
                : "transform translate-x-0 opacity-100"
            }`}
          >
            <h1 className="text-4xl md:text-[36px] lg:text-[54px] font-[800] tracking-wider mb-4 md:mb-6">
              {currentTrackData.title}
            </h1>
            <div
              className="text-[14px] font-lexend font-[400]  md:text-base lg:text[20px] text-gray-300 leading-relaxed max-w-[606px] mx-auto"
              dangerouslySetInnerHTML={{ __html: currentTrackData.description }}
            />
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentTrackData.audio.url}
        preload="metadata"
      />
    </div>
  );
};

export default MusicHeroSection;
