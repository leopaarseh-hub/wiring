"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { IconMenu, IconClose, IconGlobe, IconChevronDown } from "@/components/ui/Icons";

const localeLabels: Record<string, string> = { de: "Deutsch", en: "English", fa: "فارسی" };

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    { href: "#story", label: t("story") },
    { href: "#services", label: t("services") },
    { href: "#team", label: t("about") },
    { href: "#projects", label: t("projects") },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(248,247,244,0.92)" : "rgba(248,247,244,0)",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid #e5e4e0" : "1px solid transparent",
      transition: "background 0.35s, border-color 0.35s, backdrop-filter 0.35s",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 2rem",
        height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect width="30" height="30" rx="7" fill="#2563eb" />
            <path d="M8 22L15 8L22 22" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 18h9" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em", color: "#111110" }}>
            WIR<span style={{ color: "#2563eb" }}>.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hd-nav" style={{ display: "flex", gap: "2.25rem" }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="link-hover"
              style={{ fontSize: "0.875rem", color: "#3d3d3a", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3a")}
            >{l.label}</a>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          {/* Lang */}
          <div style={{ position: "relative" }}>
            <button onClick={() => setLangOpen(!langOpen)} style={{
              display: "flex", alignItems: "center", gap: "0.35rem",
              fontSize: "0.8125rem", color: "#7a7a76",
              background: "none", border: "1px solid #e5e4e0", borderRadius: "6px",
              padding: "0.35rem 0.625rem", cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { const b = e.currentTarget; b.style.borderColor = "#2563eb"; b.style.color = "#2563eb"; }}
              onMouseLeave={(e) => { const b = e.currentTarget; b.style.borderColor = "#e5e4e0"; b.style.color = "#7a7a76"; }}
            >
              <IconGlobe size={13} /><span>{locale.toUpperCase()}</span><IconChevronDown size={11} />
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "#fff", border: "1px solid #e5e4e0", borderRadius: "10px",
                overflow: "hidden", minWidth: 130, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", zIndex: 200,
              }}>
                {(["de", "en", "fa"] as const).map((loc) => (
                  <Link key={loc} href={pathname} locale={loc} onClick={() => setLangOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "0.6rem 1rem", fontSize: "0.8125rem",
                      color: loc === locale ? "#2563eb" : "#3d3d3a",
                      background: loc === locale ? "#eff6ff" : "transparent",
                      transition: "background 0.15s",
                    }}
                  >
                    <span>{localeLabels[loc]}</span>
                    {loc === locale && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <polyline points="2,6 5,9 10,3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="hd-cta"
            style={{
              fontSize: "0.8125rem", fontWeight: 600, color: "#fff",
              background: "#2563eb", padding: "0.5rem 1.25rem", borderRadius: "7px",
              transition: "background 0.2s, transform 0.15s", display: "inline-flex", alignItems: "center",
            }}
            onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#1d4ed8"; a.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#2563eb"; a.style.transform = "none"; }}
          >Kontakt</a>

          <button onClick={() => setOpen(!open)} className="hd-burger"
            style={{ background: "none", border: "none", color: "#111110", cursor: "pointer", padding: "0.25rem", display: "none" }}
            aria-label="Menu"
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, top: 68,
          background: "rgba(248,247,244,0.98)", backdropFilter: "blur(16px)", zIndex: 90,
          display: "flex", flexDirection: "column", padding: "2.5rem 2rem",
        }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{
                fontSize: "1.625rem", fontWeight: 300, color: "#111110",
                padding: "1.25rem 0", borderBottom: "1px solid #e5e4e0", letterSpacing: "-0.02em",
              }}
            >{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{
              marginTop: "2rem", display: "inline-flex", alignItems: "center",
              fontSize: "0.9375rem", fontWeight: 600, color: "#fff",
              background: "#2563eb", padding: "0.875rem 2rem", borderRadius: "8px", alignSelf: "flex-start",
            }}
          >Kontakt</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hd-nav, .hd-cta { display: none !important; }
          .hd-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
