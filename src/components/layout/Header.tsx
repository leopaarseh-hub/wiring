"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { IconMenu, IconClose, IconGlobe, IconChevronDown } from "@/components/ui/Icons";

const localeLabels: Record<string, string> = {
  de: "Deutsch",
  en: "English",
  fa: "فارسی",
};

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#story", label: t("story") },
    { href: "#services", label: t("services") },
    { href: "#team", label: t("about") },
    { href: "#projects", label: t("projects") },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(10,10,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="rgba(200,169,110,0.12)" />
            <path d="M7 21L14 7L21 21" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 17h10" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em", color: "#f5f5f0" }}>
            WIR<span style={{ color: "#c8a96e" }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            listStyle: "none",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover"
              style={{
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "rgba(245,245,240,0.7)",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.7)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
          {/* Language switcher */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8125rem",
                color: "rgba(245,245,240,0.6)",
                background: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "6px",
                padding: "0.375rem 0.625rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,169,110,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "#c8a96e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,245,240,0.6)";
              }}
            >
              <IconGlobe size={14} />
              <span>{locale.toUpperCase()}</span>
              <IconChevronDown size={12} />
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  minWidth: "130px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  zIndex: 200,
                }}
              >
                {(["de", "en", "fa"] as const).map((loc) => (
                  <Link
                    key={loc}
                    href={pathname}
                    locale={loc}
                    onClick={() => setLangOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.625rem 1rem",
                      fontSize: "0.8125rem",
                      color: loc === locale ? "#c8a96e" : "rgba(245,245,240,0.7)",
                      background: loc === locale ? "rgba(200,169,110,0.08)" : "transparent",
                      transition: "background 0.15s",
                    }}
                  >
                    <span>{localeLabels[loc]}</span>
                    {loc === locale && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <polyline points="2,6 5,9 10,3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden-mobile"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "#0a0a0b",
              background: "#c8a96e",
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              letterSpacing: "0.01em",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#e8c98e";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#c8a96e";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Kontakt
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              color: "#f5f5f0",
              cursor: "pointer",
              padding: "0.25rem",
            }}
            aria-label="Menu"
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "72px",
            background: "rgba(10,10,11,0.97)",
            backdropFilter: "blur(20px)",
            zIndex: 90,
            display: "flex",
            flexDirection: "column",
            padding: "3rem 2rem",
            gap: "0",
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "rgba(245,245,240,0.85)",
                padding: "1.25rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                letterSpacing: "-0.01em",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.9375rem",
              fontWeight: 500,
              color: "#0a0a0b",
              background: "#c8a96e",
              padding: "0.875rem 2rem",
              borderRadius: "8px",
              alignSelf: "flex-start",
            }}
          >
            Kontakt
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
