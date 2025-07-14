import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/xulkif/E-commerce",
    live: "https://xulkif-e-commerce-h46f.onrender.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "To Do List",
    description: "A collaborative task management application with real-time updates ",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
    technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/xulkif/React-ToDo",
    live: "https://react-to-do-self.vercel.app/",
    category: "frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather, forecasts, and interactive maps with location-based services.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
    github: "https://github.com",
    live: "https://demo.com",
    category: "frontend"
  },
  {
    id: 4,
    title: "Doctor Appointment",
    description: "A doctor's appointment is a scheduled meeting with a healthcare professional to discuss your health, receive a diagnosis, get treatment, or for a routine check-up",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    technologies: ["html", "css", "javascript", "php"],
    github: "https://github.com/niceman1234man/Doctor_Appointment",
    live: "https://github.com/niceman1234man/Doctor_Appointment",
    category: "fullstack"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/xulkif/portfolio",
    live: "https://demo.com",
    category: "frontend"
  },
  {
    id: 6,
    title: "WKU Dormitory Management System",
    description: "A comprehensive dormitory management system for Western Kentucky University built with MERN stack. Features include room allocation, maintenance requests, student check-in/out, and administrative dashboard.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/xulkif/DBMS",
    live: "https://dbms-wku.onrender.com/",
    category: "fullstack"
  }
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
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
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
            className="group relative bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Overlay with links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-xs rounded-full text-gray-300"
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
        <p className="text-gray-400 mb-6">
          Interested in working together? Let's create something amazing!
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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