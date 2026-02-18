import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/NavBar';  // adjust path to match your structure
import Footer from '../components/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="font-mont bg-light w-full min-h-screen flex flex-col">
      <Navbar />

      {/* Animate ONLY the page content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}           // key change triggers exit/enter
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}