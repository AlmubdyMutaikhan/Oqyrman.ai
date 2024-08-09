import React, { useEffect, useState } from 'react';
import './GamePage.scss'; // Import the custom CSS file
import Modal from '../Modal/Modal';

const GamePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const checkOrientation = () => {
      if (window.innerWidth > window.innerHeight) {
        setIsLandscape(true);
        setIsModalOpen(false); // Close modal if in landscape
      } else {
        setIsLandscape(false);
        setIsModalOpen(true); // Show modal if not in landscape
      }
    };

    checkOrientation();

    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="game-page">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(true)}
        translation={'Маңызды !'}
        description={'Ойыннан керемет әсер алу үшін, телефонды көлденең ұстаңыз. Кейіпкерлерді тыңдау үшін, телефонның дауысын қосып ойнаңыз.'}
        isGame
      />
      <iframe
        src="https://danqzq.github.io/oqyrman-ai-web-build/"
        title="Game"
        frameBorder="0"
        allowFullScreen
        className="game-iframe"
      />
    </div>
  );
};

export default GamePage;
