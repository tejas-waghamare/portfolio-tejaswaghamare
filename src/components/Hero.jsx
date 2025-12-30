

// "use client";

// import { motion } from "framer-motion";
// import { WarpBackground } from "./magicui/WarpBackground.jsx";
// import profile from "@/assets/myprof.JPG";
// import { FaEnvelope, FaGithub } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";

// const roles = [
//   "MERN Stack Developer",
//   "React.js Enthusiast",
//   "Open Source Contributor",
//   "Creative Coder",
// ];

// const Hero = () => {
//   const [currentRole, setCurrentRole] = useState(roles[0]);
//   const [roleIndex, setRoleIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRoleIndex((prev) => (prev + 1) % roles.length);
//       setCurrentRole(roles[(roleIndex + 1) % roles.length]);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [roleIndex]);

//   return (
//     <WarpBackground
//       perspective={100}
//       beamsPerSide={5}
//       beamSize={4}
//       beamDelayMax={2}
//       beamDelayMin={0}
//       beamDuration={3}
//       gridColor="rgba(255, 99, 132, 0.15)"
//       className="bg-gradient-to-tr from-[#190310] via-[#2a2c17bb] to-[#0b2c28] py-24 px-6 sm:px-12 lg:px-20 rounded-xl shadow-2xl text-center"
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8 rounded-full border-4 border-pink-700 shadow-2xl ring ring-pink-900 animate-pulse"
//       >
//         <img
//           src={profile}
//           alt="Tejas Waghamare"
//           className="rounded-full  w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* <motion.h1
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.6 }}
//         className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow mb-4"
//       >
//         Tejas Waghamare
//       </motion.h1> */}

//       <motion.h1
//   initial={{ y: 40, opacity: 0, scale: 0.95 }}
//   animate={{ y: 0, opacity: 1, scale: 1 }}
//   transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
//   className="text-5xl sm:text-6xl font-bold font-serif bg-gradient-to-br from-sky-600 via-fuchsia-400 to-indigo-300 bg-clip-text p-2 text-transparent text-stroke tracking-wide mb-4"
// >
//   Tejas Waghamare
// </motion.h1>


//       {/* <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.7, duration: 0.9 }}
//         className="text-xl sm:text-2xl text-pink-400 font-medium mb-8 animate-fade-in-out"
//       >
//         {currentRole}
//       </motion.p> */}

//       {/* <motion.p
//   initial={{ y: 20, opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
//   className="text-xl sm:text-2xl text-pink-400 font-medium mb-8"
// >
//   {currentRole}
// </motion.p> */}

// {/* <motion.p
//   initial={{ scale: 0.8, opacity: 0 }}
//   animate={{ scale: 1, opacity: 1 }}
//   transition={{ delay: 1.7, duration: 0.7, ease: "backOut" }}
//   className="text-xl sm:text-2xl text-pink-400 font-medium mb-8"
// >
//   {currentRole}
// </motion.p> */}

//  <TypeAnimation
//         sequence={[
//           "MERN Stack Developer",
//           2000,
//           "React.js Enthusiast",
//           2000,
//           "Open Source Contributor",
//           2000,
//           "Creative Coder",
//           2000,
//         ]}
//         wrapper="p"
//         speed={50}
//         repeat={Infinity}
//         className="text-xl sm:text-2xl text-lime-300 font-mono mb-8"
//       />



//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1.4, duration: 0.6 }}
//         className="flex flex-col sm:flex-row justify-center items-center gap-5"
//       >
//         <motion.a
//           href="mailto:tejaswaghamare121@gmail.com"
//           whileHover={{ scale: 1.1 }}
//           className= "border border-sky-800 hover:bg-pink-600 text-white flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 backdrop-blur"
//         >
//           <FaEnvelope />
//           Contact Me
//         </motion.a>

//         <motion.a
//           href="https://github.com/tejas-waghamare"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.1 }}
//           className="border border-pink-400 text-sky-500 hover:text-white hover:bg-pink-500 flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 backdrop-blur"
//         >
//           <FaGithub />
//           View GitHub
//         </motion.a>
//       </motion.div>
//     </WarpBackground>
//   );
// };

// export default Hero;


// "use client";

// import { motion } from "framer-motion";
// import { WarpBackground } from "./magicui/WarpBackground.jsx";
// import profile from "@/assets/myprof.JPG";
// import { FaEnvelope, FaGithub } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";

// const Hero = () => {
//   return (
//     <WarpBackground
//       perspective={100}
//       beamsPerSide={5}
//       beamSize={4}
//       beamDelayMax={2}
//       beamDelayMin={0}
//       beamDuration={3}
//       gridColor="rgba(255, 99, 132, 0.15)"
//       className="bg-gradient-to-tr from-[#190310] via-[#2a2c17bb] to-[#0b2c28] py-24 px-6 sm:px-12 lg:px-20 rounded-xl shadow-2xl text-center"
//     >
//       {/* Profile Image */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8 rounded-full border-4 border-pink-700 shadow-2xl ring ring-pink-900 animate-pulse"
//       >
//         <img
//           src={profile}
//           alt="Tejas Waghamare"
//           className="rounded-full w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Name with Gradient Text */}
//       <motion.h1
//         initial={{ y: 40, opacity: 0, scale: 0.95 }}
//         animate={{ y: 0, opacity: 1, scale: 1 }}
//         transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
//         className="text-4xl sm:text-5xl p-2 md:text-6xl font-bold font-serif bg-gradient-to-br from-sky-600 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent text-stroke tracking-wide mb-4"
//       >
//         Tejas Waghamare
//       </motion.h1>

//       {/* Animated Role Text */}
//       <TypeAnimation
//         sequence={[
//           "MERN Stack Developer", 2000,
//           "React.js Enthusiast", 2000,
//           "Open Source Contributor", 2000,
//           "Creative Coder", 2000,
//         ]}
//         wrapper="p"
//         speed={50}
//         repeat={Infinity}
//         className="text-xl sm:text-2xl text-lime-300 font-mono mb-8"
//       />

//       {/* CTA Buttons */}
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1.4, duration: 0.6 }}
//         className="flex flex-col sm:flex-row justify-center items-center gap-5"
//       >
//         <motion.a
//           href="mailto:tejaswaghamare121@gmail.com"
//           whileHover={{ scale: 1.1 }}
//           className="border border-sky-800 hover:bg-pink-600 text-white flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 backdrop-blur"
//         >
//           <FaEnvelope />
//           Contact Me
//         </motion.a>

//         <motion.a
//           href="https://github.com/tejas-waghamare"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.1 }}
//           className="border border-pink-400 text-sky-500 hover:text-white hover:bg-pink-500 flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 backdrop-blur"
//         >
//           <FaGithub />
//           View GitHub
//         </motion.a>
//       </motion.div>
//     </WarpBackground>
//   );
// };

// export default Hero;


"use client";

import { motion } from "framer-motion";
import { WarpBackground } from "./magicui/WarpBackground.jsx";
import profile from "@/assets/myprof.JPG";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/tejas-waghamare", color: "hover:bg-gray-800", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/tejas-waghamare-62b6b0290/", color: "hover:bg-[#0077B5]", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/tejas-waghamare", color: "hover:bg-[#FFA116]", label: "LeetCode" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                            linear-gradient(to bottom, #8882 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <WarpBackground
        perspective={120}
        beamsPerSide={6}
        beamSize={3}
        beamDelayMax={1.5}
        beamDelayMin={0}
        beamDuration={4}
        gridColor="rgba(59, 130, 246, 0.15)"
        className="relative z-10 bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-6xl w-full shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-cyan-300 font-medium">Welcome to my portfolio</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="block p-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Hi, I'm Tejas
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-300 mt-2">
                A Passionate
              </span>
            </motion.h1>

            {/* Animated Role */}
            <div className="h-20 mb-6">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer", 2000,
                  "Full Stack Engineer", 2000,
                  "React.js Specialist", 2000,
                  "Problem Solver", 2000,
                  "Tech Enthusiast", 2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl"
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. 
              Let's bring your ideas to life with cutting-edge web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="/TejasWaghamare_MERN_Stack_Dev.pdf"
                download="TejasWaghamare_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <FaFileDownload />
                Download Resume
              </motion.a>

              <motion.a
                href="mailto:tejaswaghamare121@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
              >
                <FaEnvelope />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-400">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl text-gray-300 hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-md opacity-30" />
              
              {/* Main Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 p-1">
                <img
                  src={profile}
                  alt="Tejas Waghamare"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Badges */}
              {["React", "Node.js", "MongoDB", "Next.js"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`absolute ${index === 0 ? 'top-0 left-0' : 
                              index === 1 ? 'top-0 right-0' : 
                              index === 2 ? 'bottom-0 left-0' : 'bottom-0 right-0'} 
                              bg-gray-900/80 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-full`}
                >
                  <span className="text-sm font-medium text-white">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </WarpBackground>
    </section>
  );
};

export default Hero;