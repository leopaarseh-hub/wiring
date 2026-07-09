"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconArrowRight, IconMail, IconPhone } from "@/components/ui/Icons";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section style={{
      minHeight: "100svh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 2rem 5rem",
    }}>
      {/* Background image — desktop */}
      <div className="hero-bg-desktop" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-desktop.jpg"
          alt="Architecture"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
      </div>

      {/* Background image — mobile */}
      <div className="hero-bg-mobile" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-mobile.jpg"
          alt="Architecture"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* Gradient overlay — dark bottom, light top */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(10,12,20,0.25) 0%, rgba(10,12,20,0.15) 35%, rgba(10,12,20,0.65) 70%, rgba(10,12,20,0.92) 100%)",
      }} />

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "flex-end",
        }} className="hero-grid">

          {/* Left: Text */}
          <div>
            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(3rem, 7vw, 7.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#ffffff",
              marginBottom: "1.75rem",
              textShadow: "0 2px 32px rgba(0,0,0,0.2)",
            }}>
              {t("headline")}
              <span style={{ color: "#60a5fa" }}>.</span>
            </h1>

            <p style={{
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}>
              {t("subheadline")}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
              <a href="mailto:info@wir-ing.de"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#2563eb", color: "#fff",
                  padding: "0.9375rem 1.875rem", borderRadius: "9px",
                  fontSize: "0.9375rem", fontWeight: 700,
                  boxShadow: "0 4px 20px rgba(37,99,235,0.45)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#1d4ed8"; a.style.transform = "translateY(-2px)"; a.style.boxShadow = "0 8px 28px rgba(37,99,235,0.55)"; }}
                onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#2563eb"; a.style.transform = "none"; a.style.boxShadow = "0 4px 20px rgba(37,99,235,0.45)"; }}
              >
                <IconMail size={17} />
                {t("cta_primary")}
              </a>
              <a href="#services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(255,255,255,0.1)", color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(8px)",
                  padding: "0.9375rem 1.875rem", borderRadius: "9px",
                  fontSize: "0.9375rem", fontWeight: 500,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(255,255,255,0.18)"; a.style.borderColor = "rgba(255,255,255,0.45)"; }}
                onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "rgba(255,255,255,0.1)"; a.style.borderColor = "rgba(255,255,255,0.25)"; }}
              >
                {t("cta_secondary")}
                <IconArrowRight size={16} />
              </a>
            </div>

            {/* Stats bar */}
            <div style={{
              display: "flex", gap: "0", flexWrap: "wrap",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              overflow: "hidden",
              maxWidth: "fit-content",
            }}>
              {[
                { val: "40+", label: "Jahre Expertise" },
                { val: "HOAI 1–8", label: "Leistungsphasen" },
                { val: "100%", label: "Commitment" },
              ].map((s, i) => (
                <div key={s.val} style={{
                  padding: "1rem 1.75rem",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}>
                  <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>{s.val}</p>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "0.125rem" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact card (desktop only) */}
          <div className="hero-card" style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 18,
            padding: "1.75rem",
            minWidth: 240,
          }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Direktkontakt
            </p>
            <a href="tel:+4916336358832"
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                color: "#fff", marginBottom: "0.875rem",
                fontSize: "0.875rem", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{
                width: 34, height: 34, borderRadius: 9,
                background: "rgba(37,99,235,0.6)", border: "1px solid rgba(96,165,250,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}><IconPhone size={15} /></span>
              +49 163 3635 832
            </a>
            <a href="mailto:info@wir-ing.de"
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                color: "#fff", marginBottom: "1.5rem",
                fontSize: "0.875rem", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{
                width: 34, height: 34, borderRadius: 9,
                background: "rgba(37,99,235,0.6)", border: "1px solid rgba(96,165,250,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}><IconMail size={15} /></span>
              info@wir-ing.de
            </a>
            <a href="mailto:info@wir-ing.de"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", width: "100%",
                background: "#2563eb", color: "#fff",
                padding: "0.75rem", borderRadius: 9,
                fontSize: "0.875rem", fontWeight: 600,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              <IconMail size={15} /> Anfrage senden
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-bg-desktop { display: block; }
        .hero-bg-mobile  { display: none;  }
        @media (max-width: 768px) {
          .hero-bg-desktop { display: none !important; }
          .hero-bg-mobile  { display: block !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
