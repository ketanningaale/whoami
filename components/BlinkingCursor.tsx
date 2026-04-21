"use client";

interface BlinkingCursorProps {
  className?: string;
}

export default function BlinkingCursor({ className = "" }: BlinkingCursorProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block animate-blink ${className}`}
      style={{ color: "var(--accent)" }}
    >
      ▋
    </span>
  );
}
