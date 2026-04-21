// ─────────────────────────────────────────────
//  Theme tokens (mirror of CSS variables)
//  Used for JS-side logic / inline styles
// ─────────────────────────────────────────────

export const THEMES = {
  green: {
    label: "green",
    accent: "#00ff88",
    accentSecondary: "#ffb800",
  },
  amber: {
    label: "amber",
    accent: "#ffb800",
    accentSecondary: "#00ff88",
  },
  white: {
    label: "white",
    accent: "#ffffff",
    accentSecondary: "#aaaaaa",
  },
} as const;

export type ThemeName = keyof typeof THEMES;

// Site-wide config
export const SITE_CONFIG = {
  url: "https://whoami.vercel.app",
  title: "Ketann Ingaale — Analytics Engineer & Data Scientist",
  description:
    "Analytics engineer transforming complex data into insights that advance health, science, and human understanding. Specialising in biomarker analytics, ML systems, and probabilistic modelling.",
  ogImage: "/og-image.png",
  twitterHandle: "@ketanningaale",
} as const;

// Animation timing constants
export const ANIMATION = {
  typingSpeed: 60,          // ms per character
  bootFadeIn: 800,          // ms
  sectionRevealOffset: 80,  // px offset for InView trigger
} as const;
