import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart, Cpu, Code, Menu, X } from 'lucide-react';

const categories = [
  { id: 'ai-ml', name: 'AI & ML', icon: Brain },
  { id: 'data', name: 'Data Analytics', icon: BarChart },
  { id: 'hardware', name: 'Hardware', icon: Cpu },
  { id: 'software', name: 'Software', icon: Code },
];

const projects = {
  'ai-ml': [
    {
      title: 'Underwater Image Classification',
      description: 'Developed an image classification system using CNN RESNET-50 model to categorize underwater images into trash, marine creatures, and corals, contributing to marine conservation efforts.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://drive.google.com/drive/folders/16xZVaBO0J-OpuPGn0LqcZbsXHn14DMDR',
      tools: ['MATLAB', 'CNN', 'RESNET-50'],
      achievements: [
        'Successfully implemented RESNET-50 architecture for multi-class classification',
        'Created and curated a specialized underwater image dataset'
      ]
    },
    {
      title: 'Project Rhea - AI Receptionist',
      description: 'Developed an advanced AI receptionist system capable of message handling and appointment scheduling.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://github.com/shankar4650/project-rhea',
      tools: ['Gen-AI', 'Python', 'API', 'Llama', 'Chatbot Development'],
      achievements: [
        'Automated appointment scheduling and message management',
        'Integrated multiple AI capabilities for comprehensive reception tasks'
      ]
    },
    {
      title: 'Webby - The Web Developer',
      description: 'Created an innovative chatbot capable of generating full-stack websites from single prompts.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://brilliant-sable-5d5064.netlify.app/',
      tools: ['Gen-AI', 'Python', 'API', 'Llama', 'Chatbot Development'],
      achievements: [
        'Automated web development process',
        'Implemented complex code generation capabilities'
      ]
    },
    {
      title: 'Interior Design Bot',
      description: 'Developed a Gen-AI tool that transforms house photos into professional interior design concepts.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
      },
      tools: ['API', 'Gen-AI', 'Python', 'Image Processing'],
      achievements: [
        'Implemented advanced image processing algorithms',
        'Created user-friendly interface for design generation'
      ]
    },
    {
      title: 'AI Assistant Chatbot',
      description: 'Built a customer support chatbot achieving 30% reduction in response times.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200',
      },
      tools: ['Google Cloud', 'DialogFlow', 'NLP', 'AI'],
      achievements: [
        '30% improvement in response efficiency',
        'Enhanced query resolution through NLP'
      ]
    }
  ],
  'data': [
    {
      title: 'Stock Analyzer',
      description: 'Created a data science tool for stock market analysis using yfinance library.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://github.com/shankar4650/financial-advice',
      tools: ['Data Science', 'yfinance', 'Data Visualization', 'NumPy', 'pandas', 'Machine Learning'],
      achievements: [
        'Implemented predictive analytics for buy/sell recommendations',
        'Real-time stock data processing'
      ]
    },
    {
      title: 'Advanced Data Visualization',
      description: 'Created interactive Tableau dashboards for complex data analysis.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://github.com/shankar4650/dashboards',
      tools: ['Tableau', 'SQL', 'Python', 'Pandas', 'NumPy'],
      achievements: [
        'Developed custom SQL queries',
        'Implemented root cause analysis systems'
      ]
    },
    {
      title: 'Customer Churn Analysis',
      description: 'Developed a random forest model with 85% accuracy for customer churn prediction.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://github.com/shankar4650/Churn-analysis',
      tools: ['Python', 'SQL', 'Tableau', 'Machine Learning'],
      achievements: [
        '85% prediction accuracy',
        'Comprehensive data visualization implementation'
      ]
    },
    {
      title: 'Agricultural Market Analysis',
      description: 'Developed Power BI dashboards for agricultural market insights.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1495985812444-236d6a87bdd9?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1495985812444-236d6a87bdd9?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1495985812444-236d6a87bdd9?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://github.com/shankar4650/dashboards',
      tools: ['Power BI', 'SQL', 'Excel', 'Data Analysis'],
      achievements: [
        'Created interactive visualization tools',
        'Implemented data-driven decision-making framework'
      ]
    }
  ],
  'hardware': [
    {
      title: 'FPGA Implementation of Polar Code',
      description: 'Implemented encoding and successive cancellation decoding algorithms for 5G technology on Nexys 4 DDR board.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      },
      link: 'https://drive.google.com/drive/folders/16xZVaBO0J-OpuPGn0LqcZbsXHn14DMDR',
      tools: ['FPGA', 'Image Classification', 'Verilog', 'C'],
      achievements: [
        'Successfully implemented 5G algorithms',
        'Demonstrated on hardware platform'
      ]
    },
    {
      title: 'Antenna Design Project',
      description: 'Designed various antenna types using HFSS tool including dipole, horn, and microstrip patches.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
      },
      tools: ['Ansys-HFSS tool'],
      achievements: [
        'Multiple successful antenna designs',
        'Multi-frequency implementation'
      ]
    },
    {
      title: 'Digital Locker Circuit',
      description: 'Developed an Arduino-based secure locker system with 4-digit PIN access.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      },
      tools: ['Arduino', 'C'],
      achievements: [
        'Implemented secure access control',
        'Enhanced project management skills'
      ]
    },
    {
      title: 'Automatic Road Reflecting Light',
      description: 'Created automated road reflective lighting system with accident alarm.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?auto=format&fit=crop&q=80&w=1200',
      },
      tools: ['Network Analysis', 'Embedded Systems'],
      achievements: [
        'Enhanced road safety features',
        'Implemented automated lighting control'
      ]
    }
  ],
  'software': [
    {
      title: 'Recipe Library',
      description: 'Developing a user-friendly recipe website with intuitive interface.',
      image: {
        mobile: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=400',
        tablet: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800',
        desktop: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200',
      },
      tools: ['HTML', 'CSS', 'JavaScript'],
      achievements: [
        'Creating responsive design',
        'Implementing user-friendly functionality'
      ]
    }
  ]
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Mobile Category Menu Button */}
        <div className="md:hidden flex justify-center mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center px-4 py-2 rounded-lg bg-gray-800 text-white"
            aria-label="Toggle category menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="ml-2">Categories</span>
          </button>
        </div>

        {/* Category Tabs */}
        <div className={`
          flex flex-col md:flex-row justify-center gap-4 mb-12
          ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}
        `}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setIsMobileMenuOpen(false);
              }}
              className={`
                flex items-center px-6 py-3 rounded-full text-sm font-medium
                transition-all duration-300 min-h-[44px]
                ${activeCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects[activeCategory].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 md:h-56 lg:h-64">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={project.image.desktop} />
                  <source media="(min-width: 768px)" srcSet={project.image.tablet} />
                  <img
                    src={project.image.mobile}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-base md:text-lg">{project.description}</p>
                
                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center text-gray-300 text-sm md:text-base"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mt-auto"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;