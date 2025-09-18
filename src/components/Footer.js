import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>StockInsights</h3>
            <p>Professionelle Aktienanalysen für private Anleger. Wir helfen dir, bessere Investmententscheidungen zu treffen.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Startseite</a></li>
              <li><a href="#analyses" onClick={() => scrollToSection('analyses')}>Analysen</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Preise</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>Über uns</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Kontakt</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Rechtliches</h3>
            <ul>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">AGB</a></li>
              <li><a href="#">Widerrufsrecht</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Kontakt</h3>
            <ul>
              <li><i className="fas fa-envelope"></i> support@stockinsights.de</li>
              <li><i className="fas fa-phone"></i> +49 123 456 789</li>
              <li><i className="fas fa-map-marker-alt"></i> Musterstraße 123, 10115 Berlin</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 StockInsights. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;