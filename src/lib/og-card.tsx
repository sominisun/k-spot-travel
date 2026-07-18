import { ImageResponse } from "next/og";

// Shared 1200x630 share-card layout — white ground, indigo ink, serif-feel
// weights. Used by the site fallback OG, quiz-result cards and plan cards.

export const OG_SIZE = { width: 1200, height: 630 };

export function ogCard({
  kicker,
  title,
  sub,
  footer = "Your K-content is your Korea travel map",
}: {
  kicker: string;
  title: string;
  sub?: string;
  footer?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#16181d", letterSpacing: 2 }}>
            K<span style={{ color: "#1E3A6E", margin: "0 2px" }}>·</span>SPOT
            <span style={{ color: "#6b7280", fontWeight: 400, marginLeft: 12 }}>TRAVEL</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              color: "#1E3A6E",
              border: "2px solid #1E3A6E",
              borderRadius: 8,
              padding: "8px 18px",
              letterSpacing: 3,
            }}
          >
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 62 : 78,
              fontWeight: 700,
              color: "#16181d",
              lineHeight: 1.08,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>
          {sub ? (
            <div style={{ display: "flex", fontSize: 30, color: "#4b5563", marginTop: 22, maxWidth: 980 }}>
              {sub}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#1E3A6E", fontWeight: 700 }}>
            {footer}
          </div>
          <div style={{ display: "flex", width: 260, height: 6, background: "#1E3A6E", borderRadius: 3 }} />
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
