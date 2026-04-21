"use client";

import TerminalPrompt from "./TerminalPrompt";
import SectionReveal from "./SectionReveal";
import ProjectEntry from "./ProjectEntry";
import { projects } from "@/lib/data";

export default function ProjectList() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ marginBottom: "var(--section-gap)" }}
    >
      <SectionReveal>
        <TerminalPrompt
          command="ls -la /projects/"
          id="projects-heading"
          as="h2"
        />

        {/* Table header — desktop only */}
        <div
          className="hidden sm:grid text-xs uppercase tracking-widest mb-1 px-2"
          style={{
            gridTemplateColumns: "1fr auto auto auto",
            gap: "0.5rem 1.5rem",
            color: "var(--text-dim)",
            fontFamily: "var(--font-mono)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "0.4rem",
          }}
          aria-hidden="true"
        >
          <span>NAME</span>
          <span className="text-right" style={{ minWidth: "6ch" }}>
            SIZE
          </span>
          <span className="text-right" style={{ minWidth: "7ch" }}>
            MODIFIED
          </span>
          <span className="text-right" style={{ minWidth: "8ch" }}>
            STATUS
          </span>
        </div>

        {/* Project list */}
        <ul
          aria-label="Project listing"
          style={{
            border: "1px solid var(--border)",
            borderRadius: "2px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i} />
          ))}
        </ul>

        <p
          className="text-xs mt-3"
          style={{ color: "var(--text-muted)" }}
        >
          {projects.length} items — click any row to expand details
        </p>
      </SectionReveal>
    </section>
  );
}
