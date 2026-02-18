import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OurTeachers from "./OurTeachers";
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
  Zap,
  ChevronLeft,
} from "lucide-react";

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
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Reusable Card Component for Core Values
function ValueCard({ icon: Icon, title, description, hinglish, color }) {
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
      <p className="text-sm sm:text-base text-gray-600 mb-2">{description}</p>
      {hinglish && (
        <p className="text-sm sm:text-base text-gray-500 italic font-medium opacity-90">
          "{hinglish}"
        </p>
      )}
      {/* Decorative gradient bar */}
      <motion.div
        className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}

// Decorative Badge Component
function DecorationBadge({ icon: Icon, text, gradient }) {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r ${gradient} text-white shadow-lg`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="font-semibold text-sm sm:text-base">{text}</span>
    </motion.div>
  );
}

// Animated Stat Counter
function StatCounter({
  value,
  label,
  icon: Icon,
  color = "from-blue-500 to-purple-500",
  suffix = "+",
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => {
        setCount((prev) => {
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
        <div
          className={`p-2 sm:p-3 bg-gradient-to-r ${color} rounded-full text-white`}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-sm sm:text-base text-gray-600">{label}</p>
    </motion.div>
  );
}

// Testimonial Component
function Testimonial({ name, role, quote, rating = 5 }) {
  return (
    <motion.div
      className="bg-white p-6 sm:p-8 rounded-xl shadow-lg h-full flex flex-col justify-between"
      whileHover={{ y: -5, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Star Rating Display */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating
                  ? "text-yellow-400 fill-current"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-sm sm:text-base text-gray-600 italic mb-6">
          "{quote}"
        </p>
      </div>
      <div className="text-center border-t pt-4">
        <h4 className="text-base sm:text-lg font-semibold text-gray-800">
          {name}
        </h4>
        <p className="text-sm sm:text-base text-blue-600">{role}</p>
      </div>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, hinglish }) {
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
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-2">{description}</p>
        {hinglish && (
          <p className="text-sm sm:text-base text-gray-500 italic font-medium opacity-90">
            "{hinglish}"
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Main App Component
function AboutUs() {
  const controls = useAnimation();

  const [missionRef, missionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [visionRef, visionInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [valuesRef, valuesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Carousel state for testimonials
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Tushar Sharma",
      role: "Web Developer",
      quote:
        "Great institute with excellent teaching and supportive staff also Mahi Institute offers top-notch computer training. They boast excellent customer service, quality instruction, & modern facilities. A great choice for skill development and career advancement. Highly recommended.",
      rating: 5,
    },
    {
      name: "rahul singh",
      role: "UX Designer",
      quote:
        "Mahi Institute is awesome! They make learning computers super easy. Great teachers and a friendly atmosphere. Definitely recommend them for computer education. You won't regret it!",
      rating: 5,
    },
    {
      name: "Suraj Dhami",
      role: "UX Designer",
      quote:
        "First time at Mahi Institute! Clean and modern. Staff seemed knowledgeable and helpful, explaining everything clearly. Great environment for learning computer skills. Definitely recommend checking it out!",
      rating: 5,
    },
    {
      name: "Radha Mainwal",
      role: "MS Office",
      quote:
        "Mahi Institute offers top-notch computer training. Praised for excellent customer service and comprehensive MS Office courses. A quality learning center for skill development.",
      rating: 5,
    },
    {
      name: "Mohd Zunaid",
      role: "Computer Basic",
      quote:
        "Excellent computer coaching institute! The trainers are knowledgeable, the teaching methods are clear, and the environment is very supportive. I gained strong practical skills and confidence. Highly recommended for anyone looking to build their computer knowledge!",
      rating: 5,
    },
    {
      name: "Mukesh Verma",
      role: "Tally",
      quote:
        "Mahi Institute Computer Centre offers excellent computer training. Their Tally course is well-structured and taught by experienced instructors. Highly recommended for quality education and industry-relevant skills.",
      rating: 5,
    },
    {
      name: "Anjali Kashyap",
      role: "Tally & Computer Basic",
      quote:
        "Mahi Institute was great! I learned so much in their courses. The instructors were patient, and I successfully completed both the Tally and basic computer courses. Highly recommend for anyone starting out!",
      rating: 5,
    },
    {
      name: "Priyanka Thakurathi",
      role: "MS Office",
      quote:
        "Mahi Institute's computer training is great! I learned MS office and other useful skills. Affordable courses, friendly staff, and a good learning environment. Highly recommend!",
      rating: 5,
    },
    {
      name: "Udit Gupta",
      role: "Computer Basic",
      quote:
        "Mahi Institute is awesome! Super reliable and trustworthy computer training. They really know their stuff and make learning easy. Definitely recommend if you want to level up your skills!",
      rating: 5,
    },
    {
      name: "Tarun Singh",
      role: "Advance Computer Course",
      quote:
        "Visiting Mahi Institute for advanced computer courses! First impressions: clean, well-equipped, and the staff seemed knowledgeable. Feels like a reliable and trustworthy place to learn. Definitely worth exploring further!",
      rating: 5,
    },
    {
      name: "Suhana Naaz",
      role: "C Programming",
      quote:
        "Just finished an amazing IT course at Mahi Institute Computer Centre! Great instructors, up-to-date curriculum & hands-on experience. Highly recommend their computer training services!",
      rating: 5,
    },
    {
      name: "Saksham Bansal",
      role: "Software Course",
      quote:
        "Mahi Institute is the place to be for computer training! Their software courses are well-structured and easy to understand. Great instructors and a supportive learning environment. Highly recommend!",
      rating: 5,
    },
    {
      name: "Vanshika Saini",
      role: "Computer Basic",
      quote:
        "Mahi Institute is easy to find! Great location. First time here for computer training and the staff seems friendly. Looking forward to the classes. Hopefully, it's worth it! Will update later.",
      rating: 4,
    },
    {
      name: "Riya choudhary",
      role: "MS Office & Tally",
      quote:
        "My journey at Mahi Institute was fantastic. Learned MS Office inside out and aced the Tally course. Patient instructors, practical approach. Highly recommend their services for anyone wanting to upskill!",
      rating: 5,
    },
    {
      name: "Nitin Kumar",
      role: "UX Designer",
      quote:
        "Mahi Institute is the real deal! Great computer coaching, super reliable and trustworthy. I learned so much in a friendly environment. Highly recommend them! 👍",
      rating: 5,
    },
    {
      name: "NIHARIKA YADAV",
      role: "Programming in C",
      quote:
        "Mahi Institute is the best place for computer training! Learn everything from basics to advanced levels. Friendly staff and easy learning. Highly recommended for computer skills in a relaxed environment.",
      rating: 5,
    },
    {
      name: "Harshit Sharma",
      role: "Excel",
      quote: "I enjoyed it. I caught fire",
      rating: 5,
    },
    {
      name: "Ikra Naaz",
      role: "Python",
      quote: "Excellent",
      rating: 5,
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (statsInView) {
      controls.start("visible");
    }
  }, [controls, statsInView]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-cover bg-center flex items-center relative overflow-hidden px-4"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")',
        }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background:
                  i % 3 === 0
                    ? "rgba(99, 102, 241, 0.6)"
                    : i % 3 === 1
                      ? "rgba(168, 85, 247, 0.6)"
                      : "rgba(249, 115, 22, 0.6)",
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
                ease: "easeInOut",
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
              Shaping Tomorrow’s Talent with Industry-Ready Tech Skills
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We bridge the gap between education and real-world impact through
              practical learning, mentorship, and cutting-edge curriculum.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <DecorationBadge
                icon={Rocket}
                text="500+ Students Trained"
                gradient="from-blue-600 to-purple-600"
              />
              <DecorationBadge
                icon={GraduationCap}
                text="Expert-Led Courses"
                gradient="from-orange-500 to-pink-500"
              />
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
            Our Impact, Measured by Results
          </motion.h2>
          <motion.p
            className="text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Delivering meaningful outcomes that shape student success.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCounter
              value={1000}
              label="Students Trained"
              icon={Users}
              color="from-blue-500 to-purple-500"
            />
            <StatCounter
              value={25}
              label="Expert Instructors"
              icon={GraduationCap}
              color="from-purple-500 to-pink-500"
            />
            <StatCounter
              value={30}
              label="Courses Offered"
              icon={BookOpen}
              color="from-orange-500 to-red-500"
            />
            <StatCounter
              value={95}
              label="Success Rate"
              icon={Rocket}
              color="from-blue-500 to-cyan-500"
              suffix="%"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              A learning model designed beyond traditional education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={Zap}
              title="Accelerated Learning"
              description=" Learn smarter with a focused curriculum designed to deliver faster, measurable outcomes."
              hinglish="Kam time, zyada impact."
            />
            <FeatureCard
              icon={Star}
              title="Industry Experts"
              description="Gain insights and mentorship from professionals with proven real-world industry experience."
              hinglish="Seekho unse jo industry jee chuke hain."
            />
            <FeatureCard
              icon={Clock}
              title="Flexible Schedule"
              description="Learn at your own pace with schedules built to adapt to your lifestyle and commitments."
              hinglish="Learning jo tumhare time pe chale."
            />
          </div>
        </div>
      </div>

      {/* Our Teachers Section */}
      <OurTeachers />

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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                We deliver future-focused technology education that bridges the gap between learning and real-world application. Through hands-on projects and practical training, we prepare students with industry-ready skills to succeed in today’s digital landscape.
              </p>
              {/* Decorative accent bar */}
              <motion.div
                className="flex gap-2 items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <div className="h-1 w-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
              </motion.div>
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
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-purple-500 opacity-20"
                  animate={{ rotate: -3 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
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
      <div ref={visionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Our Vision
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
               To become a global benchmark in technology education, empowering learners across the world with future-ready skills, innovative thinking, and real-world expertise—so they can lead change and shape the digital economy of tomorrow.
              </p>
              {/* Decorative accent bar */}
              <motion.div
                className="flex gap-2 items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={visionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </motion.div>
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
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-full h-full rounded-lg bg-purple-500 opacity-20"
                  animate={{ rotate: 3 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Values That Drive Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
              The foundation behind how we design our programs, support our learners, and deliver meaningful outcomes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              description="Staying ahead by embracing emerging technologies and modern learning methods."
              hinglish="Future pehle seekhte hain."
              color="border-blue-500"
            />
            <ValueCard
              icon={GraduationCap}
              title="Excellence"
              description=" Expert-designed programs built to meet the highest industry standards."
              hinglish="Quality jo industry maanta hai."
              color="border-purple-500"
            />
            <ValueCard
              icon={Wrench}
              title="Practical Learning"
              description=" Hands-on learning through real projects and real-world applications."
              hinglish="Seekho karke, sirf padh ke nahi."
              color="border-orange-500"
            />
            <ValueCard
              icon={Rocket}
              title="Student Success"
              description=" Focused on long-term career growth through guidance and industry support."
              hinglish="Tumhari success, humara mission."
              color="border-pink-500"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              What Our Students Say
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Hear from our students about their experiences and success stories
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                animate={{ x: `-${currentSlide * 100}%` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
                  >
                    {testimonials
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((testimonial, index) => (
                        <Testimonial
                          key={`${slideIndex}-${index}`}
                          name={testimonial.name}
                          role={testimonial.role}
                          quote={testimonial.quote}
                          rating={testimonial.rating}
                        />
                      ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 z-10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 z-10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Begin Your Professional Tech Journey
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Access structured learning, expert guidance, and practical exposure built for real-world success.
            </p>
            {/* Decorative icon grid */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <Rocket className="w-5 h-5" />
                <span className="font-medium">Innovation</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">Excellence</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <Zap className="w-5 h-5" />
                <span className="font-medium">Growth</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
