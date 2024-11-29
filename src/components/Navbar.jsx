import React, { useState, useEffect } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // State to manage form input values
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    {
      title: 'Manaul',
      titles: 'Manual Testing',
      description: 'Detailed manual testing to ensure bug-free applications.',
    },
    {
      title: 'Autooo',
      titles: 'Automate Testing',
      description: 'Efficient and reliable automated testing processes.',
    },
    {
      title: 'Perfomance',
      titles: 'Performance Testing',
      description: 'Analyze and improve application performance under load.',
    },
    {
      title: 'Security Testing',
      titles: 'Security Testing',
      description:
        'Comprehensive testing to identify security vulnerabilities.',
    },
  ];

  // Handle ESC key to close the popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showPopup]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!email || !contact) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    const formData = { email, contact };

    try {
      const response = await fetch(
        'https://sendemail-pearl.vercel.app/sendemail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Close popup after successful form submission
        setShowPopup(false);
        alert('Request submitted successfully');
      } else {
        setErrorMessage('Failed to submit request. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Error: Unable to send request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="w-full h-40 flex py-0 justify-between items-center navbar">
      <img
        src="/src/assets/Slogo.png"
        alt="SoilSoft Technologies"
        className="w-[230px] h-max"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-black mr-10`}
          >
            {nav.title === 'Services' ? (
              <span
                onClick={() => setShowPopup(true)}
                className="cursor-pointer hover:text-secondary"
              >
                {nav.title}
              </span>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 hover:text-secondary">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-white mr-10`}
              >
                {nav.title === 'Services' ? (
                  <span
                    onClick={() => setShowPopup(true)}
                    className="cursor-pointer hover:text-secondary"
                  >
                    {nav.title}
                  </span>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Popup Screen */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-gray-600 p-6 rounded-xl max-w-full w-full max-h-full overflow-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Our Services</h2>
            {/* Video Section */}
            <div className="relative w-full pb-[56.25%] mb-8">
              <iframe
                src="https://www.youtube.com/embed/3W4nuM_WwSU?autoplay=1&mute=1&loop=1&playlist=3W4nuM_WwSU"
                title="Popup Video"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            {/* Services Section */}
            <div className="flex flex-col items-center px-6 py-10 bg-gray-800 text-white mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="flex flex-col items-center bg-gray-700 p-4 rounded-lg"
                  >
                    <img
                      src={`/src/components/${service.title}.png`} // Change path to actual service images
                      alt={service.titles}
                      className="w-48 h-48 object-cover mb-4 rounded-full"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {service.titles}
                    </h3>
                    <p className="text-gray-300 text-sm text-center">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Section */}
            <div className="flex flex-col items-center bg-gray-800 text-white p-6 mb-8 rounded-lg">
              <h2 className="text-4xl font-bold">Contact Us</h2>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Request a Demo</h2>
              {errorMessage && (
                <div className="text-red-500 mb-4">{errorMessage}</div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 text-white"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 text-white"
                />
                <button
                  type="submit"
                  className="w-[80%] sm:w-[60%] md:w-[40%] py-3 bg-blue-gradient hover:text-white font-semibold rounded"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Request Demo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
