import React from 'react';

const Features = () => {
  return (
    <section className="container">
      <h2 className="section-title">Was wir bieten</h2>
      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fa-solid fa-chart-simple"></i>
          </div>
          <h3>Detaillierte Chartanalysen</h3>
          <p>Professionelle TradingView-Charts mit klaren Markierungen zu Einstiegs-, Stop-Loss- und Take-Profit-Zonen.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-newspaper"></i>
          </div>
          <h3>Fundierte Begründungen</h3>
          <p>Ausführliche Erläuterungen zu jeder Analyse, inklusive fundamentaler und technischer Aspekte.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-bell"></i>
          </div>
          <h3>Benachrichtigungen</h3>
          <p>Erhalte sofortige Benachrichtigungen über neue Analysen und wichtige Marktentwicklungen.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;