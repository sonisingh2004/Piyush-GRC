"use client";
import { useState } from "react";

const WHATSAPP_NUMBER = "917827134265";
const DEFAULT_MESSAGE = "Hello! I'm interested in Piyush GRC products. Could you please share more details?";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <>
      {/* Tooltip / label */}
      <div
        style={{
          position: "fixed",
          bottom: "2.2rem",
          right: "5.5rem",
          background: "var(--dark)",
          border: "1px solid var(--border)",
          color: "var(--cream)",
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          padding: "0.55rem 1rem",
          whiteSpace: "nowrap",
          zIndex: 9998,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        Chat on WhatsApp
        {/* arrow */}
        <span style={{
          position: "absolute",
          right: "-6px",
          top: "50%",
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
          borderLeft: "6px solid var(--border)",
        }} />
      </div>

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "1rem",
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          background: hovered ? "#20c35e" : "#25d366",
          border: "2px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          cursor: "pointer",
          textDecoration: "none",
          transition: "background 0.3s, transform 0.3s, box-shadow 0.3s",
          transform: hovered ? "scale(1.12)" : "scale(1)",
          boxShadow: hovered
            ? "0 8px 28px rgba(37,211,102,0.45)"
            : "0 4px 16px rgba(37,211,102,0.3)",
          animation: "waPulse 2.5s ease-in-out infinite",
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="26"
          height="26"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Pulse animation keyframe */}
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 4px 16px rgba(37,211,102,0.3); }
          50%  { box-shadow: 0 4px 28px rgba(37,211,102,0.55); }
          100% { box-shadow: 0 4px 16px rgba(37,211,102,0.3); }
        }
      `}</style>
    </>
  );
}