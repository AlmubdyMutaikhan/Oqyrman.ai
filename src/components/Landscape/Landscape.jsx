import React, { useState } from 'react';
import { animated, useSpring, useTrail } from '@react-spring/web';
import './Landscape.scss';
import LandscapeElementInformation from "./LandscapeElementInformation.jsx";
import useSound from 'use-sound'
import modal_window_opening from '../../assets/audio/modal_window_opening.wav'
const Landscape = () => {
  const [hoverInfo, setHoverInfo] = useState(null);
  const [boyPosition, setBoyPosition] = useSpring(() => ({ x: 0, bottom: 250 })); // Initial position of the boy

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
    { id: 1, xOffset: 5, scale: 2.3, z: 100 },
    { id: 3, xOffset: 90, scale: 1.4, z: 98 },
    { id: 4, xOffset: 85, scale: 2.1, z: 98 },
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
    {title: 'Бұлт', description: 'Сәлем! Мен жұмбақ бұлтпын. Білесің бе, мен қайдан келемін? Күн сәулесі суды буландырып, аспанға көтерілгенде, біз пайда боламыз!', isLink: false},
    {title: 'Ағаш', description: 'Сәлем! Мен сиқырлы ағашпын. Білесің бе, мен қалай өсемін? Күн сәулесі және жерден алынған су біздің өсуімізге көмектеседі. Біз ауадағы көмірқышқыл газын тазалап, оттегі береміз.', isLink: false},
    {title: 'Кигіз үй', description: 'Киіз үй — бұл қазақ халқының дәстүрлі көшпелі тұрғынының үйі, ол өзінің құрылысының ыңғайлылығы және экологиялық тазалығы жағынан ерекше', isLink: true, link:'https://danqzq.github.io/oqyrman-ai-web-build/'}
  ]

  const yurts = [
    { id: 1, xOffset: 60, scale: 2.3, zIndex: 200 },
    { id: 2, xOffset: 40, scale: 1.5, zIndex: 200 },
  ];


  const [playsfx_modal_window_opening] = useSound(modal_window_opening)
  const handleMouseEnter = (info, x, scale) => {
    setBoyPosition.start({ x: (x + 70), bottom: getBottomPosition(scale) });
    setHoverInfo(info);
    playsfx_modal_window_opening()
    if(info.isLink) {
      setTimeout(() => {
        window.location.href = info.link;
      }, 5000)
    
    }

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
          }}
          onClick={() => handleMouseEnter(elementInformations[1], tree.xOffset, tree.scale)}
          onMouseLeave={handleMouseLeave}
          />
        ))}
        {yurts.map(yurt => (
          <animated.div key={yurt.id} className="yurt" style={{
            backgroundImage: `url('https://cdn1.iconfinder.com/data/icons/kazakhstan-symbol-1/124/tent-yurt-home-kazakh-traditional-512.png')`,
            backgroundSize: 'cover',
            left: `${yurt.xOffset}%`,
            position: 'absolute',
            transform: `scale(${yurt.scale})`,
            bottom: `${getBottomPosition(yurt.scale)}px`,
            zIndex: yurt.z,
            width: '30px',  
            height: '30px'
          }}
          onClick={() => handleMouseEnter(elementInformations[2], yurt.xOffset, yurt.scale, true)}
          onMouseLeave={handleMouseLeave}
          />
        ))}
        <animated.div style={{ ...boyPosition, position: 'absolute', width: '50px', height: '50px', backgroundImage: 'url(https://cdn3.iconfinder.com/data/icons/child-character-4/100/child_73_concentrated_little_boy_chinese_kid_walking_town-512.png)', backgroundSize: 'cover' }} />
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
