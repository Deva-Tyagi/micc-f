import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Play, X, Volume2, VolumeX } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "This course transformed my career trajectory. I went from a complete beginner to landing a junior developer role in just 6 months. The instructors' dedication and hands-on approach made all the difference.",
    name: "Emily Chen",
    role: "Frontend Developer",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80&w=200&h=200&crop=faces&fit=crop",
    rating: 5,
    company: "TechStart Inc."
  },
  {
    id: 2,
    text: "The comprehensive curriculum and project-based learning approach gave me practical skills that I use daily. What sets this program apart is the personalized feedback and mentorship I received throughout.",
    name: "David Miller",
    role: "Software Engineer",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=200&h=200&crop=faces&fit=crop",
    rating: 5,
    company: "InnovateTech"
  },
  {
    id: 3,
    text: "As someone transitioning careers, I needed a structured program that would prepare me for the real world. This course did exactly that, with industry-relevant assignments and excellent career support.",
    name: "Priya Sharma",
    role: "Data Analyst",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=200&h=200&crop=faces&fit=crop",
    rating: 5,
    company: "DataSphere Analytics"
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const circleVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    if (!isPaused && !isModalOpen) {
      const timer = setTimeout(() => {
        setDirection("right");
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [current, isPaused, isModalOpen]);

  // Auto-play circle video when it changes
  useEffect(() => {
    if (circleVideoRef.current && !isModalOpen) {
      circleVideoRef.current.play().catch(err => console.log("Video play failed:", err));
    }
  }, [current, isModalOpen]);

  // Handle modal video playback
  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.currentTime = circleVideoRef.current?.currentTime || 0;
      modalVideoRef.current.play().catch(err => console.log("Modal video play failed:", err));
    }
  }, [isModalOpen]);

  const handleNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMuted(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsMuted(true);
    document.body.style.overflow = 'auto';
    if (circleVideoRef.current && modalVideoRef.current) {
      circleVideoRef.current.currentTime = modalVideoRef.current.currentTime;
    }
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Student Success Stories
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hear From Our Graduates
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our students come from diverse backgrounds but share a common goal: to transform their careers
            through quality education. Here's what they have to say about their journey with us.
          </motion.p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
                  <div className="relative order-2 lg:order-1">
                    <motion.div
                      className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 flex items-center justify-center z-10"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 mt-2 text-gray-900">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 italic leading-relaxed mb-4 sm:mb-6">
                      "{testimonials[current].text}"
                    </p>
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      <span className="font-medium">{testimonials[current].role}</span> at{" "}
                      {testimonials[current].company}
                    </div>
                  </div>

                  <div className="flex justify-center order-1 lg:order-2">
                    <motion.div
                      className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-xl cursor-pointer group"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={openModal}
                    >
                      <video
                        ref={circleVideoRef}
                        src={testimonials[current].video}
                        poster={testimonials[current].poster}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 sm:p-4">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 fill-purple-600" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10 gap-4 sm:gap-6">
            <motion.button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </motion.button>

            <div className="flex items-center gap-2 sm:gap-3">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    idx === current ? "bg-purple-600 w-6 sm:w-8" : "bg-gray-300"
                  } transition-all duration-300`}
                  onClick={() => {
                    setDirection(idx > current ? "right" : "left");
                    setCurrent(idx);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0, borderRadius: "50%" }}
              animate={{ scale: 1, borderRadius: "1rem" }}
              exit={{ scale: 0, borderRadius: "50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={testimonials[current].video}
                className="w-full h-full"
                controls
                autoPlay
                muted={isMuted}
                preload="auto"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Mute/Unmute Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-10"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1">
                  {testimonials[current].name}
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  {testimonials[current].role} at {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialCarousel;