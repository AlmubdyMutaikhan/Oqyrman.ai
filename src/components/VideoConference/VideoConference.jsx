import React, { useEffect, useRef } from 'react';
import DailyIframe from '@daily-co/daily-js';
import './VideConference.scss';

const VideoConference = ({ roomUrl }) => {
  const callFrameRef = useRef(null); 

  
  useEffect(() => {
 
    if (callFrameRef.current) {
      return; 
    }

   
    callFrameRef.current = DailyIframe.createFrame({
 
    });

    callFrameRef.current.join({ url: roomUrl });


    return () => {
      if (callFrameRef.current) {
        callFrameRef.current.leave();
        callFrameRef.current.destroy(); 
        callFrameRef.current = null; 
      }
    };
  }, [roomUrl]); 

  return <div id="daily-frame" className='video-call'></div>;
};


export default VideoConference;

