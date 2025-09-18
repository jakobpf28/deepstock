import React, { useState } from 'react';

const Header = ({ onLoginClick, onRegisterClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="images/logos/7.png" 
              alt="DeepStock Logo" 
              style={{ height: '50px', width: 'auto', cursor: 'pointer' }} 
              onClick={() => scrollToSection('home')} 
            />
            <img 
              src="images/logos/6.png" 
              alt="DeepStock Schriftzug" 
              style={{ height: '30px', width: 'auto', cursor: 'pointer', marginLeft: '10px' }} 
              onClick={() => scrollToSection('home')}
            />
          </div>

          <nav>
            <ul className={mobileMenuOpen ? 'mobile-nav active' : ''}>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Startseite</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Preise</a></li>
              <li><a href="#analyses" onClick={() => scrollToSection('analyses')}>Analysen</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>Über uns</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Kontakt</a></li>
              {mobileMenuOpen && (
                <div className="mobile-auth-buttons">
                  <button className="btn btn-outline" onClick={onLoginClick}>Anmelden</button>
                  <button className="btn btn-primary" onClick={onRegisterClick}>Registrieren</button>
                </div>
              )}
            </ul>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </nav>
          
          <div className="auth-buttons">
            <button className="btn btn-outline" onClick={onLoginClick}>Anmelden</button>
            <button className="btn btn-primary" onClick={onRegisterClick}>Registrieren</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;