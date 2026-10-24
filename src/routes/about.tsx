import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
head: () => ({
meta: [
{ title: "About Us | Crocodile Logistics, LLLC" },
{
name: "description",
content:
"Learn about Crocodile Logistics, LLLC, providing trucking, hauling, and construction logistics support in Arkansas.",
},
],
}),
component: AboutPage,
});

const PHONE = "501-351-3623";
const PHONE_LINK = "tel:+15013513623";

function AboutPage() {
return (
<main className="cl-site">
<div className="cl-topbar">
<div className="cl-container cl-topbar-inner">
<span>RELIABLE SERVICE. REAL-WORLD SOLUTIONS.</span>
<span>ARKANSAS · UNITED STATES</span>
</div>
</div>

  <header className="cl-header">
    <div className="cl-container cl-nav">
      <Link to="/" className="cl-brand" aria-label="Crocodile Logistics home">
        <span className="cl-logo-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none">
            <path
              d="M8 22 24 8h25l7 9-9 8H28l-8 9H8l7-8-7-4Z"
              fill="currentColor"
            />
            <path
              d="m13 40 10-8h24l8 7-8 8H27l-8 8H8l7-8-2-7Z"
              fill="currentColor"
              opacity=".65"
            />
          </svg>
        </span>
        <span className="cl-brand-copy">
          <strong>CROCODILE</strong>
          <small>LOGISTICS, LLLC</small>
        </span>
      </Link>

      <nav className="cl-links">
        <Link to="/">HOME</Link>
        <Link to="/about" className="cl-lime">ABOUT US</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/industries">INDUSTRIES</Link>
        <Link to="/contact">CONTACT</Link>
        <a className="cl-nav-call" href={PHONE_LINK}>
          CALL NOW <span>↗</span>
        </a>
      </nav>
    </div>
  </header>

  <section className="cl-hero">
    <div className="cl-hero-image" />
    <div className="cl-hero-shade" />
    <div className="cl-container cl-hero-content">
      <div className="cl-eyebrow cl-hero-eyebrow">
        <span className="cl-eyebrow-line" />
        ABOUT CROCODILE LOGISTICS
      </div>

      <h1>
        BUILT ON
        <br />
        <span className="cl-lime">RELIABILITY.</span>
        <br />
        DRIVEN BY
        <br />
        <span className="cl-outline-text">SERVICE.</span>
      </h1>

      <p className="cl-hero-description">
        We focus on practical transportation, hauling, and construction
        logistics support for businesses that need to keep moving.
      </p>

      <div className="cl-hero-actions">
        <Link to="/services" className="cl-button cl-button-lime">
          EXPLORE OUR SERVICES <span>↗</span>
        </Link>
        <a href={PHONE_LINK} className="cl-button cl-button-outline">
          CALL {PHONE}
        </a>
      </div>
    </div>
  </section>

  <section className="cl-section cl-about">
    <div className="cl-container cl-about-grid">
      <div className="cl-about-visual">
        <div className="cl-about-image" />
        <div className="cl-image-stamp">
          <span>CL</span>
          <small>READY FOR<br />THE ROAD</small>
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
          MOVING <span className="cl-lime">MATERIAL.</span>
        </h2>

        <p>
          Crocodile Logistics, LLLC provides trucking, hauling, and
          construction logistics support. We understand that reliable
          coordination and clear communication matter when businesses
          are planning deliveries and managing projects.
        </p>

        <p>
          Based in Arkansas, our focus is to understand each customer's
          requirements, discuss the details, and identify a practical
          way forward.
        </p>

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
            WHAT MATTERS TO US
          </div>
          <h2>
            A PRACTICAL
            <br />
            APPROACH TO <span className="cl-lime">LOGISTICS.</span>
          </h2>
        </div>
        <p>
          Every project has its own requirements. We start by listening,
          discussing the details, and understanding what support is needed.
        </p>
      </div>

      <div className="cl-service-grid">
        <article className="cl-service-card">
          <div className="cl-service-card-top">
            <span>01 / OUR VALUE</span>
            <span className="cl-service-icon">↗</span>
          </div>
          <h3>DEPENDABILITY</h3>
          <p>
            Clear communication and a serious approach to understanding
            your transportation and hauling needs.
          </p>
        </article>

        <article className="cl-service-card">
          <div className="cl-service-card-top">
            <span>02 / OUR VALUE</span>
            <span className="cl-service-icon">⇢</span>
          </div>
          <h3>PRACTICAL SOLUTIONS</h3>
          <p>
            A straightforward conversation about your requirements,
            project details, and possible next steps.
          </p>
        </article>

        <article className="cl-service-card">
          <div className="cl-service-card-top">
            <span>03 / OUR VALUE</span>
            <span className="cl-service-icon">⌁</span>
          </div>
          <h3>PERSONAL SERVICE</h3>
          <p>
            Direct contact to discuss your needs instead of making the
            process more complicated than it needs to be.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className="cl-statement">
    <div className="cl-statement-image" />
    <div className="cl-statement-overlay" />
    <div className="cl-container cl-statement-content">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        LET'S TALK
      </div>
      <h2>
        HAVE A PROJECT?
        <br />
        LET'S GET <span className="cl-lime">MOVING.</span>
      </h2>
      <p>
        Contact Crocodile Logistics to discuss your trucking, hauling,
        or construction logistics requirements.
      </p>
      <Link to="/contact" className="cl-button cl-button-lime">
        CONTACT OUR TEAM <span>↗</span>
      </Link>
    </div>
  </section>

  <footer className="cl-footer">
    <div className="cl-container">
      <div className="cl-footer-main">
        <Link to="/" className="cl-brand cl-footer-brand">
          <span className="cl-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <path
                d="M8 22 24 8h25l7 9-9 8H28l-8 9H8l7-8-7-4Z"
                fill="currentColor"
              />
              <path
                d="m13 40 10-8h24l8 7-8 8H27l-8 8H8l7-8-2-7Z"
                fill="currentColor"
                opacity=".65"
              />
            </svg>
          </span>
          <span className="cl-brand-copy">
            <strong>CROCODILE</strong>
            <small>LOGISTICS, LLLC</small>
          </span>
        </Link>

        <p>RELIABLE SERVICE.<br />REAL-WORLD SOLUTIONS.</p>
        <a href={PHONE_LINK} className="cl-footer-call">
          {PHONE} ↗
        </a>
      </div>

      <div className="cl-footer-bottom">
        <span>
          © {new Date().getFullYear()} Crocodile Logistics, LLLC.
          All rights reserved.
        </span>
        <span>ARKANSAS, UNITED STATES</span>
        <Link to="/">BACK HOME ↑</Link>
      </div>
    </div>
  </footer>
</main>

);
          }
