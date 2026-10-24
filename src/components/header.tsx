import { Link } from "@tanstack/react-router";
import { useState } from "react";

const PHONE = "+15013513623";

export function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

return (
<>
<div className="cl-topbar">
<div className="cl-container cl-topbar-inner">
<span>ARKANSAS, USA · TRUCKING & LOGISTICS</span>
<span className="cl-top-hours">
<i className="cl-status-dot" />
MON–SAT · 8:00 AM–5:00 PM
</span>
</div>
</div>

  <header className="cl-header">
    <div className="cl-container cl-nav">
      <Link to="/" className="cl-brand" onClick={closeMenu}>
        <span className="cl-logo-mark">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path
              d="M8 9H40V17H18V23H36V31H18V39H8V9Z"
              fill="currentColor"
            />
            <path
              d="M23 17L40 24L23 31"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </span>

        <span className="cl-brand-copy">
          <strong>CROCODILE</strong>
          <small>LOGISTICS, LLLC</small>
        </span>
      </Link>

      <button
        className="cl-menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <nav className={`cl-links ${menuOpen ? "cl-links-open" : ""}`}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
        <Link to="/services" onClick={closeMenu}>SERVICES</Link>
        <Link to="/industries" onClick={closeMenu}>INDUSTRIES</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>

        <a className="cl-nav-call" href={`tel:${PHONE}`}>
          CALL NOW <span>↗</span>
        </a>
      </nav>
    </div>
  </header>
</>

);
}
