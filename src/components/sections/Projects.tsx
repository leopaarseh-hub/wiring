"use client";

import { useTranslations } from "next-intl";
import { IconArrowUpRight } from "@/components/ui/Icons";

const projectColors = [
  { accent: "#c8a96e", lines: [[80, 200, 320, 80], [80, 200, 320, 200], [80, 80, 80, 200], [320, 80, 320, 200]] },
  { accent: "#8ea0b8", lines: [[50, 180, 200, 60], [350, 180, 200, 60], [50, 180, 350, 180]] },
];

export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as { title: string; category: string }[];

  return (
    <section
      id="projects"
      style={{
        padding: "8rem 2rem",
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "5rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c8a96e",
              marginBottom: "1.5rem",
            }}
          >
            {t("label")}
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: "1.1",
              color: "#f5f5f0",
              marginBottom: "1.5rem",
            }}
          >
            {t("title")}
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(245,245,240,0.5)", lineHeight: "1.8" }}>
            {t("description")}
          </p>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((project, i) => (
            <article
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.25s",
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `rgba(${projectColors[i]?.accent === "#c8a96e" ? "200,169,110" : "142,160,184"},0.3)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Visual placeholder */}
              <div
                style={{
                  aspectRatio: "16/9",
                  background: "#0d0d0e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 400 225"
                  fill="none"
                  style={{ position: "absolute", inset: 0, opacity: 0.3 }}
                >
                  {/* Architectural sketch lines */}
                  {i === 0 ? (
                    <>
                      <rect x="80" y="80" width="240" height="120" stroke="#c8a96e" strokeWidth="0.5" />
                      <rect x="100" y="80" width="40" height="120" stroke="#c8a96e" strokeWidth="0.3" />
                      <rect x="160" y="80" width="40" height="120" stroke="#c8a96e" strokeWidth="0.3" />
                      <rect x="220" y="80" width="40" height="120" stroke="#c8a96e" strokeWidth="0.3" />
                      <rect x="100" y="40" width="80" height="40" stroke="white" strokeWidth="0.3" />
                      <rect x="220" y="40" width="80" height="40" stroke="white" strokeWidth="0.3" />
                      <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.5" />
                    </>
                  ) : (
                    <>
                      <ellipse cx="200" cy="112" rx="140" ry="90" stroke="#8ea0b8" strokeWidth="0.5" />
                      <rect x="80" y="112" width="240" height="88" stroke="#8ea0b8" strokeWidth="0.5" />
                      <line x1="80" y1="200" x2="80" y2="240" stroke="white" strokeWidth="0.3" />
                      <line x1="320" y1="200" x2="320" y2="240" stroke="white" strokeWidth="0.3" />
                      <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.5" />
                    </>
                  )}
                  <line x1="0" y1="112" x2="400" y2="112" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" strokeDasharray="4 8" />
                  <line x1="200" y1="0" x2="200" y2="225" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" strokeDasharray="4 8" />
                </svg>

                {/* Category tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "rgba(10,10,11,0.7)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "100px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.75rem",
                    color: "rgba(245,245,240,0.6)",
                    letterSpacing: "0.04em",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card content */}
              <div
                style={{
                  padding: "1.75rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 500,
                    color: "#f5f5f0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,245,240,0.4)",
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <IconArrowUpRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
