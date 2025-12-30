// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import profile from '@/assets/myprof.JPG';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { to: '/', label: 'Summary' },
//     { to: '/skills', label: 'Skills' },
//     { to: '/projects', label: 'Projects' },
//     { to: '/education', label: 'Education' },
   
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="sticky top-0 z-50 bg-purple-900/80 backdrop-blur-md shadow-lg"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo with Profile Image */}
//           <motion.div
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src={profile}
//               alt="Tejas Waghamare"
//               className="w-8 h-8 rounded-full border-2 border-red-400"
//             />
//             <h1 className="text-lg sm:text-xl font-bold text-red-400 hover:text-red-500 transition-colors duration-300">
//               Tejas Waghamare
//             </h1>
//           </motion.div>

//           {/* Menu and Social Icons */}
//           <div className="flex items-center space-x-4">
//             {/* Desktop Menu */}
//             <div className="flex space-x-2 sm:space-x-4">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.to}
//                   to={link.to}
//                   className={({ isActive }) =>
//                     `px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-110 ${
//                       isActive ? 'bg-red-400 text-gray-50 shadow-md' : 'text-gray-50 hover:bg-purple-800 hover:text-red-500'
//                     }`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}
//             </div>

//             {/* Social Icons */}
//             <div className="flex space-x-2 sm:space-x-4">
//               <motion.a
//                 href="https://www.linkedin.com/in/tejas-waghamare"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2 }}
//                 className="text-gray-50 hover:text-red-500 transition-colors duration-300"
//               >
//                 <FaLinkedin className="text-lg sm:text-xl" />
//               </motion.a>
//               <motion.a
//                 href="https://github.com/tejas-waghamare"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.2 }}
//                 className="text-gray-50 hover:text-red-500 transition-colors duration-300"
//               >
//                 <FaGithub className="text-lg sm:text-xl" />
//               </motion.a>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               onClick={toggleMenu}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               className="sm:hidden text-gray-50 hover:text-red-500 transition-colors duration-300"
//               aria-label={isOpen ? 'Close menu' : 'Open menu'}
//             >
//               {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu (Dropdown) */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="sm:hidden bg-purple-900/95 backdrop-blur-md shadow-xl"
//           >
//             <div className="px-4 pt-4 pb-4 space-y-2">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.to}
//                   to={link.to}
//                   onClick={toggleMenu}
//                   className={({ isActive }) =>
//                     `block px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
//                       isActive ? 'bg-red-400 text-gray-50' : 'text-gray-50 hover:bg-purple-800 hover:text-red-500'
//                     }`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}
//               <div className="flex space-x-4 px-4 py-2">
//                 <motion.a
//                   href="https://www.linkedin.com/in/tejas-waghamare"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }}
//                   className="text-gray-50 hover:text-red-500 transition-colors duration-300"
//                 >
//                   <FaLinkedin className="text-lg" />
//                 </motion.a>
//                 <motion.a
//                   href="https://github.com/tejas-waghamare"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }}
//                   className="text-gray-50 hover:text-red-500 transition-colors duration-300"
//                 >
//                   <FaGithub className="text-lg" />
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };
// export default Navbar;

// import { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import profile from '@/assets/myprof.JPG';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { to: '/', label: 'Summary' },
//     { to: '/skills', label: 'Skills' },
//     { to: '/projects', label: 'Projects' },
//     { to: '/education', label: 'Education' },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="sticky top-0 z-50 bg-purple-900/90 backdrop-blur-md shadow-md"
//     >
//       <div className=" max-w-7xl mx-auto px-3  sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Name */}
//           <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
//             <img
//               src={profile}
//               alt="Tejas Waghamare"
//               className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-red-400"
//             />
//             <h1 className="text-base sm:text-lg font-bold text-red-400 hover:text-red-500 transition-colors duration-300">
//               <Link to='/' >Tejas Waghamare</Link>
//             </h1>
//           </motion.div>

//           {/* Desktop Menu & Socials */}
//           <div className="hidden sm:flex items-center space-x-3 md:space-x-5">
//             {/* Nav Links */}
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.to}
//                 to={link.to}
//                 className={({ isActive }) =>
//                   `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
//                     isActive
//                       ? 'bg-red-400 text-white shadow-md'
//                       : 'text-gray-100 hover:bg-purple-800 hover:text-red-400'
//                   }`
//                 }
//               >
//                 {link.label}
//               </NavLink>
//             ))}

//             {/* Social Icons */}
//             <motion.a
//               href="https://www.linkedin.com/in/tejas-waghamare"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2 }}
//               className="text-gray-100 hover:text-red-400"
//             >
//               <FaLinkedin className="text-lg" />
//             </motion.a>
//             <motion.a
//               href="https://github.com/tejas-waghamare"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2 }}
//               className="text-gray-100 hover:text-red-400"
//             >
//               <FaGithub className="text-lg" />
//             </motion.a>
//           </div>

//           {/* Mobile Toggle Button */}
//           <motion.button
//             onClick={toggleMenu}
//             whileTap={{ scale: 0.9 }}
//             className="sm:hidden text-gray-100 hover:text-red-400 transition"
//             aria-label={isOpen ? 'Close menu' : 'Open menu'}
//           >
//             {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="sm:hidden bg-purple-900/95 backdrop-blur-md shadow-lg overflow-hidden"
//           >
//             <div className="flex flex-col px-4 py-3 space-y-3">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.to}
//                   to={link.to}
//                   onClick={toggleMenu}
//                   className={({ isActive }) =>
//                     `block w-full px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                       isActive
//                         ? 'bg-red-400 text-white'
//                         : 'text-gray-100 hover:bg-purple-800 hover:text-red-400'
//                     }`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}
//               <div className="flex justify-center space-x-6 pt-2">
//                 <motion.a
//                   href="https://www.linkedin.com/in/tejas-waghamare"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }}
//                   className="text-gray-100 hover:text-red-400"
//                 >
//                   <FaLinkedin className="text-xl" />
//                 </motion.a>
//                 <motion.a
//                   href="https://github.com/tejas-waghamare"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2 }}
//                   className="text-gray-100 hover:text-red-400"
//                 >
//                   <FaGithub className="text-xl" />
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaHome, FaCode, FaProjectDiagram, FaGraduationCap, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import profile from '@/assets/myprof.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const navLinks = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/skills', label: 'Skills', icon: FaCode },
    { to: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { to: '/education', label: 'Education', icon: FaGraduationCap },
    // { to: '/about', label: 'About', icon: FaUser },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-blue-900/20' 
          : 'bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo and Name */}
          <motion.div 
            className="flex items-center space-x-3" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-sm" />
              <img
                src={profile}
                alt="Tejas Waghamare"
                className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 p-0.5"
              />
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold">
                <Link to='/' className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 transition-all duration-300">
                  Tejas Waghamare
                </Link>
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">MERN Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Menu & Socials */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Nav Links */}
            <div className="flex items-center space-x-1 mr-6 bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`
                  }
                >
                  <link.icon className="text-sm" />
                  <span>{link.label}</span>
                  {({ isActive }) => isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full -z-10"
                    />
                  )}
                </NavLink>
              ))}
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-4" />

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tejas-waghamare', color: 'hover:text-[#0077B5]', bg: 'hover:bg-[#0077B5]/20' },
                { icon: FaGithub, href: 'https://github.com/tejas-waghamare', color: 'hover:text-gray-100', bg: 'hover:bg-gray-800' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2.5 rounded-full bg-gray-800/50 backdrop-blur-sm ${social.bg} transition-all duration-300`}
                >
                  <social.icon className={`text-lg text-gray-300 ${social.color} transition-colors duration-300`} />
                </motion.a>
              ))}
              
              {/* Resume Button */}
              <motion.a
                href="/TejasWaghamare_MERN_Stack_Dev.pdf"
                download="TejasWaghamare_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Resume</span>
                <span className="text-xs">↓</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-white border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`
                  }
                >
                  <link.icon className={({ isActive }) => isActive ? 'text-blue-400' : 'text-gray-400'} />
                  <span>{link.label}</span>
                </NavLink>
              ))}
              
              {/* Social Icons Mobile */}
              <div className="flex justify-center space-x-6 pt-6">
                {[
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/tejas-waghamare-62b6b0290/', color: 'text-[#0077B5]' },
                  { icon: FaGithub, href: 'https://github.com/tejas-waghamare', color: 'text-gray-100' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all"
                  >
                    <social.icon className={`text-2xl ${social.color}`} />
                  </motion.a>
                ))}
              </div>
              
              {/* Resume Button Mobile */}
              <div className="pt-6">
                <motion.a
                  href="/TejasWaghamare_MERN_Stack_Dev.pdf"
                  download="TejasWaghamare_Resume.pdf"
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium text-center hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
          initial={{ width: "0%" }}
          animate={{ 
            width: isScrolled 
              ? `${Math.min((typeof window !== 'undefined' ? window.scrollY : 0) / (document.body.scrollHeight - window.innerHeight) * 100, 100)}%` 
              : "0%" 
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;