"use client";

import { education } from "@/lib/data";

export default function EducationPage() {
  return (
    <div className="page-enter">
      <div>
        <span className="cmd-prompt">$</span> cat education.log
      </div>

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
              <div key={j} className="exp-bullet">{n}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
