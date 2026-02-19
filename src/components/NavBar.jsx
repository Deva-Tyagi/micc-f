import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// ─────────────────────────────────────────
// Course data shared between both navbars
// ─────────────────────────────────────────
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
  distanceLearning: [],
};

const categoryDisplayNames = {
  computerCourses: "Computer Courses",
  englishCourses: "English Courses",
  distanceLearning: "Distance Learning",
};

// ─────────────────────────────────────────
// DESKTOP NAVBAR
// ─────────────────────────────────────────
const DesktopNavbar = ({ scrolling }) => {
  const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:flex flex-1 items-center justify-between">
      {/* Center Links */}
      <div className="flex flex-1 justify-center space-x-8">
        <Link to="/" className="text-gray-800 hover:text-blue-600 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-blue-600 transition duration-300">
          About Us
        </Link>
        <Link to="/gallery" className="text-gray-800 hover:text-blue-600 transition duration-300">
          Gallery
        </Link>

        {/* Courses Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsCoursesMenuOpen(!isCoursesMenuOpen)}
            className="courses-button text-gray-800 hover:text-blue-600 transition duration-300 flex items-center"
          >
            Courses Offered
            <span className={`ml-2 text-sm transform transition duration-300 ${isCoursesMenuOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {isCoursesMenuOpen && (
            <div className="courses-dropdown absolute bg-white border border-gray-300 shadow-lg p-4 mt-2 rounded-md z-10 grid grid-cols-4 gap-4 w-[950px] text-left left-1/2 transform -translate-x-1/2">
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">{categoryDisplayNames.computerCourses}</h3>
                <ul className="space-y-2">
                  {courses.computerCourses.slice(0, 6).map((course, index) => (
                    <li key={`comp-1-${index}`}>
                      <Link
                        to={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                        onClick={() => setIsCoursesMenuOpen(false)}
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">{categoryDisplayNames.computerCourses}</h3>
                <ul className="space-y-2">
                  {courses.computerCourses.slice(6).map((course, index) => (
                    <li key={`comp-2-${index}`}>
                      <Link
                        to={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                        onClick={() => setIsCoursesMenuOpen(false)}
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">{categoryDisplayNames.englishCourses}</h3>
                <ul className="space-y-2">
                  {courses.englishCourses.map((course, index) => (
                    <li key={`eng-${index}`}>
                      <Link
                        to={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                        onClick={() => setIsCoursesMenuOpen(false)}
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">{categoryDisplayNames.distanceLearning}</h3>
                <ul className="space-y-2">
                  {courses.distanceLearning.map((course, index) => (
                    <li key={`dist-${index}`}>
                      <Link
                        to={course.link}
                        className="text-sm text-gray-800 hover:text-blue-600 transition duration-300"
                        onClick={() => setIsCoursesMenuOpen(false)}
                      >
                        {course.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
          Contact Us
        </Link>
      </div>

      {/* Right Buttons */}
      <div className="flex space-x-3">
        <Link to="/Explore" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Enroll
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
            className="login-button bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
          >
            Login
            <span className={`ml-2 text-sm transform transition duration-300 ${isLoginMenuOpen ? "rotate-180" : ""}`}>
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
                  <span className="mr-2">🔧</span> Admin Login
                </div>
              </a>
              <a
                href="/student/login"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                onClick={() => setIsLoginMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className="mr-2">🎓</span> Student Login
                </div>
              </a>
            </div>
          )}
        </div>

        <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────
// MOBILE NAVBAR
// Completely separate — uses useNavigate directly,
// no <Link> inside dropdowns, no outside-click listeners,
// no shared state with desktop. Zero interference.
// ─────────────────────────────────────────
const MobileNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Close everything and navigate — called directly on tap
  const goTo = (path) => {
    setIsOpen(false);
    setIsCoursesOpen(false);
    setIsLoginOpen(false);
    navigate(path);
  };

  return (
    <div className="lg:hidden flex items-center">
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 text-2xl focus:outline-none"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            zIndex: 9999,
            overflowY: "auto",
          }}
        >
          {/* Header row inside overlay */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <img src="/photos/logo.png" alt="Logo" style={{ height: 40 }} />
            <button
              onClick={() => setIsOpen(false)}
              style={{ fontSize: 24, color: "#374151", background: "none", border: "none", cursor: "pointer" }}
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div style={{ padding: "20px" }}>

            {/* Home */}
            <button onClick={() => goTo("/")} style={mobileNavItemStyle}>
              Home
            </button>

            {/* About */}
            <button onClick={() => goTo("/about")} style={mobileNavItemStyle}>
              About Us
            </button>

            {/* Gallery */}
            <button onClick={() => goTo("/gallery")} style={mobileNavItemStyle}>
              Gallery
            </button>

            {/* Courses Offered */}
            <div>
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                style={{ ...mobileNavItemStyle, display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span>Courses Offered</span>
                <span style={{ fontSize: 12 }}>{isCoursesOpen ? "▲" : "▼"}</span>
              </button>

              {isCoursesOpen && (
                <div style={{ paddingLeft: 16, borderLeft: "3px solid #3b82f6", marginBottom: 12 }}>
                  {Object.entries(courses).map(([category, items]) =>
                    items.length > 0 ? (
                      <div key={category} style={{ marginBottom: 16 }}>
                        <p style={{ fontWeight: "700", color: "#1f2937", marginBottom: 8, fontSize: 14 }}>
                          {categoryDisplayNames[category]}
                        </p>
                        {items.map((course, index) => (
                          <button
                            key={index}
                            onClick={() => goTo(course.link)}
                            style={mobileCourseItemStyle}
                          >
                            {course.name}
                          </button>
                        ))}
                      </div>
                    ) : null
                  )}
                </div>
              )}
            </div>

            {/* Contact */}
            <button onClick={() => goTo("/contact")} style={mobileNavItemStyle}>
              Contact Us
            </button>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #e5e7eb", margin: "16px 0" }} />

            {/* Enroll */}
            <button
              onClick={() => goTo("/Explore")}
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                backgroundColor: "#2563eb",
                color: "white",
                fontWeight: "600",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                marginBottom: 12,
                fontSize: 16,
              }}
            >
              Enroll
            </button>

            {/* Login Options */}
            <button
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              style={{ ...mobileNavItemStyle, display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <span>Login Options</span>
              <span style={{ fontSize: 12 }}>{isLoginOpen ? "▲" : "▼"}</span>
            </button>

            {isLoginOpen && (
              <div style={{ paddingLeft: 16, marginBottom: 12 }}>
                <button
                  onClick={() => { setIsOpen(false); window.location.href = "/admin/login"; }}
                  style={mobileCourseItemStyle}
                >
                  🔧 Admin Login
                </button>
                <button
                  onClick={() => { setIsOpen(false); window.location.href = "/student/login"; }}
                  style={mobileCourseItemStyle}
                >
                  🎓 Student Login
                </button>
              </div>
            )}

            {/* Sign Up */}
            <button
              onClick={() => goTo("/signup")}
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                backgroundColor: "#7c3aed",
                color: "white",
                fontWeight: "600",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Shared inline styles for mobile menu items
const mobileNavItemStyle = {
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: "14px 4px",
  fontSize: 18,
  fontWeight: "500",
  color: "#1f2937",
  background: "none",
  border: "none",
  borderBottom: "1px solid #f3f4f6",
  cursor: "pointer",
  marginBottom: 4,
};

const mobileCourseItemStyle = {
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: "10px 4px",
  fontSize: 15,
  color: "#374151",
  background: "none",
  border: "none",
  borderBottom: "1px solid #f9fafb",
  cursor: "pointer",
};

// ─────────────────────────────────────────
// MAIN NAVBAR (combines both)
// ─────────────────────────────────────────
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-4 bg-white border-b border-gray-300 sticky top-0 z-50 transition-all duration-300 ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src="/photos/logo.png" alt="Logo" className="h-10 mr-2" />
        </Link>
      </div>

      {/* Desktop Navbar */}
      <DesktopNavbar scrolling={scrolling} />

      {/* Mobile Navbar */}
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;