"use client";

export default function Dashboard() {
  const goPaywall = () => (window.location.href = "/paywall");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        background:
          "radial-gradient(1200px 600px at 70% 20%, rgba(0,212,255,0.08), transparent), radial-gradient(900px 500px at 20% 80%, rgba(0,255,163,0.06), transparent), #0a0a0a",
        color: "white",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "28px 18px",
          backdropFilter: "blur(8px)",
        }}
      >
        <div style={{ letterSpacing: "0.12em", opacity: 0.9, marginBottom: 28 }}>
          ELYRA
        </div>

        <nav style={{ display: "grid", gap: 10 }}>
          {["Dashboard", "Projects", "Settings"].map((item, i) => (
            <a
              key={item}
              href={i === 0 ? "/dashboard" : "#"}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                textDecoration: "none",
                color: i === 0 ? "#fff" : "#cfcfcf",
                background:
                  i === 0 ? "rgba(255,255,255,0.06)" : "transparent",
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <section style={{ padding: "32px 32px 48px 32px" }}>
        <header style={{ marginBottom: 22 }}>
          <h1
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              margin: 0,
              background:
                "linear-gradient(90deg,#00ffa3 0%, #00d4ff 45%, #007bff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Control Panel
          </h1>
          <p style={{ color: "#cfcfcf", marginTop: 8 }}>
            Blueprints, profit metrics, automations — all in one place.
          </p>
        </header>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: 18,
            marginBottom: 22,
          }}
        >
          {/* Profit Reports */}
          <div
            style={{
              borderRadius: 16,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ opacity: 0.9, marginBottom: 10 }}>Profit Reports</div>
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                background:
                  "linear-gradient(90deg,#6ee7f9 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              $2,518
            </div>
            <div style={{ color: "#a8a8a8", marginTop: 8 }}>
              Last 30 days across projects.
            </div>
          </div>

          {/* AI Launch Plans */}
          <div
            style={{
              borderRadius: 16,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ opacity: 0.9, marginBottom: 10 }}>AI Launch Plans</div>
            <div style={{ color: "#cfcfcf", lineHeight: 1.5 }}>
              Generate validated strategies and go-to-market steps tailored to
              your niche.
            </div>
          </div>

          {/* Automation Tasks */}
          <div
            style={{
              borderRadius: 16,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ opacity: 0.9, marginBottom: 10 }}>
              Automation Tasks
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#cfcfcf" }}>
              <li>Send email campaign</li>
              <li>Schedule posts</li>
              <li>Analyze metrics</li>
            </ul>
          </div>
        </div>

        {/* Big CTA strip */}
        <div
          style={{
            borderRadius: 16,
            padding: 22,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <div style={{ color: "#cfcfcf" }}>
            Unlock blueprints and automations for all projects.
          </div>
          <button
            onClick={goPaywall}
            style={{
              background:
                "linear-gradient(90deg,#00ffa3 0%, #00d4ff 50%, #007bff 100%)",
              border: "none",
              borderRadius: 12,
              color: "#000",
              padding: "12px 18px",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0, 200, 255, 0.15)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
          >
            Upgrade Now →
          </button>
        </div>
      </section>
    </main>
  );
}
