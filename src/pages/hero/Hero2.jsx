import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    BookOpen,
    Rocket,
    Users,
    LaptopIcon,
    Award,
    HandHelping,
    Sparkles,
    Code,
    Brain,
    Database,
    Globe,
    Cpu,
    Smartphone,
    Shield,
    FileText,
} from "lucide-react";

const WhyChooseUs = () => {
    return (
        <div className="w-full overflow-hidden">
            <FloatingIcons />
            <FeatureShowcase />
        </div>
    );
};

const FloatingIcons = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const icons = [
        { Icon: Code, color: "text-blue-500", delay: 0 },
        { Icon: Brain, color: "text-purple-500", delay: 0.1 },
        { Icon: Database, color: "text-green-500", delay: 0.2 },
        { Icon: Globe, color: "text-orange-500", delay: 0.3 },
        { Icon: Cpu, color: "text-pink-500", delay: 0.4 },
        { Icon: Smartphone, color: "text-yellow-500", delay: 0.5 },
        { Icon: Shield, color: "text-teal-500", delay: 0.6 },
        { Icon: FileText, color: "text-red-500", delay: 0.7 },
    ];

    return (
        <section ref={ref} className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">
                        Cutting-Edge Technologies
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
                        Our curriculum covers the most in-demand skills and technologies in the industry
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    {icons.map(({ Icon, color, delay }, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: delay }}
                        >
                            <motion.div
                                className={`p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${color}`}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                                    rotate: [0, -5, 5, 0],
                                    transition: { rotate: { duration: 0.5 } },
                                }}
                                animate={isInView ? { y: [0, -10, 0] } : {}}
                                transition={{
                                    y: {
                                        repeat: Infinity,
                                        duration: 3,
                                        delay: index * 0.2,
                                        repeatType: "reverse",
                                    },
                                }}
                            >
                                <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Background blur effects */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        </section>
    );
};

const FeatureShowcase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const features = [
        {
            icon: BookOpen,
            title: "Comprehensive Curriculum",
            description: "Our courses cover everything from fundamentals to advanced concepts, ensuring a well-rounded education.",
            color: "from-blue-500 to-cyan-400",
            accent: "border-blue-500/20",
        },
        {
            icon: Rocket,
            title: "Fast-Track Learning",
            description: "Accelerate your career with our streamlined courses designed to get you job-ready in record time.",
            color: "from-purple-500 to-pink-400",
            accent: "border-purple-500/20",
        },
        {
            icon: Users,
            title: "Supportive Community",
            description: "Join a network of like-minded learners and industry professionals who will support your journey.",
            color: "from-orange-500 to-amber-400",
            accent: "border-orange-500/20",
        },
        {
            icon: LaptopIcon,
            title: "Hands-On Projects",
            description: "Apply your knowledge through real-world projects that build your portfolio and practical skills.",
            color: "from-emerald-500 to-teal-400",
            accent: "border-emerald-500/20",
        },
        {
            icon: Award,
            title: "Industry Certifications",
            description: "Earn recognized certifications that validate your skills and boost your employability.",
            color: "from-rose-500 to-red-400",
            accent: "border-rose-500/20",
        },
        {
            icon: HandHelping,
            title: "Dedicated Mentorship",
            description: "Receive personalized guidance from experienced mentors committed to your success.",
            color: "from-indigo-500 to-blue-400",
            accent: "border-indigo-500/20",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative" ref={ref}>
            {/* Background overlays */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
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
                        <div className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
                            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-400" />
                        </div>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 px-2">
                        Why Choose Us
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
                        We combine cutting-edge curriculum with expert instruction to deliver an unparalleled learning experience.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gradient-to-r ${feature.color} p-5 sm:p-6 md:p-7 rounded-lg sm:rounded-xl shadow-lg border ${feature.accent} hover:shadow-2xl transition-shadow duration-300`}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mb-3 sm:mb-4">
                                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;