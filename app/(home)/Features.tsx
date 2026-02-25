"use client";
import { useReveal } from "@/hooks/useReveal";

const features = [
  { icon: "🏗️", title: "Lightweight & Strong", text: "GRC is up to 75% lighter than traditional concrete with superior strength-to-weight ratio." },
  { icon: "🎨", title: "Custom Designs", text: "Every mold crafted to specification. From classical Mughal to modern minimalist." },
  { icon: "☀️", title: "Weather Resistant", text: "Engineered to withstand India's climate — heat, rain, and humidity for decades." },
  { icon: "🚚", title: "Pan-India Supply", text: "Manufacturing in Odisha, Bihar & Jharkhand. Delivery across all of India." },
];

export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section id="features" ref={ref}>
      {features.map((f) => (
        <div key={f.title} className={`feature-item reveal ${visible ? "visible" : ""}`}>
          <div className="feature-icon">{f.icon}</div>
          <div className="feature-title">{f.title}</div>
          <div className="feature-text">{f.text}</div>
        </div>
      ))}
    </section>
  );
}
