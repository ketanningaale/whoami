# whoami — Ketann Ingaale's Terminal Portfolio

A terminal/CLI-themed personal portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Deployed on **Vercel**.

**Live:** https://ketanningaale.vercel.app

---

## Features

- **Terminal aesthetic** — retro-terminal visual metaphor with contemporary typography and spacing
- **Boot sequence** — ASCII art initials + animated system boot lines on page load
- **Typing animation** — `$ whoami` command types itself on first render
- **Collapsible projects** — click any project row to expand full details with Framer Motion height animation
- **3 colour themes** — toggle between Green, Amber, and White terminal palettes (CSS variable swap)
- **Easter egg** — press `~` anywhere for hidden commands
- **Hash navigation** — `/#projects`, `/#resume`, `/#about` all deep-link correctly
- **Print stylesheet** — page renders cleanly as a résumé
- **Reduced-motion** — all animations disabled when `prefers-reduced-motion: reduce` is set
- **Full SEO** — OG image (Edge ImageResponse), robots.txt, sitemap.xml, structured metadata
- **Responsive** — mobile-first layout, project table stacks to card blocks on small screens
- **WCAG AA** contrast — #00ff88 green on #0a0a0a black passes AA at text sizes ≥ 14px

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Fonts | JetBrains Mono + Space Grotesk (via `next/font/google`) |
| Deploy | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## Project Structure

```
app/
  globals.css          CSS variables, keyframes, print stylesheet
  layout.tsx           Root layout — fonts, full SEO metadata
  page.tsx             Main page — assembles all sections
  robots.ts            /robots.txt
  sitemap.ts           /sitemap.xml
  opengraph-image.tsx  /opengraph-image (Edge runtime, 1200x630)

components/
  BlinkingCursor.tsx   Animated cursor
  TerminalPrompt.tsx   $ command heading with optional typing animation
  ThemeToggle.tsx      GRN / AMB / WHT switcher (fixed top-right)
  SectionReveal.tsx    Framer Motion scroll-reveal wrapper
  BootSequence.tsx     Header — ASCII art + boot lines
  WhoAmI.tsx           $ whoami section
  ProjectEntry.tsx     Single expandable project row
  ProjectList.tsx      $ ls -la /projects/ section
  About.tsx            $ cat about.md section
  Resume.tsx           $ cat resume.txt section
  Footer.tsx           End prompt + social links

lib/
  data.ts              All personal content (projects, experience, skills...)
  constants.ts         Theme tokens, site config, animation timing
```

---

## Updating Content

**All personal content lives in one file:** `lib/data.ts`

```
personalInfo      name, bio, location, email, socials
projects[]        all 6 projects with stack, links, status
experience[]      work history with bullet points
education[]       degrees with notes
skills[]          skill groups
recognitions[]    patents, papers, scholarships
aboutParagraphs   the $ cat about.md text
```

Edit `lib/data.ts` — nothing else needs to change.

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to vercel.com/new and import the repo
3. Framework preset auto-detects as **Next.js**
4. No environment variables required
5. After first deploy, update `SITE_CONFIG.url` in `lib/constants.ts` with your Vercel domain and redeploy

---

## Colour Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#0a0a0a` | Page background |
| `--surface` | `#111111` | Card / panel backgrounds |
| `--text` | `#e0e0e0` | Body text |
| `--text-muted` | `#6b6b6b` | Secondary text, labels |
| `--accent` | `#00ff88` | Commands, links, active states |
| `--accent-secondary` | `#ffb800` | Highlights, warnings, role titles |
| `--border` | `#1e1e1e` | Dividers, borders |

Themes (toggled via CSS class on html element):
- **Green** (default) — accent: #00ff88
- **Amber** — accent: #ffb800
- **White** — accent: #ffffff

---

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `~` or backtick | Toggle easter egg modal |
| `Escape` | Close easter egg modal |
| `Enter` / `Space` | Toggle project expansion (keyboard nav) |

---

## License

MIT
