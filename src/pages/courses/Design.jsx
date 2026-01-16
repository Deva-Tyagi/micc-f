import React from "react";

const DesigningEditingCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 xs:py-8 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="/photos/6.png"
                        alt="Designing and Editing Course"
                        className="w-80vh h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 items-center rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title */}
                <h2 className="text-5xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-gray-800 mb-6 text-center">
                    Designing and Editing Mastery
                </h2>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Master the art of designing and editing with hands-on training in industry-standard tools like CorelDRAW
                    and Photoshop. Learn 50+ advanced tricks to create stunning visuals and professional-grade designs.
                </p>

                {/* Course Topics */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-semibold text-gray-800 mb-6 text-center">
                        What You Will Learn:
                    </h3>
                    <div className="space-y-4">
                        {/* CorelDRAW */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">CorelDRAW:</span> Create professional vector graphics and illustrations, learn advanced layout techniques for print and digital media, design logos, brochures, and marketing materials.
                            </p>
                        </div>

                        {/* Photoshop */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Photoshop:</span> Edit and enhance photos with precision, learn retouching, compositing, and advanced effects, create web designs and UI/UX mockups.
                            </p>
                        </div>

                        {/* 50+ Tricks */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">50+ Design and Editing Tricks:</span> Master time-saving shortcuts for designing and editing, learn advanced color correction and blending techniques, optimize designs for print and web platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-semibold text-gray-800 mb-6 text-center">
                        Why This Course?
                    </h3>
                    <ul className="list-disc list-inside text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        <li>Gain professional expertise in CorelDRAW and Photoshop.</li>
                        <li>Learn industry-relevant tricks to enhance productivity.</li>
                        <li>Build an impressive portfolio with real-world projects.</li>
                        <li>Perfect for aspiring graphic designers and creative professionals.</li>
                    </ul>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        This course is tailored for creative enthusiasts, students, and professionals who want to excel in graphic designing and editing. Achieve mastery in design tools and techniques.
                    </p>
                </div>

                {/* Course Information */}
                <div className="flex justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800">
                        Duration: <span className="text-gray-600">8 Weeks</span>
                    </p>
                    {/* <p className="text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md font-bold text-blue-600">$199</p> */}
                </div>

                {/* Enroll Button */}
                <div className="text-center">
                    {/* <a
                        href="#enroll"
                        className="px-8 py-3 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
                    >
                        Enroll Now
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default DesigningEditingCourseDetail;
