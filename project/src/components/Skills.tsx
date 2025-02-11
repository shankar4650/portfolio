import React from 'react';
import {
  Code2,
  Database,
  Brain,
  Cpu,
  BarChart,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'Programming Languages',
    icon: Code2,
    technologies: ['C', 'C++', 'Python', 'Embedded C', 'Verilog'],
  },
  {
    name: 'Data Science & Analytics',
    icon: Database,
    technologies: ['Excel', 'Power BI', 'Tableau', 'SQL', 'Machine Learning', 'Pandas', 'NumPy'],
  },
  {
    name: 'Business Analytics',
    icon: BarChart,
    technologies: ['Data Visualization', 'Statistics', 'Business Acumen', 'Project Management','Business Story-telling'],
  },
  {
    name: 'AI & ML',
    icon: Brain,
    technologies: ['Prompt Engineering', 'Gen AI', 'Chatbot Development', 'LLM Training', 'LLM Development'],
  },
  {
    name: 'Electronics & Simulation',
    icon: Cpu,
    technologies: ['FPGA', 'Xilinx', 'Vivado', 'MATLAB', 'Ansys-HFSS', 'Multisim', 'PCB Design'],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    technologies: ['Leadership', 'Team Player', 'Communication', 'Problem-Solving', 'Self-Motivated'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 text-blue-300 rounded-full text-sm hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;