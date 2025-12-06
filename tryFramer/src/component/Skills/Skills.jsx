import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "JavaScript", level: 85, color: "#F7DF1E" },
      { name: "TypeScript", level: 80, color: "#3178C6" },
      { name: "HTML/CSS", level: 95, color: "#E34F26" },
      { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
      { name: "Next.js", level: 75, color: "#000000" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 80, color: "#000000" },
      { name: "Java", level: 75, color: "#ED8B00" },
      { name: "C++", level: 70, color: "#00599C" },
      { name: "MongoDB", level: 75, color: "#47A248" },
      { name: "MYSql", level: 70, color: "#336791" }
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "PowerApp", level: 75, color: "#5391FE" },
      { name: "OpenGL", level: 65, color: "#5586A4" },
      { name: "Figma", level: 75, color: "#F24E1E" }
    ]
  }
];

const additionalSkills = [
  { name: "RESTful APIs", icon: "🌐" },
  { name: "GraphQL", icon: "📊" },
  { name: "Redux", icon: "🔄" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Responsive Design", icon: "📱" },
  { name: "SEO", icon: "🔍" },
  { name: "Performance Optimization", icon: "⚡" },
  { name: "Testing", icon: "🧪" },
  { name: "CI/CD", icon: "🚀" },
  { name: "Agile/Scrum", icon: "📋" },
  { name: "Object-Oriented Programming", icon: "🏗️" },
  { name: "Data Structures & Algorithms", icon: "📈" }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

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
          My <span className="bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise in modern web development.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === index
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
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
            {skillCategories[activeCategory].name} Skills
          </h3>
          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[var(--color-text-primary)] font-medium">{skill.name}</span>
                  <span className="text-[var(--color-text-secondary)] text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-[var(--color-text-primary)] font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-8">
          Experience & Achievements
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 glass rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Problem Solving</h4>
            <p className="text-[var(--color-text-secondary)]">
              Strong analytical skills with a proven track record of solving complex technical challenges.
            </p>
          </motion.div>
          
          <motion.div
            className="p-6 glass rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Fast Learning</h4>
            <p className="text-[var(--color-text-secondary)]">
              Quick to adapt to new technologies and frameworks, always staying current with industry trends.
            </p>
          </motion.div>
          
          <motion.div
            className="p-6 glass rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Team Collaboration</h4>
            <p className="text-[var(--color-text-secondary)]">
              Excellent communication skills and experience working in agile development teams.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}