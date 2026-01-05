"use client";

import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <section className="mt-20 px-6 md:px-20 pb-20 flex flex-col items-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-lg"
      >
        Contact Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-zinc-300 mb-10 max-w-3xl text-center"
      >
        Have a question or want to collaborate? Fill out the form below and I’ll get back to you as soon as possible!
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        action="https://formspree.io/f/xkogaryb" 
        method="POST"
        className="flex flex-col w-full max-w-xl gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:border-cyan-400 focus:outline-none shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:border-cyan-400 focus:outline-none shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:border-cyan-400 focus:outline-none shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05, textShadow: "0 0 8px #00ffff", boxShadow: "0 0 20px #00ffff" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-4 px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg relative overflow-hidden"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}