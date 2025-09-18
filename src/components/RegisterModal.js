// RegisterModal.js
import React from 'react';

const RegisterModal = ({ 
  onClose, 
  onSwitchToLogin, 
  email, 
  password, 
  authError, 
  authSuccess, 
  onEmailChange, 
  onPasswordChange, 
  onSignUp 
}) => {
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
        
        {authError && <div className="alert error">{authError}</div>}
        {authSuccess && <div className="alert success">{authSuccess}</div>}
        
        <form onSubmit={onSignUp}>
          <div className="form-group">
            <label htmlFor="register-email">E-Mail</label>
            <input 
              type="email" 
              id="register-email" 
              placeholder="Deine E-Mail-Adresse"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Passwort</label>
            <input 
              type="password" 
              id="register-password" 
              placeholder="Dein Passwort"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Registrieren</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Bereits registriert? <button type="button" onClick={onSwitchToLogin} style={{ color: 'var(--primary)', background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}>Anmelden</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;