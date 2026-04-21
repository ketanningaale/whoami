"use client";

import { personalInfo } from "@/lib/data";

// Block-letter ASCII art for "KI"
const ASCII_NAME = `
 ██╗  ██╗    ██╗
 ██║ ██╔╝    ██║
 █████╔╝     ██║
 ██╔═██╗     ██║
 ██║  ██╗    ██║
 ╚═╝  ╚═╝    ╚═╝
`.trim();

export default function HomePage() {
  return (
    <div className="page-enter">
      <pre className="ascii-name" aria-label="KI initials">
        {ASCII_NAME}
      </pre>

      <div>
        <span className="cmd-prompt">$</span> whoami
      </div>

      <div className="section-gap">
        <span style={{ color: "var(--accent)" }}>{personalInfo.name}</span>.{" "}
        {personalInfo.oneLiner}
        <br />
        {personalInfo.bio}
      </div>

      <div className="section-gap">
        <div>
          <span className="cmd-prompt">$</span> cat status.txt
        </div>
        <div style={{ marginTop: "8px" }}>
          <div className="status-line">
            <span className="status-key">LOCATION</span>
            <span>{personalInfo.location}</span>
          </div>
          <div className="status-line">
            <span className="status-key">FOCUS</span>
            <span>{personalInfo.focus.join(" -- ")}</span>
          </div>
          <div className="status-line">
            <span className="status-key">CONTACT</span>
            <span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </span>
          </div>
          <div className="status-line">
            <span className="status-key">LINKS</span>
            <span style={{ display: "flex", gap: "16px" }}>
              {personalInfo.socials
                .filter((s) => s.platform !== "email")
                .map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
            </span>
          </div>
        </div>
      </div>

      {/* Currently live badge */}
      <div className="section-gap">
        <a
          className="live-badge"
          href="https://www.linkedin.com/in/ketann-ingaale"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="live-dot" />
          CURRENTLY @ HEALF — ANALYTICS ENGINEER
        </a>
      </div>

      <div className="section-gap dimtext" style={{ fontSize: "12px", marginTop: "20px" }}>
        TIP: ↑↓ arrows navigate tabs — type{" "}
        <span style={{ color: "var(--fg)" }}>help</span> for commands — press{" "}
        <kbd
          style={{
            color: "var(--fg)",
            border: "1px solid var(--border)",
            padding: "0 4px",
            borderRadius: "2px",
            fontSize: "11px",
          }}
        >
          ~
        </kbd>{" "}
        for easter egg
      </div>
    </div>
  );
}
