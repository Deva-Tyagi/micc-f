import React from "react";

const MSOfficeCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 xs:py-8 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="/photos/4.png"
                        alt="MS Office Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title */}
                <h2 className="text-4xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold text-gray-800 mb-6 text-center">
                    Master MS Office Suite
                </h2>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Become proficient in Microsoft Office applications that are essential for professional and personal tasks.
                    Learn MS Word, Excel, and PowerPoint to improve productivity and efficiency.
                </p>

                {/* Course Topics */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md font-semibold text-gray-800 mb-6 text-center">
                        What You Will Learn:
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">MS Word:</span> Learn to create, edit, and format professional documents, use templates, manage tables, and utilize advanced features like mail merge and macros.
                            </p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">MS PowerPoint:</span> Master the art of creating impactful presentations, design slides, add animations, transitions, and learn tips for professional delivery.
                            </p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">MS Excel:</span> Get hands-on with spreadsheets, formulas, charts, pivot tables, and data analysis tools to manage and analyze data effectively.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md font-semibold text-gray-800 mb-6 text-center">
                        Why This Course?
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-4 text-base xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs">
                        <li>Gain essential office productivity skills for any career.</li>
                        <li>Learn practical techniques for real-world tasks.</li>
                        <li>Enhance your resume with proficiency in MS Office.</li>
                        <li>Suitable for beginners and intermediate learners.</li>
                    </ul>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        This course is ideal for students, professionals, and anyone looking to enhance their knowledge of MS Office applications. Achieve proficiency with expert guidance.
                    </p>
                </div>

                {/* Course Information */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800 mb-4 sm:mb-0">
                        Duration: <span className="text-gray-600">6 Weeks</span>
                    </p>
                    {/* <p className="text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md font-bold text-blue-600">
                        $129
                    </p> */}
                </div>

                {/* Enroll Button */}
                <div className="text-center">
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

export default MSOfficeCourseDetail;
