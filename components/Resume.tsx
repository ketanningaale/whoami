"use client";

import TerminalPrompt from "./TerminalPrompt";
import SectionReveal from "./SectionReveal";
import { experience, education, skills, recognitions } from "@/lib/data";

// ── Sub-components ───────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div
      className="text-xs uppercase tracking-widest mb-4 mt-8 first:mt-0"
      style={{ color: "var(--accent)" }}
      aria-label={`${label} section`}
    >
      <span style={{ color: "var(--text-muted)" }}>// </span>
      {label}
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-2">
      <span style={{ color: "var(--accent)", flexShrink: 0 }}>-</span>
      <span style={{ color: "var(--text-muted)" }}>{text}</span>
    </li>
  );
}

// ── Main component ───────────────────────────

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      style={{ marginBottom: "var(--section-gap)" }}
    >
      <SectionReveal>
        <TerminalPrompt
          command="cat resume.txt"
          id="resume-heading"
          as="h2"
        />

        <div
          className="ml-0 sm:ml-4 font-mono text-sm leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          {/* ── Experience ── */}
          <SectionHeader label="experience" />

          {experience.map((role, i) => (
            <div
              key={i}
              className={i < experience.length - 1 ? "mb-8" : ""}
            >
              {/* Title */}
              <div className="font-medium mb-1" style={{ color: "var(--accent-secondary)" }}>
                {role.title}
              </div>
              {/* Meta */}
              <div
                className="flex flex-wrap gap-x-4 gap-y-0 text-xs mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                <span>
                  Company:&nbsp;
                  <span style={{ color: "var(--text)" }}>{role.company}</span>
                </span>
                <span>
                  Dates:&nbsp;
                  <span style={{ color: "var(--text)" }}>{role.dates}</span>
                </span>
              </div>
              {/* Bullets */}
              <ul className="space-y-1 ml-2">
                {role.bullets.map((b, j) => (
                  <Bullet key={j} text={b} />
                ))}
              </ul>
            </div>
          ))}

          {/* ── Education ── */}
          <SectionHeader label="education" />

          {education.map((edu, i) => (
            <div
              key={i}
              className={i < education.length - 1 ? "mb-6" : ""}
            >
              <div className="font-medium mb-1" style={{ color: "var(--accent-secondary)" }}>
                {edu.degree}
              </div>
              <div
                className="flex flex-wrap gap-x-4 gap-y-0 text-xs mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                <span>
                  School:&nbsp;
                  <span style={{ color: "var(--text)" }}>{edu.school}</span>
                </span>
                <span>
                  Dates:&nbsp;
                  <span style={{ color: "var(--text)" }}>{edu.dates}</span>
                </span>
              </div>
              {edu.notes && (
                <ul className="space-y-1 ml-2">
                  {edu.notes.map((n, j) => (
                    <Bullet key={j} text={n} />
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* ── Skills ── */}
          <SectionHeader label="skills" />

          <div className="space-y-2">
            {skills.map((group) => (
              <div key={group.category} className="flex flex-wrap gap-x-0">
                <span
                  className="shrink-0"
                  style={{
                    color: "var(--text-muted)",
                    minWidth: "22ch",
                    paddingRight: "0.5rem",
                  }}
                >
                  {group.category}:
                </span>
                <span style={{ color: "var(--text)" }}>
                  {group.items.join(" -- ")}
                </span>
              </div>
            ))}
          </div>

          {/* ── Recognitions ── */}
          <SectionHeader label="recognition" />

          <div className="space-y-2">
            {recognitions.map((r) => (
              <div key={r.label} className="flex flex-wrap gap-x-0">
                <span
                  className="shrink-0"
                  style={{
                    color: "var(--text-muted)",
                    minWidth: "22ch",
                    paddingRight: "0.5rem",
                  }}
                >
                  {r.label}:
                </span>
                <span style={{ color: "var(--text)" }}>{r.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
