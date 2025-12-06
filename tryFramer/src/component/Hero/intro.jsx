import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const abilities = [
    "Microsoft Power Platform",
    "SharePoint Developer",
    "Power BI Expert",
  ];
  const [currentAbility, setCurrentAbility] = useState(abilities[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Function to handle CV download
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/mycv.pdf'; 
    link.download = 'Zulkif_Azher_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to scroll to portfolio section
  const scrollToPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Effect for typing animation
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < currentAbility.length) {
        setDisplayedText((prev) => prev + currentAbility[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Faster typing speed

    return () => clearInterval(typingInterval);
  }, [index, currentAbility]);

  // Effect for changing abilities
  useEffect(() => {
    const abilityChangeInterval = setInterval(() => {
      setIndex(0); 
      setDisplayedText(""); 
      const nextIndex =
        (abilities.indexOf(currentAbility) + 1) % abilities.length;
      setCurrentAbility(abilities[nextIndex]);
    }, 3000); // Faster rotation

    return () => clearInterval(abilityChangeInterval);
  }, [currentAbility, abilities]);

  return (
    <div className="flex flex-col gap-6">
      <motion.div className="space-y-2">
        <motion.h3 
          className="text-xl font-medium text-[var(--color-accent-primary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi There!
          <motion.span
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 20, -20, 10, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="ml-2 inline-block origin-bottom"
          >
            👋
          </motion.span>
        </motion.h3>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">
            Zulkif Azher
          </span>
        </motion.h2>
        
        <motion.div
          className="text-2xl md:text-4xl font-bold text-[var(--color-text-secondary)] h-16 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.span
            key={currentAbility}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1 text-[var(--color-accent-primary)]"
            >
              |
            </motion.span>
          </motion.span>
        </motion.div>
        
        <motion.p 
          className="text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Passionate about creating innovative digital experiences and turning ideas into reality through clean, efficient code. Specializing in MERN stack and modern web technologies.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPortfolio}
          >
            View My Work
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] font-semibold rounded-full hover:bg-[var(--color-accent-primary)] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV}
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
