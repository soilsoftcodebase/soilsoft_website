import React, { useState } from "react";
import { hamburgerMenu, close, logo } from "../../public/assets";
import SSlogo2 from "/public/assets2/SSLogo2.png";
import bgimg from "../../public/assets/bgimg.jpg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="relative w-full h-[80px] mt-3 mb-3">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="relative md:max-w-[1180px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={SSlogo2} className="h-20 mr-auto" />

        <div className="hidden md:flex items-center ml-3">
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#hero" className="hover:text-[#20B486]">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#20B486]">
                  Services
                </a>
              </li>
              <li>
                <a href="https://portfolio.soilsoft.ai" className="hover:text-[#20B486]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#20B486]">
                  Products
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-[#20B486]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li>
            <a href="#hero" className="hover:text-[#20B486]">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#20B486]">
              Services
            </a>
          </li>
          <li>
            <a href="https://portfolio.soilsoft.ai" className="hover:text-[#20B486]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-[#20B486]">
              Products
            </a>
          </li>
          <li>
            <a href="#cta" className="hover:text-[#20B486]">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="w-[1280px] h-px bg-gray-200 my-2"></div>
      </div>
    </div>
  );
};

export default Navbar;
