import { useState } from 'react';
import React from 'react';

const ReqeustDemo2 = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!email || !contact) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');



    
    // Create the body for the POST request
    const formData = { email, contact };

    try {
      // Make the POST request with the form data to save it in Excel
      const response = await fetch(
        process.env.REACT_APP_API_URL ||
          'http://localhost:5001/saveDataToExcel',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage('Request submitted successfully!');
        setEmail('');
        setContact('');
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message ||
            'Failed to submit request. Please try again later.'
        );
      }
    } catch (error) {
      setErrorMessage('Error: Unable to send request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative top-[-350px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Header Section */}
      <div className="flex flex-col text-center sm:text-left justify-center items-center">
        <h1 className="py-3 text-2xl sm:text-3xl md:text-4xl font-bold sm:leading-[50px] md:leading-[60px] leading-[40px]">
          Let's Try Our <span className="text-[#038b46]">Service Now!</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[800px] px-2 sm:px-4 md:px-0 text-center">
          All the tools you need to harness technology, streamline operations,
          and scale your business seamlessly anytime, anywhere.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center mt-2">
        <section className="flex justify-center sm:flex-row sm:p-8 md:p-10 w-full max-w-[1200px]">
            
        <button
  type="submit"
  className="w-64 sm:w-72 px-4 sm:px-6 py-4 rounded-xl bg-[#038b46] text-[#16734f] text-sm sm:text-base md:text-lg font-bold hover:bg-[#7fb8a5b2] hover:text-white transition"
  disabled={isLoading}
  onClick={togglePopup}
>
  Request Demo
</button>
          {/* Popup */}
          {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
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

      
        </section>
      </div>

      {/* Success and Error Messages */}
      {/* <div className="text-center mt-4">
        {errorMessage && (
          <p className="text-red-500 text-sm sm:text-base">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm sm:text-base">
            {successMessage}
          </p>
        )}
      </div> */}
    </div>
  );
};

export default ReqeustDemo2;
