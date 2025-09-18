import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <div className="App">
      <Header 
        onLoginClick={openLoginModal} 
        onRegisterClick={openRegisterModal} 
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
        <LoginModal onClose={closeModals} onSwitchToRegister={openRegisterModal} />
      )}
      
      {showRegisterModal && (
        <RegisterModal onClose={closeModals} onSwitchToLogin={openLoginModal} />
      )}
    </div>
  );
}

export default App;