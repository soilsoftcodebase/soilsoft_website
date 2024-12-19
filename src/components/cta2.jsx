import React from 'react'
import { useState } from 'react';
import cta2img from '../assets/cta2.png';
const cta2 = () => {

    const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       <div className='relative top-[-350px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
    <div className='md:max-w-[1200px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={cta2img} className="w-[650px] mx-auto" />

        
        <div>
            {/* Popup */}
          {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none text-3xl">
              &times;
            </button>
            
            {/* Iframe */}
            <div className="w-full h-[75vh]">
              <iframe
                className="w-full h-full border-none"
                src="https://forms.office.com/Pages/ResponsePage.aspx?id=XWw-lpHoekGlgSs5V-dA_R8CISo3fzJPnxl4aW9S5sJUN1hFUEYxNjQwVFg2RFo4UzBSU1pGTVVBMiQlQCN0PWcu&embed=true"
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                msallowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      )}

        <h1 className="py-3 text-2xl sm:text-3xl sm:text-left md:text-4xl font-bold sm:leading-[50px] md:leading-[60px] leading-[40px]">
          Let's Try Our <span className="text-[#038b46]">Service Now!</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg sm:text-left text-gray-600 max-w-[800px] px-2 sm:px-4 md:px-0 text-left">
          All the tools you need to harness technology, streamline operations,
          and scale your business seamlessly anytime, anywhere.
        </p>
        <button
        type="submit"
        className="w-64 sm:w-72 px-4 sm:px-6 py-4 rounded-xl bg-[#038b46] mt-6 text-white text-sm sm:text-base md:text-lg font-bold hover:bg-[#206a45] hover:text-white transition duration-300 ease-in-out"
         onClick={togglePopup}>
            Request Demo
            </button>             
        </div>
    </div>   

</div>
    </div>
  )
}

export default cta2
