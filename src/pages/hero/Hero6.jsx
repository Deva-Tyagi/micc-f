import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Award, Smile } from "lucide-react";

const StatCounter = ({ value, label, icon: Icon, color }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = Math.min(value, 9999);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <motion.div
      ref={nodeRef}
      className="glass-card p-5 sm:p-6 md:p-7 lg:p-8 text-center rounded-lg sm:rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <motion.div
        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl ${color} mx-auto flex items-center justify-center mb-4 sm:mb-5 md:mb-6`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
      </motion.div>
      <motion.h3
        className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-2 text-dark"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {count}+
      </motion.h3>
      <p className="text-sm sm:text-base text-gray-600">{label}</p>
    </motion.div>
  );
};

const StatSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-apple-blue/10 text-apple-blue mb-3 sm:mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Our Impact
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-3 sm:mb-4 md:mb-5 px-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transforming Careers Through Education
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've helped thousands of students achieve their career goals. Here's our impact by the numbers.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <StatCounter
            value={500}
            label="Graduated Students"
            icon={Users}
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <StatCounter
            value={25}
            label="Expert Instructors"
            icon={GraduationCap}
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <StatCounter
            value={95}
            label="Completion Rate %"
            icon={Award}
            color="bg-gradient-to-br from-emerald-500 to-emerald-600"
          />
          <StatCounter
            value={100}
            label="Success Stories"
            icon={Smile}
            color="bg-gradient-to-br from-rose-500 to-rose-600"
          />
        </div>
      </div>
    </section>
  );
};

export default StatSection;