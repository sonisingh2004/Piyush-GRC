"use client";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";
import { contactInfo } from "../data/contactData";

export default function ContactInfo() {
  const { ref: infoRef, visible: infoV } = useReveal();

  return (
    <div ref={infoRef} className={`reveal ${infoV ? "visible" : ""}`}>
      <div className="about-tag" style={{ marginBottom: "1.4rem" }}>Contact Details</div>
      <h2 className="about-title" style={{ marginBottom: "2.5rem" }}>
        We&apos;re Always<br />Available
      </h2>

      {contactInfo.map((c, i) => (
        <div
          key={c.label}
          className="contact-info-row"
          style={{ borderBottom: i < contactInfo.length - 1 ? "1px solid var(--border)" : "none" }}
        >
          <div className="contact-icon">{c.icon}</div>
          <div>
            <div className="contact-label">{c.label}</div>
            {c.href ? (
              <Link href={c.href} className="contact-val" style={{ display: "block" }}>
                {c.value}
              </Link>
            ) : (
              <div className="contact-val">{c.value}</div>
            )}
            <div style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              marginTop: "0.2rem",
              fontStyle: "italic",
            }}>
              {c.sub}
            </div>
          </div>
        </div>
      ))}

      {/* Direct call CTA */}
      <div style={{
        marginTop: "2.5rem",
        padding: "1.8rem",
        border: "1px solid var(--border)",
        background: "rgba(201,168,76,0.04)",
      }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "0.5rem",
        }}>
          Prefer to Call?
        </div>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.5rem",
          color: "var(--cream)",
          marginBottom: "0.4rem",
        }}>
          +91 78271 34265
        </div>
        <div style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.75rem",
          color: "var(--text-muted)",
        }}>
          Available 24 hours · No waiting
        </div>
      </div>
    </div>
  );
}
