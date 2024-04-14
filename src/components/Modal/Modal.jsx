import React from 'react';
import './Modal.scss'; // This will be your CSS file

const Modal = ({ isOpen, onClose, translation, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <p className="translation">{translation}</p>
          <p className="description">{description}</p>
          <button className="modal-close" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
