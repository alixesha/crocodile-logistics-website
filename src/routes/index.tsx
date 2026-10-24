import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const PHONE = "+15013513623";

export const Route = createFileRoute("/")({
component: HomePage,
});

function HomePage() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => setMenuOpen(false);

return (
<main className="cl-site">
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

  <section className="cl-hero">
    <div className="cl-hero-image" />
    <div className="cl-hero-shade" />

    <div className="cl-container cl-hero-content">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        BUILT ON RELIABILITY. DRIVEN BY RESULTS.
      </div>

      <h1>
        WE MOVE
        <br />
        <span className="cl-lime">WHAT</span> MOVES
        <br />
        <span className="cl-outline-text">YOU FORWARD.</span>
      </h1>

      <p className="cl-hero-description">
        Dependable trucking, hauling, and construction logistics support
        to help keep your operation moving. Professional service.
        Straightforward communication. A team focused on your next move.
      </p>

      <div className="cl-hero-actions">
        <Link to="/services" className="cl-button cl-button-lime">
          EXPLORE OUR SERVICES <span>↗</span>
        </Link>
        <Link to="/contact" className="cl-button cl-button-outline">
          REQUEST INFORMATION <span>→</span>
        </Link>
      </div>
    </div>

    <div className="cl-hero-bottom">
      <span><i /> SERVING ARKANSAS, USA</span>
      <a href={`tel:${PHONE}`}>CALL {PHONE.replace("+1", "")}</a>
      <span>DEPENDABLE BY DESIGN ↘</span>
    </div>

    <div className="cl-hero-side-label">
      TRUCKING · HAULING · LOGISTICS
    </div>
  </section>

  <section className="cl-trust-strip">
    <div className="cl-container cl-trust-grid">
      <div>
        <strong>01</strong>
        <span>DEPENDABLE<br />SERVICE</span>
      </div>
      <div>
        <strong>02</strong>
        <span>PROJECT-FOCUSED<br />SUPPORT</span>
      </div>
      <div>
        <strong>03</strong>
        <span>DIRECT<br />COMMUNICATION</span>
      </div>
      <div>
        <strong>04</strong>
        <span>ARKANSAS<br />BASED</span>
      </div>
    </div>
  </section>

  <section className="cl-section cl-about">
    <div className="cl-container cl-about-grid">
      <div className="cl-about-visual">
        <div className="cl-about-image" />
        <div className="cl-image-stamp">
          <span>CL</span>
          <small>LOGISTICS<br />IN MOTION</small>
        </div>
        <div className="cl-image-caption">
          CROCODILE LOGISTICS, LLLC · ARKANSAS
        </div>
      </div>

      <div className="cl-about-copy">
        <div className="cl-eyebrow">
          <span className="cl-eyebrow-line" />
          WHO WE ARE
        </div>
        <h2>
          MORE THAN
          <br />
          <span className="cl-lime">GETTING</span>
          <br />
          THERE.
        </h2>
        <p>
          Logistics is about more than moving from one place to another.
          It is about dependable service, clear communication, and
          understanding what your project needs.
        </p>
        <p>
          Crocodile Logistics, LLLC provides trucking, hauling, and
          construction logistics support in Arkansas. Our focus is to
          help customers move projects forward with practical,
          professional service.
        </p>
        <Link to="/about" className="cl-text-link">
          GET TO KNOW US <span>↗</span>
        </Link>

        <div className="cl-signature">
          <div className="cl-signature-line" />
          <div>
            <strong>James Reddick</strong>
            <span>OWNER · CROCODILE LOGISTICS, LLLC</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="cl-section cl-services">
    <div className="cl-container">
      <div className="cl-section-heading">
        <div>
          <div className="cl-eyebrow">
            <span className="cl-eyebrow-line" />
            WHAT WE DO
          </div>
          <h2>
            BUILT FOR THE
            <br />
            <span className="cl-lime">HEAVY LIFT.</span>
          </h2>
        </div>
        <p>
          Practical logistics services designed around your operation,
          your project, and the work that needs to get done.
        </p>
      </div>

      <div className="cl-service-grid">
        <article className="cl-service-card">
          <div className="cl-service-card-top">
            <span>SERVICE 01</span>
            <span className="cl-service-icon">↗</span>
          </div>
          <div className="cl-service-visual">
            <div className="cl-service-art">
              TRUCKING <span>01</span>
            </div>
          </div>
          <h3>TRUCKING SERVICES</h3>
          <p>
            Dependable trucking support for business and project
            transportation needs.
          </p>
          <Link to="/services" className="cl-card-link">
            EXPLORE SERVICE <span>↗</span>
          </Link>
        </article>

        <article className="cl-service-card">
          <div className="cl-service-card-top">
            <span>SERVICE 02</span>
            <span className="cl-service-icon">↗</span>
          </div>
          <div className="cl-service-visual">
            <div className="cl-service-art">
              HAULING <span>02</span>
            </div>
          </div>
          <h3>HAULING SERVICES</h3>
          <p>
            Hauling support focused on your requirements, site
            conditions, and project schedule.
          </p>
          <Link to="/services" className="cl-card-link">
            EXPLORE SERVICE <span>↗</span>
          </Link>
        </article>

        <article className="cl-service-card">
          <div className="cl-service-card-top">
            <span>SERVICE 03</span>
            <span className="cl-service-icon">↗</span>
          </div>
          <div className="cl-service-visual">
            <div className="cl-service-art">
              CONSTRUCTION <span>03</span>
            </div>
          </div>
          <h3>CONSTRUCTION LOGISTICS</h3>
          <p>
            Logistics support to help construction projects coordinate
            material movement and transportation needs.
          </p>
          <Link to="/services" className="cl-card-link">
            EXPLORE SERVICE <span>↗</span>
          </Link>
        </article>
      </div>

      <p className="cl-services-note">
        Have a specific requirement?{" "}
        <Link to="/contact">Talk to our team about your project.</Link>
      </p>
    </div>
  </section>

  <section className="cl-statement">
    <div className="cl-statement-image" />
    <div className="cl-statement-overlay" />
    <div className="cl-container cl-statement-content">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        YOUR PROJECT. OUR FOCUS.
      </div>
      <h2>
        THE WORK
        <br />
        DOESN'T
        <br />
        <span className="cl-lime">MOVE ITSELF.</span>
      </h2>
      <p>
        When your project needs trucking, hauling, or logistics support,
        start with a conversation about what needs to move.
      </p>
      <Link to="/contact" className="cl-button cl-button-lime">
        LET'S TALK LOGISTICS <span>↗</span>
      </Link>
    </div>
  </section>

  <section className="cl-section cl-process">
    <div className="cl-container">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        A STRAIGHTFORWARD APPROACH
      </div>
      <div className="cl-process-heading">
        <h2>
          SIMPLE STEPS.
          <br />
          <span className="cl-lime">CLEAR DIRECTION.</span>
        </h2>
      </div>

      <div className="cl-process-grid">
        <article className="cl-process-item">
          <span>01</span>
          <div>
            <h3>LET'S TALK</h3>
            <p>
              Tell us about your project, location, and the type of
              support you are looking for.
            </p>
          </div>
        </article>
        <article className="cl-process-item">
          <span>02</span>
          <div>
            <h3>DISCUSS THE PLAN</h3>
            <p>
              We discuss your requirements and the next steps for your
              trucking or hauling request.
            </p>
          </div>
        </article>
        <article className="cl-process-item">
          <span>03</span>
          <div>
            <h3>MOVE FORWARD</h3>
            <p>
              Once the details are agreed, move ahead with a clear
              understanding of the planned service.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section className="cl-contact">
    <div className="cl-container cl-contact-grid">
      <div className="cl-contact-copy">
        <div className="cl-eyebrow">
          <span className="cl-eyebrow-line" />
          LET'S GET TO WORK
        </div>
        <h2>
          HAVE A
          <br />
          PROJECT?
          <br />
          <span className="cl-lime">LET'S TALK.</span>
        </h2>
        <p>
          Tell us what you need moved, hauled, or coordinated. Contact
          Crocodile Logistics to discuss your project and next steps.
        </p>

        <a className="cl-contact-phone" href={`tel:${PHONE}`}>
          <span className="cl-contact-phone-icon">☎</span>
          <span>
            <small>CALL OUR TEAM</small>
            <strong>501-351-3623</strong>
          </span>
        </a>

        <div className="cl-contact-detail">
          <span>⌖</span>
          <div>
            <strong>LOCATION</strong>
            <p>Arkansas, USA</p>
          </div>
        </div>
        <div className="cl-contact-detail">
          <span>◷</span>
          <div>
            <strong>BUSINESS HOURS</strong>
            <p>Monday–Saturday: 8:00 AM–5:00 PM<br />Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="cl-contact-form">
        <div className="cl-form-heading">
          <span>GET IN TOUCH</span>
          <span>INQUIRY · 01</span>
        </div>
        <p>
          Ready to discuss your logistics needs? Send us a message
          and tell us how we can help.
        </p>
        <Link to="/contact" className="cl-button cl-button-lime">
          CONTACT OUR TEAM <span>↗</span>
        </Link>
        <p style={{ marginTop: 20, color: "#a4a79d", fontSize: 12 }}>
          For direct assistance, call{" "}
          <a href={`tel:${PHONE}`} style={{ color: "#c4f04d" }}>
            501-351-3623
          </a>
          .
        </p>
      </div>
    </div>
  </section>

  <footer className="cl-footer">
    <div className="cl-container cl-footer-main">
      <div className="cl-footer-brand">
        <Link to="/" className="cl-brand">
          <span className="cl-logo-mark">
            <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M8 9H40V17H18V23H36V31H18V39H8V9Z" fill="currentColor" />
            </svg>
          </span>
          <span className="cl-brand-copy">
            <strong>CROCODILE</strong>
            <small>LOGISTICS, LLLC</small>
          </span>
        </Link>
        <p>
          Trucking, hauling, and construction logistics support in
          Arkansas. Professional service focused on moving your
          project forward.
        </p>
      </div>

      <div className="cl-footer-links">
        <strong>EXPLORE</strong>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="cl-footer-links">
        <strong>CONTACT</strong>
        <a href={`tel:${PHONE}`}>501-351-3623</a>
        <span>Arkansas, USA</span>
        <span>Mon–Sat · 8 AM–5 PM</span>
        <span>Sunday · Closed</span>
      </div>
    </div>

    <div className="cl-container cl-footer-bottom">
      <span>© {new Date().getFullYear()} Crocodile Logistics, LLLC.</span>
      <span>DEPENDABLE BY DESIGN.</span>
    </div>
  </footer>
</main>

);
  }
