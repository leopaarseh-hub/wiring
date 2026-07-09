"use client";

import { useTranslations, useLocale } from "next-intl";
import { IconMail, IconPhone, IconMapPin, IconArrowUpRight } from "@/components/ui/Icons";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#080809",
        padding: "5rem 0 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Upper footer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="rgba(200,169,110,0.12)" />
                <path d="M7 21L14 7L21 21" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 17h10" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "1rem", fontWeight: 600, color: "#f5f5f0" }}>
                WIR<span style={{ color: "#c8a96e" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(245,245,240,0.45)", lineHeight: "1.7", maxWidth: "260px" }}>
              {t("tagline")}
            </p>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,245,240,0.3)", marginTop: "1rem", lineHeight: "1.6" }}>
              WIR Ingenieurgesellschaft mbH<br />
              Hamburg, Deutschland
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)", marginBottom: "1.25rem" }}>
              Navigation
            </p>
            {[
              { href: "#story", label: locale === "de" ? "Unsere Story" : locale === "en" ? "Our Story" : "داستان ما" },
              { href: "#services", label: locale === "de" ? "Leistungen" : locale === "en" ? "Services" : "خدمات" },
              { href: "#team", label: locale === "de" ? "Über uns" : locale === "en" ? "About" : "درباره ما" },
              { href: "#projects", label: locale === "de" ? "Projekte" : locale === "en" ? "Projects" : "پروژه‌ها" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-hover"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "rgba(245,245,240,0.5)",
                  marginBottom: "0.75rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.5)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,245,240,0.3)", marginBottom: "1.25rem" }}>
              {t("contact")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a
                href="tel:+4916336358832"
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(245,245,240,0.5)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.5)")}
              >
                <IconPhone size={15} />
                +49 163 3635 832
              </a>
              <a
                href="mailto:info@wir-ing.de"
                style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(245,245,240,0.5)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.5)")}
              >
                <IconMail size={15} />
                info@wir-ing.de
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "rgba(245,245,240,0.5)" }}>
                <span style={{ flexShrink: 0, marginTop: "2px", display: "flex" }}><IconMapPin size={15} /></span>
                <span>Rothenbaumchaussee 123<br />20149 Hamburg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.75rem 0",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "rgba(245,245,240,0.25)" }}>
            &copy; {new Date().getFullYear()} WIR Ingenieurgesellschaft mbH. {t("rights")}.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="#"
              style={{ fontSize: "0.8125rem", color: "rgba(245,245,240,0.35)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.35)")}
            >
              {t("privacy")}
            </a>
            <a
              href="#"
              style={{ fontSize: "0.8125rem", color: "rgba(245,245,240,0.35)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.35)")}
            >
              {t("imprint")}
            </a>
            <a
              href="https://parnil.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.8125rem",
                color: "rgba(245,245,240,0.35)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a96e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.35)")}
            >
              {t("credit")} parnil.co
              <IconArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
