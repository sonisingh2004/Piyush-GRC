"use client";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const { ref: lRef, visible: lv } = useReveal();
  const { ref: rRef, visible: rv } = useReveal();

  const handleSubmit = () => {
    alert(
      "Thank you for your enquiry! Our team will contact you shortly.\n\nFor urgent queries, call: +91 78271 34265"
    );
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
              <a href="tel:+917827134265">+91 78271 34265</a>
            </div>
          </div>
        </div>

        <div className="contact-info-row">
          <div className="contact-icon">✉️</div>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-val">
              <a href="mailto:piyushkumars083@gmail.com">piyushkumars083@gmail.com</a>
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

        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Full name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="you@email.com" />
        </div>

        <div className="form-group">
          <label>Product Interest</label>
          <select>
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
          <textarea placeholder="Describe your project, dimensions, quantity, or any specific requirements..." />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Send Enquiry →
        </button>
      </div>
    </section>
  );
}
