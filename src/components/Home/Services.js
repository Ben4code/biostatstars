import React from "react";
import {PuzzleIcon, CertificateIcon, ElearningIcon, GrowthIcon} from '../icons'

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="container">
        <div className="services-content">
          <div className="services-content-img">
            <img src="arabman.png" alt="services bss" />
          </div>
          <div className="services-content__body">
            <div className="services-item">
              <GrowthIcon/>
              <div>
                <h5>Academic Progression</h5>
                <p>
                  Biostat Stars is an elearning platform founded by Dr. Nwamaka
                  Ofoegbu in 2017 with the mission ot equip sstudents and
                  healthcare prtofessionals across the globe with the most
                  enjoyable learning experience in biostatistics.
                </p>
              </div>
            </div>

            <div className="services-item">
              <CertificateIcon/>
              <div>
                <h5>Distinction</h5>
                <p>
                  Biostat Stars is an elearning platform founded by Dr. Nwamaka
                  Ofoegbu in 2017 with the mission ot equip sstudents and
                  healthcare prtofessionals across the globe with the most
                  enjoyable learning experience in biostatistics.
                </p>
              </div>
            </div>

            <div className="services-item">
              <ElearningIcon/>
              <div>
                <h5>User Friendly Learning Platform</h5>
                <p>
                  Biostat Stars is an elearning platform founded by Dr. Nwamaka
                  Ofoegbu in 2017 with the mission ot equip sstudents and
                  healthcare prtofessionals across the globe with the most
                  enjoyable learning experience in biostatistics.
                </p>
              </div>
            </div>

            <div className="services-item">
              <PuzzleIcon/>
              <div>
                <h5>Complete Learning Experience</h5>
                <p>
                  Biostat Stars is an elearning platform founded by Dr. Nwamaka
                  Ofoegbu in 2017 with the mission ot equip sstudents and
                  healthcare prtofessionals across the globe with the most
                  enjoyable learning experience in biostatistics.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
