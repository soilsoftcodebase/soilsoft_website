import React, { useEffect } from "react";
import SSlogo2 from "/public/assets2/SSLogo2.png";
import bgimg from "/assets/bgimg.jpg";
import homeIcon from "/assets/homeIcon.png";
import servicesIcon from "/assets/servicesIcon.png";
import portfolioIcon from "/assets/portfolioIcon.png";
import productsIcon from "/assets/productsIcon.png";
import contactIcon from "/assets/contactIcon.png";

const Navbar = () => {
  useEffect(() => {
    const iconsDiv = document.querySelector("#iconsDiv");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iconsDiv.classList.add("fixed");
        } else {
          iconsDiv.classList.remove("fixed");
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(iconsDiv);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-[80px] mt-3 mb-3 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>
      <div className="relative md:max-w-[1180px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={SSlogo2} className="h-20 mx-auto md:mr-auto md:ml-0" />

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
      </div>
      <div
        id="iconsDiv"
        className="fixed bottom-0 left-0 w-full bg-white border-t md:hidden z-50"
      >
        <ul className="flex justify-around items-center py-2">
          <li>
            <a href="#hero" className="flex flex-col items-center">
              <img
                src={homeIcon}
                className="w-8 h-8 object-contain mb-1"
                alt="Home"
              />
              <span className="text-xs text-green-500">Home</span>
            </a>
          </li>
          <li>
            <a href="#services" className="flex flex-col items-center">
              <img
                src={servicesIcon}
                className="w-8 h-8 object-contain mb-1"
                alt="Services"
              />
              <span className="text-xs text-green-500">Services</span>
            </a>
          </li>
          <li>
            <a
              href="https://portfolio.soilsoft.ai"
              className="flex flex-col items-center"
            >
              <img
                src={portfolioIcon}
                className="w-8 h-8 object-contain mb-1"
                alt="Portfolio"
              />
              <span className="text-xs text-green-500">Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#products" className="flex flex-col items-center">
              <img
                src={productsIcon}
                className="w-8 h-8 object-contain mb-1"
                alt="Products"
              />
              <span className="text-xs text-green-500">Products</span>
            </a>
          </li>
          <li>
            <a href="#cta" className="flex flex-col items-center">
              <img
                src={contactIcon}
                className="w-8 h-8 object-contain mb-1"
                alt="Contact"
              />
              <span className="text-xs text-green-500">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;