import React from 'react';

const Pricing = () => {
  const handlePlanSelect = (plan) => {
    alert(`${plan} Abonnement ausgewählt! (Diese Funktion ist nur eine Demo)`);
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Wähle dein Abo</h2>
        <div className="pricing-plans">
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">5€ <span>/monatlich</span></div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> TradingView-Charts</li>
              <li><i className="fas fa-check"></i> Detaillierte Zielzonen</li>
              <li><i className="fas fa-check"></i> 2 Aktienanalysen und Updates pro Woche</li>
              <li><i className="fas fa-check"></i> Textliche Zusammenfassung</li>
              <li><i className="fas fa-check"></i> Kaufs- und Verkaufsaktionen werden geteilt</li>
              <li><i className="fas fa-check"></i> Wochenchartanalysen</li>
              <li><i className="fas fa-times" style={{ color: 'var(--danger)' }}></i> Eigenes Portfolio wird geteilt</li>
              <li><i className="fas fa-times" style={{ color: 'var(--danger)' }}></i> Premium Analysen</li>
              <li><i className="fas fa-times" style={{ color: 'var(--danger)' }}></i> Aktiver Aboschutz vor zukünftigen Preiserhöhungen</li>
              <li><i className="fas fa-times" style={{ color: 'var(--danger)' }}></i> Detaillierte Makrowellenanalysen</li>
              <li><i className="fas fa-check"></i> Jederzeit kündigbar</li>
              <li><i className="fas fa-times" style={{ color: 'var(--danger)' }}></i> Indikatoren</li>
              <li><i className="fas fa-check"></i> Folgende Aktien sind enthalten:</li>
              <ul className="aktienlist">
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li style={{ marginBottom: '20px' }}><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
              </ul>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="btn btn-outline" onClick={() => handlePlanSelect('Basic')}>Auswählen</button>
            </div>
          </div>
          
          <div className="pricing-card featured">
            <h3>Pro</h3>
            <div className="price">10€ <span>/monatlich</span></div>
            <ul className="pricing-features">
              <li><i className="fas fa-check"></i> TradingView-Charts</li>
              <li><i className="fas fa-check"></i> Detaillierte Zielzonen</li>
              <li><i className="fas fa-check"></i> 5 Aktienanalysen und Updates pro Woche</li>
              <li><i className="fas fa-check"></i> Textliche Zusammenfassung</li>
              <li><i className="fas fa-check"></i> Kaufs- und Verkaufsaktionen werden sofort geteilt</li>
              <li><i className="fas fa-check"></i> Wochen- / Stunden-chartanalysen</li>
              <li><i className="fas fa-check"></i> Eigenes Portfolio wird geteilt</li>
              <li><i className="fas fa-check"></i> Premium Analysen</li>
              <li><i className="fas fa-check"></i> Aktiver Aboschutz vor zukünftigen Preiserhöhungen</li>
              <li><i className="fas fa-check"></i> Detaillierte Makrowellenanalysen</li>
              <li><i className="fas fa-check"></i> Jederzeit kündigbar</li>
              <li><i className="fas fa-check"></i> Indikatoren</li>
              <li><i className="fas fa-check"></i> Folgende Aktien sind enthalten:</li>
              <ul className="aktienlist">
                <li>Alle Aktien in Basic</li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
                <li style={{ marginBottom: '20px' }}><a href="https://www.tradingview.com/symbols/NYSE-VRT/?utm_source=androidapp&utm_medium=share" target="_blank" rel="noopener noreferrer">Apple (AAPL)</a></li>
              </ul>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={() => handlePlanSelect('Pro')}>Auswählen</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;