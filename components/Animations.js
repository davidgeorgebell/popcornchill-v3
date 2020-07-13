import React from 'react';
import { motion } from 'framer-motion';

export function GrowAnimation({ children }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0.2 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.7,
      }}>
      {children}
    </motion.div>
  );
}

export function YAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        duration: 0.5,
      }}>
      {children}
    </motion.div>
  );
}
export function YAnimationSlow({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        duration: 1,
      }}>
      {children}
    </motion.div>
  );
}
export function YAnimationMid({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        duration: 0.7,
      }}>
      {children}
    </motion.div>
  );
}
export function XAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, x: -100 }}
      animate={{ opacity: 1, x: 1 }}
      transition={{
        duration: 0.7,
      }}>
      {children}
    </motion.div>
  );
}
export function GrowSlow({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
      }}>
      {children}
    </motion.div>
  );
}
export function Stagger({ children }) {
  return (
    <motion.div
      initial='initial'
      animate='enter'
      exit='exit'
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
      {children}
    </motion.div>
  );
}
