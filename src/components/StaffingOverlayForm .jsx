import React, { useState, useEffect } from "react";

const StaffingOverlayForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Form Submitted:", formData);
        setTimeout(() => {
            setFormData({ name: "", email: "", contact: "" });
            setIsOpen(false);
            setIsSubmitted(true);
            setIsLoading(false);
        }, 2000); // Simulate a network request
    };

    const openOverlay = () => setIsOpen(true);
    const closeOverlay = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeOverlay();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted]);

    return (
        <div className="relative">
            <button
                onClick={openOverlay}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Know More & Reach us
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="bg-[#e6f5f0] w-full h-full p-4 md:p-8 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4 bg-[#7fd1df] p-2 rounded-xl">
                                <h2 className="text-xl md:text-3xl text-center hover:underline flex-grow">Staffing and Consulting: Hire Smarter, Grow Faster</h2>
                                <button
                                    type="button"
                                    onClick={closeOverlay}
                                    className="px-2 py-0 text-2xl md:text-3xl hover:bg-red-700 text-black rounded-md transition"
                                >
                                    X
                                </button>
                            </div>
                            
                            <p className="text-sm md:text-xl mb-4 text-justify mt-4">
                           Finding the right talent is tough—we make it easy. 
                           Our staffing and consulting services pair you with pre-screened, 
                           technically vetted professionals who fit your company’s culture and goals.                            </p>
                            <p className="text-sm md:text-lg mb-4 text-justify font-bold">
                                Key Features:
                            </p>
                            <ul className="list-disc list-inside text-sm md:text-lg mb-4 text-justify">
                                <li className="mb-2">Technical screening by industry experts</li>
                                <li className="mb-2">Customized recruitment strategies</li>
                                <li className="mb-2">Access to a diverse talent pool</li>
                                <li className="mb-2">Ongoing consulting for team optimization</li>
                            </ul>

                            <p className="text-sm md:text-lg mb-4 text-justify font-bold">
                                Benefits:
                            </p>
                            <ul className="list-disc list-inside text-sm md:text-lg mb-4 text-justify">
                                <li className="mb-2">Save time with pre-vetted candidates</li>
                                <li className="mb-2">Build teams that drive innovation</li>
                                <li className="mb-2">Scale your workforce with confidence</li>
                            </ul>

                            <p className="text-sm md:text-lg mb-4 text-justify">
                                Need top talent? Let’s connect and start hiring today!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-10 mt-10"> 
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm mb-1">Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 py-2 border-[#47445b]"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1">Email <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 py-2 border-[#47445b]"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1">Contact No <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 py-2 border-[#47445b]"
                                            placeholder="Enter your contact number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mt-4">
                                    <button
                                        type="submit"
                                        className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                    >
                                        Send Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {isSubmitted && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#edd693] rounded-lg shadow-lg w-auto p-8 mx-4">
                        <h2 className="text-2xl text-center mb-4">Your request is submitted.</h2>
                        <h2 className="text-2xl text-center mb-4">Our team will reach you soon.</h2>
                        <h2 className="text-2xl text-center">Thank You ❤️.</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffingOverlayForm;