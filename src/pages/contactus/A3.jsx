import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Loader2 } from "lucide-react";

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const formRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setShowToast(true);
            setIsSubmitting(false);

            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: "",
            });

            if (formRef.current) {
                formRef.current.reset();
            }

            setTimeout(() => setShowToast(false), 4000);
        }, 2000);
    };

    const inputVariants = {
        focused: { scale: 1.02, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
        unfocused: { scale: 1, boxShadow: "none" }
    };

    return (
        <section className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-gradient-to-br from-gray-50 to-indigo-50">
            {/* Toast Notification */}
            {showToast && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
                >
                    ✓ We have received your message, we will get back to you soon!
                </motion.div>
            )}

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Column - Image and Phone */}
                    <motion.div
                        className="w-full lg:w-1/3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative overflow-hidden rounded-2xl shadow-xl mb-6"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Contact Us"
                                className="w-full h-64 sm:h-80 lg:h-auto object-cover lg:aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">We're Here For You</h3>
                                <p className="text-white/80 text-sm sm:text-base">Our support team is available 24/7</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center space-x-3 text-gray-700 bg-white p-4 rounded-xl shadow-md"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <div className="bg-indigo-100 p-3 rounded-full flex-shrink-0">
                                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 font-medium">CALL US ANYTIME</p>
                                <p className="text-lg sm:text-xl font-bold text-gray-800">+91 73106 13714</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        className="w-full lg:w-2/3"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-2">
                            Get in Touch
                        </h2>
                        <div className="h-1 w-20 bg-indigo-600 rounded mb-6"></div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8">
                            Have a question or need support? Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <motion.form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="space-y-5 sm:space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="text-gray-700 font-semibold mb-2 flex items-center text-sm sm:text-base">
                                        <User size={16} className="mr-2 text-indigo-600" />
                                        Name
                                    </label>
                                    <motion.div
                                        variants={inputVariants}
                                        animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                                    >
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => handleFocus('name')}
                                            onBlur={handleBlur}
                                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="text-gray-700 font-semibold mb-2 flex items-center text-sm sm:text-base">
                                        <Mail size={16} className="mr-2 text-indigo-600" />
                                        Email
                                    </label>
                                    <motion.div
                                        variants={inputVariants}
                                        animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                                    >
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => handleFocus('email')}
                                            onBlur={handleBlur}
                                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                {/* Mobile */}
                                <div>
                                    <label htmlFor="mobile" className="text-gray-700 font-semibold mb-2 flex items-center text-sm sm:text-base">
                                        <Phone size={16} className="mr-2 text-indigo-600" />
                                        Mobile Number
                                    </label>
                                    <motion.div
                                        variants={inputVariants}
                                        animate={focusedField === 'mobile' ? 'focused' : 'unfocused'}
                                    >
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            onFocus={() => handleFocus('mobile')}
                                            onBlur={handleBlur}
                                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Enter your mobile number"
                                            required
                                        />
                                    </motion.div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="text-gray-700 font-semibold mb-2 flex items-center text-sm sm:text-base">
                                        <MessageSquare size={16} className="mr-2 text-indigo-600" />
                                        Message
                                    </label>
                                    <motion.div
                                        variants={inputVariants}
                                        animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                                    >
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onFocus={() => handleFocus('message')}
                                            onBlur={handleBlur}
                                            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none"
                                            placeholder="Your message here"
                                            rows={4}
                                            required
                                        />
                                    </motion.div>
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 sm:py-4 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-semibold transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;