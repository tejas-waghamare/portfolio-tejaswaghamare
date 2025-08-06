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

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import profile from '@/assets/myprof.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Summary' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/education', label: 'Education' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 bg-purple-900/90 backdrop-blur-md shadow-md"
    >
      <div className=" max-w-7xl mx-auto px-3  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <img
              src={profile}
              alt="Tejas Waghamare"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-red-400"
            />
            <h1 className="text-base sm:text-lg font-bold text-red-400 hover:text-red-500 transition-colors duration-300">
              <Link to='/' >Tejas Waghamare</Link>
            </h1>
          </motion.div>

          {/* Desktop Menu & Socials */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-5">
            {/* Nav Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 ${
                    isActive
                      ? 'bg-red-400 text-white shadow-md'
                      : 'text-gray-100 hover:bg-purple-800 hover:text-red-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Social Icons */}
            <motion.a
              href="https://www.linkedin.com/in/tejas-waghamare"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-100 hover:text-red-400"
            >
              <FaLinkedin className="text-lg" />
            </motion.a>
            <motion.a
              href="https://github.com/tejas-waghamare"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-100 hover:text-red-400"
            >
              <FaGithub className="text-lg" />
            </motion.a>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="sm:hidden text-gray-100 hover:text-red-400 transition"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-purple-900/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block w-full px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-red-400 text-white'
                        : 'text-gray-100 hover:bg-purple-800 hover:text-red-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex justify-center space-x-6 pt-2">
                <motion.a
                  href="https://www.linkedin.com/in/tejas-waghamare"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-100 hover:text-red-400"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://github.com/tejas-waghamare"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-100 hover:text-red-400"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
