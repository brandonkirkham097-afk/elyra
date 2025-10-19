"use client";

export default function SuccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at 20% 20%, #0a0a0a 0%, #000 100%)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: 900,
          background:
            "linear-gradient(90deg,#00ffa3 0%,#00d4ff 50%,#007bff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        Welcome to Elyra Pro
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#ccc", maxWidth: 640, lineHeight: 1.6 }}>
        Your tools are unlocked. Head to your dashboard to explore Profit Reports,
        Launch Blueprints, and Automations.
      </p>
      <a
        href="/dashboard"
        style={{
          marginTop: "2rem",
          background:
            "linear-gradient(90deg,#00ffa3 0%,#00d4ff 50%,#007bff 100%)",
          borderRadius: 10,
          color: "#000",
          padding: "0.9rem 2.2rem",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        Enter Dashboard →
      </a>
    </main>
  );
}
