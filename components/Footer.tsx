import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        PIYUSH <span>GRC</span>
      </div>
      <div className="footer-text">
        © 2025 Piyush GRC. All rights reserved.<br />
        <Link href="https://briskodetechnology.com/ " target="_blank">DESIGNED BY BRISKODE TECHNOLOGY PVT.LTD</Link>
      </div>
      <div className="footer-hours">
        <span>Open 24 Hours</span><br />
        +91 78271 34265<br />
        piyushkumars083@gmail.com
      </div>
    </footer>
  );
}
