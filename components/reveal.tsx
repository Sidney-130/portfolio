// "use client";

// import { JSX } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   children: JSX.Element;
//   width?: "fit-content" | "100%";
// }

// export function Reveal({ children, width = "fit-content" }: Props) {
//   return (
//     <div style={{ width, overflow: "hidden" }}>
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, x: 75 },
//           visible: { opacity: 1, x: 0 },
//         }}
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.5 }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }