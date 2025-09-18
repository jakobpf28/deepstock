import React, { useState } from 'react';

const LoginModal = ({ onClose, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    alert('Login-Formular wurde abgeschickt! (Diese Funktion ist nur eine Demo)');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" id="login-modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h2 className="modal-title">Anmelden</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">E-Mail</label>
            <input 
              type="email" 
              id="login-email" 
              placeholder="Deine E-Mail-Adresse"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Passwort</label>
            <input 
              type="password" 
              id="login-password" 
              placeholder="Dein Passwort"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Anmelden</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* Noch kein Konto? <a href="#" onClick={onSwitchToRegister} style={{ color: 'var(--primary)' }}>Registrieren</a> */}
          Noch kein Konto? <button type="button" onClick={onSwitchToRegister} style={{ color: 'var(--primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}>Registrieren</button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;