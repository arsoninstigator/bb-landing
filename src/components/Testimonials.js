import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    "Snippetify saved me hours every week!",
    "Love how easy it is to organize my code snippets.",
    "A must-have tool for every developer.",
  ];

  return (
    <div className="testimonials">
      <h2>What Developers Say</h2>
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
