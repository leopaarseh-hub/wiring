"use client";

import { useTranslations } from "next-intl";
import { IconInstagram, IconLinkedin, IconFacebook, IconTwitter } from "@/components/ui/Icons";

const socialsByMember = [
  [{ icon: IconInstagram, label: "Instagram" }, { icon: IconLinkedin, label: "LinkedIn" }],
  [{ icon: IconFacebook, label: "Facebook" }, { icon: IconTwitter, label: "Twitter" }, { icon: IconLinkedin, label: "LinkedIn" }],
  [{ icon: IconFacebook, label: "Facebook" }, { icon: IconTwitter, label: "Twitter" }, { icon: IconLinkedin, label: "LinkedIn" }],
];

const initials = ["HF", "AS", "HS"];
const accentBgs = ["#eff6ff", "#f0fdf4", "#fef3c7"];
const accentColors = ["#2563eb", "#16a34a", "#d97706"];

export default function Team() {
  const t = useTranslations("team");
  const members = t.raw("members") as { role: string; name: string; bio: string }[];

  return (
    <section id="team" style={{ padding: "8rem 2rem", background: "#fff", borderTop: "1px solid #e5e4e0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "5rem", alignItems: "start" }} className="team-layout">
          {/* Left: title block */}
          <div style={{ position: "sticky", top: "6rem" }}>
            <h2 style={{
              fontSize: "clamp(1.875rem, 3vw, 2.75rem)",
              fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1,
              color: "#111110", marginBottom: "1.5rem",
            }}>
              {t("title")}
            </h2>
            <p style={{ fontSize: "1rem", color: "#7a7a76", lineHeight: 1.8, marginBottom: "2rem" }}>
              {t("description")}
            </p>
            <div style={{
              background: "#eff6ff", border: "1px solid #dbeafe", borderRadius: 12, padding: "1.25rem",
            }}>
              <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#2563eb", marginBottom: "0.375rem" }}>Unser Versprechen</p>
              <p style={{ fontSize: "0.875rem", color: "#3d3d3a", lineHeight: 1.65 }}>
                Über 80 Jahre gebündelte Ingenieurs- und Architektur-Erfahrung in einem Team.
              </p>
            </div>
          </div>

          {/* Right: cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {members.map((member, i) => (
              <div key={i}
                style={{
                  display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.75rem", alignItems: "start",
                  background: "#f8f7f4", border: "1px solid #e5e4e0", borderRadius: 16, padding: "2rem",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#bfdbfe"; el.style.boxShadow = "0 4px 20px rgba(37,99,235,0.08)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#e5e4e0"; el.style.boxShadow = "none"; }}
              >
                {/* Avatar */}
                <div style={{
                  width: 64, height: 64, borderRadius: 14,
                  background: accentBgs[i], border: `1.5px solid ${accentColors[i]}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.9375rem", fontWeight: 700, color: accentColors[i],
                  flexShrink: 0,
                }}>
                  {initials[i]}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <div>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: accentColors[i], letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                        {member.role}
                      </p>
                      <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#111110", letterSpacing: "-0.015em" }}>
                        {member.name}
                      </h3>
                    </div>
                    {/* Socials */}
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {socialsByMember[i].map(({ icon: Icon, label }) => (
                        <a key={label} href="#" aria-label={label}
                          style={{
                            width: 30, height: 30, borderRadius: 7,
                            border: "1px solid #e5e4e0", background: "#fff",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#aeaea9", transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#bfdbfe"; el.style.color = "#2563eb"; el.style.background = "#eff6ff"; }}
                          onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#e5e4e0"; el.style.color = "#aeaea9"; el.style.background = "#fff"; }}
                        ><Icon size={13} /></a>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#7a7a76", lineHeight: 1.75 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.team-layout{grid-template-columns:1fr !important;} .team-layout>div:first-child{position:static !important;}}`}</style>
    </section>
  );
}
