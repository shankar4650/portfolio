import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: 'BCG GenAI ANLP Virtual Experience Program',
    issuer: 'Gen-AI from BCG & Forage',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    verifyLink: 'https://www.theforage.com/simulations/bcg/gen-ai-anlo',
  },
  {
    id: 2,
    title: 'BCG Data Science Virtual Experience',
    issuer: 'Data Science from BCG & Forage',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    verifyLink: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_eGSvSHt5rfkxQs2Ce_1735205117732_completion_certificate.pdf',
  },
  {
    id: 3,
    title: 'Data Science with MICROSOFT',
    issuer: 'Data Analytics from MICROSOFT',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    verifyLink: 'https://www.linkedin.com/learning/certificates/d4e4f90585115e036e21e38718f2343ee0e3e1cc4b73e751bea3040600af1556',
  },
  {
    id: 4,
    title: 'ChatGPT Prompt Engineering for Developers',
    issuer: 'Prompt Engineering from DeepLearning.AI',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    verifyLink: 'https://learn.deeplearning.ai/accomplishments/ae36799a-af28-425c-b20d-8afea795356e',
  },
  {
    id: 5,
    title: 'Project Management and Agile',
    issuer: 'Project Management and Agile from LinkedIn',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    verifyLink: 'www.linkedin.com/learning/certificates/0ab41f509d809dda4b99274fec0936146337b23da7d656f51880b3b6c7065e58',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{cert.issuer}</p>
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <span className="group-hover:underline">Verify Credential</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;