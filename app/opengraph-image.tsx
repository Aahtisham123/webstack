import { ImageResponse } from "next/og";

export const alt = "Webstack — Build. Optimize. Secure. Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070A0F",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#6366F1",
              display: "flex",
            }}
          />
          <div style={{ display: "flex", fontSize: "28px", fontWeight: 700 }}>Webstack</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "68px", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-1.5px" }}>
            Build. Optimize. Secure. Grow.
          </div>
          <div style={{ display: "flex", marginTop: "24px", fontSize: "28px", color: "#A1A1AA" }}>
            Web development, SEO, AI, and security for modern businesses.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
