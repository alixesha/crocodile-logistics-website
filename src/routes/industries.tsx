import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/industries")({
head: () => ({
meta: [
{ title: "Industries | Crocodile Logistics, LLLC" },
{
name: "description",
content:
"Explore trucking, hauling, and construction logistics support for business and project requirements in Arkansas.",
},
],
}),
component: IndustriesPage,
});

const PHONE = "501-351-3623";
const PHONE_LINK = "tel:+15013513623";

const industries = [
{
number: "01",
title: "Construction",
tag: "PROJECT LOGISTICS",
icon: "⌁",
description:
"Transportation and hauling support for construction-related projects, based on site needs, materials, locations, and schedules.",
},
{
number: "02",
title: "Transportation",
tag: "TRUCKING SUPPORT",
icon: "↗",
description:
"Trucking support for businesses looking to discuss load requirements, destinations, timing, and transportation coordination.",
},
{
number: "03",
title: "Material Movement",
tag: "HAULING REQUIREMENTS",
icon: "⇢",
description:
"Practical conversations about moving materials, planning pickup and delivery details, and understanding project requirements.",
},
{
number: "04",
title: "Business Operations",
tag: "LOGISTICS COORDINATION",
icon: "＋",
description:
"Logistics discussions for businesses that need transportation or hauling support to help organize their day-to-day operations.",
},
];

function IndustriesPage() {
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
        <Link to="/about">ABOUT US</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/industries" className="cl-lime">INDUSTRIES</Link>
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
        INDUSTRIES · ARKANSAS
      </div>

      <h1>
        SUPPORTING
        <br />
        THE WORK
        <br />
        THAT <span className="cl-lime">MOVES</span>
        <br />
        <span className="cl-outline-text">BUSINESS.</span>
      </h1>

      <p className="cl-hero-description">
        Different projects bring different challenges. We discuss your
        transportation, hauling, and logistics requirements to understand
        what support may be appropriate.
      </p>

      <div className="cl-hero-actions">
        <Link to="/contact" className="cl-button cl-button-lime">
          DISCUSS YOUR NEEDS <span>↗</span>
        </Link>
        <a href={PHONE_LINK} className="cl-button cl-button-outline">
          CALL {PHONE}
        </a>
      </div>
    </div>
  </section>

  <section className="cl-section cl-services">
    <div className="cl-container">
      <div className="cl-section-heading">
        <div>
          <div className="cl-eyebrow">
            <span className="cl-eyebrow-line" />
            WHO WE SUPPORT
          </div>
          <h2>
            LOGISTICS FOR
            <br />
            REAL-WORLD <span className="cl-lime">WORK.</span>
          </h2>
        </div>
        <p>
          We focus on understanding the requirements of each request.
          Contact us to discuss your industry, load, location, and project
          needs.
        </p>
      </div>

      <div className="cl-service-grid">
        {industries.map((industry) => (
          <article className="cl-service-card" key={industry.number}>
            <div className="cl-service-card-top">
              <span>{industry.number} / INDUSTRY</span>
              <span className="cl-service-icon">{industry.icon}</span>
            </div>

            <div className="cl-service-visual">
              <div
                className={`cl-service-art ${
                  industry.number === "01"
                    ? "cl-build-art"
                    : industry.number === "02"
                      ? "cl-truck-art"
                      : industry.number === "03"
                        ? "cl-haul-art"
                        : "cl-build-art"
                }`}
              >
                {industry.title.toUpperCase()}
                <span>{industry.icon}</span>
              </div>
            </div>

            <span className="cl-service-label">{industry.tag}</span>
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>

            <Link to="/contact" className="cl-card-link">
              DISCUSS YOUR PROJECT <span>↗</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="cl-section cl-process">
    <div className="cl-container">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        START WITH A CONVERSATION
      </div>

      <div className="cl-section-heading cl-process-heading">
        <h2>
          YOUR NEEDS.
          <br />
          CLEAR <span className="cl-lime">NEXT STEPS.</span>
        </h2>
        <p>
          Share the details with us so we can understand your request
          and discuss the next steps.
        </p>
      </div>

      <div className="cl-process-grid">
        <div className="cl-process-item">
          <span>01</span>
          <div>
            <h3>SHARE YOUR REQUIREMENTS</h3>
            <p>Describe your industry, project, load, and location.</p>
          </div>
        </div>
        <div className="cl-process-item">
          <span>02</span>
          <div>
            <h3>REVIEW THE DETAILS</h3>
            <p>Discuss timing and the type of support you are seeking.</p>
          </div>
        </div>
        <div className="cl-process-item">
          <span>03</span>
          <div>
            <h3>DISCUSS THE WAY FORWARD</h3>
            <p>Talk through the next steps for your specific request.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="cl-statement">
    <div className="cl-statement-image" />
    <div className="cl-statement-overlay" />
    <div className="cl-container cl-statement-content">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        CROCODILE LOGISTICS, LLLC
      </div>
      <h2>
        LET'S TALK
        <br />
        ABOUT WHAT
        <br />
        <span className="cl-lime">YOU NEED.</span>
      </h2>
      <p>
        Contact us to discuss trucking, hauling, or construction
        logistics support in Arkansas.
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
