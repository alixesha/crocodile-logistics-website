import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
component: Index,
});

const PHONE = "501-351-3623";
const PHONE_LINK = "tel:+15013513623";

const services = [
{
number: "01",
title: "Trucking",
description:
"Dependable trucking solutions built around your schedule, your cargo, and the demands of the road.",
icon: "↗",
},
{
number: "02",
title: "Hauling",
description:
"Reliable hauling support focused on moving materials efficiently and keeping your operation moving.",
icon: "⇢",
},
{
number: "03",
title: "Construction Logistics",
description:
"Practical transportation and logistics support to help construction projects stay organized and on track.",
icon: "⌁",
},
];

function Index() {
const [menuOpen, setMenuOpen] = useState(false);
const [form, setForm] = useState({
name: "",
phone: "",
service: "Trucking",
message: "",
});

function submitRequest(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();

const message = [
  "Hello Crocodile Logistics, I would like to request information.",
  "",
  `Name: ${form.name}`,
  `Phone: ${form.phone}`,
  `Service: ${form.service}`,
  `Details: ${form.message || "Please contact me to discuss."}`,
].join("\n");

window.location.href = `sms:+15013513623?body=${encodeURIComponent(message)}`;

}

return (
<main className="cl-site">
<div className="cl-topbar">
<div className="cl-container cl-topbar-inner">
<span>RELIABLE SERVICE. REAL-WORLD SOLUTIONS.</span>
<span className="cl-top-hours">
<span className="cl-status-dot" /> MON–SAT · 8AM–5PM
</span>
</div>
</div>

  <header className="cl-header">
    <div className="cl-container cl-nav">
      <a href="#home" className="cl-brand" aria-label="Crocodile Logistics home">
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
            <path d="M39 15h7M34 40h7" stroke="#10150D" strokeWidth="3" />
          </svg>
        </span>
        <span className="cl-brand-copy">
          <strong>CROCODILE</strong>
          <small>LOGISTICS, LLLC</small>
        </span>
      </a>

      <button
        type="button"
        className="cl-menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`cl-links ${menuOpen ? "cl-links-open" : ""}`}>
        
<Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
<Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
<Link to="/industries" onClick={() => setMenuOpen(false)}>INDUSTRIES</Link>
<Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        <a className="cl-nav-call" href={PHONE_LINK}>
          CALL NOW <span>↗</span>
        </a>
      </nav>
    </div>
  </header>

  <section className="cl-hero" id="home">
    <div className="cl-hero-image" />
    <div className="cl-hero-shade" />
    <div className="cl-container cl-hero-content">
      <div className="cl-eyebrow cl-hero-eyebrow">
        <span className="cl-eyebrow-line" />
        ARKANSAS · LOGISTICS & TRANSPORTATION
      </div>
      <h1>
        POWERING
        <br />
        THE ROAD<span className="cl-lime">.</span>
        <br />
        MOVING
        <br />
        <span className="cl-outline-text">INDUSTRY.</span>
      </h1>
      <p className="cl-hero-description">
        Transportation and hauling solutions that help businesses keep
        moving. Dependable service, practical support, and a team ready
        to get to work.
      </p>
      <div className="cl-hero-actions">
        <a href="#contact" className="cl-button cl-button-lime">
          DISCUSS YOUR PROJECT <span>↗</span>
        </a>
        <a href={PHONE_LINK} className="cl-button cl-button-outline">
          <span className="cl-phone-icon">↗</span> {PHONE}
        </a>
      </div>
      <div className="cl-hero-bottom">
        <span><i /> BUILT FOR THE LONG HAUL</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </div>
    </div>
    <div className="cl-hero-side-label">CROCODILE LOGISTICS · ARKANSAS</div>
  </section>

  <section className="cl-trust-strip">
    <div className="cl-container cl-trust-grid">
      <div><strong>01</strong><span>DEPENDABLE<br />TRANSPORTATION</span></div>
      <div><strong>02</strong><span>PRACTICAL<br />HAULING SOLUTIONS</span></div>
      <div><strong>03</strong><span>PROJECT-FOCUSED<br />LOGISTICS SUPPORT</span></div>
      <div><strong>04</strong><span>PERSONAL<br />SERVICE</span></div>
    </div>
  </section>

  <section className="cl-section cl-about" id="about">
    <div className="cl-container cl-about-grid">
      <div className="cl-about-visual">
        <div className="cl-about-image" />
        <div className="cl-image-stamp">
          <span>CL</span>
          <small>READY FOR<br />THE ROAD</small>
        </div>
        <div className="cl-image-caption">BUILT ON RELIABILITY. DRIVEN BY SERVICE.</div>
      </div>
      <div className="cl-about-copy">
        <div className="cl-eyebrow"><span className="cl-eyebrow-line" /> WHO WE ARE</div>
        <h2>MORE THAN<br />MOVING <span className="cl-lime">MATERIAL.</span></h2>
        <p>
          At Crocodile Logistics, we understand that every delivery,
          every load, and every project matters. Our focus is on providing
          reliable transportation and hauling support with straightforward
          communication and a commitment to service.
        </p>
        <p>
          Based in Arkansas, we work to make logistics simpler for the
          people and businesses that depend on getting the job done.
        </p>
        <a href="#services" className="cl-text-link">
          EXPLORE OUR SERVICES <span>↗</span>
        </a>
        <div className="cl-signature">
          <div className="cl-signature-line" />
          <div><strong>James Reddick</strong><span>OWNER · CROCODILE LOGISTICS, LLLC</span></div>
        </div>
      </div>
    </div>
  </section>

  <section className="cl-section cl-services" id="services">
    <div className="cl-container">
      <div className="cl-section-heading">
        <div>
          <div className="cl-eyebrow"><span className="cl-eyebrow-line" /> WHAT WE DO</div>
          <h2>LOGISTICS THAT<br />GETS <span className="cl-lime">IT DONE.</span></h2>
        </div>
        <p>
          Straightforward solutions for transportation, hauling, and
          construction logistics. Tell us what you need and let’s discuss
          how we can help.
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
              {service.number === "01" && <div className="cl-service-art cl-truck-art">ROAD<br />READY<span>↗</span></div>}
              {service.number === "02" && <div className="cl-service-art cl-haul-art">BUILT<br />TO MOVE<span>↗</span></div>}
              {service.number === "03" && <div className="cl-service-art cl-build-art">PROJECT<br />SUPPORT<span>↗</span></div>}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="cl-card-link">LET'S TALK <span>↗</span></a>
          </article>
        ))}
      </div>
      <p className="cl-services-note">
        Need something specific? <a href="#contact">Contact our team</a> to discuss your requirements.
      </p>
    </div>
  </section>

  <section className="cl-statement">
    <div className="cl-statement-image" />
    <div className="cl-statement-overlay" />
    <div className="cl-container cl-statement-content">
      <div className="cl-eyebrow"><span className="cl-eyebrow-line" /> OUR COMMITMENT</div>
      <h2>WHEN THE JOB<br />MATTERS, <span className="cl-lime">MOVE</span><br />WITH PURPOSE.</h2>
      <p>
        Clear communication. Dependable support. A practical approach
        to keeping your operation moving forward.
      </p>
      <a href="#contact" className="cl-button cl-button-lime">LET'S GET TO WORK <span>↗</span></a>
    </div>
  </section>

  <section className="cl-section cl-process" id="process">
    <div className="cl-container">
      <div className="cl-eyebrow"><span className="cl-eyebrow-line" /> A STRAIGHTFORWARD APPROACH</div>
      <div className="cl-section-heading cl-process-heading">
        <h2>FROM FIRST CALL<br />TO <span className="cl-lime">DONE.</span></h2>
        <p>No unnecessary complexity. Just a clear conversation about your needs and the next steps.</p>
      </div>
      <div className="cl-process-grid">
        <div className="cl-process-item"><span>01</span><div><h3>LET'S TALK</h3><p>Tell us about your load, timeline, location, or project requirements.</p></div></div>
        <div className="cl-process-item"><span>02</span><div><h3>PLAN THE DETAILS</h3><p>We’ll discuss the service you need and the details to move forward.</p></div></div>
        <div className="cl-process-item"><span>03</span><div><h3>GET MOVING</h3><p>Once details are confirmed, we’ll work toward the next step together.</p></div></div>
      </div>
    </div>
  </section>

  <section className="cl-contact" id="contact">
    <div className="cl-container cl-contact-grid">
      <div className="cl-contact-copy">
        <div className="cl-eyebrow"><span className="cl-eyebrow-line" /> GET IN TOUCH</div>
        <h2>LET'S MOVE<br />SOMETHING <span className="cl-lime">FORWARD.</span></h2>
        <p>
          Have a trucking, hauling, or construction logistics requirement?
          Reach out to discuss your project and how we may be able to help.
        </p>
        <a href={PHONE_LINK} className="cl-contact-phone">
          <span className="cl-contact-phone-icon">↗</span>
          <span><small>CALL US DIRECTLY</small><strong>{PHONE}</strong></span>
        </a>
        <div className="cl-contact-detail">
          <span>⌖</span><div><strong>LOCATION</strong><p>Arkansas, United States</p></div>
        </div>
        <div className="cl-contact-detail">
          <span>◷</span><div><strong>BUSINESS HOURS</strong><p>Monday – Saturday: 8:00 AM – 5:00 PM<br />Sunday: Closed</p></div>
        </div>
      </div>

      <form className="cl-contact-form" onSubmit={submitRequest}>
        <div className="cl-form-heading"><span>01 / YOUR PROJECT</span><span>LET'S CONNECT ↗</span></div>
        <label>
          YOUR NAME *
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
          />
        </label>
        <label>
          PHONE NUMBER *
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Best number to reach you"
          />
        </label>
        <label>
          SERVICE NEEDED
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option>Trucking</option>
            <option>Hauling</option>
            <option>Construction Logistics</option>
            <option>General Inquiry</option>
          </select>
        </label>
        <label>
          PROJECT DETAILS
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us a little about what you need..."
          />
        </label>
        <button className="cl-button cl-button-lime cl-submit" type="submit">
          SEND REQUEST BY TEXT <span>↗</span>
        </button>
        <p className="cl-form-note">This opens your messaging app with your request pre-filled.</p>
      </form>
    </div>
  </section>

  <footer className="cl-footer">
    <div className="cl-container">
      <div className="cl-footer-main">
        <a href="#home" className="cl-brand cl-footer-brand">
          <span className="cl-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M8 22 24 8h25l7 9-9 8H28l-8 9H8l7-8-7-4Z" fill="currentColor" />
              <path d="m13 40 10-8h24l8 7-8 8H27l-8 8H8l7-8-2-7Z" fill="currentColor" opacity=".65" />
            </svg>
          </span>
          <span className="cl-brand-copy"><strong>CROCODILE</strong><small>LOGISTICS, LLLC</small></span>
        </a>
        <p>RELIABLE SERVICE.<br />REAL-WORLD SOLUTIONS.</p>
        <a href={PHONE_LINK} className="cl-footer-call">{PHONE} ↗</a>
      </div>
      <div className="cl-footer-bottom">
        <span>© {new Date().getFullYear()} Crocodile Logistics, LLLC. All rights reserved.</span>
        <span>ARKANSAS, UNITED STATES</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </div>
  </footer>
</main>

);
    }
