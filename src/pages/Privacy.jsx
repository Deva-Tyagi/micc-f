import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="py-12 px-6 sm:py-10 sm:px-4 xs:py-8 xs:px-3 flex justify-center bg-gray-100">
            <div className="bg-white p-8 sm:p-6 xs:p-4 rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg font-bold text-gray-800 mb-6 text-center">
                    Privacy Policy
                </h1>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-4">
                    {/* <strong>Effective Date:</strong> [Insert Date] */}
                    <br />
                    <strong>Last Updated:</strong> 12 January 2025
                </p>

                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    Welcome to the Mahi Institute Computer Center (MICC) website. Protecting your
                    privacy is of utmost importance to us. This Privacy Policy explains how we
                    collect, use, and safeguard your personal information.
                </p>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    1. Information We Collect
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    We may collect the following types of information when you use our website:
                </p>
                <ul className="pl-6 list-disc text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    <li>Personal information you provide when registering, such as your name, email address, and contact details.</li>
                    <li>Technical information such as your IP address, browser type, and device details.</li>
                    <li>Usage data including pages visited, time spent on the website, and interactions.</li>
                </ul>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    2. How We Use Your Information
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    We use the information collected to:
                </p>
                <ul className="pl-6 list-disc text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    <li>Provide and improve our services.</li>
                    <li>Send you updates, newsletters, or promotional content.</li>
                    <li>Respond to inquiries and provide customer support.</li>
                    <li>Analyze website usage to enhance user experience.</li>
                </ul>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    3. Sharing Your Information
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    We do not sell or rent your personal information to third parties. However, we
                    may share your data with:
                </p>
                <ul className="pl-6 list-disc text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    <li>Service providers assisting in website operations.</li>
                    <li>Legal authorities if required by law.</li>
                    <li>Partners or affiliates for legitimate business purposes.</li>
                </ul>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    4. Data Security
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    We implement appropriate technical and organizational measures to safeguard your
                    personal data. However, no system can be completely secure, and we cannot
                    guarantee absolute security of your information.
                </p>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    5. Cookies and Tracking
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    Our website uses cookies to enhance user experience and gather analytical data.
                    You can control cookies through your browser settings.
                </p>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    6. Children's Privacy
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    MICC does not knowingly collect personal information from children under 13. If
                    we become aware of such data collection, we will delete it immediately.
                </p>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    7. Changes to This Policy
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    We may update this Privacy Policy periodically. Any changes will be posted on
                    this page with the “Last Updated” date revised. Your continued use of our
                    website constitutes acceptance of the updated policy.
                </p>

                <h2 className="text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-semibold text-gray-800 mb-4">
                    8. Contact Us
                </h2>
                <p className="text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy, contact us at:
                </p>
                <ul className="pl-6 text-lg lg:text-base md:text-sm sm:text-xs xs:text-[11px] text-gray-700">
                    <li>
                        <strong>Email:</strong> miccflyhigh@gmail.com
                    </li>
                  
                </ul>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
