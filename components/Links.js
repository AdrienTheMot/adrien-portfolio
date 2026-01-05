"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Links() {
  const linkClasses =
    "text-cyan-400 hover:text-white hover:scale-110 transition-transform duration-300 flex items-center gap-2";

  return (
    <section className="mt-20 mb-10 flex flex-col items-center gap-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-cyan-400 drop-shadow-lg"
      >
        Connect with Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex gap-10"
      >
        <a
          href="https://github.com/AdrienTheMot"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          <FaGithub size={24} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/adrien-motaharian-0779a1288/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
      </motion.div>
    </section>
  );
}