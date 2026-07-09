"use client";

import { useTranslations } from "next-intl";
import { IconInstagram, IconLinkedin, IconFacebook, IconTwitter } from "@/components/ui/Icons";

const socialsByMember = [
  [
    { icon: IconInstagram, href: "#", label: "Instagram" },
    { icon: IconLinkedin, href: "#", label: "LinkedIn" },
  ],
  [
    { icon: IconFacebook, href: "#", label: "Facebook" },
    { icon: IconTwitter, href: "#", label: "Twitter" },
    { icon: IconLinkedin, href: "#", label: "LinkedIn" },
  ],
  [
    { icon: IconFacebook, href: "#", label: "Facebook" },
    { icon: IconTwitter, href: "#", label: "Twitter" },
    { icon: IconLinkedin, href: "#", label: "LinkedIn" },
  ],
];

const initials = ["HF", "AS", "HS"];

export default function Team() {
  const t = useTranslations("team");
  const members = t.raw("members") as { role: string; name: string; bio: string }[];

  return (
    <section
      id="team"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: "640px", marginBottom: "5rem" }}>
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
            marginBottom: "1.5rem",
          }}
        >
          {t("title")}
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(245,245,240,0.5)", lineHeight: "1.8" }}>
          {t("description")}
        </p>
      </div>

      {/* Team cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {members.map((member, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              transition: "border-color 0.25s, background 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(200,169,110,0.2)";
              el.style.background = "rgba(255,255,255,0.035)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.07)";
              el.style.background = "rgba(255,255,255,0.025)";
            }}
          >
            {/* Avatar + role */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  background: "rgba(200,169,110,0.1)",
                  border: "1px solid rgba(200,169,110,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#c8a96e",
                  letterSpacing: "0.05em",
                }}
              >
                {initials[i]}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#c8a96e",
                    letterSpacing: "0.06em",
                    marginBottom: "0.375rem",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {member.role}
                </p>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#f5f5f0",
                    letterSpacing: "-0.01em",
                    lineHeight: "1.3",
                  }}
                >
                  {member.name}
                </h3>
              </div>
            </div>

            {/* Bio */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(245,245,240,0.5)",
                lineHeight: "1.8",
                flexGrow: 1,
              }}
            >
              {member.bio}
            </p>

            {/* Socials */}
            <div
              style={{
                display: "flex",
                gap: "0.625rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {socialsByMember[i].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,245,240,0.4)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(200,169,110,0.35)";
                    el.style.color = "#c8a96e";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(245,245,240,0.4)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
