import { Menu, X, Sun, Moon } from "lucide-react";
import { sideBar } from "../../config/data";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Update state when scrolling
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <header>
      <motion.section
        className={`w-full flex z-50 fixed top-0 justify-between items-center h-20 text-[var(--color-text-primary)] transition-all
           duration-500 ${
          isScrolled 
            ? "glass-strong shadow-lg" 
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
          <p className="text-2xl font-bold bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">
            Zulkif Azher
          </p>
        </motion.div>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 mr-8 items-center">
            {sideBar && sideBar.length > 0
              ? sideBar.map((list, index) => (
                  <motion.a
                    key={list.id}
                    className="cursor-pointer hover:text-[var(--color-accent-primary)] transition-colors duration-300 relative group font-medium"
                    href={list.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {list.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent-primary)] transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))
              : null}
              
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden mr-6 flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors text-[var(--color-text-primary)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-20 left-0 w-full h-screen bg-[var(--color-bg-primary)] z-40 md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {sideBar && sideBar.length > 0
              ? sideBar.map((list, index) => (
                  <motion.a
                    key={list.id}
                    className="text-2xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors duration-300"
                    href={list.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {list.label}
                  </motion.a>
                ))
              : null}
          </div>
        </motion.div>
      )}
    </header>
  );
}
