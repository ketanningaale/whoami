"use client";

import { useState, useEffect } from "react";
import type { ThemeName } from "@/lib/constants";

const THEMES: { name: ThemeName; label: string; color: string }[] = [
  { name: "green", label: "GRN", color: "#00ff88" },
  { name: "amber", label: "AMB", color: "#ffb800" },
  { name: "white", label: "WHT", color: "#ffffff" },
];

export default function ThemeToggle() {
  const [active, setActive] = useState<ThemeName>("green");

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("theme-green", "theme-amber", "theme-white");
    if (active !== "green") {
      root.classList.add(`theme-${active}`);
    }
  }, [active]);

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-1 no-print"
      data-no-print
      role="group"
      aria-label="Color theme selector"
    >
      {THEMES.map((t) => (
        <button
          key={t.name}
          onClick={() => setActive(t.name)}
          aria-pressed={active === t.name}
          aria-label={`Switch to ${t.label} theme`}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: active === t.name ? t.color : "var(--text-muted)",
            border: `1px solid ${active === t.name ? t.color : "var(--border)"}`,
            background: "var(--surface)",
            padding: "3px 7px",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "color 0.15s, border-color 0.15s",
            letterSpacing: "0.05em",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
