"use client";

import TerminalPrompt from "./TerminalPrompt";
import SectionReveal from "./SectionReveal";
import { aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ marginBottom: "var(--section-gap)" }}
    >
      <SectionReveal>
        <TerminalPrompt
          command="cat about.md"
          id="about-heading"
          as="h2"
        />

        <article
          className="ml-0 sm:ml-4 text-sm sm:text-base leading-relaxed max-w-2xl"
          style={{ color: "var(--text-muted)" }}
        >
          {aboutParagraphs.map((para, i) => (
            <p
              key={i}
              className={i < aboutParagraphs.length - 1 ? "mb-5" : ""}
            >
              {/* Highlight quoted phrases in accent colour */}
              {para}
            </p>
          ))}
        </article>
      </SectionReveal>
    </section>
  );
}
