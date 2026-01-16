import React from "react";

const AboutUsSection = () => {
    return (
        <section className="py-16 px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto flex flex-col items-start">
                {/* Empower Section */}
                <p className="text-xl text-gray-500 mb-2 xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm">Empower</p>

                {/* Transforming Computer Education Section */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
                    Transforming Computer Education
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-6 xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs">
                    At Mahi Institute, we redefine learning with AI-driven, practical computer knowledge for all.
                </p>

                {/* Links Section */}
                <div className="flex gap-4 xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 xs:gap-2">
                    <a
                        href="/Explore" // Replace with the desired link
                        className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 xl:py-3 xl:px-10 lg:py-3 lg:px-8 md:py-2 md:px-6 sm:py-2 sm:px-4 xs:py-2 xs:px-3"
                    >
                        Join Us
                    </a>
                    {/* <a
                        href="/join-us" // Replace with the desired link
                        className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg shadow-md hover:bg-gray-300 transition duration-200"
                    >
                        Join Us
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
