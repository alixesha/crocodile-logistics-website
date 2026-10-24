import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

const PHONE = "501-351-3623";
const PHONE_LINK = "+15013513623";

export const Route = createFileRoute("/contact")({
head: () => ({
meta: [
{ title: "Contact Us | Crocodile Logistics, LLLC" },
{
name: "description",
content:
"Contact Crocodile Logistics, LLLC for trucking, hauling, and construction logistics support in Arkansas.",
},
],
}),
component: ContactPage,
});

function ContactPage() {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [service, setService] = useState("Trucking");
const [message, setMessage] = useState("");

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();

const text = [
  "Hello Crocodile Logistics, LLLC!",
  "",
  `Name: ${name}`,
  `Phone: ${phone}`,
  `Service: ${service}`,
  `Message: ${message || "I'd like more information."}`,
].join("\n");

window.location.href = `sms:${PHONE_LINK}?body=${encodeURIComponent(text)}`;

}

return (
<main className="cl-page">
<header className="cl-header">
<div className="cl-header-inner">
<Link to="/" className="cl-brand">
<span className="cl-brand-mark">C</span>
<span className="cl-brand-text">
<strong>CROCODILE</strong>
<small>LOGISTICS, LLLC</small>
</span>
</Link>

      <nav className="cl-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/contact" className="cl-nav-cta">
          Contact
        </Link>
      </nav>

      <a className="cl-header-phone" href={`tel:${PHONE_LINK}`}>
        Call {PHONE}
      </a>
    </div>
  </header>

  <section className="cl-page-hero">
    <div className="cl-container">
      <span className="cl-eyebrow">LET'S GET MOVING</span>
      <h1>
        Let's Talk <span>Logistics.</span>
      </h1>
      <p>
        Have a hauling request, a trucking project, or a logistics question?
        Get in touch with our team to discuss what you need.
      </p>
      <div className="cl-hero-actions">
        <a className="cl-btn cl-btn-primary" href={`tel:${PHONE_LINK}`}>
          Call {PHONE}
        </a>
        <a className="cl-btn cl-btn-outline" href="#contact-form">
          Send an Inquiry
        </a>
      </div>
    </div>
  </section>

  <section className="cl-section">
    <div className="cl-container cl-contact-layout">
      <div className="cl-contact-info">
        <span className="cl-eyebrow">CONTACT INFORMATION</span>
        <h2>Reliable service starts with a conversation.</h2>
        <p>
          Tell us about your project and the service you need. We'll be
          ready to discuss the next steps with you.
        </p>

        <div className="cl-contact-detail">
          <span className="cl-contact-icon">☎</span>
          <div>
            <strong>Phone</strong>
            <a href={`tel:${PHONE_LINK}`}>{PHONE}</a>
          </div>
        </div>

        <div className="cl-contact-detail">
          <span className="cl-contact-icon">⌖</span>
          <div>
            <strong>Service Area</strong>
            <span>Arkansas, USA</span>
          </div>
        </div>

        <div className="cl-contact-detail">
          <span className="cl-contact-icon">◷</span>
          <div>
            <strong>Business Hours</strong>
            <span>Monday–Saturday: 8:00 AM–5:00 PM</span>
            <span>Sunday: Closed</span>
          </div>
        </div>

        <div className="cl-contact-note">
          <strong>Need to speak with us directly?</strong>
          <p>Call during business hours to discuss your logistics needs.</p>
          <a href={`tel:${PHONE_LINK}`}>Call our team →</a>
        </div>
      </div>

      <div className="cl-contact-form-wrap" id="contact-form">
        <span className="cl-eyebrow">SEND AN INQUIRY</span>
        <h2>Tell us about your project.</h2>
        <p>
          Complete the form below to prepare a message on your phone.
        </p>

        <form className="cl-contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Full Name *</label>
          <input
            id="contact-name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your full name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-phone">Phone Number *</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Your best contact number"
            autoComplete="tel"
            required
          />

          <label htmlFor="contact-service">Service Needed *</label>
          <select
            id="contact-service"
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required
          >
            <option value="Trucking">Trucking</option>
            <option value="Hauling">Hauling</option>
            <option value="Construction Logistics Support">
              Construction Logistics Support
            </option>
            <option value="General Inquiry">General Inquiry</option>
          </select>

          <label htmlFor="contact-message">Project Details</label>
          <textarea
            id="contact-message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us about your project, location, or requirements..."
            rows={5}
          />

          <button className="cl-btn cl-btn-primary" type="submit">
            Prepare Message →
          </button>

          <small>
            This form opens your phone's messaging app with your details
            filled in. Review and send the message to complete your inquiry.
          </small>
        </form>
      </div>
    </div>
  </section>

  <section className="cl-statement">
    <div className="cl-container cl-statement-inner">
      <div>
        <span className="cl-eyebrow">CROCODILE LOGISTICS, LLLC</span>
        <h2>Let's move your project forward.</h2>
      </div>
      <a className="cl-btn cl-btn-primary" href={`tel:${PHONE_LINK}`}>
        Call Us Today
      </a>
    </div>
  </section>

  <footer className="cl-footer">
    <div className="cl-container cl-footer-main">
      <div className="cl-footer-brand">
        <Link to="/" className="cl-brand">
          <span className="cl-brand-mark">C</span>
          <span className="cl-brand-text">
            <strong>CROCODILE</strong>
            <small>LOGISTICS, LLLC</small>
          </span>
        </Link>
        <p>
          Dependable trucking, hauling, and construction logistics support
          across Arkansas.
        </p>
      </div>

      <div className="cl-footer-links">
        <strong>Explore</strong>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="cl-footer-links">
        <strong>Get in Touch</strong>
        <a href={`tel:${PHONE_LINK}`}>{PHONE}</a>
        <span>Arkansas, USA</span>
        <span>Mon–Sat · 8 AM–5 PM</span>
      </div>
    </div>

    <div className="cl-container cl-footer-bottom">
      <span>© {new Date().getFullYear()} Crocodile Logistics, LLLC.</span>
      <span>Built for dependable logistics.</span>
    </div>
  </footer>
</main>

);
}
