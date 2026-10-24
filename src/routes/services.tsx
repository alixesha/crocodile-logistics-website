import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
head: () => ({
meta: [
{ title: "Our Services | Crocodile Logistics, LLLC" },
{
name: "description",
content:
"Explore trucking, hauling, and construction logistics support from Crocodile Logistics, LLLC in Arkansas.",
},
],
}),
component: ServicesPage,
});

const PHONE = "501-351-3623";
const PHONE_LINK = "tel:+15013513623";

const services = [
{
number: "01",
title: "Trucking",
label: "TRANSPORTATION SUPPORT",
icon: "↗",
description:
"Transportation support for businesses that need to move loads and coordinate their logistics requirements.",
details: [
"Discuss transportation requirements",
"Coordinate load and delivery details",
"Review project timelines and locations",
],
},
{
number: "02",
title: "Hauling",
label: "HAULING SOLUTIONS",
icon: "⇢",
description:
"Practical hauling support focused on understanding material movement needs and helping operations stay organized.",
details: [
"Discuss material and load requirements",
"Confirm pickup and destination details",
"Plan around project requirements",
],
},
{
number: "03",
title: "Construction Logistics",
label: "PROJECT SUPPORT",
icon: "⌁",
description:
"Logistics support for construction-related transportation and material movement requirements.",
details: [
"Discuss site and project needs",
"Review transportation coordination",
"Establish next steps for your request",
],
},
];

function ServicesPage() {
return (
<main className="cl-site">
<div className="cl-topbar">
<div className="cl-container cl-topbar-inner">
<span>RELIABLE SERVICE. REAL-WORLD SOLUTIONS.</span>
<span>MON–SAT · 8AM–5PM</span>
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
        <Link to="/services" className="cl-lime">SERVICES</Link>
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
        WHAT WE DO · ARKANSAS
      </div>

      <h1>
        PRACTICAL
        <br />
        LOGISTICS<span className="cl-lime">.</span>
        <br />
        BUILT TO
        <br />
        <span className="cl-outline-text">KEEP MOVING.</span>
      </h1>

      <p className="cl-hero-description">
        Trucking, hauling, and construction logistics support shaped
        around your requirements. Let's discuss what your project needs.
      </p>

      <div className="cl-hero-actions">
        <Link to="/contact" className="cl-button cl-button-lime">
          REQUEST INFORMATION <span>↗</span>
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
            OUR SERVICES
          </div>
          <h2>
            THE SUPPORT
            <br />
            YOUR PROJECT <span className="cl-lime">NEEDS.</span>
          </h2>
        </div>
        <p>
          Every job has different requirements. Contact us to discuss
          the load, location, schedule, and type of support you need.
        </p>
      </div>

      <div className="cl-service-grid">
        {services.map((service) => (
          <article className="cl-service-card" key={service.number}>
            <div className="cl-service-card-top">
              <span>{service.number} / SERVICE</span>
              <span className="cl-service-icon">{service.icon}</span>
            </div>

            <div className="cl-service-visual">
              <div
                className={`cl-service-art ${
                  service.number === "01"
                    ? "cl-truck-art"
                    : service.number === "02"
                      ? "cl-haul-art"
                      : "cl-build-art"
                }`}
              >
                {service.number === "01" && <>ROAD<br />READY</>}
                {service.number === "02" && <>BUILT<br />TO MOVE</>}
                {service.number === "03" && <>PROJECT<br />SUPPORT</>}
                <span>{service.icon}</span>
              </div>
            </div>

            <span className="cl-service-label">{service.label}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <ul className="cl-service-details">
              {service.details.map((detail) => (
                <li key={detail}>
                  <span aria-hidden="true">↗</span> {detail}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="cl-card-link">
              DISCUSS THIS SERVICE <span>↗</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section className="cl-statement">
    <div className="cl-statement-image" />
    <div className="cl-statement-overlay" />
    <div className="cl-container cl-statement-content">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        HAVE A REQUIREMENT?
      </div>
      <h2>
        LET'S TALK
        <br />
        ABOUT YOUR <span className="cl-lime">PROJECT.</span>
      </h2>
      <p>
        Tell us what you need moved, where it needs to go, and what
        your timeline looks like. We'll discuss the details with you.
      </p>
      <Link to="/contact" className="cl-button cl-button-lime">
        CONTACT CROCODILE LOGISTICS <span>↗</span>
      </Link>
    </div>
  </section>

  <section className="cl-section cl-process">
    <div className="cl-container">
      <div className="cl-eyebrow">
        <span className="cl-eyebrow-line" />
        HOW TO GET STARTED
      </div>
      <div className="cl-section-heading cl-process-heading">
        <h2>
          THREE STEPS.
          <br />
          ONE CLEAR <span className="cl-lime">PLAN.</span>
        </h2>
        <p>
          Start with a conversation so we can understand your
          requirements and discuss the appropriate next steps.
        </p>
      </div>

      <div className="cl-process-grid">
        <div className="cl-process-item">
          <span>01</span>
          <div>
            <h3>GET IN TOUCH</h3>
            <p>Tell us about your transportation or hauling needs.</p>
          </div>
        </div>
        <div className="cl-process-item">
          <span>02</span>
          <div>
            <h3>DISCUSS DETAILS</h3>
            <p>Review locations, requirements, and project timing.</p>
          </div>
        </div>
        <div className="cl-process-item">
          <span>03</span>
          <div>
            <h3>PLAN NEXT STEPS</h3>
            <p>Discuss the available options for your request.</p>
          </div>
        </div>
      </div>
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
