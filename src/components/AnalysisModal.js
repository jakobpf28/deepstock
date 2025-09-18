import React, { useState, useEffect } from 'react';

const AnalysisModal = ({ imageSrc, onClose }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const zoomIn = () => {
    setScale(prevScale => prevScale + 0.2);
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(0.5, prevScale - 0.2));
  };

  const resetZoom = () => {
    setScale(1);
  };

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="modal-content-fullscreen">
        <img 
          id="modalImage" 
          src={imageSrc} 
          alt="Vollbild Vorschau" 
          style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease' }}
        />
        <button className="modal-close" id="modalClose" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-controls">
          <button id="zoomIn" onClick={zoomIn}>
            <i className="fas fa-search-plus"></i>
          </button>
          <button id="zoomOut" onClick={zoomOut}>
            <i className="fas fa-search-minus"></i>
          </button>
          <button id="resetZoom" onClick={resetZoom}>
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisModal;