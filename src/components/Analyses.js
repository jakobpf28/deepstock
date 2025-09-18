import React, { useState } from 'react';
import AnalysisModal from './AnalysisModal';

const Analyses = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
  };

  const analyses = [
    {
      id: 1,
      title: "RocketLab zeigt bullisches Muster",
      date: "Vor 2 Tagen",
      image: "/images/analyses/RocketLab/RKLB_2025-09-12_15-23-00_77d68.png",
      description: "RocketLab hat ein bullisches Flaggenmuster ausgebrochen und zielt auf neue Höchststände. Das Ziel liegt bei 8,50€, Stop-Loss bei 6,20€."
    },
    {
      id: 2,
      title: "RocketLab",
      date: "Vor 2 Tagen",
      image: "./images/analyses/RocketLab/RKLB_2025-09-12_15-23-00_77d68.png",
      description: "RocketLab hat ein bullisches Flaggenmuster ausgebrochen und zielt auf neue Höchststände. Das Ziel liegt bei 8,50€, Stop-Loss bei 6,20€."
    },
    {
      id: 3,
      title: "RocketLab",
      date: "Vor 2 Tagen",
      image: "./images/analyses/RocketLab/RKLB_2025-09-12_15-23-00_77d68.png",
      description: "RocketLab hat ein bullisches Flaggenmuster ausgebrochen und zielt auf neue Höchststände. Das Ziel liegt bei 8,50€, Stop-Loss bei 6,20€."
    },
    {
      id: 4,
      title: "RocketLab",
      date: "Vor 2 Tagen",
      image: "./images/analyses/RocketLab/RKLB_2025-09-12_15-23-00_77d68.png",
      description: "RocketLab hat ein bullisches Flaggenmuster ausgebrochen und zielt auf neue Höchststände. Das Ziel liegt bei 8,50€, Stop-Loss bei 6,20€."
    },
    {
      id: 5,
      title: "RocketLab",
      date: "Vor 2 Tagen",
      image: "./images/analyses/RocketLab/RKLB_2025-09-12_15-23-00_77d68.png",
      description: "RocketLab hat ein bullisches Flaggenmuster ausgebrochen und zielt auf neue Höchststände. Das Ziel liegt bei 8,50€, Stop-Loss bei 6,20€."
    },
    {
      id: 6,
      title: "RocketLab",
      date: "Vor 2 Tagen",
      image: "./images/analyses/RocketLab/RKLB_2025-09-12_15-23-00_77d68.png",
      description: "RocketLab hat ein bullisches Flaggenmuster ausgebrochen und zielt auf neue Höchststände. Das Ziel liegt bei 8,50€, Stop-Loss bei 6,20€."
    }
  ];

  return (
    <section className="analyses container" id="analyses">
      <h2 className="section-title">Aktuelle Analysen</h2>
      <div className="analysis-grid">
        {analyses.map(analysis => (
          <div className="analysis-card" key={analysis.id}>
            <div className="analysis-image" onClick={() => openModal(analysis.image)}>
              <img src={analysis.image} alt={`TradingView Chart: ${analysis.title}`} />
              <button className="preview-button" onClick={(e) => {
                e.stopPropagation();
                openModal(analysis.image);
              }}>
                <i className="fas fa-expand"></i> Vollbild
              </button>
            </div>
            <div className="analysis-content">
              <h3>{analysis.title}</h3>
              <div className="analysis-meta">
                <span>{analysis.date}</span>
                <span className="preview-badge">Vorschau</span>
              </div>
              <p>{analysis.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <AnalysisModal 
          imageSrc={selectedImage} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default Analyses;