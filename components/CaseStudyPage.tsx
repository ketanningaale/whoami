"use client";

import { projects, experience, education, skills } from "@/lib/data";

interface CaseStudyPageProps {
  projectId: string;
  onBack: () => void;
}

const STATUS_CONFIG = {
  live:     { label: "LIVE",     style: { color: "var(--accent)" }   },
  wip:      { label: "WIP",      style: { color: "var(--orange)" }   },
  archived: { label: "ARCHIVED", style: { color: "var(--dim)" }      },
};

export default function CaseStudyPage({ projectId, onBack }: CaseStudyPageProps) {
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="page-enter">
        <div className="dimtext">Project not found: {projectId}</div>
        <span className="open-btn" onClick={onBack} role="button" tabIndex={0}>
          ← back to /projects/
        </span>
      </div>
    );
  }

  const sc = STATUS_CONFIG[project.status];
  const index = projects.findIndex((p) => p.id === projectId) + 1;

  return (
    <div className="page-enter">
      {/* Breadcrumb */}
      <div className="cs-breadcrumb">
        <span className="cs-back" onClick={onBack} role="button" tabIndex={0}>
          back /projects/
        </span>
        {" / "}
        {project.filename}
      </div>

      <div>
        <span className="cmd-prompt">$</span> cat {project.filename}
      </div>

      {/* Header */}
      <div className="section-gap">
        <div className="cs-num">{String(index).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</div>
        <h1 className="cs-title">{project.name.toUpperCase()}</h1>
        <div className="cs-tagline">{project.description.slice(0, 80)}…</div>

        <div className="cs-meta-row">
          <div className="cs-meta-item">
            <span className="mk">ROLE</span>
            <span className="mv">{project.role}</span>
          </div>
          <div className="cs-meta-item">
            <span className="mk">MODIFIED</span>
            <span className="mv">{project.modified}</span>
          </div>
          <div className="cs-meta-item">
            <span className="mk">STACK</span>
            <span className="mv">{project.stack.slice(0, 3).join(" · ")}</span>
          </div>
          <div className="cs-meta-item">
            <span className="mk">STATUS</span>
            <span style={{ ...sc.style, marginLeft: "6px" }}>{sc.label}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="cs-body">
        <div className="cs-section-title">// description</div>
        <p>{project.description}</p>

        <div className="cs-section-title">// technical stack</div>
        <p>
          {project.stack.map((tech, i) => (
            <span key={tech}>
              <span style={{ color: "var(--accent)" }}>{tech}</span>
              {i < project.stack.length - 1 && (
                <span style={{ color: "var(--dim)" }}> · </span>
              )}
            </span>
          ))}
        </p>

        {project.link && (
          <>
            <div className="cs-section-title">// link</div>
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                [OPEN →] {project.link}
              </a>
            </p>
          </>
        )}
      </div>

      <div style={{ marginTop: "24px" }}>
        <span
          className="open-btn"
          onClick={onBack}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onBack(); }}
        >
          ← back to /projects/
        </span>
      </div>
    </div>
  );
}
