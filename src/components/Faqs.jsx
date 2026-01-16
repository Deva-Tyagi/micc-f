import React, { useState } from "react";

const FAQsSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What courses are offered?",
            answer:
                "We offer a range of courses focused on computer skills, from basic to advanced levels. Our curriculum is designed to be practical and applicable, ensuring that students gain real-world experience. Explore our course catalog for more details.",
        },
        {
            question: "How long are the courses?",
            answer:
                "The duration of our courses varies depending on the program. Most of our courses range from 6 to 12 weeks, with flexible schedules to accommodate students' availability.",
        },
        {
            question: "Do you offer certification upon course completion?",
            answer:
                "Yes! Upon successful completion of any of our courses, students receive a certificate that can be shared with potential employers or added to their professional portfolio.",
        },
        {
            question: "Can I take courses online?",
            answer:
                "Yes, we offer both in-person and online courses, ensuring flexibility for our students to learn at their own pace from anywhere in the world.",
        },
        {
            question: "Are there any prerequisites for the courses?",
            answer:
                "Each course has its own prerequisites. Some require basic knowledge of computer fundamentals, while others are suitable for beginners. You can find more detailed information on prerequisites for each course in the course descriptions.",
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-8 bg-gray-50">
            {/* FAQ Section */}
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold text-gray-800 mb-8">FAQs</h2>
                <p className="text-xl lg:text-xl md:text-lg sm:text-base xs:text-sm text-gray-600 mb-12">
                    Get answers to the most commonly asked questions about our courses and programs.
                </p>

                {/* FAQ Accordion */}
                <div className="space-y-6">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-base font-semibold text-gray-800">{faq.question}</h3>
                                <span className="text-2xl lg:text-2xl md:text-xl sm:text-lg xs:text-base text-gray-500">{activeIndex === index ? "-" : "+"}</span>
                            </div>
                            {activeIndex === index && (
                                <p className="text-lg lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-600 mt-4 text-left">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Still Have a Question Section */}
            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-bold text-gray-800 mb-4">Still Have a Question?</h2>
                <p className="text-lg lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-600 mb-6">
                    Can't find the answer you're looking for? Feel free to reach out to us. We're here to help and guide
                    you in the best possible way.
                </p>
                <a
                    href="mailto:miccflyhigh@gmail.com"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transform transition-all inline-block"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default FAQsSection;
