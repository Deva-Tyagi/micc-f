import React from "react";

const VideoEditingCourseDetail = () => {
    return (
        <section className="py-16 xl:py-20 lg:py-16 md:py-12 sm:py-10 xs:py-8 px-8 xl:px-16 lg:px-12 md:px-8 sm:px-6 xs:px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Course Banner Image */}
                <div className="mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <img
                        src="/photos/5.png"
                        alt="Video Editing Course"
                        className="w-full h-72 xl:h-96 lg:h-80 md:h-72 sm:h-64 xs:h-56 rounded-lg shadow-lg"
                    />
                </div>

                {/* Course Title */}
                <h2 className="text-5xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold text-gray-800 mb-6 text-center">
                    Master Video Editing
                </h2>

                {/* Course Introduction */}
                <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600 mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8 text-center leading-relaxed">
                    Learn the art of video editing with advanced tools like Premiere Pro, Wondershare Filmora, and gain expertise in sound design, graphics, and VFX to create professional-quality videos.
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
                                <span className="font-bold">Advanced Premiere Pro Techniques:</span> Dive deep into Adobe Premiere Pro and learn advanced editing techniques, including multi-camera editing, motion graphics, and color grading.
                            </p>
                        </div>
                        {/* Topic 2 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Wondershare Filmora Mastery:</span> Master Wondershare Filmora, an intuitive video editor. Learn how to use its rich features like transitions, filters, and speed adjustments for effective storytelling.
                            </p>
                        </div>
                        {/* Topic 3 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Sound Design for Video:</span> Understand the fundamentals of sound design and how to incorporate sound effects, music, and voice-overs to enhance your video production.
                            </p>
                        </div>
                        {/* Topic 4 */}
                        <div className="flex items-start space-x-4">
                            <span className="text-green-600 text-xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">&#10003;</span>
                            <p className="text-gray-600 text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs leading-relaxed">
                                <span className="font-bold">Graphics & VFX:</span> Learn how to create stunning visuals using graphics and VFX techniques, from motion graphics to 3D rendering, to elevate your video content.
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
                        <li>Master industry-standard video editing tools like Premiere Pro and Filmora.</li>
                        <li>Learn advanced techniques for video production, sound, and visual effects.</li>
                        <li>Improve your skills in graphics and VFX to create professional videos.</li>
                        <li>Perfect for video editors, filmmakers, and content creators aiming for high-quality production.</li>
                    </ul>
                </div>

                {/* Course Summary */}
                <div className="text-center mb-16 xl:mb-20 lg:mb-18 md:mb-16 sm:mb-14 xs:mb-12">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-gray-600">
                        This course is designed for both beginners and professionals who want to sharpen their video editing skills and create visually stunning content with sound design and VFX expertise.
                    </p>
                </div>

                {/* Course Information */}
                <div className="flex justify-between items-center mb-12 xl:mb-16 lg:mb-14 md:mb-12 sm:mb-10 xs:mb-8">
                    <p className="text-lg xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs font-medium text-gray-800">
                        <strong>Duration:</strong> 8 Weeks <br />
                        {/* <strong>Price:</strong> ₹15,999 */}
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

export default VideoEditingCourseDetail;
