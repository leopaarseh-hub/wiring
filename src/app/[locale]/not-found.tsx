export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        color: "#f5f5f0",
        background: "#0a0a0b",
        fontFamily: "var(--font-geist), system-ui, sans-serif",
      }}
    >
      <p style={{ fontSize: "6rem", fontWeight: 200, color: "rgba(200,169,110,0.3)", lineHeight: 1 }}>404</p>
      <p style={{ fontSize: "1.25rem", fontWeight: 300, color: "rgba(245,245,240,0.6)" }}>
        Seite nicht gefunden
      </p>
      <a
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.75rem",
          background: "#c8a96e",
          color: "#0a0a0b",
          borderRadius: "8px",
          fontSize: "0.9375rem",
          fontWeight: 500,
        }}
      >
        Zur Startseite
      </a>
    </div>
  );
}
