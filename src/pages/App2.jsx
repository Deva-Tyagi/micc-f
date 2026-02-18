import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import Home from ".";
import About from "./about";
import Contact from "./contact";
import ExploreCourses from "./Explore";
import Gallery from "./gallery/Gallery";

// Course pages
import CaaCourse from "./courses/Caa";
import TypingCourse from "./courses/Typing";
import MsCourse from "./courses/Ms";
import AdvMsexelCourse from "./courses/AdvMsexel";
import AccSoftwareCourse from "./courses/AccSoftware";
import WebCourse from "./courses/Web";
import ProgCourse from "./courses/Prog";
import BasicProgCourse from "./courses/BasicProg";
import DesignCourse from "./courses/Design";
import DigitalCourse from "./courses/Digital";
import CccCourse from "./courses/Ccc";
import CtpCourse from "./courses/Ctp";
import VideoCourse from "./courses/Video";
import EnglishCourse from "./courses/English";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Explore" element={<ExploreCourses />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Course Routes */}
          <Route path="/courses/Caa" element={<CaaCourse />} />
          <Route path="/courses/Typing" element={<TypingCourse />} />
          <Route path="/courses/Ms" element={<MsCourse />} />
          <Route path="/courses/AdvMsexel" element={<AdvMsexelCourse />} />
          <Route path="/courses/AccSoftware" element={<AccSoftwareCourse />} />
          <Route path="/courses/Web" element={<WebCourse />} />
          <Route path="/courses/Prog" element={<ProgCourse />} />
          <Route path="/courses/BasicProg" element={<BasicProgCourse />} />
          <Route path="/courses/Design" element={<DesignCourse />} />
          <Route path="/courses/Digital" element={<DigitalCourse />} />
          <Route path="/courses/Ccc" element={<CccCourse />} />
          <Route path="/courses/Ctp" element={<CtpCourse />} />
          <Route path="/courses/Video" element={<VideoCourse />} />
          <Route path="/courses/English" element={<EnglishCourse />} />

          {/* Uncomment when ready */}
          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
          {/* <Route path="/student/login" element={<StudentLogin />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="font-mont bg-light w-full min-h-screen">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;