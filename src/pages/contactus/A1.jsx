import React from "react";

const AboutUsSection = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center">
                    {/* Left Column: "Get in Touch" Section */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Get in Touch
                        </h2>
                    </div>
                    
                    {/* Right Column: "We're here to help..." Description */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">
                            We're here to help you on your learning journey.
                        </p>
                        
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Reach out to us for any inquiries or support, and our team will respond promptly. Whether you need help with course selection or have a technical question, we're just a message away!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;