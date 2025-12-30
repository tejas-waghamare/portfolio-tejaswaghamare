// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import React from 'react';


// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-purple-900/80 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 shadow-lg"
//     >
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-50"
//       >
//         <span>© 2025 Tejas Waghamare</span>
//         <div className="flex space-x-4">
//           <motion.a
//             href="https://www.linkedin.com/in/tejas-waghamare"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-gray-50 hover:text-red-500 transition-colors duration-300"
//           >
//             <FaLinkedin className="text-2xl" />
//           </motion.a>
//           <motion.a
//             href="https://github.com/tejas-waghamare"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-gray-50 hover:text-red-500 transition-colors duration-300"
//           >
//             <FaGithub className="text-2xl" />
//           </motion.a>
//         </div>
//         <motion.a
//           href="/TejasWaghamare_MERN_Stack_Dev.pdf"
//           download="TejasWaghamareResume.pdf"
//           whileHover={{ scale: 1.1 }}
//           className="bg-red-600 text-gray-50 px-6 py-3 rounded-full font-semibold hover:bg-red-500 transition-all duration-300 shadow-md"
//         >
//           Download Resume
//         </motion.a>
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;

"use client";

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-400/30 rounded-full"
            initial={{ y: 0, x: 0 }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Open to collaboration, new opportunities, and interesting tech discussions.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-blue-400" />
              Contact
            </h3>
            <div className="space-y-2">
              <a 
                href="mailto:tejaswaghamare121@gmail.com" 
                className="text-gray-300 hover:text-blue-400 transition-colors block"
              >
                tejaswaghamare121@gmail.com
              </a>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-300">
                <FaPhone className="text-blue-400" />
                <span>+91 9637540391</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors block">Home</a>
              <a href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors block">Projects</a>
              <a href="/skills" className="text-gray-300 hover:text-blue-400 transition-colors block">Skills</a>
              {/* <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors block">About</a> */}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tejas-waghamare-62b6b0290/', color: 'hover:text-[#0077B5]', bg: 'hover:bg-[#0077B5]/20' },
                { icon: FaGithub, href: 'https://github.com/tejas-waghamare', color: 'hover:text-gray-100', bg: 'hover:bg-gray-800' },
                { icon: SiLeetcode, href: 'https://leetcode.com/u/tejas-waghamare/', color: 'hover:text-[#FFA116]', bg: 'hover:bg-[#FFA116]/20' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm ${social.bg} transition-all duration-300`}
                >
                  <social.icon className={`text-2xl text-gray-300 ${social.color} transition-colors duration-300`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get My Resume</h3>
            <motion.a
              href="/TejasWaghamare_MERN_Stack_Dev.pdf"
              download="TejasWaghamare_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <FaFileDownload />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
            <span>© {currentYear} Tejas Waghamare. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Built with React, Next.js & ❤️</span>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Made with passion for creating amazing web experiences
          </p>
        </motion.div>

        {/* Back to top button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-blue-500/30 transition-all"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;