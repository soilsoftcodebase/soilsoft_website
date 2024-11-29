import React from 'react';
import { feedback2 } from '../constants';
import styles from '../style';

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} flex flex-col md:flex-row justify-center items-center relative`}
    >
      {/* Background Gradient */}
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue2__gradient bottom-40" />

      {/* Header Section */}
      <div className="flex-2 flex flex-col justify-center items-center sm:mb-16 mb-6 relative z-[1] text-justify px-4 ml-8">
        <h2 className={`${styles.heading2} text-lg md:text-2xl`}>
          Our IT Products
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-6 py-4`}>
          Innovation in Progress: We are crafting the future of IT solutions!
          Our team is hard at work building cutting-edge products designed to
          transform the way businesses operate. Stay tuned for groundbreaking
          solutions that will redefine efficiency, security, and scalability.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-2 flex flex-col justify-center items-center w-full relative z-[1] px-4">
        {/* Iframe */}
        <div
          className="relative w-full sm:w-[80%]"
          style={{ paddingBottom: '56.25%', position: 'relative', height: '0' }}
        >
          <iframe
            src="https://giphy.com/embed/bZQvimlS7kuGc"
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              pointerEvents: 'none',
            }}
            frameBorder="0"
            className="giphy-embed rounded-lg"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center mt-6 w-full sm:w-[50%]">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Advanced AI Products are Getting Ready
          </h2>
          <p className="mt-2 text-gray-300">
            Discover cutting-edge artificial intelligence solutions tailored to
            your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
