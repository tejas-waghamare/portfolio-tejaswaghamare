// "use client";

// import { motion } from 'framer-motion';
// import { FaGraduationCap } from 'react-icons/fa';

// const Education = () => {
//   const education = [
//     {
//       degree: 'B.E. in Electronics and Telecommunication Engineering',
//       institution: 'Sipna College of Engineering and Technology, Amravati',
//       period: '2020 - 2024',
//       details: 'CGPA: 7.5 / 10 (71.25%)',
//     },
//     {
//       degree: 'HSC',
//       institution: 'Shri Shivaji Science College, Amravati',
//       period: '2018 - 2020',
//       details: '',
//     },
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
//         Education
//       </motion.h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         {education.map((edu, index) => (
//           <motion.div
//             key={edu.degree}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
//             whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' }}
//             className="p-6 bg-gray-900/90 rounded-xl  border border-transparent bg-gradient-to-r from-blue-400/20 to-cyan-400/20 hover:border-blue-400 transition-all duration-300 group"
//           >
//             <motion.div
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               transition={{ duration: 0.3 }}
//               className="flex justify-center"
//             >
//               <FaGraduationCap className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4" />
//             </motion.div>
//             <motion.h3
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
//               className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-center mb-3"
//             >
//               {edu.degree}
//             </motion.h3>
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
//               className="text-gray-100 text-center text-sm sm:text-base mb-2"
//             >
//               {edu.institution} | {edu.period}
//             </motion.p>
//             {edu.details && (
//               <motion.p
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
//                 className="text-gray-400 text-center text-sm sm:text-base"
//               >
//                 {edu.details}
//               </motion.p>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Education;


// "use client";

// import { motion } from 'framer-motion';
// import { FaGraduationCap } from 'react-icons/fa';

// const Education = () => {
//   const education = [
//     {
//       degree: 'B.E. in Electronics and Telecommunication Engineering',
//       institution: 'Sipna College of Engineering and Technology, Amravati',
//       period: '2020 - 2024',
//       details: 'CGPA: 7.5 / 10 (71.25%)',
//     },
//     {
//       degree: 'HSC',
//       institution: 'Shri Shivaji Science College, Amravati',
//       period: '2018 - 2020',
//       details: '',
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative bg-gradient-to-b from-black via-slate-900 to-sky-950 py-20 px-4 sm:px-8 lg:px-20 rounded-xl shadow-2xl"
//     >
//       {/* Decorative Particles */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         {[...Array(15)].map((_, i) => (
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
//         className="relative text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-16 tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] z-10"
//       >
//         Education
//       </motion.h2>

//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {education.map((edu, index) => (
//           <motion.div
//             key={edu.degree}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
//             whileHover={{ scale: 1.03, y: -5 }}
//             className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-gray-700/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group"
//           >
//             {/* Decorative Corner */}
//             <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
//               <FaGraduationCap className="text-2xl text-white" />
//             </div>

//             {/* Timeline Dot */}
//             <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg" />

//             <div className="space-y-6">
//               {/* Degree Header */}
//               <div>
//                 <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
//                   {edu.degree}
//                 </h3>
//                 <div className="flex items-center gap-3 text-gray-300 text-lg mb-1">
//                   <span className="font-medium">{edu.institution}</span>
//                 </div>
//                 <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/20 rounded-full">
//                   <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//                   <span className="text-sm text-blue-300 font-medium">{edu.period}</span>
//                 </div>
//               </div>

//               {/* Details */}
//               {edu.details && (
//                 <motion.div
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.3 + 0.3 }}
//                   className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 p-4 rounded-xl border border-blue-500/20"
//                 >
//                   <p className="text-gray-200 text-center font-medium">
//                     {edu.details}
//                   </p>
//                 </motion.div>
//               )}

//               {/* Hover Effect Line */}
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-500 rounded-full" />
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Connecting Timeline */}
//       <div className="relative z-0 mt-10 mb-16 max-w-4xl mx-auto">
//         <div className="h-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-full" />
//       </div>
//     </motion.section>
//   );
// };

// export default Education;

"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Electronics and Telecommunication Engineering',
      institution: 'Sipna College of Engineering and Technology, Amravati',
      location: 'Amravati, Maharashtra',
      period: '2020 - 2024',
      details: 'CGPA: 7.5 / 10 (71.25%)',
    },
    {
      degree: 'HSC',
      institution: 'Shri Shivaji Science College, Amravati',
      location: 'Amravati, Maharashtra',
      period: '2018 - 2020',
      details: '',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-black via-slate-900 to-sky-950 py-20 px-4 sm:px-8 lg:px-20 rounded-xl shadow-2xl"
    >
      {/* Decorative Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
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

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 120 }}
        className="relative text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-center mb-16 tracking-tight drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] z-10"
      >
        Education
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-gray-700/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group"
          >
            {/* Decorative Corner */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-2xl text-white" />
            </div>

            {/* Timeline Dot */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg" />

            <div className="space-y-6">
              {/* Degree Header */}
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-3 text-gray-300 text-lg mb-1">
                  <span className="font-medium">{edu.institution}</span>
                </div>
                
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{edu.location}</span>
                </div>

                {/* Period */}
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/20 rounded-full">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-sm text-blue-300 font-medium">{edu.period}</span>
                </div>
              </div>

              {/* Details */}
              {edu.details && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.3 + 0.3 }}
                  className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 p-4 rounded-xl border border-blue-500/20"
                >
                  <p className="text-gray-200 text-center font-medium">
                    {edu.details}
                  </p>
                </motion.div>
              )}

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Connecting Timeline */}
      <div className="relative z-0 mt-10 mb-16 max-w-4xl mx-auto">
        <div className="h-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-full" />
      </div>
    </motion.section>
  );
};

export default Education;