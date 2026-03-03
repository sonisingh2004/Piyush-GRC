"use client";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";
import { useState } from "react";

/* ── DATA ── */
const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 78271 34265",
    href: "tel:+917827134265",
    sub: "Available 24 hours, 7 days a week",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "piyushkumars083@gmail.com",
    href: "mailto:piyushkumars083@gmail.com",
    sub: "Send us your enquiry anytime",
  },
  {
    icon: "📍",
    label: "Headquarters",
    value: "Bhubaneswar, Odisha",
    href: null,
    sub: "Primary manufacturing & admin office",
  },
  {
    icon: "🏭",
    label: "Manufacturing Units",
    value: "Patna, Bihar · Deoghar, Jharkhand · Bhagalpur, Bihar · Kolkata",
    href: null,
    sub: "Regional production & dispatch centres",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Open 24 Hours Daily",
    href: null,
    sub: "No appointment necessary",
  },
  {
    icon: "♿",
    label: "Accessibility",
    value: "Wheelchair Accessible",
    href: null,
    sub: "Accessible entrance & parking available",
  },
];

const locations = [
  {
    city: "Bhubaneswar",
    state: "Odisha",
    role: "Headquarters",
    icon: "🏢",
    phone: "+91 78271 34265",
  },
  {
    city: "Patna",
    state: "Bihar",
    role: "Manufacturing Unit",
    icon: "🏭",
    phone: "+91 78271 34265",
  },
  {
    city: "Deoghar",
    state: "Jharkhand",
    role: "Manufacturing Unit",
    icon: "🏭",
    phone: "+91 78271 34265",
  },
  {
    city: "Bhagalpur",
    state: "Bihar",
    role: "Manufacturing Unit",
    icon: "🏭",
    phone: "+91 78271 34265",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    role: "Manufacturing Unit",
    icon: "🏭",
    phone: "+91 78271 34265",
  },
];

const productOptions = [
  "Select a product category",
  "Pillars",
  "Cornices",
  "Bases",
  "Capitals",
  "Jali",
  "Brackets",
  "Balusters",
  "Other",
];

const faqs = [
  {
    q: "Do you supply outside Eastern India?",
    a: "Yes. While our manufacturing units are in Odisha, Bihar, and Jharkhand, we supply and install GRC products across all of India. Delivery timelines and logistics are discussed at the time of order.",
  },
  {
    q: "Can you create custom GRC designs?",
    a: "Absolutely. Custom mold design is one of our core strengths. Share a reference image, drawing, or concept and our team will engineer a mold to match your vision exactly.",
  },
  {
    q: "What is the typical lead time for an order?",
    a: "Standard products are usually ready within a few days. Custom designs with new molds typically take 2–4 weeks depending on complexity and order size.",
  },
  {
    q: "Do you offer installation services?",
    a: "Yes. We offer end-to-end service from manufacturing to on-site installation. Our trained applicators handle delivery, fitting, jointing, and finishing.",
  },
  {
    q: "Can I visit your facility?",
    a: "Yes — our facility is open 24 hours and features a wheelchair-accessible entrance and parking. Call ahead to +91 78271 34265 and we will arrange a guided tour.",
  },
];

/* ── MAIN COMPONENT ── */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const { ref: infoRef,  visible: infoV  } = useReveal();
  const { ref: formRef,  visible: formV  } = useReveal();
  const { ref: locRef,   visible: locV   } = useReveal();
  const { ref: faqRef,   visible: faqV   } = useReveal();
  const { ref: ctaRef,   visible: ctaV   } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ background: "var(--charcoal)", color: "var(--cream)" }}>

      {/* ══ HERO BANNER ══ */}
      <section style={{
        minHeight: "52vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "8rem 5% 5rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #0e0d0b 0%, #1a1814 50%, #0e0d0b 100%)",
      }}>
        {/* radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        }} />
        {/* decorative lines */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          top: "calc(50% - 70px)",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
        }} />
        <div style={{
          position: "absolute", left: 0, right: 0, height: "1px",
          top: "calc(50% + 70px)",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.18), transparent)",
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-eyebrow" style={{ justifyContent: "center", animation: "fadeUp 1s ease both" }}>
            Get In Touch
          </div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", animation: "fadeUp 1s 0.15s ease both" }}>
            Let&apos;s Build<br />
            <span className="accent">Something Timeless</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: "520px", margin: "0 auto", animation: "fadeUp 1s 0.3s ease both" }}>
            Reach out to our team — we are available 24 hours a day to discuss your project.
          </p>
        </div>
      </section>

      {/* ══ CONTACT FORM + INFO ══ */}
      <section className="contact-form-section" style={{
        padding: "7rem 5%",
        background: "var(--dark)",
        alignItems: "start",
      }}>

        {/* Left — contact info */}
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
                  <a href={c.href} className="contact-val" style={{ display: "block" }}>
                    {c.value}
                  </a>
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

        {/* Right — enquiry form */}
        <div ref={formRef} className={`reveal ${formV ? "visible" : ""}`}>
          <div className="form-title">Request a Quote</div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com" />
            </div>

            <div className="form-group">
              <label>Your Location / City</label>
              <input type="text" placeholder="e.g. Bhubaneswar, Delhi, Mumbai" />
            </div>

            <div className="form-group">
              <label>Product Interest *</label>
              <select required>
                {productOptions.map((o) => (
                  <option key={o} value={o === productOptions[0] ? "" : o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Approximate Quantity</label>
                <input type="text" placeholder="e.g. 20 panels" />
              </div>
              <div className="form-group">
                <label>Project Timeline</label>
                <input type="text" placeholder="e.g. 2 months" />
              </div>
            </div>

            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Describe your project, dimensions, design references, or any specific requirements..." />
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? "✓ Enquiry Sent Successfully!" : "Send Enquiry →"}
            </button>

            {submitted && (
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.92rem",
                fontStyle: "italic",
                color: "var(--gold)",
                textAlign: "center",
                marginTop: "1rem",
              }}>
                Thank you! Our team will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ══ LOCATIONS ══ */}
      <section style={{ padding: "7rem 5%", background: "var(--charcoal)" }}>
        <div ref={locRef} className={`section-header reveal ${locV ? "visible" : ""}`}>
          <div className="section-eye">Our Locations</div>
          <h2 className="section-title">Where to Find Us</h2>
          <p className="section-sub">
            Three manufacturing hubs across Eastern India — visit us, call us, or we&apos;ll come to you.
          </p>
        </div>

        <div
          className={`reveal ${locV ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "rgba(201,168,76,0.12)",
          }}
        >
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="about-card"
              style={{ background: "var(--dark)", padding: "3rem 2rem" }}
            >
              <div className="about-card-icon">{loc.icon}</div>

              <div style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}>
                {loc.role}
              </div>

              <div className="about-card-num" style={{ fontSize: "1.5rem", marginBottom: "0.2rem" }}>
                {loc.city}
              </div>
              <div className="about-card-label" style={{ marginBottom: "1.5rem" }}>
                {loc.state}
              </div>

              <div style={{
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border)",
              }}>
                <a
                  href="tel:+917827134265"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--gold)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "color 0.2s",
                  }}
                >
                  📞 {loc.phone}
                </a>
                <div style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.68rem",
                  color: "var(--text-muted)",
                  marginTop: "0.4rem",
                }}>
                  Open 24 Hours Daily
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
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

      {/* ══ CTA BANNER ══ */}
      <section
        ref={ctaRef}
        className={`reveal ${ctaV ? "visible" : ""}`}
        style={{
          padding: "5rem 5%",
          background: "var(--charcoal)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }} />

        <div className="section-eye" style={{ position: "relative" }}>Still Have Questions?</div>

        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(1.8rem, 3vw, 3rem)",
          fontWeight: 400,
          color: "var(--cream)",
          lineHeight: 1.2,
          maxWidth: "600px",
          position: "relative",
        }}>
          Call Us Anytime —<br />
          <span style={{ color: "var(--gold)" }}>We&apos;re Open 24 Hours</span>
        </h2>

        <p className="section-sub" style={{ position: "relative" }}>
          No waiting, no appointments needed. Just call and our team will be ready to help with samples, pricing, and project advice.
        </p>

        <div className="hero-buttons" style={{ position: "relative" }}>
          <Link href="tel:+917827134265" className="btn-primary">
            📞 +91 78271 34265
          </Link>
          <Link href="#products" className="btn-outline">
            View Products
          </Link>
        </div>
      </section>

    </div>
  );
}