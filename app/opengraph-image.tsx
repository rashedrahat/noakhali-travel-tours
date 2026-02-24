import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Noakhali Travel & Tours | Visa, Travel & Documentation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f2347 0%, #1B3B6F 60%, #1a3060 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top-right glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,148,26,0.25), transparent)",
          }}
        />
        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,148,26,0.15), transparent)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(201,148,26,0.15)",
            border: "1px solid rgba(201,148,26,0.4)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#C9941A",
            }}
          />
          <span style={{ color: "#C9941A", fontSize: 18, fontWeight: 600, letterSpacing: 2 }}>
            Noakhali&apos;s Most Trusted Travel Agency
          </span>
        </div>

        {/* Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "rgba(201,148,26,0.15)",
              border: "2px solid rgba(201,148,26,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
            }}
          >
            🕌
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: 64, fontWeight: 800, lineHeight: 1 }}>
              Noakhali
            </span>
            <span
              style={{
                color: "#C9941A",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 6,
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Travel &amp; Tours
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 26,
            textAlign: "center",
            maxWidth: 700,
            margin: "0 0 40px 0",
            lineHeight: 1.4,
          }}
        >
          Your Trusted Partner for Visa, Travel &amp; Documentation
        </p>

        {/* Service pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["🕌 Hajj & Umrah", "🛂 Visa Processing", "✈️ Air Ticketing", "📄 Documentation"].map(
            (s) => (
              <div
                key={s}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 100,
                  padding: "10px 22px",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {s}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
