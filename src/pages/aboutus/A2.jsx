import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion, useInView, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Camera, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

const ShowcaseSection = () => {
    const sliderRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
    const [selectedImage, setSelectedImage] = useState(null);

    // Placeholder images for the slider
    const photos = [
        {
            url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
            caption: "Modern Learning Environment"
        },
        {
            url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
            caption: "Collaborative Workspaces"
        },
        {
            url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
            caption: "Team Projects in Action"
        },
        {
            url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
            caption: "Hands-on Learning Sessions"
        },
        {
            url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
            caption: "Industry Networking Events"
        },
        {
            url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
            caption: "Student Presentations"
        },
        {
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
            caption: "Tech Workshops"
        },
        {
            url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
            caption: "Innovation Labs"
        },
    ];

    // Custom arrow components
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <motion.button
                className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-blue-600"
                onClick={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronLeft size={24} />
            </motion.button>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <motion.button
                className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-blue-600"
                onClick={onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronRight size={24} />
            </motion.button>
        );
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        customPaging: function (i) {
            return (
                <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-300"></div>
            );
        },
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
        >
            {/* Photo Showcase Section */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                            <Camera className="w-6 h-6" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-800">
                            Explore Our Institute
                        </h2>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Take a visual tour through our campus, classrooms, and student activities
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <Slider ref={sliderRef} {...settings}>
                        {photos.map((photo, index) => (
                            <div key={index} className="px-4">
                                <motion.div
                                    className="overflow-hidden rounded-xl shadow-lg relative group"
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={photo.url}
                                        alt={photo.caption}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <p className="text-white font-medium">{photo.caption}</p>
                                        <motion.button
                                            className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white backdrop-blur-sm"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setSelectedImage(photo)}
                                        >
                                            <Maximize2 size={16} />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>

                {/* Image Gallery Categories */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {['All', 'Campus', 'Classrooms', 'Events', 'Students'].map((category) => (
                        <motion.button
                            key={category}
                            className={`px-6 py-2 rounded-full ${category === 'All' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-700'} shadow-md`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Lightbox for full-size image view */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.caption}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />
                            <motion.button
                                className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={24} />
                            </motion.button>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-b-lg">
                                <p className="text-white font-medium text-lg">{selectedImage.caption}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ShowcaseSection;