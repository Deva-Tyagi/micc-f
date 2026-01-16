import React from "react";

const DigitalMarketingCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 xs:py-8 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="photos/digital.jpege"
                        alt="Digital Marketing Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title */}
                <h2 className="text-5xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-gray-800 mb-6 text-center">
                    Digital Marketing Masterclass
                </h2>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Master the art of digital marketing with hands-on training in SEO, Social Media Marketing, and developing
                    effective Marketing Strategies. This course is perfect for aspiring marketers and business owners looking to grow online.
                </p>

                {/* Course Topics */}
                <div className="mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <h3 className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-semibold text-gray-800 mb-6 text-center">
                        What You Will Learn:
                    </h3>
                    <div className="space-y-4">
                        {/* SEO Optimization */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">SEO Optimization:</span> Understand search engine algorithms and ranking factors, keyword research, on-page SEO, and link building. Track performance with Google Analytics and Search Console.
                            </p>
                        </div>

                        {/* Social Media Marketing */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Social Media Marketing:</span> Create impactful campaigns on platforms like Facebook, Instagram, and LinkedIn. Engage audiences through content marketing. Analyze campaign performance and optimize ROI.
                            </p>
                        </div>

                        {/* Marketing Strategies */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Marketing Strategies:</span> Develop tailored strategies for various business goals. Learn email marketing, funnels, and retargeting techniques. Understand customer behavior to drive engagement and conversions.
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
                        <li>Become proficient in essential digital marketing tools and techniques.</li>
                        <li>Gain the ability to create and implement marketing strategies for real-world businesses.</li>
                        <li>Prepare for high-demand digital marketing roles.</li>
                        <li>Ideal for entrepreneurs, professionals, and students.</li>
                    </ul>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        This course is designed to equip you with the skills to thrive in the digital space. Whether you're growing your business or pursuing a career in marketing, this course is your gateway to success.
                    </p>
                </div>

                {/* Course Information */}
                <div className="flex justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800">
                        Duration: <span className="text-gray-600">6 Weeks</span>
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

export default DigitalMarketingCourseDetail;
