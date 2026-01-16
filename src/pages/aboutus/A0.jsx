import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Target,
    Eye,
    Lightbulb,
    GraduationCap,
    Wrench,
    Rocket,
    ChevronRight,
    ArrowRight,
    MousePointer,
    Users,
    Star,
    Clock,
    BookOpen,
    Zap
} from 'lucide-react';

// Animated Background Component
const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: `rgba(${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, Math.random() * 100 - 50],
                        x: [0, Math.random() * 100 - 50],
                        opacity: [0.1, 0.7, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

// Reusable Card Component for Core Values
function ValueCard({ icon: Icon, title, description, color }) {
    return (
        <motion.div
            className={`bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 ${color}`}
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600">{description}</p>
            <motion.button
                className="mt-4 text-blue-600 font-medium flex items-center gap-1 group text-sm sm:text-base"
                whileHover={{ x: 5 }}
            >
                Learn more
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </motion.div>
    );
}

// Button Component
function Button({ children, primary = false, secondary = false, onClick = () => { } }) {
    const getButtonClasses = () => {
        if (primary) {
            return "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-300/30";
        }
        if (secondary) {
            return "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:shadow-orange-300/30";
        }
        return "bg-white text-blue-600 hover:bg-blue-50";
    };

    return (
        <motion.button
            className={`inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${getButtonClasses()}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            {children}
            <ChevronRight className="w-4 h-4" />
        </motion.button>
    );
}

// Animated Stat Counter
function StatCounter({ value, label, icon: Icon, color = "from-blue-500 to-purple-500" }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        let interval;
        if (inView) {
            interval = setInterval(() => {
                setCount(prev => {
                    if (prev < value) return prev + 1;
                    clearInterval(interval);
                    return value;
                });
            }, 20);
        }
        return () => clearInterval(interval);
    }, [inView, value]);

    return (
        <motion.div
            ref={ref}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
        >
            <div className="flex justify-center mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 bg-gradient-to-r ${color} rounded-full text-white`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{count}+</h3>
            <p className="text-sm sm:text-base text-gray-600">{label}</p>
        </motion.div>
    );
}

// Testimonial Component
function Testimonial({ name, role, quote, image }) {
    return (
        <motion.div
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg relative mt-10"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="pt-8 sm:pt-10 text-center">
                <p className="text-sm sm:text-base text-gray-600 italic mb-4">"{quote}"</p>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">{name}</h4>
                <p className="text-sm sm:text-base text-blue-600">{role}</p>
            </div>
        </motion.div>
    );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description }) {
    return (
        <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.03, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center text-center">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
}

// Main App Component
function AboutUs() {
    const controls = useAnimation();

    const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [visionRef, visionInView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        if (statsInView) {
            controls.start('visible');
        }
    }, [controls, statsInView]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-cover bg-center flex items-center relative overflow-hidden px-4"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")'
                }}
            >
                {/* Animated particles */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                background: i % 3 === 0
                                    ? 'rgba(99, 102, 241, 0.6)'
                                    : i % 3 === 1
                                        ? 'rgba(168, 85, 247, 0.6)'
                                        : 'rgba(249, 115, 22, 0.6)',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                scale: [1, Math.random() + 0.5, 1],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 z-10">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Empowering Students with Future-Ready Tech Skills
                        </motion.h1>
                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            MICC bridges the gap between learning and real-world applications with hands-on training and expert guidance.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <Button primary>Join Now</Button>
                            <Button secondary>Explore Courses</Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <p className="mb-2 text-xs sm:text-sm">Scroll to explore</p>
                    <MousePointer className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
            </div>

            {/* Stats Section */}
            <div
                ref={statsRef}
                className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-purple-50"
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-3 sm:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={statsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Our Impact in Numbers
                    </motion.h2>
                    <motion.p
                        className="text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={statsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We're proud of our achievements and the difference we've made in students' lives
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <StatCounter value={500} label="Students Trained" icon={Users} color="from-blue-500 to-purple-500" />
                        <StatCounter value={25} label="Expert Instructors" icon={GraduationCap} color="from-purple-500 to-pink-500" />
                        <StatCounter value={30} label="Courses Offered" icon={BookOpen} color="from-orange-500 to-red-500" />
                        <StatCounter value={95} label="Success Rate %" icon={Rocket} color="from-blue-500 to-cyan-500" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div
                ref={featuresRef}
                className="py-12 sm:py-16 lg:py-20 bg-white"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Us</h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                            We offer a unique learning experience that sets us apart from traditional educational institutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <FeatureCard
                            icon={Zap}
                            title="Accelerated Learning"
                            description="Our focused curriculum helps you learn faster and more effectively than traditional methods."
                        />
                        <FeatureCard
                            icon={Star}
                            title="Industry Experts"
                            description="Learn from professionals who have years of real-world experience in the tech industry."
                        />
                        <FeatureCard
                            icon={Clock}
                            title="Flexible Schedule"
                            description="Study at your own pace with our flexible course schedules designed to fit your lifestyle."
                        />
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div
                ref={missionRef}
                className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                        <motion.div
                            className="flex-1 w-full"
                            initial={{ opacity: 0, x: -50 }}
                            animate={missionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white flex-shrink-0">
                                    <Target className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                Our mission is to provide students with cutting-edge tech education, ensuring they are industry-ready with practical skills and real-world exposure. We believe in learning by doing, which is why our curriculum emphasizes hands-on projects and real-world applications.
                            </p>
                            <Button primary>Learn More</Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={missionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="flex-1 w-full flex justify-center"
                        >
                            <motion.div
                                className="relative w-full max-w-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-orange-500 opacity-20"
                                    animate={{ rotate: 3 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                />
                                <motion.div
                                    className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-purple-500 opacity-20"
                                    animate={{ rotate: -3 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                                    alt="Instructor guiding students"
                                    className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div
                ref={visionRef}
                className="py-12 sm:py-16 lg:py-20 bg-white"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
                        <motion.div
                            className="flex-1 w-full"
                            initial={{ opacity: 0, x: 50 }}
                            animate={visionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div className="p-2 sm:p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white flex-shrink-0">
                                    <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Vision</h2>
                            </div>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                To be a leading institute in technology education, empowering students to innovate and shape the digital future. We envision a world where every student has access to quality tech education that prepares them for the challenges and opportunities of tomorrow.
                            </p>
                            <Button secondary>Discover More</Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={visionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="flex-1 w-full flex justify-center"
                        >
                            <motion.div
                                className="relative w-full max-w-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute -top-4 -right-4 w-full h-full rounded-lg bg-blue-500 opacity-20"
                                    animate={{ rotate: -3 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                />
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-full h-full rounded-lg bg-purple-500 opacity-20"
                                    animate={{ rotate: 3 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                                    alt="Futuristic classroom"
                                    className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div
                ref={valuesRef}
                className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50"
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Core Values</h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
                            Our values shape everything we do at MICC, from curriculum development to student support.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <ValueCard
                            icon={Lightbulb}
                            title="Innovation"
                            description="We embrace the latest tech trends and methodologies to provide cutting-edge education that prepares students for the future."
                            color="border-blue-500"
                        />
                        <ValueCard
                            icon={GraduationCap}
                            title="Excellence"
                            description="Our curriculum is designed by industry experts to ensure the highest standards of education and training."
                            color="border-purple-500"
                        />
                        <ValueCard
                            icon={Wrench}
                            title="Practical Learning"
                            description="We believe in learning by doing, which is why our courses emphasize hands-on projects and real-world applications."
                            color="border-orange-500"
                        />
                        <ValueCard
                            icon={Rocket}
                            title="Student Success"
                            description="Our ultimate goal is to see our students succeed in their careers through industry connections and ongoing support."
                            color="border-pink-500"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div
                ref={testimonialsRef}
                className="py-12 sm:py-16 lg:py-20 bg-white"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">What Our Students Say</h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                            Hear from our students about their experiences and success stories
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        <Testimonial
                            name="Sarah Johnson"
                            role="Web Developer"
                            quote="The practical approach to learning at MICC helped me land my dream job within months of completing my course."
                            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                        />
                        <Testimonial
                            name="Michael Chen"
                            role="Data Scientist"
                            quote="The instructors are industry experts who provided real-world insights that you can't get from textbooks alone."
                            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                        />
                        <Testimonial
                            name="Priya Patel"
                            role="UX Designer"
                            quote="MICC's supportive community and hands-on projects gave me the confidence to transition into a tech career."
                            image="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80"
                        />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
                <AnimatedBackground />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Your Tech Journey?</h2>
                        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                            Join our community of learners and innovators today. Take the first step towards a successful tech career.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                            <motion.button
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Enroll Now <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-colors flex items-center gap-2 justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request Info <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;