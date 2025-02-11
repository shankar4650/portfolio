import { motion } from 'framer-motion';
import { Award, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🔍 About Me
        </motion.h2>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a Microsoft-Certified Data Analyst and Business Analyst with a proven track record of turning complex datasets into actionable insights that drive business growth. My expertise spans data analysis, business process optimization, and component engineering, underpinned by strong technical proficiency in tools like Power BI, SQL, Tableau, and Python.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience in FPGA development, 5G communication technologies, and machine learning, I combine analytical thinking with advanced technical skills to deliver innovative solutions. My AI expertise includes prompt engineering, generative AI, and chatbot development, empowering businesses to unlock the full potential of modern technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Key Highlights</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• Data-Driven Insights: Conducted churn prediction analysis for BCG Group, achieving 85% model accuracy</li>
                <li>• Innovative Solutions: Designed a 5G polar encoder/decoder, finalist in KPIT Sparkle 2024</li>
                <li>• Interactive Dashboards: Leveraged Power BI for agricultural market analysis</li>
                <li>• Embedded Systems: Developed 5G algorithms on Zybo Z7 platform</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• Data Analytics: Microsoft</li>
                <li>• Prompt Engineering: OpenAI</li>
                <li>• GEN AI: BCG Group</li>
                <li>• Python Programming: Infosys</li>
                <li>• Data Science: BCG Group</li>
                <li>• Busniess Analytics: Microsoft</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-pink-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">What Drives Me</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I am passionate about solving complex problems through technology and analytics, bridging the gap between data and decision-making. Whether it's creating interactive dashboards, developing cutting-edge AI tools, or designing efficient embedded systems, I thrive on challenges and am dedicated to delivering measurable results.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;