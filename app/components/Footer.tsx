// Footer.tsx
"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">
          Fidelis Atemie Jumbo
        </h2>

        {/* Social icons */}
        <div className="flex space-x-5 text-gray-600">
          <a
            href="https://github.com/fidjumbo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/fidelis-atemie-jumbo-0416a8357/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/atemsjumbo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:fidatemie@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://wa.me/+2349063391041"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Tech stack line */}
        <p className="text-sm text-gray-600 mt-3">
          Built with{" "}
          <span className="font-semibold text-blue-600">Next.js</span> +{" "}
          <span className="font-semibold text-blue-600">TypeScript</span> +{" "}
          <span className="font-semibold text-blue-600">Tailwind CSS</span>
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2025 Fidelis Atemie Jumbo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
