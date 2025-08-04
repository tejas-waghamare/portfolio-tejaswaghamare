


// import clsx from "clsx";
// import { useEffect, useState } from "react";

// export const Meteors = ({ number = 20 }) => {
//   const [meteorStyles, setMeteorStyles] = useState([]);

//   useEffect(() => {
//     const styles = [...new Array(number)].map(() => ({
//       top: "-10%", // Start just above the top of the container
//       left: Math.floor(Math.random() * 100) + "%", // Random position within container width
//       animationDelay: Math.random() * 1 + 0.2 + "s",
//       animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
//     }));
//     setMeteorStyles(styles);
//   }, [number]);

//   return (
//     <div className="absolute  overflow-hidden inset-0">
//       {meteorStyles.map((style, idx) => (
//         <span
//           key={idx}
//           className={clsx(
//             "pointer-events-none absolute h-0.5 w-0.5 meteor rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]"
//           )}
//           style={style}
//         >
//           <div className="pointer-events-none absolute top-1/2 z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Meteors;

import { useEffect, useState } from "react";
import clsx from "clsx";

export const Meteors = ({ number = 20 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => ({
      top: `${Math.random() * 100}%`, // random top start
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${Math.random() * 5 + 4}s`, // 4s to 9s
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={clsx(
            "absolute h-0.5 w-0.5 meteor rounded-full bg-white opacity-40",
            "animate-meteor"
          )}
          style={style}
        >
          <div className="absolute  top-1/2 h-[1px] w-[60px] -translate-y-1/2 bg-gradient-to-r from-white/70 to-transparent" />
        </span>
      ))}
    </div>
  );
};

export default Meteors;
