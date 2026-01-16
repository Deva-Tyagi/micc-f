import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, FileText, Monitor, CheckCircle, ArrowRight } from "lucide-react";

const CoursePathSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const steps = [
    {
      icon: Search,
      title: "Choose Your Course",
      description: "Browse our extensive catalog to find the course that best matches your goals and interests.",
      color: "bg-apple-blue",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&q=90"
    },
    {
      icon: FileText,
      title: "Complete Enrollment",
      description: "Fill out the enrollment form with your details to secure your spot in the course.",
      color: "bg-apple-purple",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&q=90"
    },
    {
      icon: Monitor,
      title: "Access Materials",
      description: "Gain immediate access to all course materials and resources to begin your learning journey.",
      color: "bg-apple-teal",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&q=90"
    },
    {
      icon: CheckCircle,
      title: "Complete Assignments",
      description: "Stay on track by completing assignments and assessments to earn your certification.",
      color: "bg-apple-pink",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=90"
    }
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, steps.length]);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-apple-blue/10 text-apple-blue mb-3 sm:mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Your Learning Path
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-dark tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Four Simple Steps to Digital Mastery
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our streamlined approach makes learning accessible and effective. Follow these steps
            to transform your skills and advance your career in the digital world.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Left Image Section */}
          <motion.div
            className="w-full lg:w-1/2 relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <motion.div
                className={`absolute inset-0 ${steps[activeStep].color} mix-blend-overlay opacity-40`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{`Step ${activeStep + 1}`}</h3>
                  <div className="flex items-center">
                    <ActiveIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">{steps[activeStep].title}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Steps Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Step Icons */}
              <div className="flex justify-between mb-6 sm:mb-8">
                {steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.button
                      key={idx}
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full flex items-center justify-center z-10 transition-all ${
                        idx === activeStep ? step.color : 'bg-gray-100'
                      }`}
                      onClick={() => setActiveStep(idx)}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                    >
                      <StepIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${
                          idx === activeStep ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Progress Bar */}
              <div className="absolute top-6 sm:top-7 md:top-8 left-0 w-full h-0.5 sm:h-1 bg-gray-100 rounded-full">
                <motion.div
                  className={`h-full rounded-full ${steps[activeStep].color}`}
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${(activeStep / (steps.length - 1)) * 100}%`
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Active Step Content */}
              <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg backdrop-blur-sm mt-8 sm:mt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <div className={`p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl ${steps[activeStep].color} flex-shrink-0`}>
                        <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-dark">
                          {`Step ${activeStep + 1}: ${steps[activeStep].title}`}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                          {steps[activeStep].description}
                        </p>
                        <motion.a
                          href={`/step/${activeStep + 1}`}
                          className={`inline-flex items-center text-sm sm:text-base text-black/90 font-medium hover:text-black transition-colors`}
                          whileHover={{ x: 5 }}
                        >
                          Learn more about this step
                          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursePathSection;