// src/pages/solutions.js
import React from "react";
import "./solutions.css"; // You can create this for styling

function Solutions() {
  return (
    <div className="solutions-page">
      <header className="solutions-header">
        <h1>Our Solutions</h1>
        <p>
          We provide innovative, scalable, and reliable solutions to help your
          business grow and adapt to modern challenges.
        </p>
      </header>

      <section className="solution-section">
        <div className="solution-card">
          <h2>Cloud Solutions</h2>
          <p>
            Seamless cloud migration, management, and optimization to ensure
            your business stays connected and productive.
          </p>
        </div>

        <div className="solution-card">
          <h2>AI & Automation</h2>
          <p>
            Harness the power of AI to automate processes, analyze data, and
            enhance decision-making capabilities.
          </p>
        </div>

        <div className="solution-card">
          <h2>Cybersecurity</h2>
          <p>
            Robust security measures to protect your data, networks, and
            applications from cyber threats.
          </p>
        </div>
      </section>

      <footer className="solutions-footer">
        <h3>Need a Custom Solution?</h3>
        <p>Contact us today to discuss your unique business needs.</p>
        <button className="contact-btn">Get in Touch</button>
      </footer>
    </div>
  );
}

export default Solutions;
