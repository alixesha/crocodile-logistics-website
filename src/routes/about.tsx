import { Header } from "../components/header";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
component: AboutPage,
});

function AboutPage() {
return (
  <>
    <Header />
    <main className="cl-page">
<section className="cl-page-hero">
<div className="cl-container">
<span className="cl-eyebrow">
ABOUT CROCODILE LOGISTICS
</span>

      <h1>
        BUILT ON TRUST.
        <br />
        <span>DRIVEN BY PURPOSE.</span>
      </h1>

      <p>
        Reliable transportation and logistics support for businesses
        that need dependable service, clear communication, and a team
        that takes every load seriously.
      </p>

      <div className="cl-hero-actions" style={{ marginTop: 30 }}>
        <Link to="/services" className="cl-button cl-button-primary">
          EXPLORE OUR SERVICES
        </Link>

        <Link to="/contact" className="cl-button cl-button-outline">
          CONTACT OUR TEAM
        </Link>
      </div>
    </div>
  </section>

  <section className="cl-page-content">
    <div className="cl-container cl-page-grid">
      <div>
        <img
          src="https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1200&q=85"
          alt="Heavy-duty truck on the road"
          loading="lazy"
        />
      </div>

      <div className="cl-page-copy">
        <span className="cl-eyebrow">WHO WE ARE</span>

        <h2>
          LOGISTICS THAT
          <br />
          KEEPS YOU MOVING.
        </h2>

        <p>
          Crocodile Logistics, LLLC is focused on helping businesses
          move forward with practical transportation and hauling
          solutions. We understand that every delivery, project, and
          deadline matters.
        </p>

        <p>
          Our approach is straightforward: communicate clearly,
          work responsibly, and treat every customer and shipment
          with care. We aim to make logistics easier so you can
          concentrate on running your business.
        </p>

        <ul className="cl-page-list">
          <li>Dependable and professional service</li>
          <li>Clear communication throughout the process</li>
          <li>Flexible transportation and hauling support</li>
          <li>Customer-focused solutions for your needs</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="cl-section">
    <div className="cl-container">
      <div className="cl-section-heading">
        <div>
          <span className="cl-eyebrow">WHAT GUIDES US</span>
          <h2>
            THE STANDARD
            <br />
            <span>WE WORK BY.</span>
          </h2>
        </div>

        <p>
          We believe strong logistics starts with accountability,
          thoughtful planning, and respect for the people who rely
          on our service.
        </p>
      </div>

      <div className="cl-page-cards">
        <article className="cl-page-card">
          <span className="cl-card-number">01 / RELIABILITY</span>
          <h3>SHOW UP READY</h3>
          <p>
            We value dependable service, careful coordination,
            and keeping customers informed as plans move forward.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">02 / INTEGRITY</span>
          <h3>DO IT RIGHT</h3>
          <p>
            Honest communication and responsible work are central
            to building lasting business relationships.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">03 / PARTNERSHIP</span>
          <h3>MOVE FORWARD TOGETHER</h3>
          <p>
            We listen to customer requirements and work toward
            practical solutions that support their operations.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className="cl-final-cta">
    <div className="cl-container cl-final-cta-inner">
      <div>
        <span className="cl-eyebrow">LET'S GET MOVING</span>
        <h2>
          YOUR NEXT PROJECT
          <br />
          <span>STARTS HERE.</span>
        </h2>
      </div>

      <Link to="/contact" className="cl-button cl-button-primary">
        GET IN TOUCH
      </Link>
    </div>
  </section>
    </main>
  </>
  );
}
