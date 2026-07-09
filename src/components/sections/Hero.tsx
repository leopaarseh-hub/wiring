"use client";

import { useTranslations } from "next-intl";
import { IconArrowRight, IconMail, IconPhone } from "@/components/ui/Icons";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "7rem 2rem 5rem",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, #f8f7f4 0%, #eff6ff 60%, #f8f7f4 100%)",
    }}>
      {/* Subtle mesh background */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.07) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(37,99,235,0.04) 0%, transparent 40%)",
      }} />
      {/* Grid lines */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="hero-grid">

          {/* Left column */}
          <div>
            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(2.75rem, 6vw, 6rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#111110",
              marginBottom: "1.75rem",
            }}>
              {t("headline")}
              <span style={{ color: "#2563eb" }}>.</span>
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "#7a7a76",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}>
              {t("subheadline")}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <a href="mailto:info@wir-ing.de"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#2563eb", color: "#fff",
                  padding: "0.875rem 1.875rem", borderRadius: "9px",
                  fontSize: "0.9375rem", fontWeight: 600,
                  boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#1d4ed8"; a.style.transform = "translateY(-2px)"; a.style.boxShadow = "0 8px 20px rgba(37,99,235,0.4)"; }}
                onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#2563eb"; a.style.transform = "none"; a.style.boxShadow = "0 4px 14px rgba(37,99,235,0.35)"; }}
              >
                <IconMail size={17} />{t("cta_primary")}
              </a>
              <a href="#services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "transparent", color: "#111110",
                  border: "1.5px solid #d4d3cf",
                  padding: "0.875rem 1.875rem", borderRadius: "9px",
                  fontSize: "0.9375rem", fontWeight: 500,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "#2563eb"; a.style.color = "#2563eb"; }}
                onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = "#d4d3cf"; a.style.color = "#111110"; }}
              >
                {t("cta_secondary")}<IconArrowRight size={16} />
              </a>
            </div>

            {/* Trust row */}
            <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
              {["HOAI 1–8", "TÜV Rheinland", "Architektenkammer"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" stroke="#2563eb" strokeWidth="1" />
                    <polyline points="4,7 6,9 10,5" stroke="#2563eb" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "0.8125rem", color: "#7a7a76", fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: visual card stack */}
          <div style={{ position: "relative", height: "480px" }} className="hero-visual">
            {/* Main card */}
            <div style={{
              position: "absolute", top: 0, left: "5%", right: 0,
              background: "#fff", borderRadius: "20px", padding: "2.5rem",
              boxShadow: "0 24px 64px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)",
              border: "1px solid #e5e4e0",
            }}>
              {/* Mini header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "#eff6ff", border: "1px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111110" }}>WIR Ingenieurbüro</p>
                  <p style={{ fontSize: "0.75rem", color: "#aeaea9" }}>Hamburg, Deutschland</p>
                </div>
              </div>
              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                {[
                  { val: "40+", label: "Jahre Erfahrung" },
                  { val: "3", label: "Experten" },
                  { val: "HOAI", label: "Phasen 1–8" },
                  { val: "100%", label: "Commitment" },
                ].map((s) => (
                  <div key={s.val} style={{ background: "#f8f7f4", borderRadius: 10, padding: "0.875rem 1rem" }}>
                    <p style={{ fontSize: "1.375rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.02em" }}>{s.val}</p>
                    <p style={{ fontSize: "0.75rem", color: "#aeaea9", marginTop: "0.125rem" }}>{s.label}</p>
                  </div>
                ))}
              </div>
              {/* CTA row */}
              <a href="mailto:info@wir-ing.de"
                style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  background: "#eff6ff", color: "#2563eb",
                  padding: "0.75rem 1rem", borderRadius: 9,
                  fontSize: "0.875rem", fontWeight: 600,
                  border: "1px solid #dbeafe", transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#dbeafe")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#eff6ff")}
              >
                <IconMail size={15} /> info@wir-ing.de
              </a>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: "3rem", left: 0,
              background: "#2563eb", borderRadius: 12, padding: "1rem 1.25rem",
              boxShadow: "0 8px 24px rgba(37,99,235,0.35)", color: "#fff",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <IconPhone size={18} />
              <div>
                <p style={{ fontSize: "0.7rem", opacity: 0.75, marginBottom: "0.125rem" }}>Direktkontakt</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>+49 163 3635 832</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
