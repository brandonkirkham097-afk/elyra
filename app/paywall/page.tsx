"use client";

export default function PaywallPage() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Error starting checkout");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "1rem",
          background:
            "linear-gradient(90deg,#00ffa3 0%,#00d4ff 50%,#007bff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Unlock Elyra Pro
      </h1>

      <p
        style={{
          color: "#ccc",
          maxWidth: "600px",
          marginBottom: "2rem",
          lineHeight: "1.6",
        }}
      >
        Get instant access to Profit Reports, Launch Blueprints, and AI
        business tools for only <strong>$9</strong>.
      </p>

      <button
        onClick={handleCheckout}
        style={{
          background:
            "linear-gradient(90deg,#00ffa3 0%,#00d4ff 50%,#007bff 100%)",
          border: "none",
          borderRadius: "10px",
          color: "#000",
          padding: "0.9rem 2.2rem",
          fontSize: "1.1rem",
          fontWeight: 700,
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1.0)")
        }
      >
        Upgrade Now →
      </button>
    </main>
  );
}
