"use client";

import { useRef } from "react";
import { personalInfo } from "@/lib/data";

interface CommandBarProps {
  response: string;
  onCommand: (cmd: string) => void;
}

export default function CommandBar({ response, onCommand }: CommandBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const val = e.currentTarget.value.trim().toLowerCase();
    e.currentTarget.value = "";
    if (val) onCommand(val);
  };

  return (
    <div id="cmd-wrap">
      {response && (
        <div className="cmd-response show" role="status" aria-live="polite">
          {response}
        </div>
      )}
      <div id="cmd-bar" onClick={() => inputRef.current?.focus()}>
        <span className="prompt-label">{personalInfo.handle}@portfolio:~$</span>
        <input
          ref={inputRef}
          id="cmd-input"
          type="text"
          autoComplete="off"
          spellCheck={false}
          placeholder="type a command (try: help)"
          onKeyDown={handleKeyDown}
          aria-label="Terminal command input"
        />
      </div>
    </div>
  );
}
