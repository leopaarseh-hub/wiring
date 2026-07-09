"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { IconCompass, IconLayers, IconBuilding, IconClipboard } from "@/components/ui/Icons";

const icons = [IconCompass, IconLayers, IconBuilding, IconClipboard];

const images = [
  "/service-standortanalyse.jpg",
  "/service-konzept.jpg",
  "/service-bauplanung.jpg",
  "/service-gutachten.jpg",
];

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
        {/* Section header */}
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

        {/* Service cards with real images */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.07)",
                  position: "relative",
                  cursor: "default",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(200,169,110,0.3)";
                  el.style.transform = "translateY(-4px)";
                  const overlay = el.querySelector(".srv-overlay") as HTMLDivElement;
                  if (overlay) overlay.style.opacity = "1";
                  const img = el.querySelector(".srv-img") as HTMLDivElement;
                  if (img) img.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.transform = "translateY(0)";
                  const overlay = el.querySelector(".srv-overlay") as HTMLDivElement;
                  if (overlay) overlay.style.opacity = "0";
                  const img = el.querySelector(".srv-img") as HTMLDivElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    background: "#0d0d0e",
                  }}
                >
                  <div
                    className="srv-img"
                    style={{
                      position: "absolute",
                      inset: 0,
                      transition: "transform 0.5s ease",
                    }}
                  >
                    <Image
                      src={images[i]}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      style={{ objectFit: "cover", filter: "grayscale(20%) brightness(0.85)" }}
                    />
                  </div>
                  {/* Image gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.3) 50%, transparent 100%)",
                      zIndex: 1,
                    }}
                  />
                  {/* Hover highlight */}
                  <div
                    className="srv-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(200,169,110,0.08)",
                      zIndex: 2,
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                  {/* Icon badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      zIndex: 3,
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(10,10,11,0.65)",
                      border: "1px solid rgba(200,169,110,0.25)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c8a96e",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "1.75rem",
                    background: "#0a0a0b",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: "#f5f5f0",
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
                  <div
                    style={{
                      marginTop: "0.5rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontSize: "0.75rem",
                      color: "rgba(200,169,110,0.55)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5" stroke="#c8a96e" strokeWidth="0.75" opacity="0.5" />
                      <circle cx="6" cy="6" r="2" fill="#c8a96e" opacity="0.5" />
                    </svg>
                    HOAI Phase {i + 1}–{i + 2}
                  </div>
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
