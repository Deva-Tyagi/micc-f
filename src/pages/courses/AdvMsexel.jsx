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
  BarChart2,
  TrendingUp,
  Database,
} from "lucide-react";
import EnrollmentForm from "../../components/EnrollmentForm";

const AdvMsExcelCourseDetail = () => {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animateCount, setAnimateCount] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 3200;

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
      question: "Do I need basic Excel knowledge?",
      answer:
        "Basic Excel familiarity is recommended but not required. We cover fundamentals before advancing to complex topics.",
    },
    {
      question: "What advanced features will I learn?",
      answer:
        "You'll master pivot tables, advanced formulas, macros, data analysis tools, Power Query, and dashboard creation.",
    },
    {
      question: "Are there practical projects?",
      answer:
        "Yes! The course includes real-world data analysis projects, financial modeling, and business reporting scenarios.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, upon completion you'll receive a certificate validating your advanced Excel proficiency.",
    },
  ];

  const modules = [
    {
      title: "Advanced Formulas & Functions",
      duration: "2 weeks",
      topics: [
        "VLOOKUP, HLOOKUP, INDEX-MATCH",
        "Logical functions (IF, AND, OR)",
        "Text and date functions",
        "Array formulas",
      ],
    },
    {
      title: "Data Analysis & Pivot Tables",
      duration: "2 weeks",
      topics: [
        "Pivot tables and pivot charts",
        "Data consolidation",
        "What-if analysis",
        "Goal seek and solver",
      ],
    },
    {
      title: "Automation & Macros",
      duration: "1.5 weeks",
      topics: [
        "Recording and editing macros",
        "VBA basics",
        "Automating repetitive tasks",
        "Custom functions",
      ],
    },
    {
      title: "Power Tools & Dashboards",
      duration: "1.5 weeks",
      topics: [
        "Power Query for data transformation",
        "Power Pivot for data modeling",
        "Interactive dashboards",
        "Professional reporting",
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
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')",
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/80"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-8 z-10">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-4">
              <BarChart2 size={40} className="text-orange-400 mr-3" />
              <h1 className="text-5xl font-extrabold">Advanced MS Excel</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto mt-4 text-gray-200">
              Master advanced Excel for data analysis, automation, and business
              intelligence
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="text-orange-400 mr-2" size={20} />
                <span>7 Weeks Duration</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="text-orange-400 mr-2" size={20} />
                <span id="student-count">
                  {count.toLocaleString()}+ Students
                </span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="text-orange-400 mr-2" size={20} />
                <span>4.9/5 Rating</span>
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
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeTab === tab ? "bg-emerald-600 text-white font-semibold" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
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
                  Take your Excel skills to the next level with advanced
                  formulas, pivot tables, macros, and data analysis tools.
                  Perfect for data analysts, financial professionals, and
                  business users.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 mb-2">
                      <BarChart2 size={20} className="mr-2" />
                      <h3 className="font-semibold">Data Analysis</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Advanced techniques</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 mb-2">
                      <TrendingUp size={20} className="mr-2" />
                      <h3 className="font-semibold">Automation</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Macros & VBA</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 mb-2">
                      <Database size={20} className="mr-2" />
                      <h3 className="font-semibold">Power Tools</h3>
                    </div>
                    <p className="text-gray-600 text-sm">Query & Pivot</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 mb-2">
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                  alt="Advanced Excel"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                What You Will Learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BarChart2 className="text-emerald-500 mr-3" size={24} />
                    Advanced Analysis
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Advanced formulas & functions",
                      "Pivot tables & charts",
                      "Data consolidation",
                      "What-if analysis tools",
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
                    <Zap className="text-orange-500 mr-3" size={24} />
                    Automation & Power
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Macros & VBA programming",
                      "Power Query & Power Pivot",
                      "Dashboard creation",
                      "Business intelligence",
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
                  <div className="p-6 border-l-4 border-emerald-500">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Module {index + 1}: {module.title}
                      </h3>
                      <div className="flex items-center text-emerald-600">
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
            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-100">
              <div className="flex items-start">
                <div className="bg-emerald-500 p-3 rounded-full text-white mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Final Assessment & Certification
                  </h3>
                  <p className="text-gray-600">
                    Complete advanced Excel projects demonstrating mastery of
                    data analysis, automation, and business intelligence to earn
                    your certificate.
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
                  icon: <BarChart2 size={40} className="text-emerald-500" />,
                  title: "Data Mastery",
                  description:
                    "Master advanced data analysis techniques used by professionals worldwide.",
                },
                {
                  icon: <Zap size={40} className="text-orange-500" />,
                  title: "Automation Skills",
                  description:
                    "Learn to automate tasks with macros and VBA, saving hours of manual work.",
                },
                {
                  icon: <Database size={40} className="text-blue-500" />,
                  title: "Power Tools",
                  description:
                    "Harness Power Query and Power Pivot for enterprise-level data management.",
                },
                {
                  icon: <TrendingUp size={40} className="text-purple-500" />,
                  title: "Career Growth",
                  description:
                    "Advanced Excel skills are highly valued across industries and roles.",
                },
                {
                  icon: <Award size={40} className="text-yellow-500" />,
                  title: "Certification",
                  description:
                    "Earn a certificate proving your advanced Excel expertise to employers.",
                },
                {
                  icon: <BookOpen size={40} className="text-red-500" />,
                  title: "Real Projects",
                  description:
                    "Work on actual business scenarios and data analysis challenges.",
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
                      <ChevronUp className="text-emerald-500" />
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

      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Master Advanced Excel?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join thousands of professionals who have transformed their data
            analysis capabilities with advanced Excel skills.
          </p>
          <button
            onClick={handleEnrollClick}
            className="group relative px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg shadow-lg hover:bg-emerald-50 transition-all duration-300"
          >
            <span className="flex items-center">
              Enroll Now
              <Zap className="ml-2 group-hover:animate-pulse" size={20} />
            </span>
          </button>
        </div>
      </section>

      {/* Enrollment Form */}
      <EnrollmentForm
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        courseName="Advanced MS Excel"
      />
    </>
  );
};

export default AdvMsExcelCourseDetail;
