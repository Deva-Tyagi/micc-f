import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Cpu,
    Globe,
    Code,
    Database,
    Palette,
    Smartphone,
    Shield,
    ArrowRight,
} from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div className="w-full overflow-hidden">
            <TechStack />
        </div>
    );
};

const TechStack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const technologies = [
        { name: "Web Development", icon: Globe, color: "text-blue-500", bgColor: "bg-blue-500/10" },
        { name: "Programming", icon: Code, color: "text-purple-500", bgColor: "bg-purple-500/10" },
        { name: "Database Management", icon: Database, color: "text-green-500", bgColor: "bg-green-500/10" },
        { name: "UI/UX Design", icon: Palette, color: "text-pink-500", bgColor: "bg-pink-500/10" },
        { name: "Mobile Development", icon: Smartphone, color: "text-orange-500", bgColor: "bg-orange-500/10" },
        { name: "Cybersecurity", icon: Shield, color: "text-red-500", bgColor: "bg-red-500/10" },
    ];

    return (
        <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 bg-gray-50 relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-white to-transparent"></div>
            
            {/* Background Blur Effects */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mb-3 sm:mb-4"
                    >
                        <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                            <Cpu className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                        </div>
                    </motion.div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                        Technologies You'll Master
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                        Our curriculum covers the most in-demand technologies in the industry today.
                    </p>
                </motion.div>

                {/* Technology Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                        >
                            <div className="p-5 sm:p-6 md:p-8">
                                <motion.div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${tech.bgColor} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <tech.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${tech.color}`} />
                                </motion.div>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
                                    {tech.name}
                                </h3>
                                <div className="h-1.5 sm:h-2 w-20 sm:w-24 mx-auto rounded-full bg-gradient-to-r from-gray-200 to-gray-300">
                                    <motion.div
                                        className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "100%" } : { width: 0 }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center mt-8 sm:mt-10 md:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.a
                        href="/curriculum"
                        className="px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg flex items-center gap-2 group"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="whitespace-nowrap">View Full Curriculum</span>
                        <motion.span 
                            animate={{ x: [0, 5, 0] }} 
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;