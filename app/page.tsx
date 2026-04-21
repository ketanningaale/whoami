"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SysHeader from "@/components/SysHeader";
import { THEME_ORDER, type Theme } from "@/lib/themes";
import CommandBar from "@/components/CommandBar";
import NavBar, { type NavPage } from "@/components/NavBar";
import BootPage from "@/components/BootPage";
import HomePage from "@/components/HomePage";
import ExperiencePage from "@/components/ExperiencePage";
import ProjectsPage from "@/components/ProjectsPage";
import EducationPage from "@/components/EducationPage";
import CaseStudyPage from "@/components/CaseStudyPage";
import AboutPage from "@/components/AboutPage";
import ResumePage from "@/components/ResumePage";
import RecommendationsPage from "@/components/RecommendationsPage";

// ── Nav pages ─────────────────────────────────
const NAV_PAGES: NavPage[] = [
  { id: "home",            label: "01._HOME",            short: "HOME"   },
  { id: "experience",      label: "02._EXPERIENCE",      short: "EXP"    },
  { id: "projects",        label: "03._PROJECTS",        short: "PROJ"   },
  { id: "education",       label: "04._EDUCATION",       short: "EDU"    },
  { id: "about",           label: "05._ABOUT",           short: "ABOUT"  },
  { id: "resume",          label: "06._RESUME",          short: "RESUME" },
  { id: "recommendations", label: "07._RECOMMENDATIONS", short: "RECS"   },
];
const NAV_IDS = NAV_PAGES.map((p) => p.id);

// ── Easter-egg commands ───────────────────────
const EASTER_EGG: Record<string, string> = {
  "sudo hire ketann":     "Permission granted. Initiating offer letter...",
  "rm -rf node_modules":  "Error: node_modules is protected. Nice try.",
  "git blame":            "All commits authored by: ketann <ketanningaale@gmail.com>",
  "cat /dev/null":        "(silence)",
  "ping existence":       "64 bytes from existence: icmp_seq=1 ttl=42 time=2.7ms",
  "ls /secrets":          "I love Chaos Theory, LiDAR point clouds, and strong coffee.",
  "whoami":               "An analytics engineer who models the world with probabilistic thinking.",
  "uptime":               "Working hard since Jun 2022.",
};

export default function App() {
  const [bootComplete, setBootComplete]   = useState(false);
  const [currentPage,  setCurrentPage]    = useState<string>("boot");
  const [navIdx,       setNavIdx]         = useState(0);
  const [cmdResponse,  setCmdResponse]    = useState("");
  const [easterOpen,   setEasterOpen]     = useState(false);
  const [theme,        setThemeState]     = useState<Theme>("snow");
  const mainRef = useRef<HTMLDivElement>(null);

  // ── Theme: load from localStorage + apply to <html> ──
  useEffect(() => {
    const saved = localStorage.getItem("snøwos-theme") as Theme | null;
    if (saved && THEME_ORDER.includes(saved)) setThemeState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "snow" ? "" : theme);
    localStorage.setItem("snøwos-theme", theme);
  }, [theme]);

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = THEME_ORDER[(THEME_ORDER.indexOf(prev) + 1) % THEME_ORDER.length];
      return next;
    });
  }, []);

  const applyTheme = useCallback((name: Theme) => {
    setThemeState(name);
  }, []);

  // ── Navigation helpers ─────────────────────
  const navigateTo = useCallback((id: string) => {
    const idx = NAV_IDS.indexOf(id);
    if (idx !== -1) setNavIdx(idx);
    setCurrentPage(id);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  const navigateByIdx = useCallback((idx: number) => {
    const page = NAV_PAGES[idx];
    if (page) navigateTo(page.id);
  }, [navigateTo]);

  const openCase = useCallback((projectId: string) => {
    setCurrentPage(`cs-${projectId}`);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  // ── Command handler ────────────────────────
  const handleCommand = useCallback((raw: string) => {
    const cmd = raw.toLowerCase().trim();

    // Easter egg check first
    if (EASTER_EGG[cmd]) {
      setCmdResponse(EASTER_EGG[cmd]);
      return;
    }

    // Theme shorthand: "theme <name>"
    if (cmd.startsWith("theme")) {
      const arg = cmd.slice(5).trim();
      if (!arg || arg === "cycle") { cycleTheme(); return; }
      const map: Record<string, Theme> = {
        snow: "snow", default: "snow", green: "snow",
        gruvbox: "gruvbox",
        tokyo: "tokyo", "tokyo night": "tokyo",
        light: "light",
      };
      if (map[arg]) { applyTheme(map[arg]); setCmdResponse(`theme set: ${map[arg]}`); }
      else setCmdResponse(`unknown theme: ${arg} — try snow · gruvbox · tokyo · light`);
      return;
    }

    const CMDS: Record<string, () => string | null> = {
      help: () =>
        `available commands:\n  home · experience · projects · education · about · resume\n  clear · email · help\n  theme <snow|gruvbox|tokyo|light>\n  [project ids]: lidar-av · blockchain-grievance · hmm-stocks · gdp-analysis · forest-fire · uav-quadcopter`,
      home:       () => { navigateTo("home");       return null; },
      experience: () => { navigateTo("experience"); return null; },
      projects:   () => { navigateTo("projects");   return null; },
      education:  () => { navigateTo("education");  return null; },
      about:           () => { navigateTo("about");           return null; },
      resume:          () => { navigateTo("resume");          return null; },
      recommendations: () => { navigateTo("recommendations"); return null; },
      rec:             () => { navigateTo("recommendations"); return null; },
      // legacy aliases
      work:            () => { navigateTo("experience");      return null; },
      email:   () => {
        navigator.clipboard?.writeText("ketanningaale@gmail.com").catch(() => {});
        return "ketanningaale@gmail.com -- copied.";
      },
      clear: () => { setCmdResponse(""); return null; },
      // project shortcuts
      "lidar-av":            () => { openCase("lidar-av");            return null; },
      "blockchain-grievance": () => { openCase("blockchain-grievance"); return null; },
      "hmm-stocks":          () => { openCase("hmm-stocks");          return null; },
      "gdp-analysis":        () => { openCase("gdp-analysis");        return null; },
      "forest-fire":         () => { openCase("forest-fire");         return null; },
      "uav-quadcopter":      () => { openCase("uav-quadcopter");      return null; },
    };

    const fn = CMDS[cmd];
    if (fn) {
      const result = fn();
      if (result !== null) setCmdResponse(result);
    } else {
      setCmdResponse(`command not found: ${raw} -- type "help" for commands`);
    }
  }, [navigateTo, openCase, cycleTheme, applyTheme]);

  // ── Global keyboard: arrow nav + ~ easter egg ─
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Easter egg
      if (e.key === "~" || (e.key === "`" && !e.shiftKey)) {
        e.preventDefault();
        setEasterOpen((v) => !v);
        return;
      }

      // Escape closes easter egg
      if (e.key === "Escape") {
        setEasterOpen(false);
        return;
      }

      if (!bootComplete) return;
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setNavIdx((prev) => {
          const next = (prev - 1 + NAV_PAGES.length) % NAV_PAGES.length;
          navigateByIdx(next);
          return next;
        });
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setNavIdx((prev) => {
          const next = (prev + 1) % NAV_PAGES.length;
          navigateByIdx(next);
          return next;
        });
      } else if (e.key === "Enter") {
        navigateByIdx(navIdx);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [bootComplete, navIdx, navigateByIdx]);

  // ── Hash-based deep link on load ──────────
  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (hash) {
      const directNav: Record<string, () => void> = {
        home:       () => navigateTo("home"),
        experience: () => navigateTo("experience"),
        projects:   () => navigateTo("projects"),
        education:  () => navigateTo("education"),
        about:           () => navigateTo("about"),
        resume:          () => navigateTo("resume"),
        recommendations: () => navigateTo("recommendations"),
        work:            () => navigateTo("experience"), // legacy alias
      };
      if (directNav[hash]) {
        // delay until after boot
        const id = setTimeout(() => directNav[hash](), 1500);
        return () => clearTimeout(id);
      }
    }
  }, [navigateTo]);

  // ── Render current page content ────────────
  const renderPage = () => {
    if (!bootComplete) {
      return (
        <BootPage
          onComplete={() => {
            setBootComplete(true);
            setCurrentPage("home");
          }}
        />
      );
    }

    if (currentPage === "home")       return <HomePage />;
    if (currentPage === "experience") return <ExperiencePage />;
    if (currentPage === "projects")   return <ProjectsPage onOpenCase={openCase} />;
    if (currentPage === "education")  return <EducationPage />;
    if (currentPage === "about")           return <AboutPage />;
    if (currentPage === "resume")          return <ResumePage />;
    if (currentPage === "recommendations") return <RecommendationsPage />;

    // Case study pages
    if (currentPage.startsWith("cs-")) {
      const projectId = currentPage.slice(3);
      return (
        <CaseStudyPage
          projectId={projectId}
          onBack={() => navigateTo("work")}
        />
      );
    }

    return <HomePage />;
  };

  const activeNavId = NAV_IDS.includes(currentPage) ? currentPage : NAV_IDS[navIdx];

  return (
    <>
      {/* Easter egg overlay */}
      <AnimatePresence>
        {easterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 9999,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "24px", background: "rgba(0,0,0,0.88)",
            }}
            onClick={() => setEasterOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Hidden commands"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: "480px",
                background: "var(--surface)",
                border: "1px solid var(--accent-border)",
                padding: "20px", fontFamily: "var(--font-mono)", fontSize: "12px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", paddingBottom: "10px", borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--accent)" }}>hidden_commands.txt</span>
                <button
                  onClick={() => setEasterOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--dim)", fontFamily: "var(--font-mono)", fontSize: "12px" }}
                  aria-label="Close"
                >
                  [×]
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {Object.entries(EASTER_EGG).map(([cmd, resp]) => (
                  <div key={cmd}>
                    <div><span style={{ color: "var(--accent)" }}>$ </span><span style={{ color: "var(--fg)" }}>{cmd}</span></div>
                    <div style={{ color: "var(--dim)", paddingLeft: "2ch" }}>{resp}</div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: "16px", fontSize: "11px", color: "var(--dim2)" }}>
                press ESC or click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App shell */}
      <div id="app">
        <SysHeader theme={theme} onCycleTheme={cycleTheme} />

        <main
          id="main-output"
          ref={mainRef}
          tabIndex={-1}
          aria-label="Main content"
        >
          {renderPage()}
        </main>

        {bootComplete && (
          <>
            <CommandBar response={cmdResponse} onCommand={handleCommand} />
            <NavBar
              pages={NAV_PAGES}
              activeId={activeNavId}
              onNavigate={(id) => {
                const idx = NAV_IDS.indexOf(id);
                if (idx !== -1) setNavIdx(idx);
                navigateTo(id);
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
