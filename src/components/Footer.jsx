import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';


const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-purple-900/80 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-50"
      >
        <span>© 2025 Tejas Waghamare</span>
        <div className="flex space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/tejas-waghamare"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-50 hover:text-red-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            href="https://github.com/tejas-waghamare"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-50 hover:text-red-500 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
        </div>
        <motion.a
          href="/Tejas_Waghamare_MERNStack.pdf"
          download="TejasWaghamareResume.pdf"
          whileHover={{ scale: 1.1 }}
          className="bg-red-600 text-gray-50 px-6 py-3 rounded-full font-semibold hover:bg-red-500 transition-all duration-300 shadow-md"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;