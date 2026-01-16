import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Calendar,
    MessageSquare
} from "lucide-react";

const ContactInfoSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
    const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            if (Math.random() > 0.2) {
                setFormStatus("success");
            } else {
                setFormStatus("error");
            }
        }, 1000);
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setFormStatus(null);
    };

    const contactItems = [
        {
            icon: Mail,
            title: "Email",
            description: "For any questions, feel free to reach out to us.",
            info: "contact@mahiinstitute.com",
            delay: 0,
            color: "from-blue-500 to-purple-500",
        },
        {
            icon: Phone,
            title: "Phone",
            description: "You can reach us by phone during office hours.",
            info: "+123 456 7890",
            delay: 0.2,
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: MapPin,
            title: "Office Address",
            description: "Visit us at our physical location for in-person support.",
            info: "1234 Learning St., Education City, Country",
            delay: 0.4,
            color: "from-orange-500 to-red-500",
        },
    ];

    const infoItems = [
        {
            icon: Clock,
            title: "Working Hours",
            description:
                "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Calendar,
            title: "Appointment",
            description:
                "Schedule a meeting with our advisors to discuss your educational journey.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: MessageSquare,
            title: "Live Chat",
            description:
                "Chat with our support team for immediate assistance during business hours.",
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-10 lg:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Contact Us
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">
                        Get in touch with us for any inquiries, support, or feedback.
                    </p>
                </motion.div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
                    {contactItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className={`p-3 sm:p-4 bg-gradient-to-r ${item.color} rounded-full text-white mb-4 sm:mb-6`}
                                >
                                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                    {item.description}
                                </p>
                                <p className="text-base sm:text-lg font-semibold text-blue-600 break-words">
                                    {item.info}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
                    {infoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div
                                    className={`p-2.5 sm:p-3 bg-gradient-to-r ${item.color} rounded-full text-white shrink-0`}
                                >
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 whitespace-pre-line">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 sm:mt-14 lg:mt-16 rounded-xl overflow-hidden shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.69714941118293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1619427748465!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        className="sm:h-96 lg:h-[400px]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Location Map"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfoSection;