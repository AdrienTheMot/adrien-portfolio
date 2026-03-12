"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";


const projects = [
  {
    slug: "algorithm-visualizer",
    title: "Algorithm Visualizer",
    description: "Interactive visualization of sorting algorithms and BST operations.",
    tech: ["React", "TypeScript", "Tailwind"],
    demoUrl: "https://algorithm-visualizer-6sfbw5k6j-adrien-motaharians-projects.vercel.app/",
    githubUrl: "https://github.com/AdrienTheMot/algorithm-visualizer",
  },
  {
    slug: "risk-scoring-model",
    title: "Risk Scoring Model",
    description: "Machine learning pipeline for credit default prediction.",
    tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    demoUrl: "https://hub.gesis.mybinder.org/user/adrienthemot-risk-scoring-model-68rb6k7l/lab",
    githubUrl: "https://github.com/AdrienTheMot/risk-scoring-model",
  },
  {
    slug: "spotify-song-recommender",
    title: "Spotify Song Recommender",
    description: "Recommends songs based on loudness, danceability, energy, acoustics, and speechiness using the Spotify API.",
    tech: ["React", "Spotify API", "JavaScript"],
    demoUrl: "https://unrivaled-arithmetic-dbf4e5.netlify.app/",
    githubUrl: "https://github.com/AdrienTheMot/PBCFinalProject-SpotifySongRecommender",
  },
  {
    slug: "leetcode-solutions",
    title: "LeetCode Solutions",
    description: "A curated collection of algorithm and data structure solutions with clean implementations.",
    tech: ["Data Structures", "Algorithms", "Java"],
    githubUrl: "https://github.com/AdrienTheMot/LeetCode",
  },
];

function useTypewriter(text, speed = 80, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

function GlitchText({ children, className = "" }) {
  return (
    <span className={`relative inline-block ${className}`} data-text={children}
      style={{
        fontFamily: "'Share Tech Mono', monospace",
      }}>
      <style>{`
        .glitch-wrap { position: relative; display: inline-block; }
        .glitch-wrap::before,
        .glitch-wrap::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }
        .glitch-wrap::before {
          color: #00ff41;
          animation: glitch1 3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          transform: translate(-2px, -2px);
        }
        .glitch-wrap::after {
          color: #00b4d8;
          animation: glitch2 3s infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
        }
        @keyframes glitch1 {
          0%,94%,100% { transform: translate(0); opacity: 0; }
          95% { transform: translate(-3px, 1px); opacity: 0.8; }
          97% { transform: translate(3px, -1px); opacity: 0.8; }
        }
        @keyframes glitch2 {
          0%,94%,100% { transform: translate(0); opacity: 0; }
          96% { transform: translate(3px, -1px); opacity: 0.7; }
          98% { transform: translate(-3px, 2px); opacity: 0.7; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes flicker {
          0%,100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.4; }
          94% { opacity: 1; }
          96% { opacity: 0.6; }
          97% { opacity: 1; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .scanline-effect {
          position: fixed; top: 0; left: 0; width: 100%; height: 2px;
          background: rgba(0,255,65,0.08);
          animation: scanline 6s linear infinite;
          pointer-events: none; z-index: 9999;
        }
        .crt-flicker { animation: flicker 8s infinite; }
        .matrix-border {
          border: 1px solid rgba(0,255,65,0.3);
          box-shadow: 0 0 10px rgba(0,255,65,0.15), inset 0 0 10px rgba(0,255,65,0.05);
        }
        .matrix-border:hover {
          border-color: rgba(0,255,65,0.7);
          box-shadow: 0 0 25px rgba(0,255,65,0.35), inset 0 0 15px rgba(0,255,65,0.1);
        }
        .green-glow { text-shadow: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41; }
        .subtle-glow { text-shadow: 0 0 8px rgba(0,255,65,0.6); }
        .tag-pill {
          background: rgba(0,255,65,0.07);
          border: 1px solid rgba(0,255,65,0.25);
          color: #4ade80;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 2px;
        }
        .scroll-indicator {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
      <span className="glitch-wrap" data-text={children}>{children}</span>
    </span>
  );
}

function SectionHeader({ children }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span style={{ color: "#00ff41", fontFamily: "'Share Tech Mono', monospace", fontSize: "0.85rem" }}>
        //
      </span>
      <h2 style={{
        fontFamily: "'Share Tech Mono', monospace",
        color: "#00ff41",
        fontSize: "clamp(1.4rem, 3vw, 2rem)",
        letterSpacing: "0.1em",
        textShadow: "0 0 15px rgba(0,255,65,0.5)",
      }}>
        {children}
      </h2>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(0,255,65,0.4), transparent)" }} />
    </div>
  );
}

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 16;
    let cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(0).map(() => Math.random() * -80);

    const tick = () => {
      cols = Math.floor(canvas.width / fontSize);
      while (drops.length < cols) drops.push(Math.random() * -80);

     
      ctx.fillStyle = "rgba(0, 8, 2, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const y = drops[i] * fontSize;
        const brightness = Math.random();

        if (brightness > 0.93) {
          ctx.fillStyle = "#ccffcc"; 
        } else if (brightness > 0.65) {
          ctx.fillStyle = "#00ff41"; 
        } else {
          const g = Math.floor(120 + Math.random() * 100);
          ctx.fillStyle = `rgba(0, ${g}, 30, ${0.4 + Math.random() * 0.5})`;
        }

        ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
        ctx.fillText(char, i * fontSize, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.45 + Math.random() * 0.55;
      }
    };

    const interval = setInterval(tick, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}


function Hero() {
  const [phase, setPhase] = useState(0); 
  const { displayed: nameText, done: nameDone } = useTypewriter("ADRIEN MOTAHARIAN", 70, 1200);
  const { displayed: subText } = useTypewriter(
    "Math + Computer Scientist  //  Villanova University",
    40,
    phase >= 2 ? 0 : 999999
  );
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (nameDone) {
      setTimeout(() => setPhase(2), 300);
      setTimeout(() => setShowCta(true), 2200);
    }
  }, [nameDone]);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* GIF Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/hackler.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.55)",
      }} />

      {/* Dark vignette overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 55% at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.82) 100%)",
        zIndex: 1,
      }} />

      {/* Matrix binary rain */}
      <MatrixRain />

      {/* Scanline shimmer */}
      <div className="scanline-effect" style={{ zIndex: 3 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px" }} className="crt-flicker">

        {/* Boot text */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: "rgba(0,255,65,0.5)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                marginBottom: "24px",
              }}
            >
              {"[ SYSTEM BOOT ] > INITIALIZING..."}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Name */}
        <div style={{ minHeight: "clamp(4rem, 10vw, 7rem)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {phase >= 1 && (
            <h1 style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#00ff41",
              textShadow: "0 0 20px #00ff41, 0 0 40px rgba(0,255,65,0.5)",
              margin: 0,
            }}>
              {nameText}
              {!nameDone && <span className="cursor-blink" style={{ color: "#00ff41" }}>█</span>}
            </h1>
          )}
        </div>

        {/* Subtitle */}
        <div style={{ minHeight: "2rem", marginTop: "12px" }}>
          {phase >= 2 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: "rgba(180,255,200,0.75)",
                fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
                letterSpacing: "0.15em",
              }}
            >
              {subText}
            </motion.p>
          )}
        </div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showCta && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ marginTop: "56px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
            >
              <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(0,255,65,0.45)", fontSize: "0.65rem", letterSpacing: "0.4em" }}>SCROLL</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
              >
                <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(0,255,65,0.5), transparent)" }} />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="rgba(0,255,65,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {showCta && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="scroll-indicator"
          style={{
            position: "absolute", bottom: "32px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          }}
        >
          <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(0,255,65,0.4)", fontSize: "0.65rem", letterSpacing: "0.2em" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(0,255,65,0.4), transparent)" }} />
        </motion.div>
      )}
    </section>
  );
}


function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader>ABOUT_ME</SectionHeader>

        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="about-grid"
        >
          {/* Profile pic */}
          <div style={{
            width: "160px", height: "160px",
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid rgba(0,255,65,0.4)",
            boxShadow: "0 0 25px rgba(0,255,65,0.2)",
            flexShrink: 0,
            position: "relative",
          }}>
            <img
              src="/IMG_7946.jpeg"
              alt="Adrien Motaharian"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9) contrast(1.1)" }}
            />
            {/* green overlay tint */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,255,65,0.06)", mixBlendMode: "screen" }} />
          </div>

          {/* Bio text */}
          <div>
            <p style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "rgba(180,255,200,0.8)",
              lineHeight: 1.9,
              fontSize: "0.9rem",
              margin: "0 0 20px",
            }}>
              Math and Computer Science student at Villanova University with a passion for algorithms, data structures, and building interactive applications. I enjoy designing intuitive software, exploring AI and machine learning, and creating visually engaging experiences.
            </p>
            <p style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "rgba(180,255,200,0.6)",
              lineHeight: 1.9,
              fontSize: "0.85rem",
              margin: 0,
            }}>
              Outside of academics — competitive ski racer, heavy metal fan & guitarist, weightlifter, and soccer enthusiast. I also love diving into math and CS problems just for the challenge.
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["React", "Python", "Java", "Machine Learning", "Algorithms"].map(s => (
                <span key={s} className="tag-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ── PROJECTS SECTION ──────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px 100px", maxWidth: "900px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader>PROJECTS</SectionHeader>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "20px" }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="matrix-border"
            style={{
              background: "rgba(0,10,2,0.85)",
              padding: "28px",
              borderRadius: "4px",
              transition: "all 0.3s",
              cursor: "default",
            }}
          >
            <div style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "rgba(0,255,65,0.35)",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              marginBottom: "8px",
            }}>
              {String(i + 1).padStart(2, "0")} / PROJECT
            </div>
            <h3 style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "#00ff41",
              fontSize: "1.1rem",
              fontWeight: 700,
              margin: "0 0 12px",
              textShadow: "0 0 10px rgba(0,255,65,0.4)",
            }}>
              {project.title}
            </h3>
            <p style={{
              fontFamily: "'Share Tech Mono', monospace",
              color: "rgba(180,255,200,0.65)",
              fontSize: "0.8rem",
              lineHeight: 1.7,
              margin: "0 0 16px",
            }}>
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
              {project.tech.map(t => <span key={t} className="tag-pill">{t}</span>)}
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "#00ff41",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  letterSpacing: "0.15em",
                  borderBottom: "1px solid rgba(0,255,65,0.3)",
                  paddingBottom: "2px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => e.target.style.textShadow = "0 0 8px #00ff41"}
                onMouseLeave={e => e.target.style.textShadow = "none"}
                >
                  DEMO →
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: "rgba(180,255,200,0.5)",
                fontSize: "0.75rem",
                textDecoration: "none",
                letterSpacing: "0.15em",
                borderBottom: "1px solid rgba(0,255,65,0.15)",
                paddingBottom: "2px",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.target.style.color = "#00ff41"; e.target.style.textShadow = "0 0 8px #00ff41"; }}
              onMouseLeave={e => { e.target.style.color = "rgba(180,255,200,0.5)"; e.target.style.textShadow = "none"; }}
              >
                GITHUB →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT SECTION ──────────────────────────────────────────────────────────
function Contact() {
  const [focused, setFocused] = useState(null);
  return (
    <section id="contact" style={{ padding: "80px 24px 120px", maxWidth: "680px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader>CONTACT</SectionHeader>
        <p style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(180,255,200,0.6)", fontSize: "0.85rem", marginBottom: "40px", lineHeight: 1.8 }}>
          Have a question or want to collaborate? Send a transmission below.
        </p>

        <form action="https://formspree.io/f/xkogaryb" method="POST" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { name: "name", type: "text", placeholder: "YOUR_NAME" },
            { name: "email", type: "email", placeholder: "YOUR_EMAIL" },
          ].map(field => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              onFocus={() => setFocused(field.name)}
              onBlur={() => setFocused(null)}
              style={{
                background: "rgba(0,10,2,0.9)",
                border: `1px solid ${focused === field.name ? "rgba(0,255,65,0.7)" : "rgba(0,255,65,0.2)"}`,
                color: "#00ff41",
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "0.85rem",
                padding: "14px 16px",
                outline: "none",
                borderRadius: "3px",
                boxShadow: focused === field.name ? "0 0 15px rgba(0,255,65,0.2)" : "none",
                transition: "all 0.3s",
              }}
            />
          ))}
          <textarea
            name="message"
            placeholder="YOUR_MESSAGE"
            rows={6}
            required
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            style={{
              background: "rgba(0,10,2,0.9)",
              border: `1px solid ${focused === "message" ? "rgba(0,255,65,0.7)" : "rgba(0,255,65,0.2)"}`,
              color: "#00ff41",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "0.85rem",
              padding: "14px 16px",
              outline: "none",
              borderRadius: "3px",
              resize: "vertical",
              boxShadow: focused === "message" ? "0 0 15px rgba(0,255,65,0.2)" : "none",
              transition: "all 0.3s",
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: "8px",
              background: "transparent",
              border: "1px solid rgba(0,255,65,0.5)",
              color: "#00ff41",
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.25em",
              padding: "14px",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 0 12px rgba(0,255,65,0.15)",
            }}
            onMouseEnter={e => { e.target.style.background = "rgba(0,255,65,0.1)"; e.target.style.boxShadow = "0 0 25px rgba(0,255,65,0.35)"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.boxShadow = "0 0 12px rgba(0,255,65,0.15)"; }}
          >
            TRANSMIT_MESSAGE
          </button>
        </form>
      </motion.div>
    </section>
  );
}

// ── FOOTER / LINKS ───────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(0,255,65,0.1)",
      padding: "40px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
      maxWidth: "900px",
      margin: "0 auto",
    }}>
      <span style={{ fontFamily: "'Share Tech Mono', monospace", color: "rgba(0,255,65,0.3)", fontSize: "0.7rem", letterSpacing: "0.15em" }}>
        © 2025 ADRIEN MOTAHARIAN
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        <a href="https://github.com/AdrienTheMot" target="_blank" rel="noopener noreferrer"
          style={{ color: "rgba(0,255,65,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Share Tech Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", transition: "all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#00ff41"; e.currentTarget.style.textShadow = "0 0 8px #00ff41"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(0,255,65,0.45)"; e.currentTarget.style.textShadow = "none"; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/adrien-motaharian-0779a1288/" target="_blank" rel="noopener noreferrer"
          style={{ color: "rgba(0,255,65,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Share Tech Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", transition: "all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.color = "#00ff41"; e.currentTarget.style.textShadow = "0 0 8px #00ff41"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "rgba(0,255,65,0.45)"; e.currentTarget.style.textShadow = "none"; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LINKEDIN
        </a>
      </div>
    </footer>
  );
}

// ── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />

      <div style={{ background: "#000a02", minHeight: "100vh", color: "#00ff41" }}>
        <Hero />

        {/* Content sections sit on a dark matrix-tinted bg */}
        <div style={{
          background: "linear-gradient(to bottom, #000a02 0%, #010f03 100%)",
          position: "relative",
        }}>
          {/* Subtle grid overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <About />
            <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", height: "1px", background: "linear-gradient(to right, transparent, rgba(0,255,65,0.15), transparent)" }} />
            <Projects />
            <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", height: "1px", background: "linear-gradient(to right, transparent, rgba(0,255,65,0.15), transparent)" }} />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
