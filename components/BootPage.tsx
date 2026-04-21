"use client";

import { useEffect, useRef } from "react";

interface BootLine {
  text: string;
  delay: number;
  cls?: "ok" | "orng";
  final?: boolean;
}

const BOOT_LINES: BootLine[] = [
  { text: "KETANN_INGAALE_OS v1.0.0 -- booting...", delay: 0 },
  { text: "Loading analytics_engine.pkg           [OK]",   delay: 120, cls: "ok" },
  { text: "Loading ml_systems.pkg                 [OK]",   delay: 240, cls: "ok" },
  { text: "Loading biomarker_analytics.pkg        [OK]",   delay: 360, cls: "ok" },
  { text: "Loading python_data_stack.pkg          [OK]",   delay: 480, cls: "ok" },
  { text: "Mounting /projects/lidar_av            [LIVE]",       delay: 600, cls: "ok" },
  { text: "Mounting /projects/blockchain_system   [ARCHIVED]",   delay: 700, cls: "orng" },
  { text: "Mounting /projects/hmm_stocks          [ARCHIVED]",   delay: 780 },
  { text: "Mounting /projects/uav_quadcopter      [ARCHIVED]",   delay: 840 },
  { text: "Checking open_to_work status           [TRUE]",       delay: 900, cls: "ok" },
  { text: "READY.", delay: 1080, final: true },
];

interface BootPageProps {
  onComplete: () => void;
}

export default function BootPage({ onComplete }: BootPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_LINES.forEach(({ text, delay, cls, final }) => {
      timers.push(
        setTimeout(() => {
          if (!containerRef.current) return;
          const line = document.createElement("div");
          line.className = "boot-line";

          if (cls) {
            const bracket = text.lastIndexOf("[");
            if (bracket !== -1) {
              line.innerHTML =
                text.slice(0, bracket) +
                `<span class="${cls}">${text.slice(bracket)}</span>`;
            } else {
              line.textContent = text;
            }
          } else {
            line.textContent = text;
          }

          containerRef.current.appendChild(line);

          if (final) {
            setTimeout(onComplete, 320);
          }
        }, delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="page-enter"
      ref={containerRef}
      aria-label="Boot sequence"
      role="log"
      aria-live="polite"
    />
  );
}
