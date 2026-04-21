"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectEntryProps {
  project: Project;
  index: number;
}

const STATUS_CONFIG = {
  live: { label: "LIVE", dot: "●", className: "dot-live" },
  wip: { label: "WIP", dot: "◐", className: "dot-wip" },
  archived: { label: "ARCHIVED", dot: "○", className: "dot-archived" },
};

export default function ProjectEntry({ project, index }: ProjectEntryProps) {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);

  const status = STATUS_CONFIG[project.status];

  const toggle = () => setOpen((v) => !v);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <li className="border-b last:border-b-0" style={{ borderColor: "var(--border)" }}>
      {/* ── Row header (always visible) ─── */}
      <button
        ref={btnRef}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-controls={`project-detail-${project.id}`}
        className="w-full text-left row-hover"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto auto",
          gap: "0.5rem 1.5rem",
          padding: "0.65rem 0.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "var(--text)",
        }}
      >
        {/* Filename */}
        <span
          className="flex items-center gap-2 min-w-0"
          style={{ color: "var(--accent)" }}
        >
          <span
            aria-hidden="true"
            style={{
              color: "var(--text-muted)",
              display: "inline-block",
              width: "1.4ch",
              flexShrink: 0,
            }}
          >
            {open ? "▾" : "▸"}
          </span>
          <span className="truncate">{project.filename}</span>
        </span>

        {/* Size — hidden on mobile */}
        <span
          className="hidden sm:block text-right shrink-0"
          style={{ color: "var(--text-muted)", minWidth: "6ch" }}
        >
          {project.size}
        </span>

        {/* Modified date — hidden on mobile */}
        <span
          className="hidden sm:block text-right shrink-0"
          style={{ color: "var(--text-muted)", minWidth: "7ch" }}
        >
          {project.modified}
        </span>

        {/* Status */}
        <span
          className={`shrink-0 text-right ${status.className}`}
          style={{ minWidth: "8ch" }}
        >
          <span aria-hidden="true">{status.dot} </span>
          {status.label}
        </span>
      </button>

      {/* Mobile meta row (shown when collapsed, hidden otherwise) */}
      {!open && (
        <div
          className="flex sm:hidden gap-3 px-2 pb-2 text-xs"
          style={{ color: "var(--text-muted)", paddingLeft: "calc(1.4ch + 0.5rem + 0.5rem)" }}
        >
          <span>{project.size}</span>
          <span>·</span>
          <span>{project.modified}</span>
        </div>
      )}

      {/* ── Expandable detail ─── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`project-detail-${project.id}`}
            role="region"
            aria-label={`Details for ${project.name}`}
            key="detail"
            initial={reducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reducedMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-4 pb-5 pt-2 text-sm leading-relaxed"
              style={{
                borderLeft: "2px solid var(--accent)",
                marginLeft: "0.5rem",
                background: "var(--surface)",
              }}
            >
              {/* Name header */}
              <div
                className="font-display font-semibold text-base mb-3"
                style={{ color: "var(--text)" }}
              >
                {project.name}
              </div>

              {/* Description */}
              <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              {/* Key-value details */}
              <div className="grid gap-y-1" style={{ gridTemplateColumns: "max-content 1fr" }}>
                <span className="pr-4" style={{ color: "var(--text-muted)" }}>
                  ROLE
                </span>
                <span style={{ color: "var(--text)" }}>{project.role}</span>

                <span className="pr-4" style={{ color: "var(--text-muted)" }}>
                  STACK
                </span>
                <span style={{ color: "var(--text)" }}>
                  {project.stack.join(" · ")}
                </span>

                <span className="pr-4" style={{ color: "var(--text-muted)" }}>
                  STATUS
                </span>
                <span className={status.className}>
                  {status.dot} {status.label}
                </span>

                {project.link && (
                  <>
                    <span className="pr-4" style={{ color: "var(--text-muted)" }}>
                      LINK
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--accent)" }}
                      className="hover:underline"
                    >
                      [OPEN →]
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
