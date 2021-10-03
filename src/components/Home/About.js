import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-img">
        <img src="lady1.png" alt="about bss" />
      </div>
      <div className="about-content">
        <h2 className="about-content__heading">About Biostat Stars</h2>
        <div className="about-content__body">
          <p>
            Biostat Stars is an elearning platform founded by Dr. Nwamaka
            Ofoegbu in 2017 with the mission ot equip sstudents and healthcare
            prtofessionals across the globe with the most enjoyable learning
            experience in biostatistics.
          </p>
          <p>
            BSS provides coaching in biostatistics and epidemology for
            healthcare students and prtofessionals. It is useful for the
            following university courses: IFOM, NBME, USMLE, AMC, MCQ, and PLAB
            examinations and medical residency programs.
          </p>
          <p>
            BBS services and products include personalized tutorials, concept
            notes and a question bank with over 360 board-style questions for
            asynchronous learning. Over 100 healthcare students and doctors have
            benefitted from Biostat Stars globally.
          </p>
        </div>
      </div>
    </section>
  );
}
