"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-15 sm:py-30 rounded-3xl mx-3 scroll-mt-20 px-6 sm:px-10 bg-gray-50 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
          I’m a passionate developer who loves turning ideas into interactive,
          high-performance web applications. My focus is on building modern,
          user-friendly experiences using technologies like React, Next.js, and
          Node.js. I enjoy learning, solving problems, and creating products that make an impact.
        </p>

        {/* Resume Button */}
        <a
          href="/FS-resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white 
          font-medium rounded-md mb-3 shadow-md hover:bg-indigo-700 transition"
        >
          <FiDownload size={18} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
