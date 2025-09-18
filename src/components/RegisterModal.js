import React, { useState } from 'react';

const RegisterModal = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registrierungs-Formular wurde abgeschickt! (Diese Funktion ist nur eine Demo)');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" id="register-modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2 className="modal-title">Registrieren</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register-name">Name</label>
            <input 
              type="text" 
              id="register-name" 
              placeholder="Dein Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">E-Mail</label>
            <input 
              type="email" 
              id="register-email" 
              placeholder="Deine E-Mail-Adresse"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Passwort</label>
            <input 
              type="password" 
              id="register-password" 
              placeholder="Dein Passwort"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password-confirm">Passwort bestätigen</label>
            <input 
              type="password" 
              id="register-password-confirm" 
              placeholder="Passwort wiederholen"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrieren</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* Bereits registriert? <a href="#" onClick={onSwitchToLogin} style={{ color: 'var(--primary)' }}>Anmelden</a> */}
          Bereits registriert? <button type="button" onClick={onSwitchToLogin} style={{ color: 'var(--primary)', background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}>Anmelden</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;