import { motion } from "framer-motion";
import "../index.css";

const transition = (OgComponent) =>
  function HOC() {
    return (
      <>
        <OgComponent />
        <motion.div className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55}}
        />

        <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55}}
        />
    </>
  );
};

export default transition;