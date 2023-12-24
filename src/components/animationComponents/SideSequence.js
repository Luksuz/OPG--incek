import { motion } from "framer-motion";

export default function SideSequence({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: children.delay } }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.2, delay: (children.delay - 0.5) } }}
    >
      {children}
    </motion.div>
  );
}
