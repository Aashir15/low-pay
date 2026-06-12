// import { Outlet, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// export default function Layout() {
//     const location = useLocation();

//     return (
//         <AnimatePresence mode="wait">
//             <motion.div
//                 key={location.pathname}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{
//                     duration: 0.2,
//                     ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="min-h-screen"
//                 onAnimationComplete={() => {
//                     // Scroll to top after animation completes
//                     window.scrollTo({ top: 0, behavior: "instant" });
//                 }}
//             >
//                 <Outlet />
//             </motion.div>
//         </AnimatePresence>
//     );
// }