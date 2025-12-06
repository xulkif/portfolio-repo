import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ecommerce from '../../assets/e-commerce.png'
import dbms from '../../assets/dbms.png'
import cal from '../../assets/calculater.png'
import todo from '../../assets/todo.png'

const projects = [
    {
    id: 1,
    title: "WKU Dormitory Management System",
    description: "A comprehensive dormitory management system for Western Kentucky University built with MERN stack. Features include room allocation, maintenance requests, student check-in/out, and administrative dashboard.",
    image: dbms,
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/xulkif/DBMS",
    live: "https://dbms-wku.onrender.com/",
    category: "fullstack"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    image:  ecommerce,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/xulkif/E-commerce",
    live: "https://xulkif-e-commerce-h46f.onrender.com",
    category: "fullstack"
  },

  {
    id: 3,
    title: "To Do List",
    description: "A collaborative task management application with real-time updates ",
    image: todo,
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/xulkif/React-ToDo",
    live: "https://react-to-do-self.vercel.app/",
    category: "frontend"
  },
  {
    id: 4,
    title: "Scientific Calculater",
    description: " A modern, responsive scientific calculator built with React and Tailwind CSS. Supports basic arithmetic and advanced scientific functions.",
    image:cal,
    technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
    github: "https://github.com/xulkif/calculater/tree/main/my-app",
    live: "https://calculatewebapp.onrender.com/",
    category: "frontend"
  },
  {
    id: 5,
    title: "Doctor Appointment",
    description: "A doctor's appointment is a scheduled meeting with a healthcare professional to discuss your health, receive a diagnosis, get treatment, or for a routine check-up",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    technologies: ["html", "css", "javascript", "php"],
    github: "https://github.com/niceman1234man/Doctor_Appointment",
    live: "https://github.com/niceman1234man/Doctor_Appointment",
    category: "fullstack"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/xulkif/portfolio-repo/tree/main/tryFramer",
    live: "https://xulkif-portfolio-gqkc.onrender.com/",
    category: "frontend"
  },

];

const categories = ["all", "frontend", "backend", "fullstack"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

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
          My <span className="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => filterProjects(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white shadow-lg shadow-blue-500/25"
                : "glass text-[var(--color-text-secondary)] hover:bg-white/10 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300 border border-white/5"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent opacity-80"></div>
              
              {/* Overlay with links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-[var(--color-accent-primary)] hover:text-white transition-colors text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-primary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 text-xs rounded-full text-[var(--color-text-secondary)] border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-[var(--color-text-secondary)] mb-6 text-lg">
          Interested in working together? Let's create something amazing!
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </div>
  );
}