"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import gemini from '../assets/gemini.png';
import geminiLogin from '../assets/geminiLogin.png';
import geminiSignup from '../assets/geminisignup.png';
import college from '../assets/college.png';
import reptile from '../assets/reptile.png';
import scheduler from '../assets/scheduler.png';
import dragDrop from '../assets/dragdrop.png';
import landing1 from '../assets/landing1.png';
import landing2 from '../assets/landing2.png';
import GaavLogin from '../assets/mazegavlogin.png';
import gavuser from '../assets/gavuser.png';
import gavgram from '../assets/gavgram.png';
import Min1 from '../assets/Min1.png';
import Min2 from '../assets/Min2.png';
import org from '../assets/org.png';
import pixedge from '../assets/pixedge.png';
const Projects = () => {
  const projects = [
    {
      title: 'Gemini Clone',
      link: 'https://gemini-clone-frontend-4in8.onrender.com',
      images: [gemini, geminiLogin, geminiSignup],
      period: 'April 2025 - May 2025',
      details: [
        'Developed a responsive, single-page AI chatbot using React.js for frontend and Node.js/Express.js for backend.',
        'Integrated OpenAI GPT-4 API for intelligent, context-aware conversational responses.',
        'Enabled chat history management with MongoDB, allowing users to view, delete, and revisit past conversations.',
      ],
    },
    {
      title: 'माझे गाव',
      link: 'https://frontend-mazegaav.vercel.app/',
      images: [GaavLogin, gavuser, gavgram],
      period: 'May 2025',
      details: [
        'Gives The Information About My Village, Helps Locals Connect, and Provides Updates.',
        'Allows users to create accounts, post updates, and share photos.',
        'Villagers can post their issues, and admins can respond to them.',
      ],
    },
    {
      title: 'MiniLinkedIn',
      link: 'https://linkedin-mini-frontend-linkedin.onrender.com',
      images: [Min1 , Min2],
      period: 'August 2025',
      details: [
        'Mini LinkedIn is a sleek, mobile-responsive social media platform inspired by LinkedIn.',
        'Allows users to create profiles, connect with others, and share posts.',
        'User can edit their profile, add skills, and Posts.',
      ],
    },
    {
      title: 'OmrautGraphics -Static Website',
      link: 'https://omrautgraphics.com/',
      images: [org],
      period: 'December 2025',
      details: [
        'It is a static website for Omraut Graphics, a graphic design Startup.',
        'Helps users explore services, view portfolios, and contact the Creator of ORG.',
        'Built with HTML, CSS, and JavaScript for a responsive and engaging user experience.',
      ],
    },
    {
      title: 'PixEdge.in - A Company Website',
      link: 'https://www.pixedge.in/',
      images: [pixedge],
      period: 'June 2025',
      details: [
        'It is a static website for PixEdge.in, a Camera Vision Company .',
        'Helps users explore services, view portfolios, and contact the Company.',
        'Built with HTML, CSS, and JavaScript for a responsive and engaging user experience.',
      ],
    },
    {
      title: 'College Enquiry Chatbot',
      link: 'https://github.com/tejas-waghamare/College-Enquiry-ChatBot',
      images: [college],
      period: 'August 2023 - December 2023',
      details: [
        'Answered queries on admission, programs, facilities, and faculty details.',
        'Enhanced user experience with instant, accurate responses, reducing manual intervention.',
        'Guided users through the application process with links to forms and relevant pages.',
      ],
    },
    {
      title: 'Reptile Interactive Cursor',
      link: 'https://tejas-waghamare.github.io/Reptile-Interactive-Cursor/',
      images: [reptile],
      period: 'July 2025',
      details: [
        'Created an interactive web feature where a creature follows the mouse cursor using JavaScript.',
        'Implemented smooth animations for an engaging user experience.',
        'Deployed on GitHub Pages for public access.',
      ],
    },
    {
      title: 'Recurring Scheduler',
      link: 'https://date-picker-five-sand.vercel.app',
      images: [scheduler],
      period: 'July 2025',
      details: [
        'Built a recurring schedule interface with a daily recurrence feature using Next.js.',
        'Included a schedule preview and stop condition functionality.',
        'Deployed on Vercel for seamless performance.',
      ],
    },
    {
      title: 'Drag and Drop Website Builder',
      link: 'https://tejas-waghamare.github.io/drag-and-drop-builder/',
      images: [dragDrop],
      period: 'June 2025',
      details: [
        'Developed a drag-and-drop interface for building websites using React.js.',
        'Enabled element selection and property customization for user-friendly design.',
        'Hosted on GitHub Pages for easy access.',
      ],
    },
    {
      title: 'Landing Page UI',
      link: 'https://landing-page-ui-omega.vercel.app',
      images: [landing1, landing2],
      period: 'July 2025',
      details: [
        'Designed a sleek landing page UI with modern design principles using Next.js.',
        'Focused on responsive design and high-quality visuals.',
        'Deployed on Vercel for optimal performance.',
      ],
    },
  ];

  const [currentImageIndices, setCurrentImageIndices] = useState(projects.map(() => 0));

  const handlePrevImage = (projectIndex) => {
    setCurrentImageIndices((prev) =>
      prev.map((index, i) =>
        i === projectIndex
          ? (index - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
          : index
      )
    );
  };

  const handleNextImage = (projectIndex) => {
    setCurrentImageIndices((prev) =>
      prev.map((index, i) =>
        i === projectIndex ? (index + 1) % projects[projectIndex].images.length : index
      )
    );
  };

  const handleDotClick = (projectIndex, imageIndex) => {
    setCurrentImageIndices((prev) =>
      prev.map((index, i) => (i === projectIndex ? imageIndex : index))
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-black to-gray-950 py-10 px-2 sm:px-6 lg:px-8 rounded-xl shadow-2xl max-w-full mx-auto"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
        className="text-4xl sm:text-5xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-12 tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.8)' }}
            className="p-4 sm:p-6 bg-gray-900/90 rounded-xl border border-transparent bg-gradient-to-r from-blue-400/20 to-cyan-400/20 hover:border-blue-400 transition-all duration-300 group"
          >
            <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-md mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndices[index]}
                  src={project.images[currentImageIndices[index]]}
                  alt={`${project.title} screenshot ${currentImageIndices[index] + 1}`}
                  className="w-full h-50 object-cover p-1 rounded-md border border-gray-700/50 group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
              </AnimatePresence>

              {project.images.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-4">
                  <button
                    onClick={() => handlePrevImage(index)}
                    className="p-2 sm:p-2.5 bg-gray-800/80 rounded-full text-blue-400 hover:text-cyan-400"
                    aria-label="Previous image"
                  >
                    <FaArrowLeft />
                  </button>
                  <div className="flex space-x-1 sm:space-x-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleDotClick(index, i)}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndices[index] === i ? 'bg-blue-400' : 'bg-gray-600'
                        } hover:bg-cyan-400`}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleNextImage(index)}
                    className="p-2 sm:p-2.5 bg-gray-800/80 rounded-full text-blue-400 hover:text-cyan-400"
                    aria-label="Next image"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-2">
              {project.title}
            </h3>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              className="text-gray-200 text-center text-sm sm:text-base mb-3"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-400 underline decoration-blue-400/50 hover:decoration-cyan-400"
              >
                {project.link.includes('github') ? 'GitHub Link' : 'Click👉 To get Live Demo'}
              </a>{' '}
              | {project.period}
            </motion.p>

            <ul className="list-disc pl-4 sm:pl-5 text-gray-200 text-sm sm:text-base">
              {project.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 + i * 0.1, duration: 0.5 }}
                  className="mb-1"
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
