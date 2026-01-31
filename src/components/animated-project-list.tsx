'use client';

import { motion } from 'framer-motion';

const projects = Array.from({ length: 10 }, (_, i) => `PROJECT ${i + 1}`);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

export function AnimatedProjectList() {
  return (
    <motion.ul
      className="w-full max-w-2xl space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.li
          key={project}
          variants={itemVariants}
          className="bg-card/50 border border-border p-6 rounded-lg text-center text-xl font-semibold text-foreground shadow-md"
        >
          {project}
        </motion.li>
      ))}
    </motion.ul>
  );
}
