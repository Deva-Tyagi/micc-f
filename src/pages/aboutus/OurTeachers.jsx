import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Star,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";

const OurTeachers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [expandedCards, setExpandedCards] = useState({});

  const teachers = [
    {
      name: "Miss Kalash",
      designation: "Tutor",
      specialization: "CCA, CCC & O-Level",
      image: "/gallery/g24.jpg",
      description:
        "A dedicated and skilled Tutor responsible for teaching CCA, covering Computer Fundamentals, MS Office, CorelDRAW, Photoshop, and Basics of HTML, C, and Python. She also focuses on CCC and O-Level courses with a student-friendly approach.",
      achievements: [
        "Specialist in CCA & O-Level",
        "Student-Friendly Teaching",
        "Focus on Foundation Skills",
      ],
      rating: 4.8,
    },
    {
      name: "Mr. Prajwal",
      designation: "Head Tutor",
      specialization: "CCA & Tally Prime",
      image: "/gallery/g28.jpg",
      description:
        "As Head Tutor, he plays a key role in academic planning and delivers the CCA course. He is also an expert in Tally Prime with GST, providing industry-oriented training in accounting and taxation software with structured methodology.",
      achievements: [
        "Head Tutor & Academic Planner",
        "Expert in Tally Prime & GST",
        "Industry-Oriented Training",
      ],
      rating: 4.9,
    },
    {
      name: "Miss Aarti",
      designation: "Tutor & Management",
      specialization: "CCA & Administration",
      image: "/gallery/g26.jpg",
      description:
        "Serves as both Tutor and Management, teaching CCA including MS Office, Design, and Programming basics. She actively supports institute administration, ensuring smooth operations and student coordination for a disciplined environment.",
      achievements: [
        "Dual Role: Tutor & Manager",
        "CCA Course Expert",
        "Student Coordination Lead",
      ],
      rating: 4.8,
    },
    {
      name: "Miss Himanshi",
      designation: "Head Tutor",
      specialization: "Advanced Programming",
      image: "/gallery/g25.jpg",
      description:
        "Responsible for delivering foundational and advanced computer education. Beyond CCA, she handles C, Python, C++, Web Development, and MySQL, focusing on logical problem-solving and real-world application for career readiness.",
      achievements: [
        "Advanced Programming Expert",
        "Specializes in C++ & Web Dev",
        "Career-Focused Mentorship",
      ],
      rating: 5.0,
    },
    {
      name: "Miss Maheen",
      designation: "Management",
      specialization: "Institute Operations",
      image: "/gallery/g23.jpg",
      description:
        "Handles overall management and administrative work, including student coordination and scheduling. Her role ensures smooth institute functioning, maintaining a disciplined and organized learning environment for all students.",
      achievements: [
        "Operations & Management Lead",
        "Student Support Specialist",
        "Ensures Disciplined Environment",
      ],
      rating: 4.9,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full backdrop-blur-sm border border-blue-500/20">
              <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-5">
            Meet Our Expert Faculty
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry veterans and academic experts who are passionate
            about shaping the next generation of tech professionals
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image Section */}
                <div className="relative overflow-hidden h-64 sm:h-72">
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 text-white fill-white" />
                    <span className="text-white font-semibold text-sm">
                      {teacher.rating}
                    </span>
                  </div>

                  {/* Specialization Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-blue-500/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <p className="text-white text-xs sm:text-sm font-medium text-center">
                        {teacher.specialization}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-blue-600 text-sm sm:text-base font-medium mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    {teacher.designation}
                  </p>

                  <div className="relative mb-4">
                    <p
                      className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                        expandedCards[index] ? "" : "line-clamp-3"
                      }`}
                    >
                      {teacher.description}
                    </p>
                    {teacher.description.length > 100 && (
                      <button
                        onClick={() =>
                          setExpandedCards((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="text-blue-600 text-xs sm:text-sm font-medium mt-1 flex items-center gap-1 hover:underline focus:outline-none"
                      >
                        {expandedCards[index] ? "Read Less" : "Read More"}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-300 ${
                            expandedCards[index] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {teacher.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm font-medium">Connect</span>
                    </motion.button> */}
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4" />
                    </motion.button> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-lg">
            <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Want to Learn from the Best?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join our courses and get personalized mentorship from industry
              experts
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Courses
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OurTeachers;
