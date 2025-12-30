
// "use client";

// import { motion } from 'framer-motion';
// import { Meteors } from '@/components/magicui/meteors';

// const Summary = () => {
//   return (
//     <motion.section
//       initial={{ opacity:0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative overflow-auto bg-black py-10  sm:px-6 lg:px-8 rounded-xl shadow-2xl  max-w-full mx-auto"
//     >
//       {/* Meteors Background Effect */}
//       <Meteors number={20} />
      
//       {/* Content */}
//       <div className="relative z-10 text-center max-w-full mx-auto">
//         <motion.h2
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-lg sm:text-xl text-gray-100 leading-relaxed font-medium"
//         >
//           I'm a dedicated <span className="text-blue-400">MERN Stack Developer</span> with a strong foundation in React.js, Node.js, Express.js, and MongoDB, passionate about crafting innovative, user-centric web applications. My journey in tech has led me to build impactful projects like an AI-powered Gemini Chatbot, leveraging natural language processing to deliver seamless user interactions, and a College Enquiry Bot, streamlining information access for students. With a B.E. in Electronics and Telecommunication (7.5 CGPA), I combine technical rigor with creative problem-solving, excelling in both frontend and backend development. As a project leader, I’ve honed my ability to manage teams, meet deadlines, and deliver scalable solutions that solve real-world challenges. My expertise spans modern JavaScript frameworks, RESTful APIs, and database optimization, ensuring high-performance applications. Driven by a commitment to excellence, I thrive on transforming ideas into reality through clean code and intuitive design. Beyond coding, I’m an avid learner, staying updated with emerging technologies like Next.js and GraphQL to push the boundaries of innovation. Let’s build something extraordinary together!
//         </motion.p>
//       </div>
//     </motion.section>
//   );
// };

// export default Summary;

// "use client";

// import { motion } from 'framer-motion';
// import { Meteors } from '@/components/magicui/Meteors.jsx';

// const Summary = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative overflow-hidden bg-black py-12 px-4 sm:px-6 lg:px-16 rounded-3xl shadow-2xl max-w-5xl mx-auto my-10"
//     >
//       {/* Background Meteor Effect */}
//       <Meteors number={20} />

//       {/* Content */}
//       <div className="relative z-10 text-center space-y-6">
//         <motion.h2
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md"
//         >
//           About Me
//         </motion.h2>

//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="text-base sm:text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-4xl mx-auto"
//         >
//           I&apos;m a dedicated <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with a strong foundation in <span className="text-cyan-400">React.js</span>, <span className="text-cyan-400">Node.js</span>, <span className="text-cyan-400">Express.js</span>, and <span className="text-cyan-400">MongoDB</span>, passionate about crafting innovative, user-centric web applications.
//           <br /><br />
//           My journey in tech has led me to build impactful projects like an <span className="text-pink-400">AI-powered Gemini Chatbot</span> and a <span className="text-pink-400">College Enquiry Bot</span>, streamlining information access using natural language processing.
//           <br /><br />
//           With a <span className="text-yellow-300">B.E. in Electronics and Telecommunication</span> (7.5 CGPA), I combine technical rigor with creative problem-solving. I’ve led projects, managed teams, and delivered scalable solutions using RESTful APIs and optimized databases.
//           <br /><br />
//           I’m also an avid learner, currently exploring <span className="text-purple-400">Next.js</span> and <span className="text-purple-400">GraphQL</span> to push boundaries in modern development. Let’s build something extraordinary together!
//         </motion.p>
//       </div>
//     </motion.section>
//   );
// };

// export default Summary;
"use client";

import { motion } from 'framer-motion';
import { Meteors } from '@/components/magicui/Meteors.jsx';
import { FaUser, FaCode, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

const Summary = () => {
  const highlights = [
    { icon: FaCode, text: "MERN Stack Specialist", color: "text-blue-400" },
    { icon: FaRocket, text: "Project Leader", color: "text-cyan-400" },
    { icon: FaLightbulb, text: "Creative Problem Solver", color: "text-yellow-400" },
    { icon: FaHeart, text: "Tech Enthusiast", color: "text-pink-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[600px] flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Meteors number={40} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                              linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-br  from-gray-900/60 via-black/70 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-900/50 shadow-2xl p-8 sm:p-12 lg:p-16 opacity-90">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Icon Badge */}
            {/* <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-400/20 backdrop-blur-sm border border-blue-500/30 mb-6"
            >
              <FaUser className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
            </motion.div> */}

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                About Me
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Passionate developer crafting exceptional digital experiences
            </motion.p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                >
                  <Icon className={`text-3xl mb-3 ${highlight.color}`} />
                  <span className={`text-sm font-medium ${highlight.color} text-center`}>
                    {highlight.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a dedicated <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with expertise in <span className="text-cyan-400">React.js</span>, <span className="text-cyan-400">Node.js</span>, <span className="text-cyan-400">Express.js</span>, and <span className="text-cyan-400">MongoDB</span>, passionate about crafting innovative, user-centric web applications.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in tech has led me to build impactful projects like an <span className="text-pink-400">AI-powered Gemini Chatbot</span> and a <span className="text-pink-400">College Enquiry Bot</span>, streamlining information access using natural language processing.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                With a <span className="text-yellow-300">B.E. in Electronics and Telecommunication</span> (7.5 CGPA), I combine technical rigor with creative problem-solving. I've led projects, managed teams, and delivered scalable solutions using RESTful APIs and optimized databases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-6 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Technical Focus
                </h3>
                <p className="text-gray-300">
                  Currently expanding expertise in <span className="text-purple-400 font-medium">Next.js</span>, <span className="text-purple-400 font-medium">GraphQL</span>, and advanced state management patterns to build cutting-edge applications.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  Development Philosophy
                </h3>
                <p className="text-gray-300">
                  I believe in writing clean, maintainable code while prioritizing user experience, performance optimization, and scalable architecture in every project.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-6 rounded-2xl border border-green-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Let's Connect
                </h3>
                <p className="text-gray-300">
                  Always open to exciting opportunities, collaborations, and discussions about innovative tech solutions. Let's build something extraordinary together!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mt-12"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Summary;