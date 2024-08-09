import React, { useEffect, useState } from 'react';
import './GamePage.scss'; // Create a custom CSS file for styling
import Modal from '../Modal/Modal';

const GamePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    // Function to check orientation
    const checkOrientation = () => {
      if (window.innerWidth > window.innerHeight) {
        setIsLandscape(true);
        setIsModalOpen(false); // Close modal if in landscape
      } else {
        setIsLandscape(false);
        setIsModalOpen(true); // Show modal if not in landscape
      }
    };

    // Check orientation on load
    checkOrientation();

    // Add event listener to detect orientation changes
    window.addEventListener('resize', checkOrientation);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  useEffect(() => {
    // Ensure the iframe takes the full screen size
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      // Reset the overflow styles when the component is unmounted
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="game-page">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(true)} // Keep the modal open if the orientation changes to portrait
        translation={'Маңызды !'}
        description={'Ойыннан керемет әсер алу үшін, телефонды көлденең ұстаңыз'}
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
