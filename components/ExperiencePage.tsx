"use client";

import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="page-enter">
      <div>
        <span className="cmd-prompt">$</span> cat experience.log
      </div>

      <div className="section-gap">
        <div className="resume-header">// work experience</div>
        {experience.map((role, i) => (
          <div key={i} className="exp-block">
            <div className="exp-role">{role.title}</div>
            <div className="exp-company">{role.company}</div>
            <div className="exp-meta">
              <span className="exp-dates">{role.dates}</span>
            </div>
            {role.bullets.map((b, j) => (
              <div key={j} className="exp-bullet">{b}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
