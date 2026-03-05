"use client";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { productOptions } from "../data/contactData";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { ref: formRef, visible: formV } = useReveal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      location: formData.get("location"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      timeline: formData.get("timeline"),
      details: formData.get("details"),
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
      setError("Failed to send enquiry. Please call us directly.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={formRef} className={`reveal ${formV ? "visible" : ""}`}>
      <div className="form-title">Request a Quote</div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name *</label>
            <input type="text" name="name" placeholder="Full name" required />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="you@email.com" />
        </div>

        <div className="form-group">
          <label>Your Location / City</label>
          <input type="text" name="location" placeholder="e.g. Bhubaneswar, Delhi, Mumbai" />
        </div>

        <div className="form-group">
          <label>Product Interest *</label>
          <select name="product" required>
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
            <input type="text" name="quantity" placeholder="e.g. 20 panels" />
          </div>
          <div className="form-group">
            <label>Project Timeline</label>
            <input type="text" name="timeline" placeholder="e.g. 2 months" />
          </div>
        </div>

        <div className="form-group">
          <label>Project Details</label>
          <textarea name="details" placeholder="Describe your project, dimensions, design references, or any specific requirements..." />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending..." : submitted ? "✓ Enquiry Sent Successfully!" : "Send Enquiry →"}
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
  );
}
