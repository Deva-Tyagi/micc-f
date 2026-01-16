import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TypingCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="/photos/typing.jpeg"
                        alt="Typing Skills Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title and Top Information */}
                <div className="text-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <h2 className="text-4xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold text-gray-800 mb-6">
                        Master Typing Skills
                    </h2>
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-4">
                        <span className="font-semibold">Duration:</span> 4 Weeks
                    </p>
                    {/* <a
                        href="#enroll"
                        className="px-6 xl:px-8 lg:px-7 md:px-6 sm:px-5 xs:px-4 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
                    >
                        Enroll Now
                    </a> */}
                </div>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Unlock your typing potential with this comprehensive course. Learn to type faster and more accurately in both English and Hindi, meeting professional standards and boosting your career opportunities.
                </p>

                {/* What You Will Learn Section */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md font-semibold text-gray-800 mb-6 text-center">
                        What You Will Learn:
                    </h3>
                    <div className="bg-white p-6 xl:p-8 lg:p-7 md:p-6 sm:p-5 xs:p-4 rounded-lg shadow-md">
                        <ul className="list-inside list-disc text-gray-600 space-y-4">
                            <li className="flex items-start text-base xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>English Typing: Achieve 35+ WPM with guided exercises, error reduction techniques, and professional formatting tips.</span>
                            </li>
                            <li className="flex items-start text-base xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Hindi Typing: Build fluency and speed, aiming for 25+ WPM using popular keyboard layouts.</span>
                            </li>
                            <li className="flex items-start text-base xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Typing Accuracy: Enhance accuracy and reduce errors with advanced typing exercises and tips.</span>
                            </li>
                            <li className="flex items-start text-base xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs font-medium text-gray-700">
                                <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                <span>Shortcut Mastery: Learn keyboard shortcuts to improve efficiency for office and daily tasks.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        This course is perfect for students, job seekers, and professionals aiming to improve typing skills for personal or professional growth.
                    </p>
                </div>

                {/* Course Information (Duration Repeated) */}
                <div className="flex justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800">
                        Duration: <span className="text-gray-600">4 Weeks</span>
                    </p>
                </div>

                {/* Enroll Button (Bottom Section) */}
                <div className="text-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    {/* <a
                        href="#enroll"
                        className="px-6 xl:px-8 lg:px-7 md:px-6 sm:px-5 xs:px-4 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
                    >
                        Enroll Now
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default TypingCourseDetail;
