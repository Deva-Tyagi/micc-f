import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ChevronRight,
    Laptop,
    Users,
    Award,
    Zap,
    ArrowDown,
    Sparkles,
    Rocket,
    Brain,
    Stars,
    Lightbulb,
    BookOpen,
    GraduationCap
} from "lucide-react";

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverButton, setHoverButton] = useState(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    const images = [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&q=90",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=90",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=90",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&q=90"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const features = [
        { icon: BookOpen, text: "Comprehensive Courses", color: "bg-gradient-to-br from-blue-400 to-blue-600", description: "From beginner to advanced" },
        { icon: Zap, text: "Fast-Track Learning", color: "bg-gradient-to-br from-pink-400 to-pink-600", description: "Learn at your own pace" },
        { icon: Users, text: "Expert Community", color: "bg-gradient-to-br from-violet-400 to-violet-600", description: "Connect with peers" },
        { icon: GraduationCap, text: "Recognized Certifications", color: "bg-gradient-to-br from-teal-400 to-teal-600", description: "Industry-approved credentials" }
    ];

    const floatingElements = [
        { x: -20, y: -15, delay: 0, size: 'w-16 h-16', opacity: 0.3, rotate: 15, color: "bg-gradient-to-br from-blue-300/20 to-blue-500/20" },
        { x: 30, y: 20, delay: 1.5, size: 'w-12 h-12', opacity: 0.2, rotate: -10, color: "bg-gradient-to-br from-purple-300/20 to-purple-500/20" },
        { x: -25, y: 25, delay: 2.8, size: 'w-10 h-10', opacity: 0.15, rotate: 5, color: "bg-gradient-to-br from-pink-300/20 to-pink-500/20" },
        { x: 40, y: -30, delay: 3.2, size: 'w-14 h-14', opacity: 0.25, rotate: -15, color: "bg-gradient-to-br from-amber-300/20 to-amber-500/20" },
        { x: -35, y: -25, delay: 4.5, size: 'w-20 h-20', opacity: 0.1, rotate: 20, color: "bg-gradient-to-br from-teal-300/10 to-teal-500/10" }
    ];

    const iconShapes = [
        { Icon: Brain, position: "top-[15%] right-[10%]", size: "w-8 h-8", color: "text-purple-400/40" },
        { Icon: Lightbulb, position: "top-[30%] left-[8%]", size: "w-6 h-6", color: "text-amber-400/40" },
        { Icon: Rocket, position: "bottom-[25%] right-[15%]", size: "w-10 h-10", color: "text-blue-400/40" },
        { Icon: Stars, position: "bottom-[20%] left-[12%]", size: "w-8 h-8", color: "text-pink-400/40" }
    ];

    return (
        <motion.section ref={containerRef} className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                  
            {/* Background particles */}
            {iconShapes.map((shape, index) => {
                const IconComponent = shape.Icon;
                return (
                    <motion.div
                        key={`icon-shape-${index}`}
                        className={`absolute ${shape.position} ${shape.size} ${shape.color} z-0`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: index * 0.2 + 0.5,
                            ease: "easeOut"
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 10, 0]
                            }}
                            transition={{
                                duration: 6 + index,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <IconComponent className="w-full h-full" />
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* Floating decoration elements */}
            {floatingElements.map((element, index) => (
                <motion.div
                    key={`floating-${index}`}
                    className={`absolute ${element.size} rounded-full ${element.color} backdrop-blur-sm z-10`}
                    style={{
                        left: `calc(50% + ${element.x * 5}px)`,
                        top: `calc(30% + ${element.y * 5}px)`,
                        opacity: element.opacity,
                        rotate: element.rotate
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: element.opacity,
                        scale: 1,
                        y: [element.y, element.y - 30, element.y],
                        rotate: [element.rotate, element.rotate + 180, element.rotate],
                    }}
                    transition={{
                        duration: 10 + index * 2,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Background image carousel with enhanced parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ opacity, scale }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <div className="image-carousel">
                    {images.map((src, index) => (
                        <motion.img
                            key={`carousel-img-${index}`}
                            src={src}
                            alt={`Learning environment ${index + 1}`}
                            className={activeIndex === index ? "active" : ""}
                            loading="lazy"
                            initial={{ scale: activeIndex === index ? 1.1 : 1, opacity: activeIndex === index ? 1 : 0 }}
                            animate={{
                                scale: activeIndex === index ? 1.05 : 1,
                                opacity: activeIndex === index ? 1 : 0
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Content overlay with enhanced animations */}
            <motion.div
                className="container mx-auto px-6 z-10 relative mt-20"
                style={{ y: textY }}
            >
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
                    {/* Spark icon with enhanced animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                        className="mb-6 relative"
                    >
                        <motion.div
                            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center relative overflow-hidden"
                            animate={{
                                boxShadow: ["0 0 0 0 rgba(255,255,255,0)", "0 0 0 10px rgba(255,255,255,0.1)"],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <Sparkles className="text-white/90 w-8 h-8" />
                            </motion.div>
                        </motion.div>

                        Radiating circles
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                                boxShadow: ["0 0 0 0px rgba(255,255,255,0.2)", "0 0 0 20px rgba(255,255,255,0)"],
                                scale: [1, 1.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.5
                            }}
                        />
                    </motion.div>

                    {/* Kicker text with enhanced animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-6 relative"
                    >
                        <motion.span
                            className="inline-block text-sm font-medium px-5 py-1.5 rounded-full bg-gradient-to-r from-white/15 to-white/5 text-white backdrop-blur-sm border border-white/10"
                            whileHover={{
                                scale: 1.05,
                                background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Transform Your Digital Skills
                            <motion.span
                                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-purple-400"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.span>
                    </motion.div>

                    {/* Main headline with enhanced animations */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                        className="text-7xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
                    >
                        <motion.span
                            className="text-gradient from-white via-purple-200 to-blue-200 block relative"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Learn. Grow. Succeed
                            {/* Animated underline effect */}
                            <motion.span
                                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                                initial={{ width: "0%", left: "50%" }}
                                animate={{ width: "100%", left: "0%" }}
                                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                            />
                        </motion.span>
                        <motion.span
                            className="text-gradient from-white/90 via-blue-200/90 to-purple-200/80 text-5xl md:text-4xl lg:text-5xl block mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            in the Digital Era
                        </motion.span>
                    </motion.h1>

                    {/* Description with animated reveal */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 }}
                        className="text-xl md:text-lg text-white/90 max-w-3xl mb-10"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, staggerChildren: 0.1, delayChildren: 1 }}
                        >
                            Unlock your potential with hands-on training in programming, IT certifications,
                            and essential digital skills needed for today's tech-driven world.
                        </motion.span>
                    </motion.p>

                    {/* CTA Buttons with enhanced hover effects */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <motion.a
                            href="/Explore"
                            className="relative hero-btn bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(0, 113, 227, 0.5)"
                            }}
                            whileTap={{ scale: 0.97 }}
                            onHoverStart={() => setHoverButton("explore")}
                            onHoverEnd={() => setHoverButton(null)}
                        >
                            {/* Button shine effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                                initial={{ x: "-100%" }}
                                animate={hoverButton === "explore" ? { x: "100%" } : { x: "-100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />

                            <span className="relative z-10 flex items-center">
                                Explore our Courses
                                <motion.span
                                    animate={hoverButton === "explore" ? { x: 5 } : { x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight className="ml-2 h-15 w-5" />
                                </motion.span>
                            </span>
                        </motion.a>

                        <motion.a
                            href="/contact"
                            className="relative hero-btn bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onHoverStart={() => setHoverButton("contact")}
                            onHoverEnd={() => setHoverButton(null)}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                                initial={{ x: "-100%" }}
                                animate={hoverButton === "contact" ? { x: "100%" } : { x: "-100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                            <span className="relative z-10">Contact Us</span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Features grid with enhanced animations */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="grid grid-cols-4 md:grid-cols-2 gap-6 mt-16 mb-8 max-w-5xl mx-auto"
                >
                    {features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <motion.div
                                key={`feature-${idx}`}
                                className="relative glass-morphism p-6 flex flex-col items-center text-center overflow-hidden group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 1.2 + idx * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                {/* Background glow effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <motion.div
                                    className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4 relative`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {/* Pulsing ring effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        animate={{
                                            boxShadow: ["0 0 0 0 rgba(255,255,255,0.4)", "0 0 0 10px rgba(255,255,255,0)"],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    <FeatureIcon className="w-6 h-6 text-white" />
                                </motion.div>

                                <h3 className="text-black font-medium text-base md:text-sm mb-1">
                                    {feature.text}
                                </h3>

                                <motion.p
                                    className="text-white/60 text-xs"
                                    initial={{ opacity: 0, height: 0 }}
                                    whileHover={{ opacity: 1, height: "auto" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {feature.description}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Enhanced scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <div className="flex flex-col items-center">
                        <motion.p
                            className="text-black/70 text-sm mb-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Scroll to explore
                        </motion.p>
                        <motion.div
                            className="w-8 h-14 rounded-full border-2 border-white/40 flex justify-center p-2 relative overflow-hidden"
                            animate={{
                                boxShadow: ["0 0 0 0 rgba(255,255,255,0)", "0 0 0 5px rgba(255,255,255,0.1)"],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {/* Gradient overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />

                            <motion.div
                                className="w-1.5 h-3 bg-white rounded-full relative z-10"
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [0, 5, 0],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                            <ArrowDown className="w-5 h-5 text-white/70 mt-2" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default HeroBanner;
