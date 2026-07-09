"use client";

import { useTranslations } from "next-intl";

export default function Story() {
  const t = useTranslations("story");

  return (
    <section
      id="story"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="story-grid"
      >
        {/* Left: Text */}
        <div>
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
              marginBottom: "2.5rem",
            }}
          >
            {t("title")}
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(200,169,110,0.4)",
              marginBottom: "2.5rem",
            }}
          />
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,245,240,0.6)",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
            }}
          >
            {t("p1")}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,245,240,0.6)",
              lineHeight: "1.8",
            }}
          >
            {t("p2")}
          </p>
        </div>

        {/* Right: Visual block */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "3rem",
              aspectRatio: "4/3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Architecture lines visual */}
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}
              viewBox="0 0 400 300"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <line x1="50" y1="250" x2="200" y2="50" stroke="#c8a96e" strokeWidth="0.5" />
              <line x1="350" y1="250" x2="200" y2="50" stroke="#c8a96e" strokeWidth="0.5" />
              <line x1="50" y1="250" x2="350" y2="250" stroke="#c8a96e" strokeWidth="0.5" />
              <line x1="100" y1="250" x2="200" y2="83" stroke="white" strokeWidth="0.3" />
              <line x1="300" y1="250" x2="200" y2="83" stroke="white" strokeWidth="0.3" />
              <line x1="100" y1="250" x2="300" y2="250" stroke="white" strokeWidth="0.3" />
              <circle cx="200" cy="50" r="3" fill="#c8a96e" />
              <circle cx="50" cy="250" r="2" fill="#c8a96e" />
              <circle cx="350" cy="250" r="2" fill="#c8a96e" />
              {/* Grid lines */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.2" strokeDasharray="4 8" />
              <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="0.2" strokeDasharray="4 8" />
            </svg>

            <div
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid rgba(200,169,110,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>

            <div>
              <p style={{ fontSize: "0.75rem", color: "rgba(200,169,110,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Ingenieurgesellschaft mbH
              </p>
              <p style={{ fontSize: "1.25rem", fontWeight: 300, color: "#f5f5f0", letterSpacing: "-0.01em" }}>
                Gegründet in Hamburg
              </p>
            </div>
          </div>

          {/* Floating accent box */}
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              left: "-1.5rem",
              background: "rgba(200,169,110,0.08)",
              border: "1px solid rgba(200,169,110,0.2)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "rgba(200,169,110,0.7)", marginBottom: "0.25rem" }}>Expertise</p>
            <p style={{ fontSize: "1.5rem", fontWeight: 300, color: "#c8a96e" }}>HOAI 1–8</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
