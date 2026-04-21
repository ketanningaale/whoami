"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { type Theme, THEMES } from "@/lib/themes";

// Career start = first job at Infosys
const EPOCH = new Date("2022-06-01").getTime();

function fmtUptime(startMs: number): string {
  const s = Math.floor((Date.now() - startMs) / 1000);
  const d = Math.floor(s / 86400);
  const h = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  return `${d}d ${h}h ${m}m`;
}

function fmtTime(): string {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  });
}

interface SysHeaderProps {
  theme: Theme;
  onCycleTheme: () => void;
}

export default function SysHeader({ theme, onCycleTheme }: SysHeaderProps) {
  const [uptime, setUptime] = useState("—");
  const [time,   setTime]   = useState("—");

  useEffect(() => {
    setUptime(fmtUptime(EPOCH));
    setTime(fmtTime());
    const timerId  = setInterval(() => setTime(fmtTime()),        1_000);
    const uptimeId = setInterval(() => setUptime(fmtUptime(EPOCH)), 60_000);
    return () => { clearInterval(timerId); clearInterval(uptimeId); };
  }, []);

  const current = THEMES[theme];

  return (
    <header id="sys-header" aria-label="System header">
      <div className="sys-left">
        <div className="sys-field">
          SYS.NAME &nbsp;: <span>SnøwOS v1.0.0</span>
        </div>
        <div className="sys-field sys-hide-mobile">
          SYS.AUTH &nbsp;: <span className="green">GUEST_ACCESS_GRANTED</span>
        </div>
        <div className="sys-field sys-hide-mobile">
          SYS.NODE &nbsp;: <span>{personalInfo.domain}</span>
        </div>
      </div>
      <div className="sys-right">
        <div className="sys-field">
          TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span>{time}</span>
        </div>
        <div className="sys-field sys-hide-mobile">
          UPTIME &nbsp;&nbsp;&nbsp;: <span>{uptime}</span>
        </div>
        <div className="sys-field">
          STATUS &nbsp;&nbsp;&nbsp;: <span style={{ color: "var(--live)" }}>200 OK</span>
        </div>
        <button
          className="theme-btn"
          onClick={onCycleTheme}
          title={`Theme: ${current.label} — click to cycle`}
          aria-label="Cycle colour theme"
        >
          <span className="theme-dot" style={{ background: current.accent }} />
          <span className="theme-dot" style={{ background: current.heading }} />
          <span className="theme-dot" style={{ background: current.section }} />
          <span className="theme-label">{current.label}</span>
        </button>
      </div>
    </header>
  );
}
