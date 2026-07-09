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
    <section id="services" style={{ padding: "8rem 2rem", background: "#f8f7f4", borderTop: "1px solid #e5e4e0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end", marginBottom: "4rem" }} className="srv-hdr">
          <h2 style={{
            fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#111110",
          }}>
            {t("title")}
          </h2>
          <p style={{ fontSize: "1rem", color: "#7a7a76", lineHeight: 1.8 }}>{t("description")}</p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.25rem" }}>
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i}
                style={{
                  background: "#fff", borderRadius: 16, overflow: "hidden",
                  border: "1px solid #e5e4e0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.25s, transform 0.25s, border-color 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 12px 40px rgba(37,99,235,0.12), 0 4px 12px rgba(0,0,0,0.06)";
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = "#bfdbfe";
                  const img = el.querySelector(".si") as HTMLElement;
                  if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  el.style.transform = "none";
                  el.style.borderColor = "#e5e4e0";
                  const img = el.querySelector(".si") as HTMLElement;
                  if (img) img.style.transform = "none";
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "#f1f0ed" }}>
                  <div className="si" style={{ position: "absolute", inset: 0, transition: "transform 0.5s ease" }}>
                    <Image
                      src={images[i]} alt={item.title} fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      style={{ objectFit: "cover", filter: "brightness(0.95) saturate(0.9)" }}
                    />
                  </div>
                  {/* Icon badge */}
                  <div style={{
                    position: "absolute", top: "0.875rem", left: "0.875rem", zIndex: 2,
                    width: 38, height: 38, borderRadius: 9,
                    background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.6)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}>
                    <Icon size={18} />
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111110", marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#7a7a76", lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.srv-hdr{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
