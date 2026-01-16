import React from "react";

const WebDevelopmentCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 xs:py-8 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="/photos/web.jpeg"
                        alt="Web Development Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title */}
                <h2 className="text-5xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-gray-800 mb-6 text-center">
                    Web Development Mastery
                </h2>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Become a professional web developer by mastering HTML, CSS, JavaScript, and web hosting. Build advanced-level projects and gain industry-relevant skills to kickstart your career.
                </p>

                {/* Course Topics */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-semibold text-gray-800 mb-6 text-center">
                        What You Will Learn:
                    </h3>
                    <div className="space-y-4">
                        {/* Topic 1 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">HTML:</span> Structure web pages using semantic HTML5, create forms, tables, multimedia elements, and build responsive layouts with Bootstrap.
                            </p>
                        </div>

                        {/* Topic 2 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">CSS:</span> Design stunning layouts with CSS3, master Flexbox and Grid for responsive design, and apply animations and transitions.
                            </p>
                        </div>

                        {/* Topic 3 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">JavaScript:</span> Understand core JavaScript concepts, manipulate the DOM, create interactive web pages, and work with ES6+ features and APIs.
                            </p>
                        </div>

                        {/* Topic 4 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Web Hosting and Domain Management:</span> Register and manage domains, deploy websites using hosting platforms, and optimize websites for performance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Advanced Project Section */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-semibold text-gray-800 mb-6 text-center">
                        Advanced-Level Project
                    </h3>
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        Apply your skills to build a fully functional web application from scratch. This project will include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li>Responsive UI design</li>
                        <li>Interactive features using JavaScript</li>
                        <li>Hosting and domain deployment</li>
                        <li>SEO optimization and performance testing</li>
                    </ul>
                </div>

                {/* Benefits Section */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-semibold text-gray-800 mb-6 text-center">
                        Why This Course?
                    </h3>
                    <ul className="list-disc list-inside text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        <li>Learn from scratch with no prior coding experience required.</li>
                        <li>Develop skills in the most in-demand web technologies.</li>
                        <li>Hands-on practice with industry-level projects.</li>
                        <li>Comprehensive coverage of frontend and deployment skills.</li>
                    </ul>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        Ideal for aspiring web developers, professionals seeking upskilling, and entrepreneurs aiming to create their own web presence.
                    </p>
                </div>

                {/* Course Information */}
                <div className="flex justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800">
                        Duration: <span className="text-gray-600">12 Weeks</span>
                    </p>
                    {/* <p className="text-2xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-md font-bold text-blue-600">$249</p> */}
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

export default WebDevelopmentCourseDetail;
