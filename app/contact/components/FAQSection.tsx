"use client";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { faqs } from "../data/contactData";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref: faqRef, visible: faqV } = useReveal();

  return (
    <section style={{ padding: "7rem 5%", background: "var(--dark)" }}>
      <div ref={faqRef} className={`section-header reveal ${faqV ? "visible" : ""}`}>
        <div className="section-eye">Common Questions</div>
        <h2 className="section-title">Frequently Asked</h2>
        <p className="section-sub">
          Answers to the questions we hear most from architects, builders, and homeowners.
        </p>
      </div>

      <div
        className={`reveal ${faqV ? "visible" : ""}`}
        style={{ maxWidth: "780px", margin: "0 auto" }}
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              borderBottom: "1px solid var(--border)",
            }}
          >
            {/* Question row */}
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.6rem 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "1.5rem",
              }}
            >
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.92rem",
                fontWeight: 400,
                color: openFaq === i ? "var(--gold)" : "var(--cream)",
                letterSpacing: "0.04em",
                transition: "color 0.3s",
              }}>
                {faq.q}
              </span>
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.2rem",
                color: "var(--gold)",
                flexShrink: 0,
                transition: "transform 0.3s",
                transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                display: "inline-block",
              }}>
                +
              </span>
            </button>

            {/* Answer */}
            <div style={{
              maxHeight: openFaq === i ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}>
              <p style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.88rem",
                lineHeight: 1.85,
                color: "#a09888",
                paddingBottom: "1.6rem",
              }}>
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
