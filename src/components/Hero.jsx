

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


"use client";

import { motion } from "framer-motion";
import { WarpBackground } from "./magicui/WarpBackground.jsx";
import profile from "@/assets/myprof.JPG";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <WarpBackground
      perspective={100}
      beamsPerSide={5}
      beamSize={4}
      beamDelayMax={2}
      beamDelayMin={0}
      beamDuration={3}
      gridColor="rgba(255, 99, 132, 0.15)"
      className="bg-gradient-to-tr from-[#190310] via-[#2a2c17bb] to-[#0b2c28] py-24 px-6 sm:px-12 lg:px-20 rounded-xl shadow-2xl text-center"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8 rounded-full border-4 border-pink-700 shadow-2xl ring ring-pink-900 animate-pulse"
      >
        <img
          src={profile}
          alt="Tejas Waghamare"
          className="rounded-full w-full h-full object-cover"
        />
      </motion.div>

      {/* Name with Gradient Text */}
      <motion.h1
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl p-2 md:text-6xl font-bold font-serif bg-gradient-to-br from-sky-600 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent text-stroke tracking-wide mb-4"
      >
        Tejas Waghamare
      </motion.h1>

      {/* Animated Role Text */}
      <TypeAnimation
        sequence={[
          "MERN Stack Developer", 2000,
          "React.js Enthusiast", 2000,
          "Open Source Contributor", 2000,
          "Creative Coder", 2000,
        ]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
        className="text-xl sm:text-2xl text-lime-300 font-mono mb-8"
      />

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-5"
      >
        <motion.a
          href="mailto:tejaswaghamare121@gmail.com"
          whileHover={{ scale: 1.1 }}
          className="border border-sky-800 hover:bg-pink-600 text-white flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 backdrop-blur"
        >
          <FaEnvelope />
          Contact Me
        </motion.a>

        <motion.a
          href="https://github.com/tejas-waghamare"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="border border-pink-400 text-sky-500 hover:text-white hover:bg-pink-500 flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 backdrop-blur"
        >
          <FaGithub />
          View GitHub
        </motion.a>
      </motion.div>
    </WarpBackground>
  );
};

export default Hero;
