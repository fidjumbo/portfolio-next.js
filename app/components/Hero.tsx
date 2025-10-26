"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-[40vh] sm:min-h-screen 
      px-6 sm:px-8 pt-30 sm:pt-24 bg-white"
    >
      {/* Container with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Hi, I’m <span className="text-indigo-600">Fidelis Atemie Jumbo</span>
        </h1>

        {/* Profession / Role */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2">
          A Passionate <span className="font-semibold">Full Stack Developer</span>
        </h2>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto mb-6">
          I build fast, scalable, and user-focused web applications with modern technologies.
        </p>

        {/* Talk to Me button */}
        <a
          href="https://wa.me/+2349063391041"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base bg-indigo-600 
          text-white font-medium rounded-md shadow-md hover:bg-indigo-700 transition mb-10 sm:mb-10"
        >
          Talk to Me
          <FiArrowRight className="text-white" size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
