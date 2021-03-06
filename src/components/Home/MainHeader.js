import React from "react";

export default function MainHeader() {
  return (
    <section id="home" className="mainHeader">
      <div className="container">
        <div className="mainHeader__content">
          <div className="mainHeader__content--text">
            <h3>Best learning resource for biostatistics and epidemiology.</h3>
            <p>Become a star today.</p>
            <button className="btn btn__mainHeader">
              Start Learning &#8594;
            </button>
          </div>
          <div className="mainHeader__content--img">
            <img src="./biostatstars_img.svg" alt="brand image" />
          </div>
        </div>
      </div>
    </section>
  );
}
