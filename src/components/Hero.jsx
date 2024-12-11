import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full py-8 md:py-16 flex items-center justify-center bg-white">
        <div className="max-w-[90%] md:max-w-[1180px] text-center px-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="leading-[40px] md:leading-[72px] text-3xl md:text-6xl font-semibold">
              <span className="text-[#038b46] animate-spin">AI-Driven</span>{" "}
              Intelligence Testing <br className="hidden md:block" />
              for{" "}
              <span className="text-[#038b46] animate-bounce">
                Enhanced Automation
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 px-2 md:px-0">
              Empowering Smarter Solutions with Precision and Automation.
            </p>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-[#E9F8F3B2] h-[400px] relative top-[320px]"></div>

      {/* Video Section */}
      <div className="flex justify-center items-center w-full mb-10">
        <div className="relative top-[-400px] w-full max-w-[1100px] aspect-video rounded-3xl overflow-hidden mx-4 sm:mx-24 sm:mb-10 border border-[#038b46]">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube-nocookie.com/embed/3W4nuM_WwSU?si=0p03YXblQSf1iJ83&&autoplay=1&controls=1&loop=1&playlist=3W4nuM_WwSU&enablejsapi=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Hero;


