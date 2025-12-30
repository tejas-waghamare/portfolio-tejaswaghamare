
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

  // Different types of particles
  const particleTypes = [
    { type: 'circle', size: 'h-1 w-1', color: 'bg-blue-400/60' },
    { type: 'circle', size: 'h-1.5 w-1.5', color: 'bg-cyan-400/50' },
    { type: 'circle', size: 'h-2 w-2', color: 'bg-purple-400/40' },
    { type: 'square', size: 'h-1 w-1', color: 'bg-blue-300/30' },
    { type: 'square', size: 'h-1.5 w-1.5', color: 'bg-cyan-300/20' },
    { type: 'triangle', size: 'h-2 w-2', color: 'border-blue-400/40' },
    { type: 'hexagon', size: 'h-2 w-2', color: 'bg-cyan-400/30' },
    { type: 'star', size: 'h-2 w-2', color: 'text-yellow-300/50' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-black via-slate-900 to-sky-950 py-20 px-4 sm:px-8 lg:px-20 rounded-xl shadow-2xl max-w-full mx-auto overflow-hidden"
    >
      {/* Different Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Small twinkling stars */}
        {[...Array(30)].map((_, i) => {
          const particle = particleTypes[i % particleTypes.length];
          return (
            <div
              key={`star-${i}`}
              className={`absolute animate-twinkle ${
                particle.type === 'circle' 
                  ? `rounded-full ${particle.size} ${particle.color}`
                  : particle.type === 'square'
                  ? `${particle.size} ${particle.color}`
                  : particle.type === 'triangle'
                  ? `w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] ${particle.color} border-transparent`
                  : particle.type === 'hexagon'
                  ? `clip-hexagon ${particle.size} ${particle.color}`
                  : particle.type === 'star'
                  ? `text-2xl ${particle.color}`
                  : ''
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              {particle.type === 'star' && '★'}
            </div>
          );
        })}

        {/* Floating code brackets */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-blue-300/20 animate-float"
            style={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 10}%`,
              fontSize: `${1.5 + Math.random() * 1}rem`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
            }}
          >
            {'</>'}
          </div>
        ))}

        {/* Glowing orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute h-4 w-4 rounded-full animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}

        {/* Animated lines/waves */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-wave" />
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-wave-reverse" />

        {/* Floating particles with different movements */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`float-${i}`}
            className={`absolute h-1 w-1 rounded-full ${
              i % 3 === 0 ? 'bg-blue-400/40' : 
              i % 3 === 1 ? 'bg-cyan-400/30' : 'bg-purple-400/20'
            } animate-float-slow`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Mouse-following light effect (static version) */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
        className="relative text-4xl sm:text-5xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-16 tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] z-10"
      >
        Projects
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto opacity-80">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-gray-700/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group"
          >
            <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-md mb-6">
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
                <div className="absolute bottom-3 left-0 right-0 flex justify-between items-center px-4">
                  <button
                    onClick={() => handlePrevImage(index)}
                    className="p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full text-blue-400 hover:text-cyan-400 hover:bg-gray-800/90 transition-colors"
                    aria-label="Previous image"
                  >
                    <FaArrowLeft />
                  </button>
                  <div className="flex space-x-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleDotClick(index, i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentImageIndices[index] === i 
                            ? 'bg-blue-400 scale-125' 
                            : 'bg-gray-600/70 hover:bg-gray-500'
                        }`}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleNextImage(index)}
                    className="p-2.5 bg-gray-900/80 backdrop-blur-sm rounded-full text-blue-400 hover:text-cyan-400 hover:bg-gray-800/90 transition-colors"
                    aria-label="Next image"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-3">
              {project.title}
            </h3>

            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              className="text-gray-200 text-center text-sm sm:text-base mb-4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-cyan-400 underline decoration-blue-400/50 hover:decoration-cyan-400 transition-colors"
              >
                {project.link.includes('github') ? 'GitHub Link' : 'Click👉 To get Live Demo'}
              </a>{' '}
              | <span className="text-cyan-300">{project.period}</span>
            </motion.p>

            <ul className="list-disc pl-5 text-gray-200 text-sm sm:text-base space-y-2">
              {project.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 + i * 0.1, duration: 0.5 }}
                  className="leading-relaxed"
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