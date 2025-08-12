import React from "react";
import "./product.css"; // Importing the CSS file
import logo from "../assets/logo.png";
import enggirl from "../assets/enggirl.png";
import logos from "../assets/logos.svg";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";
import feature6 from "../assets/feature6.png";
import feature7 from "../assets/feature7.png";
import feature8 from "../assets/feature8.png";
import feature9 from "../assets/feature9.png";

function Product() {
  return (
    <div>
      {/* First Section */}
      <div className="product-container">
        <div className="product-content">
          <img src={logo} alt="Logo" className="logo-image" />

          <h1 className="product-title">
            Achieve 80% faster building
            permitting and code compliance
          </h1>
          <p className="product-subtext">
            Unlock efficiency and innovation with completely digital building
            permitting management and AI-assisted building plan code compliance
            scrutiny.
          </p>

          <p className="product-subtext2">
            Built for Cities | Municipalities | States | Federal Government Agencies
          </p>
          <button className="see-demo">See Demo</button>
        </div>
        {/* Right image */}
        <div className="right-image">
            <img src={enggirl} alt="enggirl" className="enggirl-image" />
        </div>
      </div>

      {/* Trust Section BELOW */}
      <div className="trust-section">
        <h2 className="trust-heading">
          Over 700 government agencies trust CivitPERMIT
        </h2>

        <div className="trust-logos">
          <img src={logos} alt="Logos" className="logos-image" />
        </div>

        <div className="trust-info">
          <div className="gradient-box"></div>
          <div>
            <h3 className="info-title">
              Experience the paper-free, fully automated, 
              intelligence infused permit management
            </h3>
            <p className="info-text">
              Simplify the building permit process from start to finish,
              achieving highest productivity and superior service levels.
            </p>
          </div>
        </div>
      </div>


      {/* Third Section */}
      <div className="features-grid">
        {[
          { icon: feature1, text: "100% automation of end-to-end processes from application to permit issuance" },
          { icon: feature2, text: "Online application and fees acceptance through Citizen portal" },
          { icon: feature3, text: "Automated and accurate scrutiny report" },
          { icon: feature4, text: "Built-in 2D CAD drawings or 3D BIM models support" },
          { icon: feature5, text: "AI-powered plan reading and code compliance validation" },
          { icon: feature6, text: "Pre-configured with all local and state building codes" },
          { icon: feature7, text: "GIS mapping for smarter planning" },
          { icon: feature8, text: "Smart Inspect mobile app for management of inspections" },
          { icon: feature9, text: "Deep analytics and insights for smarter planning" }
        ].map((feature, i) => (
          <div className="feature-item" key={i}>
            <img src={feature.icon} alt="" className="feature-icon" />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

        {/* Button after features */}
        <div className="see-demo-container">
            <button className="see-demo2">See Demo</button>
        </div>
    </div>
  );
}

export default Product;
