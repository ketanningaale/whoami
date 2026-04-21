"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

const STATUS_CONFIG = {
  live:     { label: "LIVE",     cls: "fm-live",   dot: "●" },
  wip:      { label: "WIP",      cls: "fm-orange", dot: "◐" },
  archived: { label: "ARCHIVED", cls: "fm-arch",   dot: "○" },
};

interface WorkPageProps {
  onOpenCase: (id: string) => void;
}

export default function WorkPage({ onOpenCase }: WorkPageProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="page-enter">
      <div>
        <span className="cmd-prompt">$</span> ls -la /projects/
      </div>
      <div className="dimtext" style={{ fontSize: "12px", margin: "6px 0 4px" }}>
        {projects.length} entries — click filename to expand
      </div>

      <div className="file-table">
        {/* Desktop header */}
        <div className="file-row hdr">
          <span>NAME</span>
          <span>SIZE</span>
          <span>MODIFIED</span>
          <span>DESCRIPTION</span>
        </div>

        {projects.map((p) => {
          const isOpen = openIds.has(p.id);
          const sc = STATUS_CONFIG[p.status];

          return (
            <div key={p.id}>
              {/* Row */}
              <div className="file-row">
                <span
                  className="file-name"
                  onClick={() => toggle(p.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggle(p.id);
                  }}
                >
                  {isOpen ? "▾ " : "▸ "}
                  {p.filename}
                </span>
                <span className="file-size">{p.size}</span>
                <span className="file-date">{p.modified}</span>
                <span className="dimtext">{p.description.slice(0, 60)}…</span>
              </div>

              {/* Expanded meta */}
              {isOpen && (
                <div className="file-meta open">
                  <div className="fm-row">
                    <span className="fm-key">DESC</span>
                    <span>{p.description}</span>
                  </div>
                  <div className="fm-row">
                    <span className="fm-key">ROLE</span>
                    <span>{p.role}</span>
                  </div>
                  <div className="fm-row">
                    <span className="fm-key">STACK</span>
                    <span style={{ color: "var(--fg)" }}>
                      {p.stack.join(" · ")}
                    </span>
                  </div>
                  <div className="fm-row">
                    <span className="fm-key">STATUS</span>
                    <span className={sc.cls}>
                      {sc.dot} {sc.label}
                    </span>
                  </div>
                  {p.link && (
                    <div className="fm-row">
                      <span className="fm-key">LINK</span>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [OPEN →]
                      </a>
                    </div>
                  )}
                  <span
                    className="open-btn"
                    role="button"
                    tabIndex={0}
                    onClick={() => onOpenCase(p.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onOpenCase(p.id);
                    }}
                  >
                    $ cat {p.filename} [OPEN]
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
