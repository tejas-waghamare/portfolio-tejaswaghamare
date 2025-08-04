"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Electronics and Telecommunication Engineering',
      institution: 'Sipna College of Engineering and Technology, Amravati',
      period: '2020 - 2024',
      details: 'CGPA: 7.5 / 10 (71.25%)',
    },
    {
      degree: 'HSC',
      institution: 'Shri Shivaji Science College, Amravati',
      period: '2018 - 2020',
      details: '',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-black to-gray-950 py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl max-w-full mx-auto"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-12 tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
      >
        Education
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' }}
            className="p-6 bg-gray-900/90 rounded-xl  border border-transparent bg-gradient-to-r from-blue-400/20 to-cyan-400/20 hover:border-blue-400 transition-all duration-300 group"
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <FaGraduationCap className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-center mb-3"
            >
              {edu.degree}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
              className="text-gray-100 text-center text-sm sm:text-base mb-2"
            >
              {edu.institution} | {edu.period}
            </motion.p>
            {edu.details && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                className="text-gray-400 text-center text-sm sm:text-base"
              >
                {edu.details}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;