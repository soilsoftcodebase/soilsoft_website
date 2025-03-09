import { useState } from "react";
import React from "react";
import { cta } from "../../public/assets";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!email || !contact) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    // Create the body for the POST request
    const formData = { email, contact };

    try {
      // Make the POST request with the form data
      const response = await fetch(
        "https://sendemail-pearl.vercel.app/sendemail",
        {
          method: "POST", // The HTTP method
          headers: {
            "Content-Type": "application/json", // The content type is JSON
          },
          body: JSON.stringify(formData), // Convert the formData object to a JSON string
        }
      );

      if (response.ok) {
        // If the response is OK (status 200-299)
        alert("Request submitted successfully");
        // Reset form fields
        setEmail("");
        setContact("");
      } else {
        setErrorMessage("Failed to submit request. Please try again later.");
      }
    } catch (error) {
      // Catch any errors during the request
      setErrorMessage("Error: Unable to send request. Please try again.");
    } finally {
      // Set isLoading back to false after the request completes
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full bg-[#E9F8F3] py-24 ">
      <div className="max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 px-4">
        <div className="flex items-center justify-center bg-[#16734f] text-white p-6 rounded-lg w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded bg-white text-gray-800 border-solid border-2 border-[#7fb8a5b2] w-full mt-2"
              />
            </div>
            {/* Contact Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="p-3 rounded bg-white text-gray-800 border-solid border-2 border-[#7fb8a5b2] w-full"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="my-4 px-8 py-3 rounded-md bg-[#ffffffd5] text-[#16734f] text-lg font-bold w-full"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Contact Demo"}
              </button>
            </div>
          </form>
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
  );
};

export default CTA;
