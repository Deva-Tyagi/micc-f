import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const feedbackData = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        message: "This course helped me tremendously in improving my skills. The instructors were excellent and the content was well-structured!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "UX Designer",
        message: "I learned so much in this course. The content was clear, the examples were practical, and the support was amazing throughout my learning journey.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        name: "Sam Wilson",
        role: "Product Manager",
        message: "The course material was fantastic, and I appreciated the real-world applications. I wish there were more hands-on projects, but overall it was excellent.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        name: "Sarah Lee",
        role: "Marketing Specialist",
        message: "Great course! The lessons were well-structured, and I feel much more confident in applying these concepts in my daily work. Highly recommended!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 5,
        name: "David Clark",
        role: "Data Analyst",
        message: "The course was good, but I had some issues with the platform. The content was valuable, and the instructors were knowledgeable. Overall, a great experience.",
        rating: 3,
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
];

const FeedbackSection = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            setItemsPerPage(width >= 1024 ? 2 : 1);
        }
    }, []);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            setItemsPerPage(width >= 1024 ? 2 : 1);
        };

        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const maxPage = Math.ceil(feedbackData.length / itemsPerPage) - 1;

    useEffect(() => {
        if (currentPage > maxPage) {
            setCurrentPage(0);
        }
    }, [itemsPerPage, maxPage, currentPage]);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentPage(prev => (prev + 1) > maxPage ? 0 : prev + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay, maxPage]);

    const handleNext = () => {
        setAutoplay(false);
        setDirection(1);
        setCurrentPage(prev => (prev + 1) > maxPage ? 0 : prev + 1);
    };

    const handlePrev = () => {
        setAutoplay(false);
        setDirection(-1);
        setCurrentPage(prev => (prev - 1) < 0 ? maxPage : prev - 1);
    };

    const getVisibleFeedback = () => {
        const startIndex = currentPage * itemsPerPage;
        return feedbackData.slice(startIndex, startIndex + itemsPerPage);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-2">
                        What Our Students Say
                    </h2>
                    <div className="h-1 w-20 bg-purple-600 rounded mx-auto mt-4"></div>
                </motion.div>

                <div className="relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div 
                            key={currentPage}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                        >
                            {getVisibleFeedback().map(feedback => (
                                <motion.div 
                                    key={feedback.id}
                                    className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-lg text-left relative"
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Quote className="absolute top-4 right-4 text-purple-100 w-10 h-10 sm:w-12 sm:h-12" />
                                    
                                    {/* Star Rating */}
                                    <div className="flex mb-3 sm:mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i}
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    i < feedback.rating 
                                                        ? "fill-yellow-400 text-yellow-400" 
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5 sm:mb-6 leading-relaxed">
                                        "{feedback.message}"
                                    </p>

                                    <div className="flex items-center">
                                        <img 
                                            src={feedback.avatar} 
                                            alt={feedback.name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 flex-shrink-0"
                                        />
                                        <div className="min-w-0">
                                            <h4 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                                                {feedback.name}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-500 truncate">
                                                {feedback.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 mt-8 sm:mt-10 lg:mt-12">
                    <motion.button 
                        onClick={handlePrev}
                        className="bg-white p-3 sm:p-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                    </motion.button>

                    {/* Page Indicators */}
                    <div className="flex space-x-2">
                        {[...Array(maxPage + 1)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setAutoplay(false);
                                    setDirection(index > currentPage ? 1 : -1);
                                    setCurrentPage(index);
                                }}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                    currentPage === index 
                                        ? "bg-indigo-600 w-6 sm:w-8" 
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>

                    <motion.button 
                        onClick={handleNext}
                        className="bg-white p-3 sm:p-4 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;