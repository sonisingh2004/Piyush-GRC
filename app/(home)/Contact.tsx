"use client";
import { useReveal } from "@/hooks/useReveal";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const { ref: lRef, visible: lv } = useReveal();
  const { ref: rRef, visible: rv } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      product: formData.get("product"),
      details: formData.get("details"),
      location: "",
      quantity: "",
      timeline: "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send enquiry. Please call us directly: +91 78271 34265");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      {/* Left - contact info */}
      <div ref={lRef} className={`contact-left reveal ${lv ? "visible" : ""}`}>
        <div className="about-tag" style={{ marginBottom: "1.4rem" }}>Get In Touch</div>
        <h2 className="about-title" style={{ marginBottom: "2.5rem" }}>
          Let&apos;s Build<br />Something Timeless
        </h2>

        <div className="contact-info-row">
          <div className="contact-icon">📞</div>
          <div>
            <div className="contact-label">Phone</div>
            <div className="contact-val">
              <Link href="tel:+917827134265">+91 78271 34265</Link>
            </div>
          </div>
        </div>

        <div className="contact-info-row">
          <div className="contact-icon">✉️</div>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-val">
              <Link href="mailto:piyushkumars083@gmail.com">piyushkumars083@gmail.com</Link>
            </div>
          </div>
        </div>

        <div className="contact-info-row">
          <div className="contact-icon">📍</div>
          <div>
            <div className="contact-label">Locations</div>
            <div className="contact-val">
              Bhubaneswar, Odisha<br />Patna, Bihar<br />Deoghar, Jharkhand<br />Bhagalpur, Bihar<br />Kolkata, West Bengal
            </div>
          </div>
        </div>

        <div className="contact-info-row">
          <div className="contact-icon">🕐</div>
          <div>
            <div className="contact-label">Working Hours</div>
            <div className="contact-val">Open 24 Hours · 7 Days a Week</div>
          </div>
        </div>

        <div className="contact-info-row">
          <div className="contact-icon">♿</div>
          <div>
            <div className="contact-label">Accessibility</div>
            <div className="contact-val">Wheelchair Accessible Entrance &amp; Parking</div>
          </div>
        </div>
      </div>

      {/* Right - form */}
      <div ref={rRef} className={`contact-form reveal ${rv ? "visible" : ""}`}>
        <div className="form-title">Request a Quote</div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" placeholder="Full name" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="you@email.com" />
          </div>

          <div className="form-group">
            <label>Product Interest</label>
            <select name="product" required>
              <option value="">Select a product category</option>
              <option>Pillars</option>
              <option>Cornices</option>
              <option>Bases</option>
              <option>Capitals</option>
              <option>Jali</option>
              <option>Brackets</option>
              <option>Balusters</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Details</label>
            <textarea name="details" placeholder="Describe your project, dimensions, quantity, or any specific requirements..." />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : submitted ? "✓ Enquiry Sent!" : "Send Enquiry →"}
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

          {error && (
            <p style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.88rem",
              color: "#ff6b6b",
              textAlign: "center",
              marginTop: "1rem",
            }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
