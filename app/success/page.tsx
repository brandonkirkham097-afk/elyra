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
        background:
          "radial-gradient(circle at 20% 20%, #0a0a0a 0%, #000 100%)",
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

      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "650px",
          color: "#ccc",
          lineHeight: "1.6",
          marginBottom: "2.5rem",
        }}
      >
        Your journey to building and automating profitable ideas starts now.  
        Explore your dashboard for personalized profit blueprints and growth tools.
      </p>

      <a
        href="/"
        style={{
          background:
            "linear-gradient(90deg,#00ffa3 0%,#00d4ff 50%,#007bff 100%)",
          borderRadius: "10px",
          color: "#000",
          padding: "0.9rem 2.2rem",
          fontSize: "1.1rem",
          fontWeight: 700,
          textDecoration: "none",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
      >
        Enter Dashboard →
      </a>
    </main>
  );
}
