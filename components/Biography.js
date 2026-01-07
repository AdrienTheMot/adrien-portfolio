"use client";

import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section className="mt-20 px-6 md:px-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 max-w-3xl shadow-[0_0_30px_rgba(0,255,255,0.2)]"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-lg text-center">
          About Me
        </h2>
        <p className="text-zinc-300 leading-relaxed text-lg text-center">
          I am Adrien Motaharian, a Math and Computer Science student at Villanova University with a passion for algorithms, data structures, and building interactive applications. I enjoy designing intuitive software, exploring AI and machine learning projects, and creating visually engaging experiences. With experience in React, Python, and Java, I love turning complex problems into elegant, functional solutions.

          Outside of academics, I am a competitive ski racer, a heavy metal fan and guitarist, and I enjoy staying active through weightlifting and playing soccer for fun. I also love diving into math and computer science problems just for the challenge,whether that means breaking down algorithms, experimenting with new ideas, or pushing a concept as far as it can go.
        </p>
      </motion.div>
    </section>
  );
}