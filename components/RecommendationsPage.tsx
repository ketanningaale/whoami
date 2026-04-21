"use client";

import { recommendations } from "@/lib/data";

export default function RecommendationsPage() {
  return (
    <div className="page-enter">
      <div>
        <span className="cmd-prompt">$</span> cat recommendations.log
      </div>

      <div className="section-gap">
        <div className="resume-header">// recommendations</div>

        {recommendations.map((r, i) => (
          <div key={i} className="rec-block">
            {/* Quote */}
            <div className="rec-text">
              {r.text.split("\n\n").map((para, j) => (
                <p key={j}>{j === 0 ? `"${para}` : para}{j === r.text.split("\n\n").length - 1 ? `"` : ""}</p>
              ))}
            </div>

            {/* Author */}
            <div className="rec-author-row">
              <span className="rec-author">{r.author}</span>
              <span className="rec-meta">
                {r.title}{r.company ? ` · ${r.company}` : ""}
              </span>
              <span className="rec-meta rec-relation">{r.relation}</span>
              <span className="rec-date">{r.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
