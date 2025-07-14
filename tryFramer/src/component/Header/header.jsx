import { Menu, X } from "lucide-react";
import { sideBar } from "../../config/data";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update state when scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <header>
      <motion.section
        className={`w-full flex z-50 fixed top-0 justify-between items-center h-20 text-white transition-all
           duration-500 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="ml-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Zulkif Azher
          </p>
        </motion.div>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 mr-8">
            {sideBar && sideBar.length > 0
              ? sideBar.map((list, index) => (
                  <motion.a
                    key={list.id}
                    className="cursor-pointer hover:text-blue-400 transition-colors duration-300 relative group"
                    href={list.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {list.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))
              : null}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden mr-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-20 left-0 w-full bg-black/95 backdrop-blur-md z-40 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-6">
            {sideBar && sideBar.length > 0
              ? sideBar.map((list) => (
                  <a
                    key={list.id}
                    className="px-8 py-4 text-white hover:bg-white/10 transition-colors duration-300"
                    href={list.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {list.label}
                  </a>
                ))
              : null}
          </div>
        </motion.div>
      )}
    </header>
  );
}
