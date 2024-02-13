// import library
import { motion } from "framer-motion";

// const animationConfiguration = {
//   initial: { x: "100%", opacity: 0 },
//   animate: { opacity: 1, x: 0, transition: { duration: 1 } },
//   exit: { x:"-100%", opacity: 0 },
// };
const Transitions = ({ children }) => {
  return (
    <motion.div
      // variants={animationConfiguration}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      // transition={{ duration: 1 }}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{ x: 10 }}
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
