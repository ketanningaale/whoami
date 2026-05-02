"use client";

import { Fragment } from "react";
import { experience, education, skills, recognitions, contributions } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="page-enter">
      <div>
        <span className="cmd-prompt">$</span> cat resume.txt
      </div>

      {/* ── Experience ── */}
      <div className="section-gap">
        <div className="resume-header">// experience</div>
        {experience.map((role, i) => (
          <div key={i} className="exp-block">
            <div className="exp-role">{role.title}</div>
            <div className="exp-company">{role.company}</div>
            <div className="exp-meta">
              <span className="exp-dates">{role.dates}</span>
            </div>
            {role.bullets.map((b, j) => (
              <div key={j} className="exp-bullet">
                {b}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Education ── */}
      <div className="section-gap">
        <div className="resume-header">// education</div>
        {education.map((edu, i) => (
          <div key={i} className="exp-block">
            <div className="exp-role">{edu.degree}</div>
            <div className="exp-company">{edu.school}</div>
            <div className="exp-meta">
              <span className="exp-dates">{edu.dates}</span>
            </div>
            {edu.notes?.map((n, j) => (
              <div key={j} className="exp-bullet">
                {n}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Skills ── */}
      <div className="section-gap">
        <div className="resume-header">// skills</div>
        <div className="skill-blocks">
          {skills.map((group) => (
            <div key={group.category} className="skill-block">
              <div className="skill-block-cat">{group.category}</div>
              <div className="skill-block-items">
                {group.items.map((item, i) => (
                  <Fragment key={item}>
                    <span>{item}</span>
                    {i < group.items.length - 1 && (
                      <span className="skill-sep"> · </span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Open Source ── */}
      <div className="section-gap">
        <div className="resume-header">// open source</div>
        {contributions.map((c) => (
          <div key={c.prUrl} className="contrib-block">
            <div className="contrib-header">
              <span className="contrib-project">{c.project}</span>
              <span
                className={`contrib-status ${c.status === "merged" ? "contrib-merged" : c.status === "open" ? "contrib-open" : "contrib-closed"}`}
              >
                ● {c.status.toUpperCase()}
              </span>
              <span className="contrib-date">{c.date}</span>
            </div>
            <div className="contrib-title">
              <a href={c.prUrl} target="_blank" rel="noopener noreferrer">
                {c.prTitle}
              </a>
            </div>
            <div className="contrib-desc">{c.description}</div>
            <div className="contrib-repo">
              <a href={c.repo} target="_blank" rel="noopener noreferrer" className="contrib-repo-link">
                ⌥ {c.repo.replace("https://github.com/", "")}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Recognition ── */}
      <div className="section-gap">
        <div className="resume-header">// recognition</div>
        <div className="skill-blocks">
          {recognitions.map((r) => (
            <div key={r.label} className="skill-block">
              <div className="skill-block-cat">{r.label}</div>
              <div className="skill-block-items">{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
