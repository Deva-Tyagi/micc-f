import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from '.';
import About from './about';
import Contact from './contact';
import ExploreCourses from './Explore';
import Gallery from './gallery/Gallery';

// Import your page components here
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Explore from './pages/Explore';
// Add more imports as needed

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Explore" element={<ExploreCourses />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/courses/:courseName" element={<CourseDetail />} /> */}
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        {/* <Route path="/student/login" element={<StudentLogin />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* Add more routes as needed */}
      </Routes>
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