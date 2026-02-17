import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Clock,
  ChevronRight,
  Search,
  GraduationCap,
  Award,
  BookOpen,
  ArrowRight,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";

function ExploreCourses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [faqStates, setFaqStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const categories = [
    { name: "All", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Office", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Programming", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Design", icon: <Award className="w-5 h-5" /> },
  ];

  const courses = [
    {
      id: 1,
      title: "Certification in Computer Applications",
      description:
        "Learn the essentials of computer applications including word processing, spreadsheets, and presentations.",
      duration: "6 weeks",
      category: "Office",
      link: "/courses/Caa",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Typing Course",
      description:
        "Improve your typing speed and accuracy with practical typing exercises and techniques.",
      duration: "4 weeks",
      category: "Office",
      link: "/courses/Typing",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "MS Office",
      description:
        "Master MS Office applications such as Word, Excel, and PowerPoint for everyday tasks.",
      duration: "6 weeks",
      category: "Office",
      link: "/courses/Ms",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Advanced MS Excel",
      description:
        "Learn advanced Excel functions, formulas, and data analysis techniques.",
      duration: "5 weeks",
      category: "Office",
      link: "/courses/AdvMsexel",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Accounting Software Course",
      description:
        "Get hands-on experience with popular accounting software for managing financial records.",
      duration: "8 weeks",
      category: "Office",
      link: "/courses/AccSoftware",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Web Development",
      description:
        "Master web development skills including HTML, CSS, JavaScript, and frameworks like React.",
      duration: "12 weeks",
      category: "Programming",
      link: "/courses/Web",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 7,
      title: "Programming Courses",
      description:
        "Learn programming languages like Python, Java, C++, and more to build software applications.",
      duration: "14 weeks",
      category: "Programming",
      link: "/courses/Prog",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      title: "Basic Programming",
      description:
        "Start your programming journey with foundational concepts, including variables, loops, and logic.",
      duration: "10 weeks",
      category: "Programming",
      link: "/courses/BasicProg",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 9,
      title: "Design and Editing Course",
      description:
        "Learn graphic design, video editing, and photo manipulation using industry-standard tools.",
      duration: "10 weeks",
      category: "Design",
      link: "/courses/Design",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 10,
      title: "Digital Marketing",
      description:
        "Learn digital marketing strategies including SEO, SEM, social media marketing, and email campaigns.",
      duration: "10 weeks",
      category: "Design",
      link: "/courses/Digital",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 11,
      title: "CCC and O-Level by NIELET",
      description:
        "Get certified in CCC and O-Level courses by NIELET for foundational computer knowledge.",
      duration: "8 weeks",
      category: "Office",
      link: "/courses/Ccc",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 12,
      title: "Computer Technology Program (CTP)",
      description:
        "Learn about the latest in computer technology, hardware, and software applications.",
      duration: "12 weeks",
      category: "Programming",
      link: "/courses/Ctp",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 13,
      title: "Video Editing",
      description:
        "Master video editing techniques using tools like Adobe Premiere Pro and Final Cut Pro.",
      duration: "8 weeks",
      category: "Design",
      link: "/courses/Video",
      image:
        "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 14,
      title: "English Speaking",
      description:
        "Improve your spoken English skills and build confidence for communication in various situations.",
      duration: "6 weeks",
      category: "Office",
      link: "/courses/English",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  useEffect(() => {
    const results = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setFilteredCourses(results);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    setFilteredCourses(courses);
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-40 -right-24 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-16 h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-lg rounded-2xl rotate-12 hidden md:block"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-lg rounded-2xl -rotate-12 hidden md:block"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left content */}
            <div className="w-full lg:w-3/5 z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-blue-100 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-300" />
                <span>TRANSFORM YOUR FUTURE TODAY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Elevate Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Career
                </span>{" "}
                With Expert-Led Courses
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl">
                Join over 10,000 students who have transformed their careers
                with our industry-recognized courses designed for real-world
                success.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">
                    10,000+ Students
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">
                    Industry Recognized
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">
                    Expert Instructors
                  </span>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-300 flex-shrink-0" />
                  <span>Industry recognized</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-300 flex-shrink-0" />
                  <span>Expert instructors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-300 flex-shrink-0" />
                  <span>Lifetime access</span>
                </div>
              </div>
            </div>

            {/* Right content - Featured course card */}
            <div className="w-full lg:w-2/5 z-10">
              <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20 transform hover:rotate-0 transition-transform duration-300">
                <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Featured Course"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 sm:p-4">
                    <span className="text-white font-bold text-sm sm:text-base">
                      Most Popular Course
                    </span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Web Development Masterclass
                </h3>
                <p className="text-blue-100 mb-4 text-xs sm:text-sm">
                  Master modern web development with hands-on projects and
                  real-world applications.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-200" />
                    <span className="text-blue-200 text-xs sm:text-sm">
                      12 weeks
                    </span>
                  </div>
                  <a
                    href="#courses"
                    className="text-white font-medium text-xs sm:text-sm hover:text-blue-200 transition-colors flex items-center"
                  >
                    View Details
                    <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
          >
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Course Section */}
      <section
        id="courses"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Professional Courses
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose from our wide range of courses designed to help you master
            in-demand skills and advance your career.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch lg:items-center">
            <div className="relative w-full lg:w-2/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 text-sm sm:text-base text-gray-900 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm sm:text-base flex-shrink-0 ${
                    selectedCategory === category.name
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                  {course.category}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center text-gray-500 mb-4 sm:mb-6">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{course.duration}</span>
                </div>

                <a
                  href={course.link || "/courses/not-found"}
                  className="flex items-center justify-between w-full px-3 sm:px-4 py-2 bg-gray-100 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300 group text-sm sm:text-base"
                >
                  <span>View Course Details</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-4">
              No courses found
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Find answers to common questions about our courses and learning
              process.
            </p>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I enroll in a course?",
                answer:
                  "You can enroll in any course by clicking on the 'View Course Details' button and following the enrollment instructions on the course page. Our enrollment process is simple and takes less than 2 minutes to complete.",
                icon: (
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                ),
              },
              {
                question: "Are certificates provided upon completion?",
                answer:
                  "Yes, we provide industry-recognized certificates for all courses upon successful completion of the course requirements and assessments. These certificates can be added to your LinkedIn profile and resume to showcase your skills.",
                icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
              },
              {
                question: "Can I access the course materials after completion?",
                answer:
                  "Yes, you will have lifetime access to all course materials after completion, allowing you to revisit the content whenever needed. This includes all videos, downloadable resources, and future updates to the course.",
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
              },
              {
                question: "What if I'm not satisfied with the course?",
                answer:
                  "We offer a 30-day money-back guarantee for all our courses. If you're not satisfied with the course content or experience, you can request a full refund within 30 days of enrollment.",
                icon: (
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                ),
              },
              {
                question: "Do you offer any discounts for multiple courses?",
                answer:
                  "Yes, we offer bundle discounts when you enroll in multiple courses. You can save up to 30% when purchasing course bundles. Check our special offers page for current promotions.",
                icon: (
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                ),
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden mb-3 sm:mb-4 transform transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => {
                    const newFaqStates = [...faqStates];
                    newFaqStates[index] = !newFaqStates[index];
                    setFaqStates(newFaqStates);
                  }}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center flex-1 min-w-0 mr-2">
                    <div className="mr-3 sm:mr-4 p-2 bg-blue-50 rounded-full flex-shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 flex-shrink-0 ${
                      faqStates[index] ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  </div>
                </button>
                <div
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    faqStates[index]
                      ? "max-h-96 pb-4 sm:pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreCourses;
