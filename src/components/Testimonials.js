import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    "Snippetify changed the way I work!",
    "Fast, simple, and super useful.",
    "A must-have for all students.",
  ];

  return (
    <div className="testimonials">
      <h2>what our users have been saying ..</h2>
      <div className="marquee">
        <div className="marquee-content">
          {testimonials.map((quote, index) => (
            <span key={index} className="testimonial">{quote}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
