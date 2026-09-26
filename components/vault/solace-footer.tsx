"use client";
import React from "react";
import { motion, Variants } from "motion/react";

import { KaivexLogo } from "@/components/ui/kaivex-logo";

export function SolaceFooter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <footer className="w-full py-12 bg-[#06080D] text-slate-200 overflow-hidden border-t border-white/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="container mx-auto px-4 flex flex-col items-center gap-10 mb-12"
      >
        {/* Authentic Kaivex Logo */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <KaivexLogo variant="stacked" size="lg" theme="dark" showSublabel={true} />
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium relative z-10"
        >
          {["Infrastructure", "The Wall", "Sprints", "About", "Journal", "Terms"].map(
            (item) => (
              <motion.a
                key={item}
                href="#"
                className="relative px-3 py-1.5 text-slate-400 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{item}</span>
              </motion.a>
            ),
          )}
        </motion.nav>
      </motion.div>

      {/* Animated Striped Divider */}
      <motion.div
        className="w-full h-10 border-y border-white/10 opacity-20 bg-[repeating-linear-gradient(315deg,white_0,white_1px,transparent_0,transparent_50%)]"
        style={{ backgroundSize: "12px 12px" }}
        initial={{ backgroundPositionX: "0%" }}
        whileInView={{ backgroundPositionX: "100%" }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      />

      {/* Copyright */}
      <motion.div
        className="container mx-auto px-4 mt-8 text-center text-xs text-slate-500 font-mono"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} Kaivex Systems Ltd. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

export default SolaceFooter;
