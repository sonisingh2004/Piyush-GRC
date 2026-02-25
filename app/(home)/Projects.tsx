"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function Projects() {
  const { ref: hRef, visible: hv } = useReveal();
  const { ref: gRef, visible: gv } = useReveal();

  return (
    <section id="projects">
      <div ref={hRef} className={`section-header reveal ${hv ? "visible" : ""}`}>
        <div className="section-eye">Our Work</div>
        <h2 className="section-title">Completed Projects</h2>
        <p className="section-sub">
          Structures elevated into landmarks through the art of GRC craftsmanship.
        </p>
      </div>

      <div ref={gRef} className={`projects-showcase reveal ${gv ? "visible" : ""}`}>
        <div className="project-item">
          <Image
            src="/img3.jpeg"
            alt="img"
            width={800}
            height={350}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
          <div className="project-info">
            <h3>name</h3>
            {/* <p>Heritage-Inspired Facade · Odisha</p> */}
            <p>Address</p>
          </div>
        </div>
        <div className="project-item">
          <Image
            src="/img4.jpeg"
            alt="img"
            width={800}
            height={350}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
          <div className="project-info">
            <h3>Name</h3>
            <p>Address</p>
          </div>
        </div>
        <div className="project-item">
          <Image
            src="/img6.jpeg"
            alt="img"
            width={800}
            height={350}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
          <div className="project-info">
            <h3>Name</h3>
            <p>Address</p>
          </div>
        </div>
        <div className="project-item">
          <Image
            src="/img5.jpeg"
            alt="img"
            width={800}
            height={350}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
          <div className="project-info">
            <h3>Name</h3>
            <p>Address</p>
          </div>
        </div>
      </div>
    </section>
  );
}
