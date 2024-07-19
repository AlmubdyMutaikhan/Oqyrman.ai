import React from 'react';
import { animated, useSpring, useTrail } from '@react-spring/web';
import './Landscape.scss';

const Landscape = () => {
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




  const waterAnimation = useSpring({
    from: { transform: 'translate3d(-150%, 100%, 0)' }, // Start from the left-bottom
    to: { transform: 'translate3d(150%, -100%, 0)' },  // Move to the right-top
    config: { duration: 1000 },
    reset: true,   // Reset the animation state to `from` on completion
    onRest: ({ finished }) => {
      // This callback fires when the animation comes to a still-stand
      if (finished) {
        // Flip the `reverse` flag to toggle the direction of the animation
        waterAnimation.reverse = !waterAnimation.reverse;
      }
    }
  });

  const landAnimation = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0%)' },
    config: { duration: 2000 },
  });

  // Define fixed positions and scales
  const trees = [
    { id: 1, xOffset: 5, scale: 2.5,z: 100 },  // Larger scale, closer to the viewer
    { id: 2, xOffset: 85, scale: 2.2, z: 99 },
    { id: 3, xOffset: 85, scale: 1.6, z: 98 },
    { id: 4, xOffset: 75, scale: 2.1, z:98 },
    { id: 5, xOffset: 20, scale: 1.2, z:95 }, // Smaller scale, farther from the viewer
    { id: 6, xOffset: 5, scale: 1.1, z: 90 },
    { id: 7, xOffset: 80, scale: 1.2, z: 97 },
    { id: 8, xOffset: 10, scale: 0.5, z:85 }
  ];

  function getBottomPosition(scale) {
    if (scale > 2) {
      return 150 + (2.5 - scale) * 100; // Closer trees, lower bottom position
    } else if(scale > 1.5) {
        return 190 + (2.5 - scale) * 100; 
    }
    else if(scale > 1){
      return 300; // Farther trees, higher bottom position
    } 
    return 350;
  }



  const [waterTrails, waterApi] = useTrail(1, () => ({
    from: { transform: 'translate3d(-150%, 100%, 0)' },
    to: { transform: 'translate3d(150%, 100%, 0)' },
    config: { duration: 1000 },
    reset: true,
    onRest: (result, ctrl, item) => {
      if (item === 0) {  // Check if the first item in the trail has finished animating
        waterApi.start({
          reverse: !ctrl.reverse,
          immediate: false
        });
      }
    }
  }));
  return (
    <div className="landscape">
      <animated.div style={skyAnimation} className="sky">
        {cloudTrails.map((props, index) => (
          <animated.div key={index} style={props} className="cloud"></animated.div>
        ))}

        {cloudTrails2.map((props, index) => (
          <animated.div key={index} style={props} className="cloud2"></animated.div>
        ))}

            {cloudTrails3.map((props, index) => (
            <animated.div key={index} style={props} className="cloud3"></animated.div>
            ))}
      </animated.div>
      <animated.div style={landAnimation} className="land">
        {trees.map(tree => (
          <animated.div key={tree.id} className="tree" style={{
            left: `${tree.xOffset}%`,
            transform: `scale(${tree.scale})`,
            bottom: `${getBottomPosition(tree.scale)}px`,
            zIndex: tree.z
          }} />
        ))}

{waterTrails.map((style, index) => (
        <animated.div key={index} className="water" style={style} />
      ))}
       
      </animated.div>
    </div>
  );
};

export default Landscape;
