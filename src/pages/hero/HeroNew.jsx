import React, { useState, useEffect } from 'react';

const TrainingBanner = () => {
  const [trainers, setTrainers] = useState(0);
  const [courses, setCourses] = useState(0);
  const [branches, setBranches] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const trainerStep = 1000 / steps;
    const courseStep = 30 / steps;
    const branchStep = 25 / steps;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setTrainers(Math.min(Math.floor(trainerStep * currentStep), 1000));
      setCourses(Math.min(Math.floor(courseStep * currentStep), 30));
      setBranches(Math.min(Math.floor(branchStep * currentStep), 25));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-semibold tracking-wide">★ PREMIER INSTITUTION</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                India's No.1
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 leading-tight tracking-tight">
                Training Institute
              </h2>
            </div>

            {/* Subheading with Icon */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">
                100% Placement Assistance
              </p>
            </div>

            {/* Stats Boxes - Premium Design */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Stat 1 */}
              <div className="group relative bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-md border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-white">{trainers}+</p>
                  <p className="text-sm font-medium text-gray-300">Students Trained</p>
                  <div className="h-1 w-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="group relative bg-gradient-to-br from-teal-500/10 to-teal-600/10 backdrop-blur-md border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/10 group-hover:to-teal-600/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-white">{courses}+</p>
                  <p className="text-sm font-medium text-gray-300">Courses Offered</p>
                  <div className="h-1 w-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="group relative bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-white">{branches}+</p>
                  <p className="text-sm font-medium text-gray-300">Expert Instructors</p>
                  <div className="h-1 w-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Course Tags - Premium Style */}
            <div className="space-y-3 pt-6">
              <div className="flex flex-wrap gap-2">
                {['Programming', 'Accounting', 'Graphic Designing', 'Digital Marketing', 'CAD', 'Robotics'].map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {course}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Ethical Hacking', 'Hardware & Networking', 'Soft Skills', 'AI'].map((course, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Video Section - Premium Frame */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-900 border border-white/10">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source 
                    src="/video/mahi-banner.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                
                {/* Premium overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-lg"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TrainingBanner;