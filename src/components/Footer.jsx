import React from "react";
import SSLogo from "../../public/assets/SSLogo.webp";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1180px] m-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0">
        {/* Contact Us Section */}
        <div className="col-span-2">
          <img src={SSLogo} className="h-[90px]" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : +91 96426 69333</h3>
          <h3 className="py-2 text-[#6D737A]">
            Vidhya Nagar, Ponnur, Guntur, <br /> Amaravati, Andhra Pradesh
            522124.
          </h3>
          <h3 className="py-2 text-[#363A3D]">
            Email: vamsikrishna.nekkanti@soilsoft.ai
          </h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <a href="https://www.facebook.com/people/Soil-Soft-Technologies/61553683384013/">
                <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
              </a>
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <a href="https://www.linkedin.com/company/soilsofttechnologies/posts/?feedView=all">
                <FaLinkedinIn size={25} style={{ color: "#4DC39E" }} />
              </a>
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <a href="https://api.whatsapp.com/send?phone=917989979264">
                <FaWhatsapp size={25} style={{ color: "#4DC39E" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Home</li>
            <li className="py-2">Services</li>
            <li className="py-2">Products</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-2xl font-bold">Services</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Manual Testing</li>
            <li className="py-2">Automation Testing</li>
            <li className="py-2">Security Testing</li>
            <li className="py-2">Performance Testing</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="md:max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mt-14 gap-8 px-4 md:px-0 text-gray-500 max-w-[600px]">
        <p>© 2025 SoilSoft Technologies Pvt Ltd. All Rights Reserved.</p>
        <p className="text-center sm:text-end">
          Developed with ❤️ by SS DevTeam
        </p>
      </div>
    </div>
  );
};

export default Footer;
