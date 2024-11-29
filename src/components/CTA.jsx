import React, { useState } from 'react'; // Importing useState
import styles from '../style';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!email || !contact) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    // Create the body for the POST request
    const formData = { email, contact };

    try {
      // Make the POST request with the form data
      const response = await fetch(
        'https://sendemail-pearl.vercel.app/sendemail',
        {
          method: 'POST', // The HTTP method
          headers: {
            'Content-Type': 'application/json', // The content type is JSON
          },
          body: JSON.stringify(formData), // Convert the formData object to a JSON string
        }
      );

      if (response.ok) {
        // If the response is OK (status 200-299)
        alert('Request submitted successfully');
        // Reset form fields
        setEmail('');
        setContact('');
      } else {
        setErrorMessage('Failed to submit request. Please try again later.');
      }
    } catch (error) {
      // Catch any errors during the request
      setErrorMessage('Error: Unable to send request. Please try again.');
    } finally {
      // Set isLoading back to false after the request completes
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex justify-center items-center flex-col">
        <h2 className="text-2xl sm:text-4xl font-poppins font-semibold text-white sm:leading-[60px] leading-[40px] ">
          Let's try our service now!
        </h2>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-base`}
>
          All the tools you need to harness technology, streamline operations,
          and scale your business seamlessly anytime, anywhere.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900 text-white p-6 rounded-lg mt-6 sm:mt-0 w-full sm:w-[400px] font-poppins">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Request a Demo</h2>
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white font-poppins"
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
            className="w-full sm:w-[40%] py-2 bg-blue-gradient hover:text-white rounded"
            disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Request Demo'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
