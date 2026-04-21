export const THEME_ORDER = ["snow", "gruvbox", "tokyo", "light"] as const;
export type Theme = (typeof THEME_ORDER)[number];

export const THEMES: Record<Theme, { label: string; accent: string; heading: string; section: string }> = {
  //              accent ($ · links)   heading (titles)    section (// headers)
  snow:    { label: "SnøwOS",      accent: "#4ade80", heading: "#7dd3fc", section: "#e8854a" },
  gruvbox: { label: "Gruvbox",     accent: "#b8bb26", heading: "#d3869b", section: "#fe8019" },
  tokyo:   { label: "Tokyo Night", accent: "#7aa2f7", heading: "#f7768e", section: "#bb9af7" },
  light:   { label: "Light",       accent: "#1a6b3a", heading: "#9a2c2c", section: "#b85c00" },
};
