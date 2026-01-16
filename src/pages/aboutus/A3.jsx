import React, { useRef } from "react";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Users, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

const TeamSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Custom slider arrow
    const SliderArrow = ({ direction, onClick }) => (
        <button
            onClick={onClick}
            className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-2' : 'right-2'
                } bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300`}
        >
            {direction === 'left' ? (
                <ChevronLeft className="w-5 h-5 text-gray-800" />
            ) : (
                <ChevronRight className="w-5 h-5 text-gray-800" />
            )}
        </button>
    );

    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
            bio: "John has over 20 years of experience in managing innovative teams...",
            socialLinks: { linkedin: "#", twitter: "#" },
        },
        {
            name: "Jane Smith",
            role: "Lead Instructor",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
            bio: "Jane specializes in creating AI-driven curriculum strategies...",
            socialLinks: { linkedin: "#", twitter: "#" },
        },
        {
            name: "Michael Brown",
            role: "AI Specialist",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            bio: "Michael is an expert in machine learning and data analysis...",
            socialLinks: { linkedin: "#", twitter: "#" },
        },
        {
            name: "Emily Johnson",
            role: "Course Coordinator",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
            bio: "Emily ensures smooth operations and excellent course delivery...",
            socialLinks: { linkedin: "#", twitter: "#" },
        },
        {
            name: "Chris Lee",
            role: "Developer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
            bio: "Chris develops cutting-edge tools to enhance online learning...",
            socialLinks: { linkedin: "#", twitter: "#" },
        },
        {
            name: "Sara Wilson",
            role: "Designer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            bio: "Sara designs intuitive user interfaces for engaging experiences...",
            socialLinks: { linkedin: "#", twitter: "#" },
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <SliderArrow direction="left" />,
        nextArrow: <SliderArrow direction="right" />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
        customPaging: () => (
            <div className="w-3 h-3 bg-gray-300 rounded-full mt-8 hover:bg-blue-500 transition-colors duration-300"></div>
        ),
    };

    return (
        <section ref={sectionRef} className="py-20 px-8 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A group of passionate professionals dedicated to empowering education and innovation...
                    </p>
                </motion.div>

                {/* Team Slider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Slider {...sliderSettings}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="px-4">
                                <motion.div
                                    className="relative group"
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                                            <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                            <div className="flex gap-3">
                                                <a href={member.socialLinks.linkedin} className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition">
                                                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037..." /></svg>
                                                </a>
                                                <a href={member.socialLinks.twitter} className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition">
                                                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775..." /></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>

                {/* Open Positions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-6xl mx-auto text-center mt-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Briefcase className="w-8 h-8 text-blue-600" />
                        <h2 className="text-4xl font-bold text-gray-800">Open Positions</h2>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join our team and help us transform computer education with AI-driven insights...
                    </p>
                    <motion.a
                        href="mailto:miccflyhigh@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg hover:shadow-blue-300/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Apply Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
