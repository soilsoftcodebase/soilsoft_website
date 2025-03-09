import React from "react";
import { Link } from "react-router-dom";
import WebOverlayForm from "./WebOverlayForm";
import MobileOverlayForm from "./MobileOverlayForm ";
import AiOverlayForm from "./AiOverlayForm ";
import QAOverlayForm from "./QAOverlayForm";
import StaffingOverlayForm from "./StaffingOverlayForm ";
import web from "../../public/assets/web.png";
import mobileapp from "../../public/assets/mobileapp.png";
import staffing from "../../public/assets/Staffing.png";
import qa from "../../public/assets/qa.png";
import ai from "../../public/assets/ai.png";
import bgimg from "../../public/assets/bgimg.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full py-8 md:py-16 flex items-center justify-center bg-white">
        <div className="max-w-[90%] md:max-w-[1180px] text-center px-4">
          <div className="flex flex-col items-center gap-4">
            <h1 className="leading-[30px] md:leading-[60px] text-4xl md:text-5xl font-thin">
              <span className="text-[#038b46] animate-bounce">Innovate</span>{" "}
              <span className="text-[#5841b2] animate-bounce">Boldly, </span>{" "}
              <span className="text-[#038b46] animate-bounce">Implement </span>
              <span className="text-[#5841b2] animate-bounce">
                Brilliantly!{" "}
              </span>
            </h1>
            <p className="text-lg md:text-lg text-gray-600 px-5 md:px-0">
              Empowering Smarter Solutions with Precision and Automation.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section with Background Image */}
      <div className="relative w-full bg-cover bg-center py-16" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="absolute inset-0 bg-white opacity-75"></div>
        <div className="relative container mx-auto text-center items-center w-full mb-10">
          <div className="grid md:grid-cols-3 gap-10 my-6">
            <div className="bg-[#e6f5f0] p-6 mb-4 rounded-lg shadow-lg hover:shadow-2xl transition text-center">
              <img src={web} />
              <h1 className="text-3xl font-semibold mb-4 p-10 my-5">
                Web Development
              </h1>
              <p className="text-gray-700 text-2xl ">
                Craft stunning, responsive websites that engage and deliver
                results.
              </p>
              {/* Contact Us Button */}
              <div className="mt-10">
                <WebOverlayForm />
              </div>
            </div>
            <div className="bg-[#e6f5f0] p-6 mb-4 rounded-lg shadow-lg hover:shadow-2xl transition text-center items-center">
              <img src={mobileapp} />
              <h1 className="text-3xl font-semibold mb-4 p-10 my-10">
                Mobile App{" "}
              </h1>
              <p className="text-gray-700 text-2xl ">
                Transform your ideas into powerful, user-friendly mobile apps
                tailored to your vision.
              </p>
              {/* Contact Us Button */}
              <div className="mt-10">
                <MobileOverlayForm />
              </div>
            </div>
            <div className="bg-[#e6f5f0] p-6 mb-4 rounded-lg shadow-lg hover:shadow-2xl transition text-center ">
              <img src={staffing} />
              <h1 className="text-3xl font-semibold mb-4 p-10 my-2">
                Staffing & Consulting
              </h1>
              <p className="text-gray-700 text-2xl ">
                Build top-tier teams with expert staffing and technical screening.
              </p>
              {/* Contact Us Button */}
              <div className="mt-10">
                <StaffingOverlayForm />
              </div>
            </div>
          </div>
          {/* Services Section second Grid lines */}
          <div className="container mx-auto text-center items-center w-full mb-10">
            <div className="grid md:grid-cols-2 gap-20">
              <div className="bg-[#e6f5f0] p-6 mb-4 rounded-lg shadow-lg hover:shadow-2xl transition text-center ">
                <img src={qa} />
                <h1 className="text-3xl font-semibold mb-4 p-10 my-2">
                  QA & Automation
                </h1>
                <p className="text-gray-700 text-2xl ">
                  Ensure flawless performance with expert testing and automation
                  services.
                </p>
                {/* Contact Us Button */}
                <div className="mt-10">
                  <QAOverlayForm />
                </div>
              </div>
              <div className="bg-[#e6f5f0] p-6 mb-4 rounded-lg shadow-lg hover:shadow-2xl transition text-center ">
                <img src={ai} />
                <h1 className="text-3xl font-semibold mb-4 p-10 my-4">
                  AI Agents
                </h1>
                <p className="text-gray-700 text-2xl ">
                  Harness AI to automate tasks, boost efficiency,and unlock
                  intelligent solutions.
                </p>
                {/* Contact Us Button */}
                <div className="mt-10 my-">
                  <AiOverlayForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="bg-[#dbf5edb2] h-[400px] relative top-[0px]"></div>
    </>
  );
};

export default Hero;
