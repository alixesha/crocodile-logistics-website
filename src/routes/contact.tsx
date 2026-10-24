import { Header } from "../components/Header";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
component: ContactPage,
});

function ContactPage() {
const [submitted, setSubmitted] = useState(false);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();

const form = event.currentTarget;
const formData = new FormData(form);

const name = String(formData.get("name") || "");
const email = String(formData.get("email") || "");
const phone = String(formData.get("phone") || "");
const service = String(formData.get("service") || "");
const details = String(formData.get("details") || "");

const subject = encodeURIComponent(
  `Website Inquiry - ${service || "Logistics Services"}`
);

const body = encodeURIComponent(
  `Hello Crocodile Logistics,\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service Needed: ${service}\n\n` +
    `Project Details:\n${details}\n\n` +
    `Sent through the website contact form.`
);

setSubmitted(true);

window.location.href =
  `mailto:info@crocodilelogistics.com?subject=${subject}&body=${body}`;

}

return (
  <>
    <Header />
    <main className="cl-page">
<section className="cl-page-hero">
<div className="cl-container">
<span className="cl-eyebrow">CONTACT CROCODILE LOGISTICS</span>

      <h1>
        LET'S GET
        <br />
        <span>YOUR LOAD MOVING.</span>
      </h1>

      <p>
        Have a transportation, hauling, or construction logistics
        requirement? Tell us about your project. Our team is ready
        to discuss your needs and possible next steps.
      </p>

      <div className="cl-hero-actions" style={{ marginTop: 30 }}>
        <a href="tel:5013513623" className="cl-button cl-button-primary">
          CALL 501-351-3623
        </a>

        <a
          href="sms:5013513623"
          className="cl-button cl-button-outline"
        >
          SEND A TEXT
        </a>
      </div>
    </div>
  </section>

  <section className="cl-page-content">
    <div className="cl-container cl-contact-layout">
      <div>
        <span className="cl-eyebrow">GET IN TOUCH</span>

        <div className="cl-page-copy">
          <h2>
            LET'S TALK
            <br />
            BUSINESS.
          </h2>

          <p>
            Share a few details about what you need. You can call
            directly or use the inquiry form to prepare an email
            with your project information.
          </p>
        </div>

        <div className="cl-contact-details">
          <div className="cl-contact-detail">
            <span>Phone</span>
            <h3>Call Our Team</h3>
            <a href="tel:5013513623">501-351-3623</a>
          </div>

          <div className="cl-contact-detail">
            <span>Location</span>
            <h3>Arkansas, USA</h3>
            <p>
              Serving transportation and logistics inquiries.
              Contact us to discuss your project location.
            </p>
          </div>

          <div className="cl-contact-detail">
            <span>Business Hours</span>
            <h3>Monday – Saturday</h3>
            <p>8:00 AM – 5:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="cl-contact-note">
          <h3>Have an urgent inquiry?</h3>
          <p>
            Call us at{" "}
            <a href="tel:5013513623">501-351-3623</a> to discuss
            your transportation or hauling requirements.
          </p>
        </div>
      </div>

      <div className="cl-contact-form-wrap">
        <h2>REQUEST INFORMATION</h2>

        <p>
          Complete the form to prepare an inquiry email with your
          contact details and project requirements.
        </p>

        <form className="cl-contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name *
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </label>

          <label>
            Email Address *
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              placeholder="Your contact number"
              autoComplete="tel"
            />
          </label>

          <label>
            Service Needed *
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Select a service
              </option>
              <option value="Trucking Services">
                Trucking Services
              </option>
              <option value="Hauling Solutions">
                Hauling Solutions
              </option>
              <option value="Construction Logistics">
                Construction Logistics
              </option>
              <option value="Freight Transportation">
                Freight Transportation
              </option>
              <option value="Other Inquiry">
                Other Inquiry
              </option>
            </select>
          </label>

          <label>
            Project Details *
            <textarea
              name="details"
              placeholder="Tell us about your load, locations, schedule, and requirements..."
              required
            />
          </label>

          <button type="submit">
            PREPARE INQUIRY EMAIL ↗
          </button>

          {submitted && (
            <p role="status">
              Your email application should open now. If it doesn't,
              call 501-351-3623 directly.
            </p>
          )}

          <small>
            This form opens your device's email application. It does
            not send or store information directly on this website.
          </small>
        </form>
      </div>
    </div>
  </section>

  <section className="cl-final-cta">
    <div className="cl-container cl-final-cta-inner">
      <div>
        <span className="cl-eyebrow">CROCODILE LOGISTICS, LLLC</span>

        <h2>
          READY TO MOVE
          <br />
          <span>FORWARD?</span>
        </h2>
      </div>

      <Link to="/services" className="cl-button cl-button-primary">
        EXPLORE SERVICES
      </Link>
    </div>
  </section>
    </main>
  </>
  );
}
