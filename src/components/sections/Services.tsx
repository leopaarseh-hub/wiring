"use client";

import { useTranslations } from "next-intl";
import { IconBuilding, IconCompass, IconLayers, IconClipboard } from "@/components/ui/Icons";

const icons = [IconCompass, IconLayers, IconBuilding, IconClipboard];

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section
      id="services"
      style={{
        padding: "8rem 2rem",
        background: "rgba(255,255,255,0.015)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "end",
            marginBottom: "5rem",
          }}
          className="services-header"
        >
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
              }}
            >
              {t("title")}
            </h2>
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245,245,240,0.5)",
              lineHeight: "1.8",
            }}
          >
            {t("description")}
          </p>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                style={{
                  background: "#0a0a0b",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  transition: "background 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#0f0f10")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#0a0a0b")}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(200,169,110,0.06)",
                    border: "1px solid rgba(200,169,110,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c8a96e",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: "#f5f5f0",
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(245,245,240,0.45)",
                      lineHeight: "1.7",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.8125rem",
                    color: "rgba(200,169,110,0.6)",
                  }}
                >
                  <span>HOAI Phase {i + 1}–{i + 2}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-header {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
