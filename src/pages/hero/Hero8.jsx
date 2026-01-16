import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Shield,
  Calendar,
  Clock,
  Sparkles,
  CheckSquare,
  MousePointer,
  Timer,
  Gift,
} from "lucide-react";

const EnrollmentCTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [remainingTime, setRemainingTime] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0,
  });
  const [benefit, setBenefit] = useState(0);

  const highlights = [
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Learn at your own pace with access to on-demand content",
    },
    {
      icon: Shield,
      title: "Satisfaction Guarantee",
      description: "30-day money-back guarantee if you're not satisfied",
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "One-time payment for permanent access to course materials",
    },
    {
      icon: CheckSquare,
      title: "Personalized Feedback",
      description: "Receive tailored guidance from expert instructors",
    },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const backgroundImage = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(129, 140, 248, 0.35), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setBenefit((prev) => (prev + 1) % highlights.length);
    }, 3800);

    const countdownInterval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-28 md:py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Stronger, darker background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 z-0" />

      {/* Stronger interactive gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ backgroundImage }}
      />

      {/* Strong decorative blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, 70, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE - Main message + CTA */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20"
            >
              <Sparkles className="w-7 h-7 text-yellow-300" />
              <span className="text-white font-medium">Limited Time Offer</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
              variants={itemVariants}
            >
              Master In-Demand Skills
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                Right Now
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-lg"
              variants={itemVariants}
            >
              Join 14,000+ students who transformed their careers with our premium courses
            </motion.p>

            {/* POWERFUL CTA BUTTON */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.a
                href="/enroll"
                className="group relative inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-white via-indigo-50 to-white rounded-full text-indigo-950 font-bold text-xl md:text-2xl shadow-2xl shadow-indigo-700/40 hover:shadow-indigo-700/60 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <span className="relative z-10 flex items-center gap-3">
                  Enroll Now – Only $159
                  <Zap className="w-7 h-7 text-yellow-400 animate-pulse" />
                </span>
              </motion.a>

              {/* Countdown */}
              <motion.div
                className="mt-6 flex items-center gap-4 text-white/90 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Timer className="w-6 h-6" />
                <span>Offer ends in:</span>
                <div className="flex gap-3 font-mono font-bold">
                  {["days", "hours", "minutes", "seconds"].map((unit) => (
                    <motion.span
                      key={unit}
                      className="bg-white/15 px-4 py-2 rounded-lg min-w-[3.5rem] text-center backdrop-blur-sm border border-white/20"
                      whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.25)" }}
                    >
                      {String(remainingTime[unit]).padStart(2, "0")}
                      <span className="text-xs font-normal opacity-80 block">
                        {unit}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Benefits */}
          <motion.div
            className="backdrop-blur-xl bg-white/12 border border-white/25 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/40"
            variants={itemVariants}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Gift className="w-9 h-9 text-yellow-300" />
              <span>What's Included</span>
            </h3>

            <div className="space-y-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === benefit;

                return (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-400 ${
                      isActive
                        ? "bg-white/20 border border-white/30"
                        : "hover:bg-white/10"
                    }`}
                    whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.12)" }}
                    animate={
                      isActive
                        ? {
                            scale: [1, 1.03, 1],
                            transition: { repeat: Infinity, duration: 2.4 },
                          }
                        : {}
                    }
                  >
                    <div
                      className={`p-4 rounded-xl ${
                        isActive ? "bg-white/25" : "bg-white/15"
                      }`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/85 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Price highlight */}
            <motion.div
              className="mt-10 pt-8 border-t border-white/20"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <p className="text-white/80 mb-2 text-lg">Special Launch Price</p>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-extrabold text-white drop-shadow-lg">
                      $159
                    </span>
                    <span className="text-2xl text-white/50 line-through">
                      $199
                    </span>
                    <span className="text-xl font-bold text-emerald-400">
                      20% OFF
                    </span>
                  </div>
                </div>

                <motion.div
                  className="px-6 py-3 bg-white/15 backdrop-blur-sm rounded-full border border-white/30 text-white font-medium"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  Limited Spots Available
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentCTA;