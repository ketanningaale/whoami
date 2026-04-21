# Terminal Portfolio — Build Plan & Progress

> Last updated: 2026-04-21

---

## Overview

A terminal/CLI-themed single-page portfolio for **Ketann Ingaale**, built with Next.js 14+ App Router, TypeScript, Tailwind CSS v4, and Framer Motion. Deploy target: **Vercel**.

---

## Progress Tracker

| # | Task | Status |
|---|------|--------|
| 1 | Scaffold Next.js project (TypeScript, Tailwind, App Router) | ✅ Done |
| 2 | Install framer-motion, lucide-react | ✅ Done |
| 3 | Configure next.config.ts for Vercel | ✅ Done |
| 4 | Create `lib/data.ts` — all typed personal content | ✅ Done |
| 5 | Create `lib/constants.ts` — theme tokens, site config | ✅ Done |
| 6 | Create `app/globals.css` — CSS variables, keyframes, print styles | ✅ Done |
| 7 | Create `app/layout.tsx` — fonts, SEO metadata, OG tags | ✅ Done |
| 8 | Create `components/BlinkingCursor.tsx` | ✅ Done |
| 9 | Create `components/TerminalPrompt.tsx` | ✅ Done |
| 10 | Create `components/ThemeToggle.tsx` | ✅ Done |
| 11 | Create `components/SectionReveal.tsx` | ✅ Done |
| 12 | Create `components/BootSequence.tsx` | ✅ Done |
| 13 | Create `components/WhoAmI.tsx` | ✅ Done |
| 14 | Create `components/ProjectEntry.tsx` | ✅ Done |
| 15 | Create `components/ProjectList.tsx` | ✅ Done |
| 16 | Create `components/About.tsx` | ✅ Done |
| 17 | Create `components/Resume.tsx` | ✅ Done |
| 18 | Create `components/Footer.tsx` | ✅ Done |
| 19 | Assemble `app/page.tsx` — scroll, easter egg, hash nav | ✅ Done |
| 20 | Add `app/robots.ts`, `app/sitemap.ts` | ✅ Done |
| 21 | Add `app/opengraph-image.tsx` (Edge ImageResponse) | ✅ Done |
| 22 | Add `vercel.json` | ✅ Done |
| 23 | Write `README.md` | ✅ Done |
| 24 | Production build test (`npm run build`) | ✅ Done |

---

## Architecture Decisions

### Why Tailwind v4 CSS-first config?
The project was scaffolded with Next.js 16 which ships Tailwind v4 by default. v4 uses `@import "tailwindcss"` and `@theme inline {}` blocks in CSS rather than a `tailwind.config.ts` — this is intentional and supported by Vercel's build pipeline.

### Why CSS variables over Tailwind utility classes for the terminal palette?
The theme-toggle feature swaps `--accent` at runtime. CSS variables propagate instantly without re-rendering; Tailwind classes would require class swapping at every element. CSS vars are the right tool here.

### Why `"use client"` on page.tsx?
The easter-egg keydown listener and hash-scroll require browser APIs (`window`, `document`). The page client-renders these behaviours while layout.tsx remains a Server Component for optimal SEO metadata handling.

### Why edge runtime for OG image?
`next/og` ImageResponse works best at the edge — zero cold-start, runs globally close to the user requesting the OG image preview.

---

## File Structure

```
whoami/
├── app/
│   ├── globals.css            CSS variables, keyframes, print stylesheet
│   ├── layout.tsx             Root layout — fonts, SEO metadata
│   ├── page.tsx               Main page — assembles all sections
│   ├── robots.ts              robots.txt generation
│   ├── sitemap.ts             sitemap.xml generation
│   └── opengraph-image.tsx    Edge OG image (1200×630)
├── components/
│   ├── BlinkingCursor.tsx     ▋ blink animation
│   ├── TerminalPrompt.tsx     $ command heading (optional typing anim)
│   ├── ThemeToggle.tsx        GRN / AMB / WHT theme switcher
│   ├── SectionReveal.tsx      Framer Motion scroll-reveal wrapper
│   ├── BootSequence.tsx       Header — ASCII art + boot lines
│   ├── WhoAmI.tsx             $ whoami section
│   ├── ProjectEntry.tsx       Single expandable project row
│   ├── ProjectList.tsx        $ ls -la /projects/ section
│   ├── About.tsx              $ cat about.md section
│   ├── Resume.tsx             $ cat resume.txt section
│   └── Footer.tsx             End prompt + social links
├── lib/
│   ├── data.ts                All personal content as typed exports
│   └── constants.ts           Theme tokens, site config, animation timing
├── public/
│   └── favicon.ico
├── vercel.json                Vercel deployment config
├── next.config.ts
├── tailwind.config.ts         (Not present — Tailwind v4 uses CSS config)
├── tsconfig.json
├── README.md
└── PLAN.md
```

---

## Deployment Checklist

- [ ] Push to GitHub
- [ ] Import project in Vercel dashboard (`vercel.com/new`)
- [ ] Set **Framework Preset** → Next.js (auto-detected)
- [ ] No environment variables required
- [ ] Update `SITE_CONFIG.url` in `lib/constants.ts` with final Vercel domain
- [ ] Redeploy after updating domain

---

## Future Improvements

- [ ] Add `og:image` font loading (requires `@vercel/og` font fetch)
- [ ] Command-line style search/filter on projects
- [ ] Animated ASCII name on mobile (smaller variant)
- [ ] Light mode support (amber-on-cream aesthetic)
- [ ] Analytics via Vercel Analytics (one-line install)
