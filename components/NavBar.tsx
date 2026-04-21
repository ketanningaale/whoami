"use client";

export interface NavPage {
  id: string;
  label: string;
  short?: string;
}

interface NavBarProps {
  pages: NavPage[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export default function NavBar({ pages, activeId, onNavigate }: NavBarProps) {
  return (
    <nav id="nav-bar" aria-label="Main navigation">
      <div className="nav-prompt">
        root@ketann/nav &gt; SELECT MODULE [↑↓ arrows + ENTER or click]
      </div>
      <div className="nav-list" role="tablist">
        {pages.map((p) => {
          const isActive = p.id === activeId;
          return (
            <div
              key={p.id}
              role="tab"
              aria-selected={isActive}
              className={`nav-item${isActive ? " active" : ""}`}
              onClick={() => onNavigate(p.id)}
              tabIndex={isActive ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onNavigate(p.id);
              }}
            >
              <span className="nav-label-full">
                {(isActive ? "> " : "  ") + p.label}
              </span>
              <span className="nav-label-short">
                {isActive ? "▸ " : ""}{p.short ?? p.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
