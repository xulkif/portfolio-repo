import MovingBackground from "./background";
import { motion } from "framer-motion";
import Intro from "./intro";
import img2 from "../../assets/boitumelo-o_tcYADlSt8-unsplash.jpg";
import About from "./About";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";



export default function Hero() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg-primary)]">
        <MovingBackground />
        
        {/* Background Text Animation */}
        <motion.div
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none select-none z-0"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <h1 className="text-[10rem] md:text-[15rem] font-bold text-white/[0.02] whitespace-nowrap leading-none">
            FULL-STACK DEVELOPER
          </h1>
        </motion.div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex-1 w-full lg:w-1/2"
            >
              <Intro />
            </motion.div>
            
            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="hidden md:flex flex-1 justify-center lg:justify-end"
            >
              <div className="relative group w-72 h-72 md:w-96 md:h-96">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    src={img2}
                    alt="Zulkif Azher"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-[var(--color-accent-primary)] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[var(--color-bg-secondary)]">
        <About />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-[var(--color-bg-primary)]">
        <Portfolio />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[var(--color-bg-secondary)]">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[var(--color-bg-primary)]">
        <Contact />
      </section>
    </div>
  );
}

