"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Chat App",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Socket.io",
      "Zustand",
    ],
    github: "https://github.com/fidjumbo/mern-chat-app",
    live: "https://chat-app-lb4r.onrender.com/",
    image: "/images/chat-app.png",
  },
  {
    title: "Music Streaming App",
    techStack: [
      "TypeScript",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Clerk",
    ],
    github: "https://github.com/fidjumbo/music-streaming-app",
    live: "https://music-streaming-app-2.onrender.com/",
    image: "/images/music-streaming.png",
  },
  {
    title: "Social Media",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Clerk",
      "Tailwind",
    ],
    github: "https://github.com/fidjumbo/social-media-app-nextjs",
    live: "https://socialmediafj.vercel.app/",
    image: "/images/social-media.png",
  },
  {
    title: "Product Store",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind",
      "Zustand",
    ],
    github: "https://github.com/fidjumbo/product-store",
    live: "https://product-store-qcmk.onrender.com/",
    image: "/images/product-store.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-24 px-6 sm:px-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.02 }}
              className="border border-blue-300 bg-gray-50/60 rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-700 border border-blue-400 rounded-md px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-blue-500 text-blue-500 text-sm py-2 rounded-lg hover:bg-blue-50 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
