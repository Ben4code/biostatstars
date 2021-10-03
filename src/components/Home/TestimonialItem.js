import React from "react";

export default function TestimonialItem({imgPath, altText, quote, school, name, occupation}) {
  return (
    <section className="testimonialItem">
      <div className="testimonialItem-img">
        <img src={imgPath} alt={altText} />
      </div>
      <div className="testimonialItem-content">
        <blockquote>{quote}</blockquote>
        <h3>{name}</h3>
        <span>{occupation} - {school}</span>
      </div>
    </section>
  );
}
