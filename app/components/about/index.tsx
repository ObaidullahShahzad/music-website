import React from "react";
import Image from "next/image";

const MusicStudioSection: React.FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto  text-white relative">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/background_sample.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="mx-[24px] md:mx-[80px] max-w-[1920px] pt-8 lg:pt-16">
          {/* Desktop Layout */}
          <div className="hidden xl:flex xl:flex-row xl:gap-8">
            {/* About Section - Left */}
            <div className="xl:flex-1 flex flex-col z-30 relative">
              <div className="mb-8">
                <h2 className="text-[42px] xl:text-[54px] font-bold mb-6 tracking-wider">
                  ABOUT
                </h2>
                <p className="text-[#B6B6B6] text-sm xl:text-[20px] font-[400] leading-normal font-lexend max-w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
                  blandit semper nunc facilisi potenti id. Eu consectetur at
                  condimentum porttitor.
                </p>
              </div>

              {/* Microphone Image - Larger and overlapping */}
              <div className="flex-1 relative -mr-16 z-20">
                <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden transform -rotate-3 transition-transform duration-300 shadow-2xl">
                  <Image
                    src="/left.png"
                    alt="Professional microphone setup"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>
            </div>

            {/* Center Performance Image - Background layer */}
            <div className="xl:flex-[2] max-w-[615px] relative z-10">
              <div className="relative w-full md:-w-[615px] max-w-[615px] h-full  rounded-lg overflow-hidden">
                <Image
                  src="/main.png"
                  alt="Live music performance"
                  fill
                  className="object-cover rounded-lg "
                  sizes="(max-width: 200px) 615px, 50vw"
                />
              </div>
            </div>

            {/* Right Side - Studio Setup and Sound Section */}
            <div className="xl:flex-1 flex flex-col z-30 relative">
              {/* Studio/Keyboard Image - Larger and overlapping */}
              <div className="flex-1 relative mb-8 -ml-[100px] z-20">
                <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden transform rotate-3 transition-transform duration-300 shadow-2xl">
                  <Image
                    src="/right.png"
                    alt="Music studio keyboard setup"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </div>

              {/* Sound Section */}
              <div>
                <h2 className="text-[42px] xl:text-[54px] font-bold mb-6 tracking-wider">
                  SOUND
                </h2>
                <p className="text-[#B6B6B6] text-sm xl:text-[20px] font-[400] leading-normal font-lexend max-w-[800px]">
                  Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
                  blandit semper nunc facilisi potenti id. Eu consectetur at
                  condimentum porttitor.
                </p>
              </div>
            </div>
          </div>

          {/* Tablet Layout (lg to xl) */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex flex-row gap-8 mb-12">
              {/* About Section */}
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-[36px] lg:text-[48px] font-bold mb-6 tracking-wider">
                    ABOUT
                  </h2>
                  <p className="text-[#B6B6B6] text-[16px] font-[400] leading-relaxed font-lexend">
                    Lorem ipsum dolor sit amet consectetur. Quam in erat
                    pulvinar blandit semper nunc facilisi potenti id. Eu
                    consectetur at condimentum porttitor.
                  </p>
                </div>

                {/* Left Image (Microphone) */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden transform -rotate-2 transition-transform duration-300 shadow-2xl">
                  <Image
                    src="/left.png"
                    alt="Professional microphone setup"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 1024px) 50vw"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 space-y-8">
                {/* Right Image (Studio/Keyboard) */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden transform rotate-2 transition-transform duration-300 shadow-2xl">
                  <Image
                    src="/right.png"
                    alt="Music studio keyboard setup"
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 1024px) 50vw"
                  />
                </div>

                {/* Sound Section */}
                <div>
                  <h2 className="text-[36px] lg:text-[48px] font-bold mb-6 tracking-wider">
                    SOUND
                  </h2>
                  <p className="text-[#B6B6B6] text-[16px] font-[400] leading-relaxed font-lexend">
                    Lorem ipsum dolor sit amet consectetur. Quam in erat
                    pulvinar blandit semper nunc facilisi potenti id. Eu
                    consectetur at condimentum porttitor.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Image - Full Width */}
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
              <Image
                src="/main.png"
                alt="Live music performance"
                fill
                className="object-cover rounded-lg opacity-70"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Mobile Layout (below lg) */}
          <div className="lg:hidden space-y-8 sm:space-y-12 pb-12">
            {/* About Section */}
            <div className="text-center sm:text-left">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-4 sm:mb-6 tracking-wider">
                ABOUT
              </h2>
              <p className="text-[#B6B6B6] text-[14px] sm:text-[16px] md:text-[18px] font-[400] leading-relaxed font-lexend max-w-[600px] mx-auto sm:mx-0">
                Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
                blandit semper nunc facilisi potenti id. Eu consectetur at
                condimentum porttitor.
              </p>
            </div>

            {/* Images Stack */}
            <div className="space-y-6 sm:space-y-8">
              {/* Right Image (Studio/Keyboard) - First on mobile */}
              <div className="relative lg:aspect-[1/2] aspect-[16/10] rounded-lg overflow-hidden transform hover:rotate-1 transition-transform duration-300 shadow-2xl">
                <Image
                  src="/right.png"
                  alt="Music studio keyboard setup"
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
              </div>

              {/* Main Image */}
              <div className="relative aspect-[16/9] sm:aspect-[16/8] rounded-lg overflow-hidden">
                <Image
                  src="/main.png"
                  alt="Live music performance"
                  fill
                  className="object-cover rounded-lg opacity-60 sm:opacity-70"
                  sizes="100vw"
                />
              </div>

              {/* Left Image (Microphone) */}
              <div className="relative lg:aspect-[1/2] aspect-[16/10] rounded-lg overflow-hidden transform hover:-rotate-1 transition-transform duration-300 shadow-2xl">
                <Image
                  src="/left.png"
                  alt="Professional microphone setup"
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Sound Section */}
            <div className="text-center">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-4 sm:mb-6 tracking-wider">
                SOUND
              </h2>
              <p className="text-[#B6B6B6] text-[14px] sm:text-[16px] md:text-[18px] font-[400] leading-relaxed font-lexend max-w-[600px] mx-auto ">
                Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
                blandit semper nunc facilisi potenti id. Eu consectetur at
                condimentum porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#161616] text-white h-fit pt-[20px] md:pt-[100px] text-center  pb-8 px-4">
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
    </div>
  );
};

export default MusicStudioSection;
