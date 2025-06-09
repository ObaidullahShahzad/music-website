import React from "react";
import Image from "next/image";

const MusicStudioSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#151515] text-white overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-[24px] pt-8 lg:pt-16">
        {/* Desktop Layout */}
        <div className="hidden xl:grid xl:grid-cols-12 xl:gap-8 xl:h-screen xl:max-h-[800px] mb-[300px]">
          {/* About Section - Left */}
          <div className="xl:col-span-3 flex flex-col z-30 relative">
            <div className="mb-8">
              <h2 className="text-[42px] xl:text-[54px] font-bold mb-6 tracking-wider">
                ABOUT
              </h2>
              <p className="text-[#B6B6B6] text-sm xl:text-[18px] font-[400] leading-normal font-lexend max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
                blandit semper nunc facilisi potenti id. Eu consectetur at
                condimentum porttitor. Convallis neque nibh interdum urna
                pharetra sed viverra. Pellentesque in nunc ornare senectus nunc
                quis id eros. Ut nisl iaculis natoque dui dignissim elit elit
                vivamus sed. Nulla habitant odio aliquet enim donec at diam eget
                velit. Id aliquet leo adipiscing at consectetur.
              </p>
            </div>

            {/* Microphone Image - Larger and overlapping */}
            <div className="flex-1 relative -mr-16 z-20">
              <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden transform -rotate-3  transition-transform duration-300 shadow-2xl">
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
          <div className="xl:col-span-6 relative z-10">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/main.png"
                alt="Live music performance"
                fill
                className="object-cover rounded-lg opacity-80"
                sizes="(max-width: 200px) 100vw, 50vw"
              />
              {/* Subtle overlay to make it appear more in background */}
            </div>
          </div>

          {/* Right Side - Studio Setup and Sound Section */}
          <div className="xl:col-span-3 flex flex-col z-30 relative">
            {/* Studio/Keyboard Image - Larger and overlapping */}
            <div className="flex-1 relative mb-8 -ml-16 z-20">
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
              <h2 className="text-[42px] xl:text-[54px] font-bold mb-6 tracking-wider ">
                SOUND
              </h2>
              <p className="text-[#B6B6B6] text-sm xl:text-[18px] font-[400] leading-normal font-lexend max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
                blandit semper nunc facilisi potenti id. Eu consectetur at
                condimentum porttitor. Convallis neque nibh interdum urna
                pharetra sed viverra. Pellentesque in nunc ornare senectus nunc
                quis id eros. Ut nisl iaculis natoque dui dignissim elit elit
                vivamus sed. Nulla habitant odio aliquet enim donec at diam eget
                velit. Id aliquet leo adipiscing at consectetur.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="xl:hidden space-y-12">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-[42px] md:text-[54px] font-bold mb-6 tracking-wider">
              ABOUT
            </h2>
            <p className="text-[#B6B6B6] text-sm xl:text-[18px] font-[400] leading-normal font-lexend max-w-[800px]">
              Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
              blandit semper nunc facilisi potenti id. Eu consectetur at
              condimentum porttitor. Convallis neque nibh interdum urna pharetra
              sed viverra. Pellentesque in nunc ornare senectus nunc quis id
              eros. Ut nisl iaculis natoque dui dignissim elit elit vivamus sed.
              Nulla habitant odio aliquet enim donec at diam eget velit. Id
              aliquet leo adipiscing at consectetur.
            </p>
          </div>

          {/* Images in Flex Layout */}
          <div className="flex flex-col gap-6 px-4">
            {/* Right Image (Studio/Keyboard) */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden transform rotate-3  transition-transform duration-300 shadow-2xl">
              <Image
                src="/right.png"
                alt="Music studio keyboard setup"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1024px) 100vw"
              />
            </div>

            {/* Main Image */}
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/main.png"
                alt="Live music performance"
                fill
                className="object-cover rounded-lg opacity-60"
                sizes="(max-width: 1024px) 100vw"
              />
            </div>

            {/* Left Image (Microphone) */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden transform -rotate-3  transition-transform duration-300 shadow-2xl">
              <Image
                src="/left.png"
                alt="Professional microphone setup"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1024px) 100vw"
              />
            </div>
          </div>

          {/* Sound Section */}
          <div className="text-center md:text-right mt-16">
            <h2 className="text-[42px] md:text-[54px] font-bold mb-6 tracking-wider">
              SOUND
            </h2>
            <p className="text-[#B6B6B6] text-sm xl:text-[18px] font-[400] leading-normal font-lexend max-w-[800px]">
              Lorem ipsum dolor sit amet consectetur. Quam in erat pulvinar
              blandit semper nunc facilisi potenti id. Eu consectetur at
              condimentum porttitor. Convallis neque nibh interdum urna pharetra
              sed viverra. Pellentesque in nunc ornare senectus nunc quis id
              eros. Ut nisl iaculis natoque dui dignissim elit elit vivamus sed.
              Nulla habitant odio aliquet enim donec at diam eget velit. Id
              aliquet leo adipiscing at consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicStudioSection;
