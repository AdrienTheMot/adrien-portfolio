"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 overflow-hidden">
      
      {/* Glitchy background */}
      <div className="absolute inset-0 bg-black before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:via-purple-500 before:to-pink-500 before:opacity-10 animate-[glitch_10s_ease-in-out_infinite]"></div>
      
      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_20px_cyan]"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHwCcsWz_CFjA/profile-displayphoto-shrink_100_100/B4EZR18myDGgAU-/0/1737145609652?e=1771459200&v=beta&t=VTYpCAvneogImx7qz8-9uMdwOVFvvqBXvpBDmca336c" // <- replace with your picture
          alt="Adrien Motaharian"
          className="w-full h-full object-cover"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          Adrien <span className="text-cyan-400">Motaharian</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-zinc-300 max-w-lg drop-shadow-md">
          Math + Computer Scientist at Villanova University.
        </p>
      </motion.div>
    </section>
  );
}