import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-indigo-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-purple-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-16 px-5 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* First Column: Logo, Address, Contact Info, Social Media Icons */}
            <div className="space-y-8">
              <div>
                <a href="/" className="inline-block">
                  <img
                    src="https://placehold.co/200x60/white/white?text=MICC+LOGO"
                    alt="MICC Logo"
                    className="h-10"
                  />
                </a>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-400"></span>
                  Address
                </h4>
                <p className="text-gray-300">
                  123 Mahi Institute, Main Street<br />
                  Education City, Country
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-400"></span>
                  Contact Us
                </h4>
                <p className="text-gray-300 mb-2">Phone: +123 456 7890</p>
                <p className="text-gray-300">Email: miccflyhigh@gmail.com</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-400"></span>
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://www.facebook.com" 
                    className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <Facebook size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com" 
                    className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com" 
                    className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://www.twitter.com" 
                    className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Second Column: Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-400"></span>
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <motion.a 
                    href="/about" 
                    className="text-gray-300 hover:text-white flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    About Us
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="/explore" 
                    className="text-gray-300 hover:text-white flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    Courses Offered
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="/contact" 
                    className="text-gray-300 hover:text-white flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    Contact Us
                  </motion.a>
                </li>
                {/* <li> */}
                  {/* <motion.a 
                    href="/careers" 
                    className="text-gray-300 hover:text-white flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    Careers
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="/blog" 
                    className="text-gray-300 hover:text-white flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    Blog
                  </motion.a> */}
                {/* </li> */}
              </ul>
            </div>

            {/* Third Column: Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-400"></span>
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest news, courses, and educational insights.
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-blue-900/30 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-blue-800/50 my-12"></div>

          {/* Footer Bottom */}
          <div className="flex flex-row md:flex-col justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2024 Mahi Institute. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;