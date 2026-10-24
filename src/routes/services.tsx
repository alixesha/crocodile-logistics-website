import { Header } from "../components/Header";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
component: ServicesPage,
});

function ServicesPage() {
return (
  <>
    <Header />
    <main className="cl-page">
<section className="cl-page-hero">
<div className="cl-container">
<span className="cl-eyebrow">WHAT WE DO</span>

      <h1>
        LOGISTICS
        <br />
        <span>BUILT AROUND YOU.</span>
      </h1>

      <p>
        Transportation, hauling, and construction logistics support
        designed around your operational needs. Tell us about your
        project and let’s discuss the right approach.
      </p>

      <div className="cl-hero-actions" style={{ marginTop: 30 }}>
        <Link to="/contact" className="cl-button cl-button-primary">
          REQUEST INFORMATION
        </Link>

        <a href="tel:5013513623" className="cl-button cl-button-outline">
          CALL 501-351-3623
        </a>
      </div>
    </div>
  </section>

  <section className="cl-page-content">
    <div className="cl-container">
      <div className="cl-section-heading">
        <div>
          <span className="cl-eyebrow">OUR CAPABILITIES</span>
          <h2>
            SERVICES THAT
            <br />
            <span>KEEP YOU MOVING.</span>
          </h2>
        </div>

        <p>
          Every operation has different demands. We work to understand
          your requirements and discuss practical service options
          for your business or project.
        </p>
      </div>

      <div className="cl-page-cards">
        <article className="cl-page-card">
          <span className="cl-card-number">01 / TRANSPORT</span>

          <h3>TRUCKING SERVICES</h3>

          <p>
            Transportation support for businesses that need to move
            freight and materials. Discuss your load details, pickup
            and delivery requirements, and scheduling needs with our
            team.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">02 / HAULING</span>

          <h3>HAULING SOLUTIONS</h3>

          <p>
            Hauling support for suitable materials and project needs.
            Share the material type, approximate quantity, locations,
            and required timeframe so we can discuss your request.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">03 / CONSTRUCTION</span>

          <h3>CONSTRUCTION LOGISTICS</h3>

          <p>
            Logistics support for construction-related operations,
            including transportation coordination and material
            movement planning based on project requirements.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className="cl-section" style={{ background: "#0b0f0b" }}>
    <div className="cl-container cl-page-grid">
      <div className="cl-page-copy">
        <span className="cl-eyebrow">HOW IT WORKS</span>

        <h2>
          FROM FIRST CALL
          <br />
          TO NEXT STEPS.
        </h2>

        <p>
          Getting started is simple. Contact us with your transportation
          or hauling requirements. We’ll review the details with you
          and discuss the next steps based on your needs.
        </p>

        <ul className="cl-page-list">
          <li>Tell us what you need moved or supported</li>
          <li>Share locations, timing, and project details</li>
          <li>Discuss service requirements with our team</li>
          <li>Confirm the details before proceeding</li>
        </ul>

        <div style={{ marginTop: 30 }}>
          <Link to="/contact" className="cl-button cl-button-primary">
            DISCUSS YOUR PROJECT
          </Link>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=1200&q=85"
          alt="Commercial truck transportation"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <section className="cl-final-cta">
    <div className="cl-container cl-final-cta-inner">
      <div>
        <span className="cl-eyebrow">CROCODILE LOGISTICS, LLLC</span>

        <h2>
          LET'S TALK ABOUT
          <br />
          <span>YOUR NEXT LOAD.</span>
        </h2>
      </div>

      <Link to="/contact" className="cl-button cl-button-primary">
        CONTACT US
      </Link>
    </div>
  </section>
    </main>
  </>
  );
}
