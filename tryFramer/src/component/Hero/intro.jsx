import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const abilities = [
    "Full-Stack Developer",
    "MERN Stack Specialist",
    "UI/UX Enthusiast",
    
  ];
  const [currentAbility, setCurrentAbility] = useState(abilities[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Function to handle CV download
  const downloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the CV file path using Vite's base URL and correct file name
    link.href = '/mycv.pdf';
    
    // Set the download attribute with a custom filename
    link.download = 'Zulkif_Azher_CV.pdf';
    
    // Append to body, click, and remove
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

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < currentAbility.length) {
        setDisplayedText((prev) => prev + currentAbility[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [index, currentAbility]);

  useEffect(() => {
    const abilityChangeInterval = setInterval(() => {
      setIndex(0);
      setDisplayedText("");
      const nextIndex =
        (abilities.indexOf(currentAbility) + 1) % abilities.length;
      setCurrentAbility(abilities[nextIndex]);
    }, 4000);

    return () => clearInterval(abilityChangeInterval);
  }, [currentAbility, abilities]);

  return (
    <motion.div className="space-y-6">
      <motion.h3 
        className="text-2xl lg:text-3xl font-medium text-blue-400"
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
          className="ml-3 text-3xl inline-block origin-bottom"
        >
          👋
        </motion.span>
      </motion.h3>
      
      <motion.h2 
        className="text-4xl lg:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Zulkif Azher
        </span>
      </motion.h2>
      
      <motion.div
        className="text-2xl lg:text-4xl font-bold text-gray-300 min-h-[3rem] lg:min-h-[4rem]"
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
            className="ml-1"
          >
            |
          </motion.span>
        </motion.span>
      </motion.div>
      
      <motion.p 
        className="text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Passionate about creating innovative digital experiences and turning ideas into reality through clean, efficient code. Specializing in MERN stack and modern web technologies.
      </motion.p>
      
      <motion.div
        className="flex gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToPortfolio}
        >
          View My Work
        </motion.button>
        <motion.button
          className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadCV}
        >
          Download CV
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
