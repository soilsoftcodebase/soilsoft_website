import React, { useState } from "react";
import { hamburgerMenu, close, logo } from "../../public/assets";
import SSlogo2 from "/public/assets2/SSLogo2.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px]  mt-3 mb-3 ">
      <div className="md:max-w-[1180px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={SSlogo2} className="h-20" />

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
                <a href="#" className="hover:text-[#20B486]">
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
            {/* <ul className="flex gap-6">
        <li><Link to="/hero" className="hover:text-[#20B486]">Home</Link></li>
        <li><Link to="/services" className="hover:text-[#20B486]">Services</Link></li>
        <li><Link to="/products" className="hover:text-[#20B486]">Products</Link></li>
        <li><Link to="/contact" className="hover:text-[#20B486]">Contact</Link></li>
      </ul> */}
          </nav>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
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
            <a href="#" className="hover:text-[#20B486]">
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

          {/* <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>Services</li>
                    <li className='p-4 hover:bg-gray-100'>Products</li>
                    <li className='p-4 hover:bg-gray-100'>About</li> */}
          {/* <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                         <img src={lock} />
                         Login
                        </button>
                        <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button>
                    </div> */}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="w-[1280px] h-px bg-gray-200 my-2"></div>
      </div>{" "}
    </div>
  );
};

export default Navbar;
