import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ketann Ingaale — Analytics Engineer & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* Boot block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "14px",
            color: "#6b6b6b",
            marginBottom: "40px",
          }}
        >
          <div>SYS.NAME : KETANN_INGAALE_OS v1.0.0</div>
          <div>SYS.AUTH : GUEST_ACCESS_GRANTED</div>
          <div>
            STATUS   :{" "}
            <span style={{ color: "#00ff88" }}>200 OK</span>
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#e0e0e0",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Ketann Ingaale
        </div>

        {/* One-liner */}
        <div
          style={{
            fontSize: "22px",
            color: "#00ff88",
            marginBottom: "40px",
          }}
        >
          Analytics Engineer · Data Scientist
        </div>

        {/* Focus areas */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Biomarker Analytics",
            "ML Systems",
            "Probabilistic Modelling",
            "LiDAR",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: "13px",
                color: "#6b6b6b",
                border: "1px solid #1e1e1e",
                padding: "4px 12px",
                borderRadius: "2px",
                background: "#111",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "14px",
            color: "#3a3a3a",
          }}
        >
          ketanningaale.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
