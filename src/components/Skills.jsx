

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


// "use client";

// import { motion } from "framer-motion";
// import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

// const Skills = () => {
//   const skills = [
//     {
//       category: "Frontend",
//       items: "HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS",
//       icon: FaCode,
//       proficiency: 90,
//       details:
//         "Built an AI-powered Gemini Chatbot with ReactJS and TailwindCSS.",
//     },
//     {
//       category: "Backend",
//       items: "NodeJS, Express.js, C, C++, Core Java, Core Python",
//       icon: FaServer,
//       proficiency: 85,
//       details:
//         "Developed a College Enquiry Bot backend with NodeJS and Express.",
//     },
//     {
//       category: "Database",
//       items: "MySQL, MongoDB",
//       icon: FaDatabase,
//       proficiency: 80,
//       details: "Optimized MongoDB queries for real-time chatbot responses.",
//     },
//     {
//       category: "Tools & Technologies",
//       items: "Git / GitHub, Responsive Design, Deployment (Render, Vercel)",
//       icon: FaTools,
//       proficiency: 75,
//       details: "Deployed scalable apps on Vercel with CI/CD pipelines.",
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative bg-gradient-to-b from-black via-slate-900 to-sky-950 px-4 py-20 sm:px-8 lg:px-20 rounded-xl shadow-2xl"
//     >
//       {/* Decorative Particles */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         {[...Array(25)].map((_, i) => (
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

//       {/* Title */}
//       <motion.h2
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
//         className="relative text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 text-center mb-16 z-10"
//       >
//         Technical Skills
//       </motion.h2>

//       {/* Skill Cards */}
//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto perspective-1000">
//         {skills.map((skill, index) => {
//           const Icon = skill.icon;
//           return (
//             <motion.div
//               key={skill.category}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               className="relative group [transform-style:preserve-3d] w-full h-64 sm:h-72 bg-transparent rounded-xl"
//             >
//               {/* Front */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-gray-700/60 shadow-xl p-6 transition-transform duration-700 group-hover:rotate-y-180 [backface-visibility:hidden]">
//                 <Icon className="text-4xl text-cyan-400 mb-3" />
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {skill.category}
//                 </h3>
//                 <p className="text-sm text-gray-300 text-center mb-3 leading-snug">
//                   {skill.items}
//                 </p>
//                 <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: `${skill.proficiency}%` }}
//                     transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
//                     className="h-full bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-500 animate-pulse"
//                   />
//                 </div>
//                 <p className="text-xs text-lime-400 mt-2">
//                   {skill.proficiency}%
//                 </p>
//               </div>

//               {/* Back */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-cyan-900/80 rounded-xl p-6 transform rotate-y-180 transition-transform duration-700 group-hover:rotate-y-0 [backface-visibility:hidden] flex items-center justify-center">
//                 <p className="text-sm text-gray-100 text-center leading-relaxed">
//                   {skill.details}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;



"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: "HTML, CSS, JavaScript, Bootstrap, TailwindCSS, ReactJS, NextJS",
      icon: FaReact,
      proficiency: 90,
      details: "Built responsive web applications with modern frameworks. Expertise in React hooks, state management, and component architecture.",
      techIcons: [FaReact, TbBrandNextjs, SiTailwindcss],
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Backend Development",
      items: "NodeJS, Express.js, REST APIs, Authentication, C, C++, Java, Python",
      icon: FaNodeJs,
      proficiency: 85,
      details: "Developed scalable server-side applications with Express.js. Experience in building RESTful APIs and implementing security measures.",
      techIcons: [FaNodeJs, SiExpress],
      color: "from-green-500 to-emerald-400",
    },
    {
      category: "Database Management",
      items: "MySQL, MongoDB, Database Design, Query Optimization",
      icon: FaDatabase,
      proficiency: 80,
      details: "Designed efficient database schemas and optimized queries for performance. Experience with both SQL and NoSQL databases.",
      techIcons: [SiMongodb, SiMysql],
      color: "from-purple-500 to-pink-400",
    },
    {
      category: "Tools & Deployment",
      items: "Git/GitHub, Vercel, Render, Responsive Design",
      icon: FaGitAlt,
      proficiency: 75,
      details: "Deployed applications on cloud platforms with CI/CD pipelines. Experienced in version control and containerization.",
      techIcons: [FaGitAlt, FaAws],
      color: "from-orange-500 to-yellow-400",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Tech Icons */}
        {[FaReact, FaNodeJs, SiMongodb, FaGitAlt, SiTailwindcss, TbBrandNextjs].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-6xl sm:text-7xl lg:text-8xl"
            initial={{ y: 0, x: 0, rotate: 0 }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 10}%`,
            }}
          >
            <Icon />
          </motion.div>
        ))}

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full mb-4 inline-block">
            TECHNICAL EXPERTISE
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            Skills & Technologies
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          A comprehensive showcase of my technical stack and proficiency levels across various domains
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{skill.category}</h3>
                      <div className="flex space-x-2">
                        {skill.techIcons.map((TechIcon, i) => (
                          <TechIcon key={i} className="text-gray-400 text-lg" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
                  >
                    {skill.proficiency}%
                  </motion.div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>

                {/* Technologies List */}
                <div className="mb-6">
                  <p className="text-gray-300 text-sm mb-3">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  className="pt-4 border-t border-gray-800"
                >
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.details}</p>
                </motion.div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 mt-16"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Additional Technologies</h3>
          <p className="text-gray-400">Other tools and technologies I work with</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {[
            { name: "TypeScript", color: "from-blue-600 to-blue-400", icon: "TS" },
            { name: "Redux", color: "from-purple-600 to-pink-400", icon: "⚛️" },
            // { name: "Jest", color: "from-red-600 to-orange-400", icon: "🧪" },
            // { name: "Docker", color: "from-blue-500 to-cyan-400", icon: "🐳" },
            // { name: "Postman", color: "from-orange-600 to-yellow-400", icon: "📡" },
            { name: "YOLO", color: "from-sky-500 to-slate-800", icon: "📷" },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-white font-bold text-lg mb-2`}>
                {tech.icon}
              </div>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="relative z-10 mt-12 text-center"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-full border border-blue-500/30">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300">
            Continuously learning and expanding my skill set
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;