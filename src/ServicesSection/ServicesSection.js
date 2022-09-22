import React from 'react';

import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div className="services-section" id="services">
      <div className="services-part">
        <div className="services-header">
          <div className="hr-part"></div>
          <span>My Services</span>
          <div className="hr-part"></div>
        </div>

        <div className="services-box">
          <div className="services-i">
            <i class="fa-sharp fa-solid fa-code"></i>
          </div>

          <div className="services-span-header">
            <span>Web Design</span>
          </div>

          <div className="services-para">
            <span>create, update and build websites and web pages by combining any number of visual design elements.</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServicesSection;