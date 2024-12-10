import React from 'react'

const RequestDemo = () => {
  return (
    <div>
      <div className="w-full bg-[#E9F8F3] py-24">
      <div className="max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 px-4">
        <div className="flex items-center justify-center bg-[#16734f] text-white p-6 rounded-lg w-full max-w-md mx-auto">
        <h1 className="py-2 text-3xl sm:text-4xl font-bold">
            <span className="text-[#038b46]">Get in Touch</span> with Us
          </h1>
          <p className="py-2 text-lg sm:text-xl text-gray-600">
            Have a project in mind or need assistance with software solutions?
            Fill out the form to get in touch with us. Our experts are ready to
            provide the support and guidance you need to bring your ideas to
            life.
          </p>
        </div>

        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="py-2 text-3xl sm:text-4xl font-bold">
            <span className="text-[#038b46]">Get in Touch</span> with Us
          </h1>
          <p className="py-2 text-lg sm:text-xl text-gray-600">
            Have a project in mind or need assistance with software solutions?
            Fill out the form to get in touch with us. Our experts are ready to
            provide the support and guidance you need to bring your ideas to
            life.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RequestDemo


















































































// import { useState } from 'react';
// import React from 'react';

// const RequestDemo = () => {
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data
//     if (!email || !contact) {
//       setErrorMessage('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);
//     setErrorMessage('');


    
//     // Create the body for the POST request
//     const formData = { email, contact };

//     try {
//       // Make the POST request with the form data
//       const response = await fetch(
//         'https://sendemail-pearl.vercel.app/sendemail',
//         {
//           method: 'POST', // The HTTP method
//           headers: {
//             'Content-Type': 'application/json', // The content type is JSON
//           },
//           body: JSON.stringify(formData), // Convert the formData object to a JSON string
//         }
//       );

//       if (response.ok) {
//         // If the response is OK (status 200-299)
//         alert('Request submitted successfully');
//         // Reset form fields
//         setEmail('');
//         setContact('');
//       } else {
//         setErrorMessage('Failed to submit request. Please try again later.');
//       }
//     } catch (error) {
//       // Catch any errors during the request
//       setErrorMessage('Error: Unable to send request. Please try again.');
//     } finally {
//       // Set isLoading back to false after the request completes
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <section className="flex flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] shadow-lg p-6">
//         {/* Heading Section */}
//         <div className="flex flex-1 justify-center items-center sm:pr-6">
//           <h2 className="text-2xl sm:text-4xl font-semibold text-[#20B486] text-center sm:text-left sm:leading-[60px] leading-[40px]">
//             Let's try our service now!
//           </h2>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-[#20B486] text-white p-6 rounded-lg mt-6 sm:mt-0 sm:w-[400px] w-full">
//           <h2 className="text-xl sm:text-2xl font-bold mb-4">Request a Demo</h2>
//           {errorMessage && (
//             <div className="text-red-500 mb-4">{errorMessage}</div>
//           )}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
//               {/* Email Input */}
//               <div className="flex-1">
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 rounded bg-gray-700 text-white"
//                 />
//               </div>

//               {/* Contact Input */}
//               <div className="flex-1 mt-4 sm:mt-0">
//                 <label className="block text-sm font-medium mb-1">
//                   Contact
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Contact"
//                   value={contact}
//                   onChange={(e) => setContact(e.target.value)}
//                   className="w-full p-3 rounded bg-gray-700 text-white"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end mt-4">
//               <button
//                 type="submit"
//                 className="sm:w-auto w-full py-2 px-6 bg-blue-gradient hover:text-white rounded"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Submitting...' : 'Request Demo'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RequestDemo;





