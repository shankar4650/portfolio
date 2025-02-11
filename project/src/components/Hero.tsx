import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <div className="text-center max-w-4xl">
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-6 artifika-regular bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          O SHANKAR NAIDU
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
            Microsoft-Certified Data Analyst & Business Analyst | Expert in Power BI, SQL, and Machine Learning | Generative-AI enthuasit | FPGA & 5G Technology Specialist | Passionate About Data-Driven Innovation and Problem-Solving
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}