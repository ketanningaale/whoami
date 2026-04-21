"use client";

import { motion, useReducedMotion } from "framer-motion";

interface TerminalPromptProps {
  command: string;
  /** Heading level — defaults to h2 */
  as?: "h1" | "h2" | "h3";
  /** Optional id for anchor links */
  id?: string;
  /** Animate the prompt typing on mount */
  animate?: boolean;
  className?: string;
}

export default function TerminalPrompt({
  command,
  as: Tag = "h2",
  id,
  animate = false,
  className = "",
}: TerminalPromptProps) {
  const reducedMotion = useReducedMotion();
  const shouldAnimate = animate && !reducedMotion;

  return (
    <Tag
      id={id}
      className={`font-mono text-base sm:text-lg leading-none mb-6 flex items-center gap-1 ${className}`}
      style={{ color: "var(--text-muted)" }}
    >
      {/* $ prefix */}
      <span style={{ color: "var(--accent)" }} aria-hidden="true">
        $
      </span>{" "}
      {shouldAnimate ? (
        <motion.span
          initial={{ width: 0, overflow: "hidden", display: "inline-block", whiteSpace: "nowrap" }}
          animate={{ width: "auto" }}
          transition={{
            duration: command.length * 0.06,
            ease: "linear",
          }}
          aria-label={command}
        >
          {command}
        </motion.span>
      ) : (
        <span>{command}</span>
      )}
    </Tag>
  );
}
