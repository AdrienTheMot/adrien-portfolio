"use client";

import { motion } from "framer-motion";

export const projects = [
  {
    slug: "algorithm-visualizer",
    title: "Algorithm Visualizer",
    description:
      "Interactive visualization of sorting algorithms and BST operations.",
    tech: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://algorithm-visualizer-6sfbw5k6j-adrien-motaharians-projects.vercel.app/",
    githubUrl: "https://github.com/AdrienTheMot/algorithm-visualizer",
  },
  {
    slug: "risk-scoring-model",
    title: "Risk Scoring Model",
    description:
      "Machine learning pipeline for credit default prediction.",
    tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    demoUrl: "https://hub.gesis.mybinder.org/user/adrienthemot-risk-scoring-model-68rb6k7l/lab",
    githubUrl: "https://github.com/AdrienTheMot/risk-scoring-model",
  },
  {
    slug: "spotify-song-recommender",
    title: "Spotify Song Recommender",
    description:
      "Recommends songs based on loudness, danceability, energy, acoustics, and speechiness using the Spotify API.",
    tech: ["React", "Spotify API", "JavaScript"],
    demoUrl: "https://unrivaled-arithmetic-dbf4e5.netlify.app/", 
    githubUrl: "https://github.com/AdrienTheMot/PBCFinalProject-SpotifySongRecommender",
  },
  {
    slug: "leetcode-solutions",
    title: "LeetCode Solutions",
    description:
      "A curated collection of algorithm and data structure solutions with clean implementations.",
    tech: ["Data Structures", "Algorithms", "Java"],
    githubUrl: "https://github.com/AdrienTheMot/LeetCode",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mt-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-cyan-400 drop-shadow-lg">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-cyan-400 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            <h3 className="text-2xl font-semibold text-white drop-shadow-md">
              {project.title}
            </h3>
            <p className="mt-2 text-zinc-300">{project.description}</p>
            <p className="mt-2 text-sm text-zinc-500">
              Tech: {project.tech.join(", ")}
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}