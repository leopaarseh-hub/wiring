"use client";

import { useTranslations, useLocale } from "next-intl";
import { IconMail, IconPhone, IconArrowUpRight } from "@/components/ui/Icons";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const navItems = [
    { href: "#story", de: "Unsere Story", en: "Our Story", fa: "داستان ما" },
    { href: "#services", de: "Leistungen", en: "Services", fa: "خدمات" },
    { href: "#team", de: "Über uns", en: "About", fa: "درباره ما" },
    { href: "#projects", de: "Projekte", en: "Projects", fa: "پروژه‌ها" },
    { href: "#contact", de: "Kontakt", en: "Contact", fa: "تماس" },
  ];

  return (
    <footer style={{ background: "#111110", color: "#f8f7f4" }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 4rem" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "3rem", paddingBottom: "4rem", borderBottom: "1px solid rgba(255,255,255,0.08)",
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.5rem" }}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="7" fill="#2563eb" />
                <path d="M8 22L15 8L22 22" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5 18h9" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                WIR<span style={{ color: "#2563eb" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "rgba(248,247,244,0.5)", lineHeight: 1.75, maxWidth: 300, marginBottom: "2rem" }}>
              {t("tagline")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="tel:+4916336358832"
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(248,247,244,0.5)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.5)")}
              >
                <IconPhone size={14} /> +49 163 3635 832
              </a>
              <a href="mailto:info@wir-ing.de"
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(248,247,244,0.5)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.5)")}
              >
                <IconMail size={14} /> info@wir-ing.de
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,247,244,0.3)", marginBottom: "1.25rem" }}>
              Navigation
            </p>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="link-hover"
                style={{ display: "block", fontSize: "0.875rem", color: "rgba(248,247,244,0.5)", marginBottom: "0.75rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.5)")}
              >
                {item[locale as "de" | "en" | "fa"] ?? item.de}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,247,244,0.3)", marginBottom: "1.25rem" }}>
              {t("contact")}
            </p>
            <p style={{ fontSize: "0.875rem", color: "rgba(248,247,244,0.45)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Rothenbaumchaussee 123<br />20149 Hamburg
            </p>
            <a href="mailto:info@wir-ing.de"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "#2563eb", color: "#fff",
                padding: "0.625rem 1.25rem", borderRadius: 8,
                fontSize: "0.875rem", fontWeight: 600, transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              <IconMail size={14} /> {t("email_btn")}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "1rem", paddingTop: "2rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "rgba(248,247,244,0.25)" }}>
            &copy; {new Date().getFullYear()} WIR Ingenieurgesellschaft mbH. {t("rights")}.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {[{ label: t("privacy") }, { label: t("imprint") }].map(({ label }) => (
              <a key={label} href="#"
                style={{ fontSize: "0.8125rem", color: "rgba(248,247,244,0.3)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.3)")}
              >{label}</a>
            ))}
            <a href="https://parnil.co" target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.375rem",
                fontSize: "0.8125rem", color: "rgba(248,247,244,0.3)", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,247,244,0.3)")}
            >
              {t("credit")} parnil.co <IconArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr !important;}}`}</style>
    </footer>
  );
}
