"use client";

import { useTranslations } from "next-intl";
import { IconMail, IconPhone, IconMapPin, IconArrowRight } from "@/components/ui/Icons";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" style={{ padding: "8rem 2rem", background: "#fff", borderTop: "1px solid #e5e4e0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Top: headline row */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 5rem" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05,
            color: "#111110", marginBottom: "1.25rem",
          }}>
            {t("title")}
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#7a7a76", lineHeight: 1.75 }}>
            {t("description")}
          </p>
        </div>

        {/* Content grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

          {/* Left: contact info tiles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: IconPhone, label: t("phone"), value: "+49 163 3635 832", href: "tel:+4916336358832" },
              { icon: IconMail, label: t("email"), value: "info@wir-ing.de", href: "mailto:info@wir-ing.de" },
              { icon: IconMapPin, label: t("address"), value: "Rothenbaumchaussee 123\n20149 Hamburg", href: undefined },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: "1.25rem",
                  background: "#f8f7f4", border: "1px solid #e5e4e0", borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={(e) => { if (!href) return; const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#bfdbfe"; el.style.boxShadow = "0 4px 16px rgba(37,99,235,0.08)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#e5e4e0"; el.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 11, flexShrink: 0,
                    background: "#eff6ff", border: "1px solid #dbeafe",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb",
                  }}>
                    <Icon size={19} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "#aeaea9", fontWeight: 600, marginBottom: "0.25rem", letterSpacing: "0.04em" }}>{label}</p>
                    <p style={{ fontSize: "0.9375rem", color: "#111110", fontWeight: 500, lineHeight: 1.5, whiteSpace: "pre-line" }}>{value}</p>
                  </div>
                </div>
              );
              return href
                ? <a key={label} href={href} style={{ display: "block", textDecoration: "none" }}>{inner}</a>
                : <div key={label}>{inner}</div>;
            })}
          </div>

          {/* Right: CTA card */}
          <div style={{
            background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
            borderRadius: 20, padding: "3rem",
            boxShadow: "0 20px 60px rgba(37,99,235,0.35)",
            color: "#fff",
            display: "flex", flexDirection: "column", gap: "1.75rem",
          }}>
            <div>
              <h3 style={{ fontSize: "1.625rem", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: "0.75rem" }}>
                Schreiben Sie uns
              </h3>
              <p style={{ fontSize: "0.9375rem", opacity: 0.8, lineHeight: 1.7 }}>
                Wir antworten in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
              </p>
            </div>

            {/* Email display */}
            <div style={{
              background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "1.25rem 1.5rem",
              border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <IconMail size={18} />
              <span style={{ fontSize: "1rem", fontWeight: 600 }}>info@wir-ing.de</span>
            </div>

            {/* CTA button */}
            <a href="mailto:info@wir-ing.de"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem",
                background: "#fff", color: "#2563eb",
                padding: "1rem 2rem", borderRadius: 10,
                fontSize: "0.9375rem", fontWeight: 700,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#eff6ff"; a.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#fff"; a.style.transform = "none"; }}
            >
              <IconMail size={17} />
              {t("cta")}
              <IconArrowRight size={16} />
            </a>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", paddingTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              {["HOAI 1–8", "TÜV Rheinland", "Architektenkammer"].map((b) => (
                <span key={b} style={{
                  fontSize: "0.75rem", fontWeight: 500,
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 6, padding: "0.25rem 0.625rem", color: "rgba(255,255,255,0.85)",
                }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
