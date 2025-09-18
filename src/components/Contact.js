import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setShowSuccess(true);
      setShowError(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else {
      setShowError(true);
      setShowSuccess(false);
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  return (
    <section className="contact container" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-description">Hast du Fragen oder möchtest du mehr über unsere Dienstleistungen erfahren? Wir sind für dich da!</p>
        
        <div className={`form-status success ${showSuccess ? '' : 'hidden'}`} id="success-message">
          <i className="fas fa-check-circle"></i> Vielen Dank! Deine Nachricht wurde erfolgreich versendet.
        </div>
        
        <div className={`form-status error ${showError ? '' : 'hidden'}`} id="error-message">
          <i className="fas fa-exclamation-circle"></i> Bitte fülle alle Pflichtfelder aus.
        </div>
        
        <form className="compact-form" id="modern-contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-row">
            <label htmlFor="email">E-Mail</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="form-row">
            <label htmlFor="message">Nachricht</label>
            <textarea 
              id="message" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Absenden
            </button>
          </div>
        </form>
        
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>support@stockinsights.de</span>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+49 123 456 789</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Musterstraße 123, 10115 Berlin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;