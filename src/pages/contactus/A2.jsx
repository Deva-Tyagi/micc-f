import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactInfoSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl"
            >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column */}
                    <motion.div
                        className="w-full lg:w-1/2 text-white"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
                            Let's Connect
                        </h2>
                        <div className="h-1 w-20 bg-yellow-400 rounded mb-6"></div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 lg:mb-0">
                            We're here to help you on your learning journey. Our team of experts is ready to provide guidance and support whenever you need it.
                        </p>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-6">
                            Contact Information
                        </h3>

                        <motion.div
                            className="bg-white/90 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg backdrop-blur-sm"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="space-y-6">
                                {/* Email */}
                                <motion.div
                                    className="flex items-start text-sm sm:text-base text-gray-700"
                                    variants={itemVariants}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="bg-indigo-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <Mail className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.div>
                                    <div className="min-w-0">
                                        <p className="font-semibold uppercase text-xs sm:text-sm text-indigo-600">
                                            Email
                                        </p>
                                        <p className="text-gray-800 font-medium break-words">miccflyhigh@gmail.com</p>
                                        <motion.a
                                            href="mailto:miccflyhigh@gmail.com"
                                            className="text-xs sm:text-sm text-indigo-500 hover:text-indigo-700 inline-flex items-center mt-1"
                                            whileHover={{ x: 5 }}
                                        >
                                            Write to us <ExternalLink size={14} className="ml-1" />
                                        </motion.a>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="flex items-start text-sm sm:text-base text-gray-700"
                                    variants={itemVariants}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="bg-indigo-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <Phone className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.div>
                                    <div className="min-w-0">
                                        <p className="font-semibold uppercase text-xs sm:text-sm text-indigo-600">
                                            Phone
                                        </p>
                                        <p className="text-gray-800 font-medium">+91 73106 13714</p>
                                        <motion.a
                                            href="tel:+9173106 13714"
                                            className="text-xs sm:text-sm text-indigo-500 hover:text-indigo-700 inline-flex items-center mt-1"
                                            whileHover={{ x: 5 }}
                                        >
                                            Call us <ExternalLink size={14} className="ml-1" />
                                        </motion.a>
                                    </div>
                                </motion.div>

                                {/* Address */}
                                <motion.div
                                    className="flex items-start text-sm sm:text-base text-gray-700"
                                    variants={itemVariants}
                                    whileHover="hover"
                                >
                                    <motion.div
                                        className="bg-indigo-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <MapPin className="text-indigo-600 w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.div>
                                    <div className="min-w-0">
                                        <p className="font-semibold uppercase text-xs sm:text-sm text-indigo-600">
                                            Address
                                        </p>
                                        <p className="text-gray-800 font-medium break-words">
                                            SBI Bank, First Floor, New, Adarsh Nagar, Roorkee, Uttarakhand 247667
                                        </p>
                                        <motion.a
                                            href="https://maps.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm text-indigo-500 hover:text-indigo-700 inline-flex items-center mt-1"
                                            whileHover={{ x: 5 }}
                                        >
                                            View on map <ExternalLink size={14} className="ml-1" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactInfoSection;