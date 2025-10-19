"use client";

export default function Home() {
  const goToPaywall = () => (window.location.href = "/paywall");

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, #101010 0%, #050505 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.8rem",
          fontWeight: 900,
          background:
            "linear-gradient(90deg, #00ffa3 0%, #00d4ff 50%, #007bff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1rem",
        }}
      >
        Turn Ideas Into Income with Elyra
      </h1>

      <p
        style={{
          maxWidth: "720px",
          fontSize: "1.25rem",
          lineHeight: "1.6",
          color: "#cfcfcf",
          marginBottom: "2.5rem",
        }}
      >
        Elyra gives you AI-powered business blueprints, market research, and
        automation tools — everything you need to start making money online in
        hours, not months.
      </p>

      <button
        onClick={goToPaywall}
        style={{
          background:
            "linear-gradient(90deg, #00ffa3 0%, #00d4ff 50%, #007bff 100%)",
          border: "none",
          borderRadius: "12px",
          color: "#000",
          padding: "1rem 2.4rem",
          fontSize: "1.1rem",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(0, 255, 200, 0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 0 35px rgba(0, 255, 200, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1.0)";
          e.currentTarget.style.boxShadow =
            "0 0 20px rgba(0, 255, 200, 0.3)";
        }}
      >
        Start My Free Demo →
      </button>
    </main>
  );
}
