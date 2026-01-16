import React from "react";

const EnglishSpeakingCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 xs:py-8 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="photos/english.jpeg"
                        alt="English Speaking Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title */}
                <h2 className="text-5xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-gray-800 mb-6 text-center">
                    Master English Speaking
                </h2>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Improve your English communication skills with this comprehensive course. Enhance your personality, perfect your spoken English, and get ready for interviews with personalized one-on-one practice.
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
                                <span className="font-bold">Personality Development:</span> Boost your self-confidence and communication skills. Learn effective body language, tone, and posture to create a positive first impression.
                            </p>
                        </div>
                        {/* Topic 2 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">English Spoken Skills:</span> Improve fluency in spoken English. Learn how to structure sentences, use proper grammar, and expand your vocabulary to speak confidently in everyday conversations.
                            </p>
                        </div>
                        {/* Topic 3 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Interview Preparation:</span> Prepare for interviews by mastering commonly asked questions, learning the art of self-presentation, and practicing professional communication.
                            </p>
                        </div>
                        {/* Topic 4 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">One-on-One Spoken Practice:</span> Get personalized practice sessions with one-on-one feedback to improve your fluency, pronunciation, and confidence in speaking English.
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
                        <li>Develop strong communication skills and boost your confidence.</li>
                        <li>Enhance your speaking fluency for personal and professional settings.</li>
                        <li>Prepare for interviews and career advancement with mock interview sessions.</li>
                        <li>Receive one-on-one attention for faster improvement.</li>
                    </ul>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        This course is designed for anyone looking to improve their English communication skills, whether for personal growth, job interviews, or public speaking.
                    </p>
                </div>

                {/* Course Information */}
                <div className="flex justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800">
                        <strong>Duration:</strong> 6 Weeks <br />
                        {/* <strong>Price:</strong> ₹12,999 */}
                    </p>
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

export default EnglishSpeakingCourseDetail;
