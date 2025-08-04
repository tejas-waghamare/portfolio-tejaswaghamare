

// "use client";

// import { motion } from 'framer-motion';
// import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

// const Skills = () => {
//   const skills = [
//     { category: 'Frontend', items: 'HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS', icon: FaCode, proficiency: 90 },
//     { category: 'Backend', items: 'NodeJS, Express.js, C, C++, Core Java, Core Python', icon: FaServer, proficiency: 85 },
//     { category: 'Database', items: 'MySQL, MongoDB', icon: FaDatabase, proficiency: 80 },
//     { category: 'Tools & Technologies', items: 'Git / GitHub, Responsive Design, Deployment (Render, Vercel)', icon: FaTools, proficiency: 75 },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-black py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl max-w-full mx-auto"
//     >
//       <motion.h2
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.6 }}
//         className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 tracking-tight drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
//       >
//         Technical Skills
//       </motion.h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.category}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.6 }}
//             whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
//             className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-400 transition-all duration-300 group"
//           >
//             <skill.icon className="text-4xl text-blue-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
//             <h3 className="text-xl font-semibold text-blue-400 text-center mb-3">{skill.category}</h3>
//             <p className="text-gray-200 text-center text-sm sm:text-base leading-relaxed mb-4">{skill.items}</p>
//             <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${skill.proficiency}%` }}
//                 transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: 'easeOut' }}
//                 className="h-full bg-blue-400 rounded-full"
//               />
//             </div>
//             <p className="text-blue-400 text-center text-sm mt-2">{skill.proficiency}%</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;

// "use client";

// import { motion } from 'framer-motion';
// import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

// const Skills = () => {
//   const skills = [
//     { 
//       category: 'Frontend', 
//       items: 'HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS', 
//       icon: FaCode, 
//       proficiency: 90, 
//       details: 'Built an AI-powered Gemini Chatbot with ReactJS and TailwindCSS.' 
//     },
//     { 
//       category: 'Backend', 
//       items: 'NodeJS, Express.js, C, C++, Core Java, Core Python', 
//       icon: FaServer, 
//       proficiency: 85, 
//       details: 'Developed a College Enquiry Bot backend with NodeJS and Express.' 
//     },
//     { 
//       category: 'Database', 
//       items: 'MySQL, MongoDB', 
//       icon: FaDatabase, 
//       proficiency: 80, 
//       details: 'Optimized MongoDB queries for real-time chatbot responses.' 
//     },
//     { 
//       category: 'Tools & Technologies', 
//       items: 'Git / GitHub, Responsive Design, Deployment (Render, Vercel)', 
//       icon: FaTools, 
//       proficiency: 75, 
//       details: 'Deployed scalable apps on Vercel with CI/CD pipelines.' 
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative bg-gradient-to-b from-black to-sky-900 py-10 h-100  px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl max-w-full "
//     >
//       {/* Particle Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute h-1 w-1 bg-white/50 rounded-full animate-twinkle"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${Math.random() * 3 + 2}s`,
//             }}
//           />
//         ))}
//       </div>
      
//       <motion.h2
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
//         className="relative text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-bl from-blue-900 to-cyan-200 text-center mb-20 z-20 tracking-tight "
//       >
//         Technical Skills
//       </motion.h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.category}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
//             whileHover={{ scale: 1.05, rotateX: 180, transition: { duration: 0.5 } }}
//             className="relative p-5   backdrop-blur-md rounded-full border border-gray-700/90 hover:border-blue-400 transition-all duration-300 group-[perspective:1000px]"
//           >
//             {/* Front Face */}
//             <motion.div
//               className="absolute inset-0 backface-hidden group-hover:opacity-0 transition-opacity duration-500"
//               style={{ backfaceVisibility: 'hidden' }}
//             >
//               <skill.icon className="text-4xl text-white bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-5 mx-auto transition-transform duration-300 group-hover:scale-110" />
//               <h3 className="text-xl font-semibold text-blue-400 text-center mb-3">{skill.category}</h3>
//               <p className="text-gray-100 text-center text-sm sm:text-base leading-relaxed mb-4 font-medium">{skill.items}</p>
//               <div className="relative w-full h-3 bg-gray-600 rounded-full overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${skill.proficiency}%` }}
//                   transition={{ delay: index * 0.2 + 0.5, duration: 1.2, ease: 'easeOut' }}
//                   className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse-glow"
//                 />
//               </div>
//               <motion.p
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
//                 className="text-lime-500 text-center text-m mt-2 font-medium"
//               >
//                 {skill.proficiency}%
//               </motion.p>
//             </motion.div>
//             {/* Back Face */}
//             <motion.div
//               className="absolute inset-0 backface-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}
//             >
//               <div className="p-6 bg-gradient-to-br from-blue-900/80 to-cyan-900/80 rounded-xl h-full flex ">
//                 <p className="text-gray-100 text-center text-sm sm:text-base leading-relaxed font-medium">{skill.details}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;

// "use client";

// import { motion } from 'framer-motion';
// import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

// const Skills = () => {
//   const skills = [
//     { category: 'Frontend', items: 'HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS', icon: FaCode, proficiency: 90 },
//     { category: 'Backend', items: 'NodeJS, Express.js, C, C++, Core Java, Core Python', icon: FaServer, proficiency: 85 },
//     { category: 'Database', items: 'MySQL, MongoDB', icon: FaDatabase, proficiency: 80 },
//     { category: 'Tools & Technologies', items: 'Git / GitHub, Responsive Design, Deployment (Render, Vercel)', icon: FaTools, proficiency: 75 },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gradient-to-b from-black to-gray-950 py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-2xl max-w-full mx-auto"
//     >
//       <motion.h2
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
//         className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-12 tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
//       >
//         Technical Skills
//       </motion.h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.category}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
//             whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)' }}
//             className="p-6 bg-gray-900/90 rounded-xl border border-gray-700/50 hover:border-blue-400 transition-all duration-300 group"
//           >
//             <skill.icon className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-105" />
//             <h3 className="text-xl font-semibold text-blue-400 text-center mb-3">{skill.category}</h3>
//             <p className="text-gray-200 text-center text-sm sm:text-base leading-relaxed mb-4 font-medium">{skill.items}</p>
//             <div className="relative w-full h-4 bg-gray-800 rounded-full overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${skill.proficiency}%` }}
//                 whileHover={{ scaleX: 1.02 }}
//                 transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: 'easeOut' }}
//                 className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
//               />
//             </div>
//             <motion.p
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
//               className="text-blue-400 text-center text-sm mt-2 font-medium"
//             >
//               {skill.proficiency}%
//             </motion.p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;


"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: "HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS",
      icon: FaCode,
      proficiency: 90,
      details:
        "Built an AI-powered Gemini Chatbot with ReactJS and TailwindCSS.",
    },
    {
      category: "Backend",
      items: "NodeJS, Express.js, C, C++, Core Java, Core Python",
      icon: FaServer,
      proficiency: 85,
      details:
        "Developed a College Enquiry Bot backend with NodeJS and Express.",
    },
    {
      category: "Database",
      items: "MySQL, MongoDB",
      icon: FaDatabase,
      proficiency: 80,
      details: "Optimized MongoDB queries for real-time chatbot responses.",
    },
    {
      category: "Tools & Technologies",
      items: "Git / GitHub, Responsive Design, Deployment (Render, Vercel)",
      icon: FaTools,
      proficiency: 75,
      details: "Deployed scalable apps on Vercel with CI/CD pipelines.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-black via-slate-900 to-sky-950 px-4 py-20 sm:px-8 lg:px-20 rounded-xl shadow-2xl"
    >
      {/* Decorative Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 bg-white/50 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
        className="relative text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 text-center mb-16 z-10"
      >
        Technical Skills
      </motion.h2>

      {/* Skill Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto perspective-1000">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative group [transform-style:preserve-3d] w-full h-64 sm:h-72 bg-transparent rounded-xl"
            >
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-gray-700/60 shadow-xl p-6 transition-transform duration-700 group-hover:rotate-y-180 [backface-visibility:hidden]">
                <Icon className="text-4xl text-cyan-400 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {skill.category}
                </h3>
                <p className="text-sm text-gray-300 text-center mb-3 leading-snug">
                  {skill.items}
                </p>
                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500 animate-pulse"
                  />
                </div>
                <p className="text-xs text-lime-400 mt-2">
                  {skill.proficiency}%
                </p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-cyan-900/80 rounded-xl p-6 transform rotate-y-180 transition-transform duration-700 group-hover:rotate-y-0 [backface-visibility:hidden] flex items-center justify-center">
                <p className="text-sm text-gray-100 text-center leading-relaxed">
                  {skill.details}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
