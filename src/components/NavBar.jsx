import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Static courses data
  const courses = {
    computerCourses: [
      { name: "Certification in Computer Applications", link: "/courses/Caa" },
      { name: "Typing Course", link: "/courses/Typing" },
      { name: "MS Office", link: "/courses/Ms" },
      { name: "Advanced MS Excel", link: "/courses/AdvMsexel" },
      { name: "Accounting Software Course", link: "/courses/AccSoftware" },
      { name: "Web Development", link: "/courses/Web" },
      { name: "Programming Courses", link: "/courses/Prog" },
      { name: "Basic Programming", link: "/courses/BasicProg" },
      { name: "Design and Editing Course", link: "/courses/Design" },
      { name: "Digital Marketing", link: "/courses/Digital" },
      { name: "CCC and O-Level by NIELET", link: "/courses/Ccc" },
      { name: "Computer Technology Program (CTP)", link: "/courses/Ctp" },
      { name: "Video Editing", link: "/courses/Video" },
    ],
    englishCourses: [{ name: "English Speaking", link: "/courses/English" }],
    distanceLearning: [
      // Currently no distance learning courses available
    ],
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".courses-dropdown") &&
        !event.target.closest(".courses-button")
      ) {
        setIsCoursesMenuOpen(false);
      }
      if (
        !event.target.closest(".login-dropdown") &&
        !event.target.closest(".login-button")
      ) {
        setIsLoginMenuOpen(false);
      }
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".mobile-toggle")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categoryDisplayNames = {
    computerCourses: "Computer Courses",
    englishCourses: "English Courses",
    distanceLearning: "Distance Learning",
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 bg-white border-b border-gray-300 sticky top-0 z-50 transition-opacity duration-300 ${
        scrolling ? "opacity-70" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img src="/photos/logo.png" alt="Logo" className="w-30 h-10 mr-2" />
        </a>
        <span className="text-xl font-bold text-gray-800">MICC</span>
      </div>

      {/* Desktop Menu - center links */}
      <div className="hidden lg:flex flex-1 justify-center space-x-8">
        <a
          href="/"
          className="text-gray-800 hover:text-blue-600 transition duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-gray-800 hover:text-blue-600 transition duration-300"
        >
          About Us
        </a>

        <a
          href="/gallery"
          className="text-gray-800 hover:text-blue-600 transition duration-300"
        >
          Gallery
        </a>

        {/* Courses Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsCoursesMenuOpen(!isCoursesMenuOpen)}
            className="courses-button text-gray-800 hover:text-blue-600 transition duration-300 flex items-center"
          >
            Courses Offered
            <span
              className={`ml-2 text-sm transform transition duration-300 ${
                isCoursesMenuOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isCoursesMenuOpen && (
            <div className="courses-dropdown absolute bg-white border border-gray-300 shadow-lg p-4 mt-2 rounded-md z-10 grid grid-cols-4 gap-4 w-[950px] text-left left-1/2 transform -translate-x-1/2">
              {/* Computer Courses - split into 2 columns */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  {categoryDisplayNames.computerCourses}
                </h3>
                <ul className="space-y-2">
                  {courses.computerCourses.slice(0, 6).map((course, index) => (
                    <li key={`comp-1-${index}`}>
                      <a
                        href={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                      >
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  {categoryDisplayNames.computerCourses}
                </h3>
                <ul className="space-y-2">
                  {courses.computerCourses.slice(6).map((course, index) => (
                    <li key={`comp-2-${index}`}>
                      <a
                        href={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                      >
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* English Courses */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  {categoryDisplayNames.englishCourses}
                </h3>
                <ul className="space-y-2">
                  {courses.englishCourses.map((course, index) => (
                    <li key={`eng-${index}`}>
                      <a
                        href={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                      >
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Distance Learning */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  {categoryDisplayNames.distanceLearning}
                </h3>
                <ul className="space-y-2">
                  {courses.distanceLearning.map((course, index) => (
                    <li key={`dist-${index}`}>
                      <a
                        href={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                      >
                        {course.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <a
          href="/contact"
          className="text-gray-800 hover:text-blue-600 transition duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Desktop Right Buttons */}
      <div className="hidden lg:flex space-x-3">
        <a
          href="/Explore"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Enroll
        </a>

        <div className="relative">
          <button
            onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
            className="login-button bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
          >
            Login
            <span
              className={`ml-2 text-sm transform transition duration-300 ${
                isLoginMenuOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isLoginMenuOpen && (
            <div className="login-dropdown absolute right-0 bg-white border border-gray-300 shadow-lg mt-2 rounded-md z-10 w-48">
              <a
                href="/admin/login"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-green-600 transition duration-300 border-b border-gray-200"
                onClick={() => setIsLoginMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className="mr-2">🔧</span>
                  Admin Login
                </div>
              </a>
              <a
                href="/student/login"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                onClick={() => setIsLoginMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className="mr-2">🎓</span>
                  Student Login
                </div>
              </a>
            </div>
          )}
        </div>

        <a
          href="/signup"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Sign Up
        </a>
      </div>

      {/* Mobile Hamburger - only visible on mobile */}
      <button
        className="lg:hidden text-gray-800 text-2xl mobile-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="/"
                className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsCoursesMenuOpen(!isCoursesMenuOpen)}
                className="text-gray-800 hover:text-blue-600 transition duration-300 flex items-center text-xl w-full text-left"
              >
                Courses Offered
                <span
                  className={`ml-2 text-sm transform transition duration-300 ${
                    isCoursesMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {isCoursesMenuOpen && (
                <div className="mt-4 pl-4 border-l-2 border-gray-200">
                  {Object.entries(courses).map(([category, items]) => (
                    <div key={category} className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">
                        {categoryDisplayNames[category]}
                      </h4>
                      <ul className="space-y-2">
                        {items.map((course, index) => (
                          <li key={index}>
                            <a
                              href={course.link}
                              className="text-gray-700 hover:text-blue-600"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsCoursesMenuOpen(false);
                              }}
                            >
                              {course.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-800 hover:text-blue-600 transition duration-300 text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>

            {/* Mobile buttons */}
            <div className="pt-4 border-t flex flex-col space-y-4">
              <a
                href="/Explore"
                className="bg-blue-600 text-white py-3 rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enroll
              </a>

              <button
                onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
                className="text-gray-800 hover:text-green-600 text-xl flex items-center justify-between w-full"
              >
                <span>Login Options</span>
                <span
                  className={`transform transition ${isLoginMenuOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {isLoginMenuOpen && (
                <div className="pl-4 space-y-3">
                  <a
                    href="/admin/login"
                    className="block hover:text-green-600"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoginMenuOpen(false);
                    }}
                  >
                    Admin Login
                  </a>
                  <a
                    href="/student/login"
                    className="block hover:text-blue-600"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsLoginMenuOpen(false);
                    }}
                  >
                    Student Login
                  </a>
                </div>
              )}

              <a
                href="/signup"
                className="bg-purple-600 text-white py-3 rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
