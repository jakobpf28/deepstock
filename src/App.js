import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Analyses from './components/Analyses';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authView, setAuthView] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');
  const [resetToken, setResetToken] = useState('');

  // Überprüfen des Auth-Status und der URL-Parameter
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Hash-Parameter auslesen (nach #)
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const type = hashParams.get('type');
        const error = hashParams.get('error');
        const token = hashParams.get('token');
        
        console.log('URL Hash Parameters:', { type, error, token });

        // Fehlerbehandlung
        if (error === 'access_denied' || error === 'otp_expired') {
          setAuthError('Der Reset-Link ist ungültig oder abgelaufen. Bitte fordere einen neuen an.');
          // URL bereinigen
          window.history.replaceState({}, document.title, "/");
        }

        // Prüfen auf Password Reset
        if (type === 'recovery' && token) {
          console.log('Password reset flow detected with token:', token);
          setResetToken(token);
          setAuthView('updatePassword');
          setAuthSuccess('Bitte gib dein neues Passwort ein.');
          
          // URL bereinigen (Token entfernen aus der URL)
          window.history.replaceState({}, document.title, "/");
        }
        
        // Session von Supabase holen
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
        }
        
        if (session) {
          setUser(session.user);
          localStorage.setItem('supabaseAuthSession', JSON.stringify({
            user: session.user,
            expiresAt: session.expires_at
          }));
        } else {
          setUser(null);
          localStorage.removeItem('supabaseAuthSession');
        }
      } catch (error) {
        console.error('Initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listener für Auth-Statusänderungen
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session);
        
        if (session) {
          setUser(session.user);
          localStorage.setItem('supabaseAuthSession', JSON.stringify({
            user: session.user,
            expiresAt: session.expires_at
          }));
        } else {
          setUser(null);
          localStorage.removeItem('supabaseAuthSession');
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Dark Mode Effect
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Registrierungsfunktion
  const handleSignUp = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });
      
      if (error) throw error;
      
      setAuthSuccess('Registrierung erfolgreich! Bitte überprüfe deine E-Mails zur Bestätigung.');
      setEmail('');
      setPassword('');
      setShowRegisterModal(false);
    } catch (error) {
      setAuthError(error.message);
    }
  };

  // Anmeldefunktion
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      setAuthSuccess('Anmeldung erfolgreich!');
      setEmail('');
      setPassword('');
      setShowLoginModal(false);
      
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
    } catch (error) {
      setAuthError(error.message);
    }
  };

  // Passwort-Zurücksetzen anfordern
  const handlePasswordReset = async (e) => {
    if (e) e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    if (!email) {
      setAuthError('Bitte gib deine E-Mail-Adresse ein.');
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/#type=recovery&token=TOKEN`,
      });
      
      if (error) throw error;
      
      setAuthSuccess('Passwort-Zurücksetzen-Link wurde an deine E-Mail gesendet. Bitte überprüfe deinen Posteingang (auch Spam-Ordner).');
    } catch (error) {
      setAuthError(error.message);
    }
  };

  // Neues Passwort setzen
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    if (newPassword !== confirmPassword) {
      setAuthError('Die Passwörter stimmen nicht überein.');
      return;
    }

    if (newPassword.length < 6) {
      setAuthError('Das Passwort muss mindestens 6 Zeichen lang sein.');
      return;
    }

    try {
      // Wenn wir einen Reset-Token haben, verwenden wir die verifyOtp Methode
      if (resetToken) {
        console.log('Using reset token to update password');
        
        // Token verifizieren und Session erstellen
        const { data, error: verifyError } = await supabase.auth.verifyOtp({
          token: resetToken,
          type: 'recovery'
        });
        
        if (verifyError) {
          console.error('Token verification error:', verifyError);
          throw new Error('Der Reset-Link ist ungültig oder abgelaufen. Bitte fordere einen neuen an.');
        }
        
        console.log('Token verification successful:', data);
        
        // Jetzt das Passwort aktualisieren
        const { error: updateError } = await supabase.auth.updateUser({
          password: newPassword
        });
        
        if (updateError) throw updateError;
        
        setAuthSuccess('Passwort erfolgreicht aktualisiert! Du wirst zum Login weitergeleitet.');
        setResetToken('');
        setNewPassword('');
        setConfirmPassword('');
        
        setTimeout(() => {
          setAuthView('login');
        }, 2000);
      } else {
        // Normales Update für bereits angemeldete Benutzer
        const { error } = await supabase.auth.updateUser({
          password: newPassword
        });
        
        if (error) throw error;
        
        setAuthSuccess('Passwort erfolgreich aktualisiert!');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error('Password update error:', error);
      setAuthError(error.message);
    }
  };

  // Logout-Funktion
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setAuthSuccess('Abmeldung erfolgreich!');
      
      localStorage.removeItem('supabaseAuthSession');
      localStorage.removeItem('rememberMe');
    } catch (error) {
      setAuthError(error.message);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
    setAuthView('login');
    setAuthError('');
    setAuthSuccess('');
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
    setAuthView('signup');
    setAuthError('');
    setAuthSuccess('');
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
    setAuthError('');
    setAuthSuccess('');
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Lade...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header 
        onLoginClick={openLoginModal} 
        onRegisterClick={openRegisterModal}
        user={user}
        onLogout={handleLogout}
      />
      <Hero />
      <Features />
      <Pricing />
      <Analyses />
      <About />
      <Contact />
      <Footer />
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      
      {showLoginModal && (
        <LoginModal 
          onClose={closeModals} 
          onSwitchToRegister={openRegisterModal}
          email={email}
          password={password}
          rememberMe={rememberMe}
          authError={authError}
          authSuccess={authSuccess}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onRememberMeChange={(e) => setRememberMe(e.target.checked)}
          onLogin={handleLogin}
          onPasswordReset={() => {
            setAuthView('reset');
            setAuthError('');
            setAuthSuccess('');
          }}
          authView={authView}
        />
      )}
      
      {showRegisterModal && (
        <RegisterModal 
          onClose={closeModals} 
          onSwitchToLogin={openLoginModal}
          email={email}
          password={password}
          authError={authError}
          authSuccess={authSuccess}
          onEmailChange={(e) => setEmail(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSignUp={handleSignUp}
        />
      )}

      {/* Passwort-Reset Modal */}
      {authView === 'reset' && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && closeModals()}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModals}>&times;</span>
            <h2 className="modal-title">Passwort zurücksetzen</h2>
            <p>Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen deines Passworts.</p>
            
            {authError && <div className="alert error">{authError}</div>}
            {authSuccess && <div className="alert success">{authSuccess}</div>}
            
            <form onSubmit={handlePasswordReset}>
              <div className="form-group">
                <label htmlFor="resetEmail">E-Mail-Adresse</label>
                <input
                  type="email"
                  id="resetEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Deine E-Mail-Adresse"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Link senden
              </button>
            </form>
            
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Zurück zum {' '}
              <button 
                type="button" 
                style={{ color: 'var(--primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => {
                  setAuthView('login');
                  setAuthError('');
                  setAuthSuccess('');
                }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Passwort-Update Modal */}
      {authView === 'updatePassword' && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && closeModals()}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModals}>&times;</span>
            <h2 className="modal-title">Neues Passwort setzen</h2>
            <p>Bitte gib dein neues Passwort ein.</p>
            
            {authError && <div className="alert error">{authError}</div>}
            {authSuccess && <div className="alert success">{authSuccess}</div>}
            
            <form onSubmit={handleUpdatePassword}>
              <div className="form-group">
                <label htmlFor="newPassword">Neues Passwort</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="Mindestens 6 Zeichen"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Passwort bestätigen</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="Passwort wiederholen"
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Passwort aktualisieren
              </button>
            </form>
            
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              Zurück zum {' '}
              <button 
                type="button" 
                style={{ color: 'var(--primary)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => {
                  setAuthView('login');
                  setResetToken('');
                  setAuthError('');
                  setAuthSuccess('');
                }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;