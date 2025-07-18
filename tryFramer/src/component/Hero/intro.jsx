import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const abilities = [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "node js, react js ",
  ];
  const [currentAbility, setCurrentAbility] = useState(abilities[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Function to handle CV download
  const downloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the CV file path using Vite's base URL and correct file name
    link.href = '/mycv.pdf'; // Ensure this path is correct for your project setup
    
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

  // Effect for typing animation
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < currentAbility.length) {
        setDisplayedText((prev) => prev + currentAbility[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Typing speed

    return () => clearInterval(typingInterval);
  }, [index, currentAbility]);

  // Effect for changing abilities
  useEffect(() => {
    const abilityChangeInterval = setInterval(() => {
      setIndex(0); // Reset index for new ability
      setDisplayedText(""); // Clear displayed text
      const nextIndex =
        (abilities.indexOf(currentAbility) + 1) % abilities.length;
      setCurrentAbility(abilities[nextIndex]);
    }, 4000); // Time before changing to next ability

    return () => clearInterval(abilityChangeInterval);
  }, [currentAbility, abilities]);

  return (
    // Added responsive padding and max-width for better mobile layout
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div className="space-y-4 sm:space-y-6"> {/* Adjusted space-y for smaller screens */}
        <motion.h3 
          className="text-base sm:text-lg lg:text-xl font-medium text-blue-400" // Adjusted text size for better mobile scaling
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
            className="ml-2 text-xl sm:text-2xl inline-block origin-bottom" // Adjusted size for mobile
          >
            👋
          </motion.span>
        </motion.h3>
        
        <motion.h2 
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white" // Adjusted text size for better mobile scaling
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
          className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-300 min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[4rem]" // Adjusted min-height for mobile
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
          className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-prose leading-relaxed" // Used max-w-prose for better readability on all screens
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Passionate about creating innovative digital experiences and turning ideas into reality through clean, efficient code. Specializing in MERN stack and modern web technologies.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4" // Changed to flex-col on mobile, flex-row on sm screens and up
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" // Reverted px-6 to px-8 for original padding
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPortfolio}
          >
            View My Work
          </motion.button>
          <motion.button
            className="w-full sm:w-auto px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300" // Reverted px-6 to px-8 for original padding
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
