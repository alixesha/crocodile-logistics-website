import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/industries")({
component: IndustriesPage,
});

function IndustriesPage() {
return (
<main className="cl-page">
<section className="cl-page-hero">
<div className="cl-container">
<span className="cl-eyebrow">INDUSTRIES WE SUPPORT</span>

      <h1>
        BUILT FOR THE
        <br />
        <span>WORK THAT MOVES US.</span>
      </h1>

      <p>
        From construction projects to commercial operations, Crocodile
        Logistics works with customers to discuss transportation,
        hauling, and logistics support suited to their needs.
      </p>

      <div className="cl-hero-actions" style={{ marginTop: 30 }}>
        <Link to="/contact" className="cl-button cl-button-primary">
          DISCUSS YOUR NEEDS
        </Link>

        <Link to="/services" className="cl-button cl-button-outline">
          VIEW OUR SERVICES
        </Link>
      </div>
    </div>
  </section>

  <section className="cl-page-content">
    <div className="cl-container">
      <div className="cl-section-heading">
        <div>
          <span className="cl-eyebrow">OUR INDUSTRY FOCUS</span>
          <h2>
            LOGISTICS FOR
            <br />
            <span>REAL-WORLD WORK.</span>
          </h2>
        </div>

        <p>
          Every industry has its own schedules, materials, and
          operational demands. We start by understanding your
          requirements and discussing the right way forward.
        </p>
      </div>

      <div className="cl-page-cards">
        <article className="cl-page-card">
          <span className="cl-card-number">01 / BUILD</span>

          <h3>CONSTRUCTION</h3>

          <p>
            Transportation and logistics support for construction
            activities, including material movement planning and
            coordination around project requirements.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">02 / MOVE</span>

          <h3>COMMERCIAL OPERATIONS</h3>

          <p>
            Practical transportation support for businesses that
            need to coordinate freight, shipments, and delivery
            requirements as part of their daily operations.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">03 / HAUL</span>

          <h3>MATERIALS & HAULING</h3>

          <p>
            Hauling inquiries for suitable materials and project
            needs. Share the material type, load details, locations,
            and timing so we can review your requirements.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">04 / PLAN</span>

          <h3>PROJECT LOGISTICS</h3>

          <p>
            Coordination discussions for projects where transportation
            timing, material movement, and clear communication are
            important to keeping work organized.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">05 / DELIVER</span>

          <h3>FREIGHT MOVEMENT</h3>

          <p>
            Tell us about your freight, pickup and delivery points,
            scheduling requirements, and any special handling needs
            to discuss potential transportation options.
          </p>
        </article>

        <article className="cl-page-card">
          <span className="cl-card-number">06 / CONNECT</span>

          <h3>BUSINESS PARTNERSHIPS</h3>

          <p>
            We welcome conversations with businesses looking for
            dependable logistics communication and a professional
            approach to transportation planning.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className="cl-section" style={{ background: "#0b0f0b" }}>
    <div className="cl-container cl-page-grid">
      <div>
        <img
          src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=1200&q=85"
          alt="Truck on a highway supporting freight transportation"
          loading="lazy"
        />
      </div>

      <div className="cl-page-copy">
        <span className="cl-eyebrow">A PRACTICAL APPROACH</span>

        <h2>
          YOUR PROJECT.
          <br />
          YOUR REQUIREMENTS.
        </h2>

        <p>
          We know that no two projects are exactly alike. That's why
          we encourage customers to explain their goals, schedules,
          locations, and specific transportation needs before moving
          forward.
        </p>

        <ul className="cl-page-list">
          <li>Discuss the job and required service</li>
          <li>Share the pickup, delivery, or project locations</li>
          <li>Explain timing and material requirements</li>
          <li>Review the available next steps with our team</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="cl-final-cta">
    <div className="cl-container cl-final-cta-inner">
      <div>
        <span className="cl-eyebrow">LET'S WORK TOGETHER</span>

        <h2>
          HAVE A PROJECT
          <br />
          <span>IN MIND?</span>
        </h2>
      </div>

      <Link to="/contact" className="cl-button cl-button-primary">
        CONTACT OUR TEAM
      </Link>
    </div>
  </section>
</main>

);
  }
