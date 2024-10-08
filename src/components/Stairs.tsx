import React from 'react'; 
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit={"exit"}
            transition={{
              delay: reverseIndex(index) * 0.1,
              duration: 0.4,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
