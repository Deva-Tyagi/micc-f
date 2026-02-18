import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  Clock,
  Zap,
  Star,
  Code,
  Terminal,
  Cpu,
} from "lucide-react";
import EnrollmentForm from "../../components/EnrollmentForm";

const ProgrammingCourseDetail = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animateCount, setAnimateCount] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 2600;

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const countElement = document.getElementById("student-count");
      if (countElement) {
        const rect = countElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
          setAnimateCount(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (animateCount) {
      const duration = 2000,
        interval = 20,
        steps = duration / interval,
        increment = targetCount / steps;
      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
          setCount(targetCount);
          clearInterval(timer);
        } else setCount(Math.floor(currentCount));
      }, interval);
      return () => clearInterval(timer);
    }
  }, [animateCount]);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need programming experience?",
      answer:
        "No prior experience needed. We start with fundamentals and progress to advanced programming concepts.",
    },
    {
      question: "Which languages will I learn?",
      answer:
        "You'll learn C, C++, Java, and Python - covering both foundational and modern programming languages.",
    },
    {
      question: "Will I build real applications?",
      answer:
        "Yes! You'll create multiple projects including console applications, games, and practical utilities.",
    },
    {
      question: "Is certification provided?",
      answer:
        "Yes, you'll receive a certificate upon completion validating your programming proficiency.",
    },
  ];

  const modules = [
    {
      title: "C Programming Fundamentals",
      duration: "2 weeks",
      topics: [
        "C syntax and basics",
        "Control structures",
        "Functions and arrays",
        "Pointers and memory",
      ],
    },
    {
      title: "C++ & Object-Oriented Programming",
      duration: "2 weeks",
      topics: [
        "OOP concepts",
        "Classes and objects",
        "Inheritance and polymorphism",
        "STL basics",
      ],
    },
    {
      title: "Java Programming",
      duration: "2 weeks",
      topics: [
        "Java fundamentals",
        "OOP in Java",
        "Exception handling",
        "Collections framework",
      ],
    },
    {
      title: "Python & Modern Programming",
      duration: "2 weeks",
      topics: [
        "Python syntax",
        "Data structures",
        "File handling",
        "Libraries and modules",
      ],
    },
  ];

  return (
    <>
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-3000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')",
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-gray-900/80"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-8 z-10">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-4">
              <Terminal size={40} className="text-orange-400 mr-3" />
              <h1 className="text-5xl font-extrabold">Programming Courses</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto mt-4 text-gray-200">
              Master C, C++, Java, and Python programming languages
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="text-orange-400 mr-2" size={20} />
                <span>8 Weeks Duration</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="text-orange-400 mr-2" size={20} />
                <span id="student-count">
                  {count.toLocaleString()}+ Students
                </span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="text-orange-400 mr-2" size={20} />
                <span>4.8/5 Rating</span>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <button
                onClick={handleEnrollClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Enroll Now
                  <Zap className="ml-2 group-hover:animate-pulse" size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          <div className="flex items-center">
            <CheckCircle className="mr-2" />
            <span>Enrollment request submitted successfully!</span>
          </div>
        </div>
      )}

      <div className="sticky top-0 bg-white shadow-md z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar space-x-1 py-4">
            {["overview", "curriculum", "benefits", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeTab === tab ? "bg-slate-600 text-white font-semibold" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div
            id="overview"
            className={`transition-opacity duration-500 ${activeTab === "overview" ? "block opacity-100" : "hidden opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div
                className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-4">
                  Course Overview
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Master multiple programming languages including C, C++, Java,
                  and Python. Build a strong foundation in programming logic and
                  problem-solving.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-slate-600 mb-2">
                      <Code size={20} className="mr-2" />
                      <h3 className="font-semibold">4 Languages</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      C, C++, Java, Python
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-slate-600 mb-2">
                      <Terminal size={20} className="mr-2" />
                      <h3 className="font-semibold">Hands-on</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Real projects</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-slate-600 mb-2">
                      <Cpu size={20} className="mr-2" />
                      <h3 className="font-semibold">Problem Solving</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Logic building</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-slate-600 mb-2">
                      <Award size={20} className="mr-2" />
                      <h3 className="font-semibold">Certificate</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Upon completion</p>
                  </div>
                </div>
              </div>
              <div
                className={`relative transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="Programming"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                What You Will Learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-slate-500 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Code className="text-slate-500 mr-3" size={24} />
                    Core Programming
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "C & C++ fundamentals",
                      "Object-oriented programming",
                      "Data structures",
                      "Memory management",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className="text-green-500 mr-2 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Terminal className="text-orange-500 mr-3" size={24} />
                    Modern Languages
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Java programming",
                      "Python development",
                      "Problem solving",
                      "Real-world projects",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle
                          className="text-green-500 mr-2 flex-shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            id="curriculum"
            className={`transition-opacity duration-500 ${activeTab === "curriculum" ? "block opacity-100" : "hidden opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Course Curriculum
            </h2>
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 border-l-4 border-slate-500">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Module {index + 1}: {module.title}
                      </h3>
                      <div className="flex items-center text-slate-600">
                        <Clock size={18} className="mr-2" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start">
                          <CheckCircle
                            className="text-green-500 mr-2 flex-shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-lg border border-slate-100">
              <div className="flex items-start">
                <div className="bg-slate-500 p-3 rounded-full text-white mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Final Assessment & Certification
                  </h3>
                  <p className="text-gray-600">
                    Complete programming projects in all four languages to
                    demonstrate your proficiency and earn your certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="benefits"
            className={`transition-opacity duration-500 ${activeTab === "benefits" ? "block opacity-100" : "hidden opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Why Choose This Course?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code size={40} className="text-slate-500" />,
                  title: "Multiple Languages",
                  description:
                    "Learn 4 essential programming languages in one comprehensive course.",
                },
                {
                  icon: <Terminal size={40} className="text-orange-500" />,
                  title: "Practical Skills",
                  description:
                    "Build real applications and solve actual programming challenges.",
                },
                {
                  icon: <Cpu size={40} className="text-blue-500" />,
                  title: "Problem Solving",
                  description:
                    "Develop strong logical thinking and algorithmic problem-solving skills.",
                },
                {
                  icon: <Users size={40} className="text-purple-500" />,
                  title: "Career Ready",
                  description:
                    "Gain skills required for software development and programming roles.",
                },
                {
                  icon: <Award size={40} className="text-yellow-500" />,
                  title: "Certification",
                  description:
                    "Earn a certificate validating your programming expertise.",
                },
                {
                  icon: <Zap size={40} className="text-red-500" />,
                  title: "Strong Foundation",
                  description:
                    "Build a solid programming foundation applicable to any language.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="faq"
            className={`transition-opacity duration-500 ${activeTab === "faq" ? "block opacity-100" : "hidden opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-slate-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${expandedFaq === index ? "max-h-40 py-4" : "max-h-0 py-0"}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Master Programming?
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Join thousands of students who have launched their programming
            careers with our comprehensive multi-language program.
          </p>
          <button
            onClick={handleEnrollClick}
            className="group relative px-8 py-4 bg-white text-slate-600 font-bold rounded-lg shadow-lg hover:bg-slate-50 transition-all duration-300"
          >
            <span className="flex items-center">
              Enroll Now
              <Zap className="ml-2 group-hover:animate-pulse" size={20} />
            </span>
          </button>
        </div>
      </section>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Enrollment Form */}
      <EnrollmentForm
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        courseName="Programming Courses"
      />
    </>
  );
};

export default ProgrammingCourseDetail;
