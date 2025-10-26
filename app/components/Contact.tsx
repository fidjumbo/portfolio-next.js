"use client";

import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 scroll-mt-20  flex flex-col items-center text-center px-4"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        I’d love to hear from you! reach out via any of the platforms below.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <a
          href="https://www.facebook.com/fidelis.atemie.jumbo.2025"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-blue-500 bg-white hover:bg-blue-500 hover:text-white text-blue-500 transition duration-300"
        >
          <FaFacebook size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/fidelis-atemie-jumbo-0416a8357/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-blue-700 bg-white hover:bg-blue-700 hover:text-white text-blue-700 transition duration-300"
        >
          <FaLinkedin size={28} />
        </a>

        <a
          href="https://wa.me/2349063391041"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-green-500 bg-white hover:bg-green-500 hover:text-white text-green-500 transition duration-300"
        >
          <FaWhatsapp size={28} />
        </a>

        <a
          href="https://github.com/fidjumbo"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-gray-700 bg-white hover:bg-gray-700 hover:text-white text-gray-700 transition duration-300"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://x.com/atemsjumbo"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-black bg-white hover:bg-black hover:text-white text-black transition duration-300"
        >
          <FaXTwitter size={28} />
        </a>

        <a
          href="mailto:fidatemie@gmail.com"
          className="p-3 rounded-full border border-red-500 bg-white hover:bg-red-500 hover:text-white text-red-500 transition duration-300"
        >
          <MdEmail size={28} />
        </a>
      </div>
    </section>
  );
}
