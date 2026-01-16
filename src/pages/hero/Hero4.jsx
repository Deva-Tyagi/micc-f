import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Sparkles, Rocket, Star, Cpu, Book, Trophy, Brain, Atom, Zap,
    BadgeCheck, BarChart, Code, PenTool, Compass, Users
} from "lucide-react";

const ParallaxFeature = () => {
    const containerRef = useRef(null);
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y3 = useTransform(scrollYProgress, [0, 1], [250, 0]);
    const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, -10]);
    const rotateRight = useTransform(scrollYProgress, [0, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
    const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

    const features = [
        {
            icon: Brain,
            secondaryIcon: Atom,
            title: "Adaptive Learning",
            description: "Our AI-powered system adapts to your learning style and pace, creating a personalized experience that maximizes retention.",
            color: "bg-gradient-to-br from-violet-400 to-violet-600",
            textColor: "text-violet-500",
            rotate: rotateLeft,
            y: y1
        },
        {
            icon: Rocket,
            secondaryIcon: BarChart,
            title: "Career Acceleration",
            description: "Fast-track your professional growth with skills that are in high demand across industries, backed by real-world projects.",
            color: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600",
            textColor: "text-fuchsia-500",
            rotate: useTransform(scrollYProgress, [0, 1], [0, 0]),
            y: y2
        },
        {
            icon: Sparkles,
            secondaryIcon: Code,
            title: "Premium Content",
            description: "Access high-quality, curated content developed by leading industry experts and updated regularly with the latest trends.",
            color: "bg-gradient-to-br from-amber-400 to-amber-600",
            textColor: "text-amber-500",
            rotate: rotateRight,
            y: y3
        }
    ];

    const additionalFeatures = [
        { icon: BadgeCheck, title: "Certified Skills", color: "from-emerald-400 to-emerald-600" },
        { icon: PenTool, title: "Creative Projects", color: "from-pink-400 to-pink-600" },
        { icon: Compass, title: "Guided Learning", color: "from-cyan-400 to-cyan-600" },
        { icon: Users, title: "Community Support", color: "from-blue-400 to-blue-600" }
    ];

    const floatingIcons = [
        { icon: Cpu, x: "10%", y: "20%", size: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20", rotation: 15, color: "text-blue-500/20" },
        { icon: Book, x: "85%", y: "65%", size: "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-24 lg:h-24", rotation: -10, color: "text-purple-500/20" },
        { icon: Trophy, x: "30%", y: "80%", size: "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20", rotation: 20, color: "text-teal-500/20" },
        { icon: Star, x: "75%", y: "25%", size: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16", rotation: 5, color: "text-amber-500/20" },
        { icon: Zap, x: "15%", y: "60%", size: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14", rotation: -15, color: "text-pink-500/20" }
    ];

    return (
        <section
            ref={containerRef}
            className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-gray-50 to-white"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 opacity-20 sm:opacity-25 md:opacity-30 lg:opacity-35">
                <div className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full bg-purple-300/30 blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-amber-300/20 blur-3xl" />
                <div className="absolute top-2/3 left-2/3 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-blue-300/20 blur-3xl" />
            </div>

            {/* Floating Icons - Always visible, scales with screen size */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={idx}
                            className={`absolute ${item.size} ${item.color}`}
                            style={{ left: item.x, top: item.y, rotate: item.rotation }}
                            animate={{
                                y: [-20, 20],
                                rotate: [item.rotation, item.rotation + (item.rotation > 0 ? 25 : -25)]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 5 + idx,
                                ease: "easeInOut"
                            }}
                        >
                            <Icon className="w-full h-full" />
                        </motion.div>
                    );
                })}
            </div>

            <motion.div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10" style={{ opacity }}>
                <motion.div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24" style={{ y: headerY, scale }}>
                    <div className="relative inline-block">
                        <span className="text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 text-amber-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 inline-block shadow-sm border border-amber-200/50">
                            Learning Reimagined
                            <motion.span
                                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </span>
                    </div>
                    <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-700 via-fuchsia-700 to-amber-700 px-2 sm:px-4">
                        Future-Proof Your Skills
                    </motion.h2>
                    <motion.p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 leading-relaxed">
                        Stay ahead in a rapidly evolving digital landscape with cutting-edge courses
                        designed to equip you with the most in-demand skills of tomorrow.
                    </motion.p>
                </motion.div>

                {/* Main Features - Fully Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        const SecondIcon = feature.secondaryIcon;

                        return (
                            <motion.div
                                key={idx}
                                style={{ 
                                    y: !isMobile ? feature.y : 0,
                                    rotate: !isMobile ? feature.rotate : 0
                                }}
                                className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-6 md:p-8 border border-gray-100 hover:border-gray-200 transition-all backdrop-blur-sm bg-white/80"
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15)",
                                    borderColor: "rgba(255,255,255,0.5)"
                                }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHoveredFeature(idx)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <motion.div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 ${feature.color} flex items-center justify-center mb-4 sm:mb-6 md:mb-8 rounded-xl sm:rounded-2xl shadow-md relative group`}
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                >
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" />
                                    <AnimatePresence>
                                        {hoveredFeature === idx && (
                                            <motion.div
                                                className="absolute"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.5 }}
                                            >
                                                <SecondIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white/90" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <motion.h3 className={`text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 ${feature.textColor}`}>
                                    {feature.title}
                                </motion.h3>
                                <motion.p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                    {feature.description}
                                </motion.p>
                                <motion.button className={`mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm font-medium ${feature.textColor} flex items-center gap-1 group hover:gap-2 transition-all`}>
                                    Learn more →
                                </motion.button>

                                {/* Decorative circles */}
                                <div className="hidden md:block absolute -bottom-5 -right-5 w-24 h-24 lg:w-32 lg:h-32 bg-gray-50 rounded-full opacity-20 z-0" />
                                <div className="hidden md:block absolute top-8 right-8 lg:top-10 lg:right-10 w-16 h-16 lg:w-20 lg:h-20 bg-gray-50 rounded-full opacity-10 z-0" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Features - Fully Responsive Grid */}
                <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
                    {additionalFeatures.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                                whileHover={{ y: -5 }}
                            >
                                <motion.div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 bg-gradient-to-br ${item.color}`}>
                                    <Icon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                                </motion.div>
                                <h4 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base lg:text-base">
                                    {item.title}
                                </h4>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ParallaxFeature;