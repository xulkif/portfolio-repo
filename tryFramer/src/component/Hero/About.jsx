import { useEffect, useRef, useState } from "react";
import img from "../../assets/myCS.jpg";
import { motion } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-[var(--color-text-primary)]">
          About{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl"
            >
              👋 Hi there! I'm{" "}
              <span className="font-semibold text-[var(--color-accent-primary)]">Zulkif Azher</span>,
              a full-stack developer who loves building cool things with
              technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              💡 I mostly work with JavaScript to create awesome web apps that
              are both easy to use and work really well. I enjoy turning tough
              problems into smart digital solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              🌱 Always learning new things and looking for exciting projects
              where I can help make a real impact on web development.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass flex items-center gap-2 px-6 py-3 rounded-full text-[var(--color-text-primary)]">
              <span className="text-[var(--color-accent-primary)]">🎯</span>
              <span>Problem Solver</span>
            </div>
            <div className="glass flex items-center gap-2 px-6 py-3 rounded-full text-[var(--color-text-primary)]">
              <span className="text-[var(--color-accent-secondary)]">🚀</span>
              <span>Fast Learner</span>
            </div>
            <div className="glass flex items-center gap-2 px-6 py-3 rounded-full text-[var(--color-text-primary)]">
              <span className="text-green-400">💻</span>
              <span>Code Enthusiast</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={img}
                alt="Zulkif Azher - Full Stack Developer"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
