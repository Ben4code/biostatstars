import React from "react";
import TestimonialItem from './TestimonialItem'

export default function TestimonialList() {
  return (
    <section id="testimonials" className="testimonialList">
      <h2>Testimonials</h2>
      <p>What some of our users have to say about us</p>
      <div className="testimonialList-content">
        <TestimonialItem
          imgPath="avi1.png"
          altText="testimonialItem bss"
          name="Jane Doe"
          occupation="Student"
          school="BSU"
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores maiores ex ullam temporibus quia enim quod perferendis laboriosam. Corrupti?"
        />
        <TestimonialItem
          imgPath="avi2.png"
          altText="testimonialItem bss 2"
          name="Dr. John Benedith"
          occupation="Lecturer"
          school="SEIU"
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores maiores ex ullam temporibus quia enim quod perferendis laboriosam. Corrupti?"
        />
        <TestimonialItem
          imgPath="avi3.png"
          altText="testimonialItem bss 3"
          name="Mike Okey"
          occupation="Researcher"
          school="ABU"
          quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores maiores ex ullam temporibus quia enim quod perferendis laboriosam. Corrupti?"
        />
      </div>
    </section>
  );
}
