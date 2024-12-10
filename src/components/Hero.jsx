import React from 'react';
import { heroImg } from '../assets';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <>
      <div className="w-full py-8 md:py-16 flex items-center justify-center bg-white">
        <div className="max-w-[90%] md:max-w-[1180px] text-center px-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="leading-[40px] md:leading-[72px] text-3xl md:text-6xl font-semibold">
              <span className="text-[#038b46] animate-spin">AI-Driven</span>{' '}
              Intelligence Testing <br className="hidden md:block" />
              for{' '}
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

      <div className="bg-[#E9F8F3B2] h-[400px] relative top-[320px]"></div>

      <div className="flex justify-center items-center w-full mb-10 ">
        <div className=" relative top-[-400px] w-full max-w-[1100px] aspect-video rounded-3xl overflow-hidden mb-0 mx-4 sm:mx-24 sm:mb-10 border border-[#038b46] ">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube-nocookie.com/embed/3W4nuM_WwSU?si=H7Y3Ojo9W8Cq4veo&start=8&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>

    //     <div className="w-full h-screen bg-white flex justify-center items-center">
    //   <div className="md:max-w-[1180px] text-center px-4 md:px-0">
    //     <div className="text-center md:text-left">
    //       <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold whitespace-nowrap">
    //         <span className="text-[#20B486] animate-bounce">AI-Driven</span> Intelligence Testing for{" "}
    //         <br/><span className="text-[#20B486] animate-pulse">Enhanced Automation</span>
    //       </h1>
    //       <p className="py-2 text-lg text-gray-600">Various versions have evolved over the years, sometimes by accident.</p>
    //     </div>
    //   </div>
    // </div>

    // {/* <img  src={heroImg} className="md:order-last  order-first" /> */}
  );
};

export default Hero;
