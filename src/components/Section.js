import React from 'react';
import './Section.css';

function Section({ title, description, gif, reverse }) {
  return (
    <section className={`section ${reverse ? 'reverse' : ''}`}>
      <div className="text-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="gif-content">
        <img src={gif} alt="Demo GIF" />
      </div>
    </section>
  );
}

export default Section;
