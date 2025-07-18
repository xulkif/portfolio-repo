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
    <section className="flex flex-col gap-0  ">
      {/* Hero Section */}
      <section id="home" className="relative  h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-6 overflow-hidden">
        <MovingBackground />
           <motion.div
            className="absolute top-[50%]"
            initial={{ x: "100vw" }}
            animate={{ x: "-100vw" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <h1 className="lg:text-2xl sm:text-md font-bold text-blue-400/60 opacity-30">
              FULL-STACK DEVELOPER <br/> with modern UI
            </h1>
          </motion.div>
        <div className="relative   flex items-center justify-center h-full px-4 ">
       
          
          <div className="text-white flex flex-col md:flex-row justify-between items-center   ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex-1"
            >
              <Intro />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className=" flex-1 flex justify-center "
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  className="relative w-80 h-80 lg:w-96 lg:h-96 bg-cover object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  src={`${img2}`}
                  alt="Zulkif Azher"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen w-full bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
      >
        <About />
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="min-h-screen w-full bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Portfolio />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="min-h-screen w-full bg-gradient-to-br from-neutral-900 to-purple-900 text-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </section>
  );
}

