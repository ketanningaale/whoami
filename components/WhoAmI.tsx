"use client";

import TerminalPrompt from "./TerminalPrompt";
import SectionReveal from "./SectionReveal";
import { personalInfo } from "@/lib/data";

export default function WhoAmI() {
  return (
    <section
      id="whoami"
      aria-labelledby="whoami-heading"
      style={{ marginBottom: "var(--section-gap)" }}
    >
      <SectionReveal>
        <TerminalPrompt
          command="whoami"
          id="whoami-heading"
          animate
          as="h2"
        />

        {/* Output block */}
        <div className="ml-0 sm:ml-4">
          {/* Name + one-liner */}
          <p
            className="text-base sm:text-lg font-medium mb-1"
            style={{ color: "var(--text)" }}
          >
            <span
              className="font-display"
              style={{ color: "var(--accent)" }}
            >
              {personalInfo.name}
            </span>
            .{" "}
            {personalInfo.oneLiner}
          </p>

          {/* Bio */}
          <p
            className="text-sm sm:text-base leading-relaxed mb-8 max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            {personalInfo.bio}
          </p>

          {/* Key-value status block */}
          <div
            className="text-sm font-mono leading-loose"
            style={{
              borderLeft: "2px solid var(--border)",
              paddingLeft: "1rem",
            }}
          >
            <div className="flex flex-wrap gap-x-4">
              <span style={{ color: "var(--text-muted)", minWidth: "9ch" }}>
                LOCATION
              </span>
              <span style={{ color: "var(--text)" }}>
                {personalInfo.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-4">
              <span style={{ color: "var(--text-muted)", minWidth: "9ch" }}>
                FOCUS
              </span>
              <span style={{ color: "var(--text)" }}>
                {personalInfo.focus.join(" · ")}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-4">
              <span style={{ color: "var(--text-muted)", minWidth: "9ch" }}>
                CONTACT
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ color: "var(--accent)" }}
                className="hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-x-4 mt-2">
              <span style={{ color: "var(--text-muted)", minWidth: "9ch" }}>
                LINKS
              </span>
              <span className="flex gap-3">
                {personalInfo.socials
                  .filter((s) => s.platform !== "email")
                  .map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--accent)" }}
                      className="hover:underline"
                    >
                      {s.label}
                    </a>
                  ))}
              </span>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
