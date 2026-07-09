"use client";

import { useTranslations } from "next-intl";

export default function Story() {
  const t = useTranslations("story");

  return (
    <section id="story" style={{ padding: "8rem 2rem", background: "#fff", borderTop: "1px solid #e5e4e0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="story-grid">

          {/* Left: Visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, #eff6ff 0%, #f8f7f4 100%)",
              border: "1px solid #dbeafe", borderRadius: 20,
              aspectRatio: "4/3", position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2.5rem",
            }}>
              {/* Blueprint SVG */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }}
                viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
                <line x1="50" y1="250" x2="200" y2="50" stroke="#2563eb" strokeWidth="0.75" />
                <line x1="350" y1="250" x2="200" y2="50" stroke="#2563eb" strokeWidth="0.75" />
                <line x1="50" y1="250" x2="350" y2="250" stroke="#2563eb" strokeWidth="0.75" />
                <line x1="100" y1="250" x2="200" y2="90" stroke="#2563eb" strokeWidth="0.4" />
                <line x1="300" y1="250" x2="200" y2="90" stroke="#2563eb" strokeWidth="0.4" />
                <line x1="100" y1="250" x2="300" y2="250" stroke="#2563eb" strokeWidth="0.4" />
                <circle cx="200" cy="50" r="4" fill="#2563eb" />
                <circle cx="50" cy="250" r="3" fill="#2563eb" />
                <circle cx="350" cy="250" r="3" fill="#2563eb" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="#2563eb" strokeWidth="0.3" strokeDasharray="5 10" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="#2563eb" strokeWidth="0.3" strokeDasharray="5 10" />
              </svg>
              <div style={{
                position: "absolute", top: "2rem", right: "2rem",
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,0.8)", border: "1px solid #dbeafe",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.25">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", color: "#2563eb", letterSpacing: "0.08em", marginBottom: "0.375rem", fontWeight: 600 }}>WIR INGENIEURGESELLSCHAFT MBH</p>
                <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em" }}>Hamburg, Deutschland</p>
              </div>
            </div>
            {/* Floating stat */}
            <div style={{
              position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
              background: "#2563eb", borderRadius: 12, padding: "1.125rem 1.5rem",
              boxShadow: "0 8px 24px rgba(37,99,235,0.3)", color: "#fff",
            }}>
              <p style={{ fontSize: "0.7rem", opacity: 0.75, marginBottom: "0.2rem" }}>Vollständige Abdeckung</p>
              <p style={{ fontSize: "1.375rem", fontWeight: 700 }}>HOAI 1–8</p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 style={{
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1,
              color: "#111110", marginBottom: "2rem",
            }}>
              {t("title")}
            </h2>
            <p style={{ fontSize: "1rem", color: "#7a7a76", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              {t("p1")}
            </p>
            <p style={{ fontSize: "1rem", color: "#7a7a76", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              {t("p2")}
            </p>
            <a href="mailto:info@wir-ing.de"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "#eff6ff", color: "#2563eb", border: "1px solid #dbeafe",
                padding: "0.75rem 1.5rem", borderRadius: 9, fontSize: "0.9rem", fontWeight: 600,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#dbeafe")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#eff6ff")}
            >
              Gespräch vereinbaren
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.story-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
