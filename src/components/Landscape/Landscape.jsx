import React, { useState } from 'react';
import { animated, useSpring, useTrail } from '@react-spring/web';
import './Landscape.scss';
import LandscapeElementInformation from "./LandscapeElementInformation.jsx";
import useSound from 'use-sound'
import modal_window_opening from '../../assets/audio/modal_window_opening.wav'
const Landscape = () => {
  const [hoverInfo, setHoverInfo] = useState(null);

  const skyAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });

  const cloudTrails = useTrail(1, {
    from: { transform: 'translateX(2%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 15000 },
    loop: true,
    delay: 2000,
    top: '15%'
  });

  const cloudTrails2 = useTrail(2, {
    from: { transform: 'translateX(-10%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 30000 },
    loop: true,
    delay: 3000,
    top: '10%'
  });

  const cloudTrails3 = useTrail(2, {
    from: { transform: 'translateX(50%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 50000 },
    loop: true,
    delay: 3000,
    top: '20%'
  });

  const landAnimation = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0%)' },
    config: { duration: 2000 },
  });

  const trees = [
    { id: 1, xOffset: 5, scale: 2.5, z: 100 },
    { id: 2, xOffset: 85, scale: 2.2, z: 99 },
    { id: 3, xOffset: 85, scale: 1.6, z: 98 },
    { id: 4, xOffset: 75, scale: 2.1, z: 98 },
    { id: 5, xOffset: 20, scale: 1.2, z: 95 },
    { id: 6, xOffset: 5, scale: 1.1, z: 90 },
    { id: 7, xOffset: 80, scale: 1.2, z: 97 },
    { id: 8, xOffset: 10, scale: 0.5, z: 85 }
  ];

  function getBottomPosition(scale) {
    if (scale > 2) {
      return 150 + (2.5 - scale) * 100;
    } else if(scale > 1.5) {
      return 190 + (2.5 - scale) * 100;
    }
    else if(scale > 1){
      return 270; 
    } 
    return 300;
  }

  const elementInformations = [
    {title: 'Бұлт', description: ' Атмосферада қалқыған өте ұсақ су буы тамшыларының және мұз кристалдарының жиынтық жүйесі. Ол жер бетінен 2 — 18 км-ге дейінгі биіктікте атмосфераның төмен бөлігінде (тропосфера) құралады.'},
    {title: 'Ағаш', description: 'Сабақтары мен тамырлары сүректеніп біткен, өте жақсы жетілген діңі бар, биіктігі 2 метрден кем болмайтын көп жылдық өсімдіктер.'}
  ]
  const [playsfx_modal_window_opening] = useSound(modal_window_opening)
  const handleMouseEnter = (info) => {
    setHoverInfo(info);
    playsfx_modal_window_opening()
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  return (
      <div className="landscape">
        <animated.div style={skyAnimation} className="sky">
          {cloudTrails.map((props, index) => (
              <animated.div key={index} style={props} className="cloud" onClick={() => handleMouseEnter(elementInformations[0])} onMouseLeave={handleMouseLeave}>
              </animated.div>
          ))}
          {cloudTrails2.map((props, index) => (
              <animated.div key={index} style={props} className="cloud2" onClick={() => handleMouseEnter(elementInformations[0])} onMouseLeave={handleMouseLeave}>
              </animated.div>
          ))}
          {cloudTrails3.map((props, index) => (
              <animated.div key={index} style={props} className="cloud3" onClick={() => handleMouseEnter(elementInformations[0])} onMouseLeave={handleMouseLeave}>
              </animated.div>
          ))}
        </animated.div>
        <animated.div style={landAnimation} className="land">
          {trees.map(tree => (
              <animated.div key={tree.id} className="tree" style={{
                left: `${tree.xOffset}%`,
                transform: `scale(${tree.scale})`,
                bottom: `${getBottomPosition(tree.scale)}px`,
                zIndex: tree.z
              }} onClick={() => handleMouseEnter(elementInformations[1])} onMouseLeave={handleMouseLeave}>
              </animated.div>
          ))}
        </animated.div>
        {hoverInfo && (
            <div className="hover-display">
              <LandscapeElementInformation info={hoverInfo} />
            </div>
        )}
      </div>
  );
};

export default Landscape;
