"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { personalInfo } from "@/lib/data";

// ASCII art block-letter initials "KI"
const ASCII_ART = `
 █████╗ ██╗
██╔══██╗██║
███████║██║
██╔══██║██║
██║  ██║██║
╚═╝  ╚═╝╚═╝
`.trim();

const BOOT_LINES = [
  { label: "SYS.NAME ", value: `${personalInfo.name.toUpperCase()}_OS v1.0.0` },
  { label: "SYS.AUTH ", value: "GUEST_ACCESS_GRANTED" },
  { label: "SYS.NODE ", value: personalInfo.domain },
  { label: "STATUS   ", value: "200 OK" },
];

export default function BootSequence() {
  const reducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.12,
        delayChildren: reducedMotion ? 0 : 0.2,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <header
      className="pt-16 pb-12 sm:pt-20 sm:pb-16"
      aria-label="Portfolio boot sequence"
    >
      {/* ASCII Art */}
      <motion.pre
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.9 }}
        aria-label="KI initials in ASCII art"
        className="text-xs sm:text-sm leading-tight mb-8 select-none"
        style={{
          color: "var(--accent)",
          textShadow: "0 0 18px var(--accent-glow)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {ASCII_ART}
      </motion.pre>

      {/* Boot lines */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-mono text-sm leading-relaxed"
        style={{
          borderLeft: "2px solid var(--border)",
          paddingLeft: "1rem",
        }}
      >
        {BOOT_LINES.map(({ label, value }) => (
          <motion.div
            key={label}
            variants={lineVariants}
            className="flex gap-2 sm:gap-4"
          >
            <span
              className="shrink-0 uppercase tracking-wider"
              style={{ color: "var(--text-muted)", minWidth: "9ch" }}
            >
              {label}
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--text)" }}
            >
              <span style={{ color: "var(--text-muted)", marginRight: "0.5ch" }}>
                :
              </span>
              {value === "200 OK" ? (
                <span style={{ color: "var(--accent)" }}>{value}</span>
              ) : (
                value
              )}
            </span>
          </motion.div>
        ))}

        {/* Separator */}
        <motion.div
          variants={lineVariants}
          className="mt-4 pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span style={{ color: "var(--text-muted)" }}>
            type{" "}
            <kbd
              style={{
                color: "var(--accent)",
                border: "1px solid var(--border)",
                padding: "0 4px",
                borderRadius: "2px",
                fontSize: "0.85em",
              }}
            >
              ~
            </kbd>{" "}
            for hidden commands
          </span>
        </motion.div>
      </motion.div>
    </header>
  );
}
