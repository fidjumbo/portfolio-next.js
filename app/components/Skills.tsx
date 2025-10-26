"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { RiStackLine } from "react-icons/ri";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Zustand", icon: RiStackLine, color: "#4B5563" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F1502F" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="sm:py-20 py-10 px-6 sm:px-10 bg-white scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
          My Skills
        </h2>

        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-6 text-center sm:text-left">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8 place-items-center">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center w-24 sm:w-28 h-24 sm:h-28 border border-blue-400 bg-gray-100/40 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <Icon
                      className="text-3xl sm:text-4xl mb-2"
                      style={{ color }}
                    />
                    <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">
                      {name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
