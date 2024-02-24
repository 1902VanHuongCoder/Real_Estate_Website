// import library
import { motion } from "framer-motion";

const Transitions = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ x: "-100%" }}
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
