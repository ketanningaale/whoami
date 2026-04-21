"use client";

import { aboutParagraphs, personalInfo } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="page-enter">
      <div>
        <span className="cmd-prompt">$</span> cat about.md
      </div>

      <div className="about-body section-gap">
        {aboutParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="section-gap dimtext" style={{ fontSize: "12px" }}>
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div>
    </div>
  );
}
