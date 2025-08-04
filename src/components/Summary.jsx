
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

"use client";

import { motion } from 'framer-motion';
import { Meteors } from '@/components/magicui/Meteors.jsx';

const Summary = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-black py-12 px-4 sm:px-6 lg:px-16 rounded-3xl shadow-2xl max-w-5xl mx-auto my-10"
    >
      {/* Background Meteor Effect */}
      <Meteors number={20} />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 font-medium leading-relaxed max-w-4xl mx-auto"
        >
          I&apos;m a dedicated <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with a strong foundation in <span className="text-cyan-400">React.js</span>, <span className="text-cyan-400">Node.js</span>, <span className="text-cyan-400">Express.js</span>, and <span className="text-cyan-400">MongoDB</span>, passionate about crafting innovative, user-centric web applications.
          <br /><br />
          My journey in tech has led me to build impactful projects like an <span className="text-pink-400">AI-powered Gemini Chatbot</span> and a <span className="text-pink-400">College Enquiry Bot</span>, streamlining information access using natural language processing.
          <br /><br />
          With a <span className="text-yellow-300">B.E. in Electronics and Telecommunication</span> (7.5 CGPA), I combine technical rigor with creative problem-solving. I’ve led projects, managed teams, and delivered scalable solutions using RESTful APIs and optimized databases.
          <br /><br />
          I’m also an avid learner, currently exploring <span className="text-purple-400">Next.js</span> and <span className="text-purple-400">GraphQL</span> to push boundaries in modern development. Let’s build something extraordinary together!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Summary;
