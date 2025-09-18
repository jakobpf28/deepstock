import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Ihr Vorsprung an der Börse</h1>
        <p>Erhalte exklusive Trading-Ideen mit detaillierten Chartanalysen und fundierten Einschätzungen zu verschiedenen Bereichen.</p>
        <div className="hero-buttons">
          <button className="btn btn-accent" onClick={() => scrollToSection('analyses')}>Analysen ansehen</button>
          <button className="btn btn-outline" style={{ color: 'white', borderColor: 'var(--primary)' }}>Mehr erfahren</button>
        </div>
        <br /><br /><br />
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </section>
  );
};

export default Hero;