import stirlingEngineImg from '../assets/technical_experience_mech_4100.jpg';
import demoTurtleImg from '../assets/demonstrator_turtle.jpg';
import stirlingEngineVideo from '../assets/stirling_engine_video.mp4';
import koreaOneImg from '../assets/technical_experience_mech_4100.jpg';
import { InterestsPageStyle } from '../styles/styledComponents';
import React, { useEffect, useState } from 'react';

const Interests = function() {
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Edg/') > -1) {
      setBrowser('edge');
    } else if (userAgent.indexOf('Chrome') > -1) {
      setBrowser('chrome');
    } else if (userAgent.indexOf('Firefox') > -1) {
      setBrowser('firefox');
    } else if (userAgent.indexOf('Safari') > -1) {
      setBrowser('safari');
    } else {
      setBrowser('other');
    }
  }, []);

  return (
    <>
      <InterestsPageStyle>
        <img style={{ width: '300px', height: '390px' }} src={stirlingEngineImg} alt="stirling engine photo" />
        
        {browser === 'chrome' && (
          <video
            style={{ width: '700px', 
              height: '390px' }}
            muted
            autoPlay
            alt="stirling engine video"
          >
            <source src={stirlingEngineVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <img style={{ width: '550px', height: '390px' }} src={demoTurtleImg} alt="stirling engine photo" />
        <img style={{ width: '650px', height: '390px' }} src={koreaOneImg} alt="korea one img" />
        {/* <img style={{ width: '550px', height: '390px' }} src="src/assets/korea_two.JPG" alt="korea two img" />
        <img style={{ width: '300px', height: '390px' }} src="src/assets/china_one.jpg" alt="china one img" />
        <img style={{ width: '300px', height: '390px' }} src="src/assets/china_two.jpeg" alt="china two img" />
        <img style={{ width: '550px', height: '390px' }} src="src/assets/nelson_one.jpg" alt="nelson one img" />
        <img style={{ width: '860px', height: '390px' }} src="src/assets/nelson_two.jpg" alt="nelson two img" /> */}
      </InterestsPageStyle>
    </>
  );
}

export default Interests;
