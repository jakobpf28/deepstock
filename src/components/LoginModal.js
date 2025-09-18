// LoginModal.js
import React from 'react';

const LoginModal = ({ 
  onClose, 
  onSwitchToRegister, 
  email, 
  password, 
  rememberMe, 
  authError, 
  authSuccess, 
  onEmailChange, 
  onPasswordChange, 
  onRememberMeChange, 
  onLogin, 
  onPasswordReset,
  authView 
}) => {
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
        
        {authError && <div className="alert error">{authError}</div>}
        {authSuccess && <div className="alert success">{authSuccess}</div>}
        
        <form onSubmit={onLogin}>
          <div className="form-group">
            <label htmlFor="login-email">E-Mail</label>
            <input 
              type="email" 
              id="login-email" 
              placeholder="Deine E-Mail-Adresse"
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Passwort</label>
            <input 
              type="password" 
              id="login-password" 
              placeholder="Dein Passwort"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          
          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={onRememberMeChange}
              />
              Angemeldet bleiben
            </label>
            
            <button 
              type="button" 
              className="text-btn"
              onClick={onPasswordReset}
            >
              Passwort vergessen?
            </button>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Anmelden</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Noch kein Konto? <button type="button" onClick={onSwitchToRegister} style={{ color: 'var(--primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}>Registrieren</button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;