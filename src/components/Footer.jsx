import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} md:flex-row flex justify-start items-center mb-8 w-full`}
      >
        <div className="flex-1 flex md:flex-row flex-col justify-center items-center mr-10">
          <div className="flex justify-center items-center">
            <img
              src="/src/assets/Slogo.png"
              alt="logo"
              className="w-full sm:w-[250px] sm:h-[180px] md:w-[366px] md:h-[272px] object-contain"
            />
          </div>

          <div className="mt-4 md:mt-0 md:ml-10 flex flex-col justify-center items-center md:items-start">
            <h3 className="text-white font-bold text-xl sm:text-2xl md:text-3xl font-poppins">
              Address
            </h3>
            <p
              className={`${styles.paragraph} mt-4 max-w-[310px] text-sm sm:text-base md:text-lg text-center md:text-left`}
            >
              Vidhya Nagar, Ponnur, Guntur,{' '}
              <h2 className="text-white text-base sm:text-lg md:text-xl">
                Amaravati,
              </h2>
              Andhra Pradesh 522124.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[14px] sm:text-[18px] leading-[20px] sm:leading-[27px] text-white">
          2024 &trade; SoilSoft Technologies. Empowering businesses through
          innovation. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a
              key={social.id}
              href={social.link} // Link to the social media URL
              target="_blank" // Open the link in a new tab
              rel="noopener noreferrer" // Ensure security
              className={`cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            >
              <img
                src={social.icon}
                alt={social.id}
                className="w-[21px] h-[21px] sm:w-[24px] sm:h-[24px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
