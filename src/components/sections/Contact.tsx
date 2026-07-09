"use client";

import { useTranslations } from "next-intl";
import { IconMail, IconPhone, IconMapPin, IconArrowRight } from "@/components/ui/Icons";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
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
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
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
              marginBottom: "2rem",
            }}
          >
            {t("title")}
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(200,169,110,0.4)",
              marginBottom: "2rem",
            }}
          />
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,245,240,0.5)",
              lineHeight: "1.8",
              marginBottom: "3rem",
            }}
          >
            {t("description")}
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <a
              href="tel:+4916336358832"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: "rgba(245,245,240,0.65)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.65)")}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(200,169,110,0.07)",
                  border: "1px solid rgba(200,169,110,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8a96e",
                  flexShrink: 0,
                }}
              >
                <IconPhone size={17} />
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,245,240,0.35)", marginBottom: "0.125rem" }}>
                  {t("phone")}
                </p>
                <p style={{ fontSize: "0.9375rem" }}>+49 163 3635 832</p>
              </div>
            </a>

            <a
              href="mailto:info@wir-ing.de"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                color: "rgba(245,245,240,0.65)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f5f0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.65)")}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(200,169,110,0.07)",
                  border: "1px solid rgba(200,169,110,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8a96e",
                  flexShrink: 0,
                }}
              >
                <IconMail size={17} />
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,245,240,0.35)", marginBottom: "0.125rem" }}>
                  {t("email")}
                </p>
                <p style={{ fontSize: "0.9375rem" }}>info@wir-ing.de</p>
              </div>
            </a>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                color: "rgba(245,245,240,0.65)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(200,169,110,0.07)",
                  border: "1px solid rgba(200,169,110,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8a96e",
                  flexShrink: 0,
                }}
              >
                <IconMapPin size={17} />
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", color: "rgba(245,245,240,0.35)", marginBottom: "0.125rem" }}>
                  {t("address")}
                </p>
                <p style={{ fontSize: "0.9375rem", lineHeight: "1.6" }}>
                  Rothenbaumchaussee 123<br />20149 Hamburg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: CTA card */}
        <div
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "#f5f5f0",
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              Direkt anfragen
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(245,245,240,0.45)", lineHeight: "1.7" }}>
              Senden Sie uns eine E-Mail direkt. Wir antworten in der Regel innerhalb von 24 Stunden.
            </p>
          </div>

          <div
            style={{
              background: "rgba(200,169,110,0.05)",
              border: "1px solid rgba(200,169,110,0.15)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ color: "#c8a96e", display: "flex" }}><IconMail size={18} /></span>
              <span style={{ fontSize: "1rem", color: "#f5f5f0" }}>info@wir-ing.de</span>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "rgba(245,245,240,0.35)", lineHeight: "1.6" }}>
              WIR Ingenieurgesellschaft mbH<br />
              Rothenbaumchaussee 123 · 20149 Hamburg
            </p>
          </div>

          <a
            href="mailto:info@wir-ing.de"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              background: "#c8a96e",
              color: "#0a0a0b",
              padding: "1rem 2rem",
              borderRadius: "10px",
              fontSize: "0.9375rem",
              fontWeight: 500,
              transition: "all 0.2s",
              textAlign: "center",
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
            <IconMail size={17} />
            {t("cta")}
            <IconArrowRight size={16} />
          </a>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {["HOAI 1–8", "TÜV Rheinland", "Architektenkammer"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(245,245,240,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "6px",
                  padding: "0.25rem 0.625rem",
                  letterSpacing: "0.02em",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
