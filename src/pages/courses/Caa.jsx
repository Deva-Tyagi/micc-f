import React from "react";
import { FaCheckCircle } from 'react-icons/fa';  // Importing an icon library

const CourseDetail = () => {
    return (
        <section className="py-16 px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12">
                    <img
                        src="/photos/caa.jpeg"
                        alt="CAA Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title and Duration & Enroll Now Button (Top Section) */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-3xl font-extrabold text-gray-800 mb-6">
                        Certification in Computer Applications (CCA)
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 mb-4">
                        <span className="font-semibold">Duration:</span> 6 Weeks
                    </p>
                    {/* <a
                        href="#enroll"
                        className="px-6 sm:px-8 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
                    >
                        Enroll Now
                    </a> */}
                </div>

                {/* Course Introduction */}
                <p className="text-lg sm:text-xl text-gray-600 mb-12 text-center leading-relaxed">
                    Master the essential skills for modern workplaces with a focus on computer applications,
                    programming, design, and more. This program is your stepping stone to a tech-savvy future.
                </p>

                {/* What You Will Learn Section */}
                <div className="mb-16">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">What You Will Learn:</h3>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <ul className="list-inside list-disc text-gray-600 space-y-4">
                            {/* Each list item now includes an icon and adjusted font size for better readability */}
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Computer Fundamentals: Understand how computers work, explore hardware components, and learn about software applications.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>MS Word: Create professional documents with formatting, tables, templates, and advanced features.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>MS Excel: Analyze data with formulas, charts, pivot tables, and advanced Excel tools.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>MS PowerPoint: Design captivating presentations with multimedia, animations, and professional templates.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>English Typing: Improve typing speed and accuracy, aiming for 35+ WPM, with guided exercises.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Hindi Typing: Build confidence in Hindi typing with a focus on achieving 25+ WPM.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Corel Draw: Dive into graphic design, creating stunning visuals and layouts using Corel Draw tools.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Photoshop: Learn to edit, enhance, and create professional-quality images with Adobe Photoshop.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>HTML: Get started with web development, mastering the structure and basics of web pages.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>C Programming: Build a strong foundation in programming concepts with hands-on coding in C.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Python: Explore Python programming, from basics to applications in data analysis and software.</span>
                            </li>
                            <li className="flex items-start text-base sm:text-lg font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>CTP (Computer Technology Program): Delve into the essentials of computer hardware, networking, and technology.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16">
                    <p className="text-lg sm:text-xl text-gray-600">
                        This comprehensive course is ideal for students, professionals, and beginners looking to build expertise in computer applications, programming, and graphic design.
                    </p>
                </div>

                {/* Course Information (Duration Repeated) */}
                <div className="flex justify-between items-center mb-12">
                    <p className="text-lg sm:text-xl font-medium text-gray-800">Duration: <span className="text-gray-600">6 Weeks</span></p>
                </div>

                {/* Enroll Button (Bottom Section) */}
                <div className="text-center mb-12">
                    {/* <a
                        href="#enroll"
                        className="px-6 sm:px-8 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
                    >
                        Enroll Now
                    </a> */}
                </div>

            </div>
        </section>
    );
};

export default CourseDetail;
