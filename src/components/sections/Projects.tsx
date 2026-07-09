"use client";

import { useTranslations } from "next-intl";
import { IconArrowUpRight } from "@/components/ui/Icons";

export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as { title: string; category: string }[];

  const sketches = [
    // Residential building sketch
    (
      <svg key="0" width="100%" height="100%" viewBox="0 0 500 280" fill="none" preserveAspectRatio="xMidYMid slice">
        <rect x="80" y="100" width="340" height="150" stroke="#2563eb" strokeWidth="0.75" />
        <rect x="100" y="100" width="60" height="150" stroke="#2563eb" strokeWidth="0.4" />
        <rect x="180" y="100" width="60" height="150" stroke="#2563eb" strokeWidth="0.4" />
        <rect x="260" y="100" width="60" height="150" stroke="#2563eb" strokeWidth="0.4" />
        <rect x="340" y="100" width="60" height="150" stroke="#2563eb" strokeWidth="0.4" />
        <rect x="120" y="60" width="100" height="40" stroke="#2563eb" strokeWidth="0.5" />
        <rect x="280" y="60" width="100" height="40" stroke="#2563eb" strokeWidth="0.5" />
        <path d="M120 60 L170 30 L220 60" stroke="#2563eb" strokeWidth="0.75" />
        <path d="M280 60 L330 30 L380 60" stroke="#2563eb" strokeWidth="0.75" />
        <line x1="0" y1="250" x2="500" y2="250" stroke="#2563eb" strokeWidth="0.75" />
        <line x1="0" y1="140" x2="500" y2="140" stroke="#2563eb" strokeWidth="0.2" strokeDasharray="6 12" />
        <line x1="250" y1="0" x2="250" y2="280" stroke="#2563eb" strokeWidth="0.2" strokeDasharray="6 12" />
        <circle cx="80" cy="250" r="2" fill="#2563eb" />
        <circle cx="420" cy="250" r="2" fill="#2563eb" />
      </svg>
    ),
    // Eye center sketch (curved facade)
    (
      <svg key="1" width="100%" height="100%" viewBox="0 0 500 280" fill="none" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="250" cy="130" rx="180" ry="100" stroke="#2563eb" strokeWidth="0.75" />
        <rect x="80" y="130" width="340" height="120" stroke="#2563eb" strokeWidth="0.75" />
        <line x1="140" y1="130" x2="140" y2="250" stroke="#2563eb" strokeWidth="0.4" />
        <line x1="200" y1="130" x2="200" y2="250" stroke="#2563eb" strokeWidth="0.4" />
        <line x1="250" y1="130" x2="250" y2="250" stroke="#2563eb" strokeWidth="0.4" />
        <line x1="300" y1="130" x2="300" y2="250" stroke="#2563eb" strokeWidth="0.4" />
        <line x1="360" y1="130" x2="360" y2="250" stroke="#2563eb" strokeWidth="0.4" />
        <circle cx="250" cy="100" r="20" stroke="#2563eb" strokeWidth="0.5" />
        <circle cx="250" cy="100" r="8" fill="#2563eb" opacity="0.15" />
        <line x1="0" y1="250" x2="500" y2="250" stroke="#2563eb" strokeWidth="0.75" />
        <line x1="0" y1="130" x2="500" y2="130" stroke="#2563eb" strokeWidth="0.2" strokeDasharray="6 12" />
        <line x1="250" y1="0" x2="250" y2="280" stroke="#2563eb" strokeWidth="0.2" strokeDasharray="6 12" />
      </svg>
    ),
  ];

  return (
    <section id="projects" style={{ padding: "8rem 2rem", background: "#f8f7f4", borderTop: "1px solid #e5e4e0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
          <h2 style={{
            fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#111110",
          }}>
            {t("title")}
          </h2>
          <p style={{ fontSize: "1rem", color: "#7a7a76", lineHeight: 1.8, maxWidth: 480 }}>
            {t("description")}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "1.5rem" }}>
          {items.map((project, i) => (
            <article key={i}
              style={{
                background: "#fff", borderRadius: 16, overflow: "hidden",
                border: "1px solid #e5e4e0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 0.25s, transform 0.25s, border-color 0.25s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 16px 48px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06)";
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "#bfdbfe";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                el.style.transform = "none";
                el.style.borderColor = "#e5e4e0";
              }}
            >
              {/* Sketch visual */}
              <div style={{
                aspectRatio: "16/9", background: "#eff6ff",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: "10%", opacity: 0.6 }}>{sketches[i]}</div>
                <div style={{
                  position: "absolute", top: "1rem", left: "1rem",
                  background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.8)", borderRadius: 100,
                  padding: "0.3rem 0.75rem", fontSize: "0.75rem", fontWeight: 600,
                  color: "#2563eb",
                }}>
                  {project.category}
                </div>
              </div>

              {/* Footer */}
              <div style={{
                padding: "1.5rem 1.75rem",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
              }}>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.01em" }}>
                  {project.title}
                </h3>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: "1.5px solid #e5e4e0", background: "#f8f7f4",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#aeaea9", flexShrink: 0, transition: "all 0.2s",
                }}>
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
