import React from 'react';
import { Trophy, Award, Heart,Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'KPIT SPARKLE 2024 FINALIST',
    description: 'Contributed to a patent-pending polar encoder/decoder for 5G communications, recognized among the top 8 applied projects in India.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.linkedin.com/posts/kpitsparkle_team-vs2-activity-7186333069040140288-YU9w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAETmNdQB50mNYRCw78plnCbcthf9W6Uwaw8',
    icon: Brain,
    details: [
      'Developed innovative 5G communication technology',
      'Selected among top 8 projects nationally',
      'Patent-pending status for the solution',
      'Demonstrated technical excellence in FPGA implementation'
    ]
  },
  {
    title: 'Debate Competition Champion',
    description: 'Won first place in the "Traditional Teaching vs. AI" debate competition, showcasing critical thinking and persuasive communication skills.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    icon: Award,
    details: [
      'First place in "Traditional Teaching vs. AI" debate',
      'Demonstrated exceptional critical thinking',
      'Showcased persuasive communication abilities',
      'Effectively argued complex technological concepts'
    ]
  },
  {
    title: 'NSS Volunteer (2022-2024)',
    description: 'Led and participated in various social initiatives, demonstrating leadership and commitment to community service.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    icon: Heart,
    details: [
      'Active leadership in social initiatives',
      'Organized community engagement programs',
      'Coordinated volunteer activities',
      'Impacted local community development'
    ]
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center mb-4">
                    <achievement.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">{achievement.description}</p>
                  <ul className="space-y-3">
                    {achievement.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;