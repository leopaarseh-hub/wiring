"use client";

import { useTranslations } from "next-intl";
import { IconArrowRight, IconMail } from "@/components/ui/Icons";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 2rem 6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(200,169,110,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Top label */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "7rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "rgba(245,245,240,0.3)",
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
        className="vertical-label"
      >
        Hamburg · Deutschland · 2025
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        {/* Tagline chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1px solid rgba(200,169,110,0.25)",
            borderRadius: "100px",
            padding: "0.375rem 0.875rem",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#c8a96e",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "0.75rem", color: "#c8a96e", letterSpacing: "0.06em" }}>
            {t("tagline")}
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
            color: "#f5f5f0",
            maxWidth: "900px",
            marginBottom: "2rem",
          }}
        >
          {t("headline")}
          <span style={{ color: "#c8a96e" }}>.</span>
        </h1>

        {/* Separator */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(200,169,110,0.5)",
            marginBottom: "2rem",
          }}
        />

        {/* Sub + CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
              color: "rgba(245,245,240,0.55)",
              lineHeight: "1.7",
              maxWidth: "540px",
              fontWeight: 300,
            }}
          >
            {t("subheadline")}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#c8a96e",
                color: "#0a0a0b",
                padding: "0.875rem 1.75rem",
                borderRadius: "8px",
                fontSize: "0.9375rem",
                fontWeight: 500,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#e8c98e";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#c8a96e";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <IconMail size={16} />
              {t("cta_primary")}
            </a>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid rgba(245,245,240,0.15)",
                color: "rgba(245,245,240,0.75)",
                padding: "0.875rem 1.75rem",
                borderRadius: "8px",
                fontSize: "0.9375rem",
                fontWeight: 400,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,169,110,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c8a96e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,245,240,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,245,240,0.75)";
              }}
            >
              {t("cta_secondary")}
              <IconArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "40+", label: "Jahre Expertise" },
            { value: "HOAI 1–8", label: "Leistungsphasen" },
            { value: "100%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.value}>
              <p style={{ fontSize: "1.75rem", fontWeight: 300, color: "#c8a96e", letterSpacing: "-0.02em" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(245,245,240,0.4)", marginTop: "0.25rem", letterSpacing: "0.02em" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vertical-label { display: none !important; }
        }
      `}</style>
    </section>
  );
}
