import { HandGestureRobotPageStyle, 
  HandGestureRobotHeaderStyle, 
  StyledContributorLink, 
  StyledHeaderLink} from "../../styles/styledComponents"
import '../../App.css'
import React, { useEffect, useState } from 'react';

const HandGestureRobot = function() {
  const [browser, setBrowser] = useState('');

  useEffect(() => {
    // Detect the user's browser using userAgent
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
      <StyledHeaderLink to="https://github.com/nathansivalingam/hand-gesture-robot" className="main-body">
        <h1>Hand Gesture Robot</h1>
      </StyledHeaderLink>
      <div className="main-body">
        <HandGestureRobotHeaderStyle>
          <StyledContributorLink to="https://www.linkedin.com/in/ben-mcmillen-b587b7227/">Ben McMillen</StyledContributorLink>
          <StyledContributorLink to="https://www.linkedin.com/in/sean-kim-b659ba237/">Sean Kim</StyledContributorLink>
          <StyledContributorLink to="https://www.linkedin.com/in/nathansivalingam/">Nathan Sivalingam</StyledContributorLink>
        </HandGestureRobotHeaderStyle>
      </div>
      <div className="main-body">
        {browser === 'edge' && (
          <iframe
            src="https://github.com/nathansivalingam/hand-gesture-robot"
            width="95%"
            height="400px"
            style={{ border: '5px solid white', marginTop: '15px' }}
          >
            Your browser does not support iframes.
          </iframe>
        )}
      </div>
      <HandGestureRobotPageStyle>
        <h2>Project Background</h2>
        <b>What did we want to achieve?</b>
        <p>We wanted to further explore the use of hand gestures in controlling the speed and direction of autonomous vehicles.</p>
        <b>How did we achieve it?</b>
        <i>Electrical Component End System</i>
        <p>One Arduino Uno is connected to an end system (Laptop) via a USB B cable. The Arduino Uno is connected to a transceiver which allows for communication with another Arduino Uno connected to an identical transceiver.</p>
        <u>Vehicle</u>
        <p>The other Arduino Uno is placed on the vehicle chassis. This Arduino Uno is connected to a transceiver as well as the motor driver. The motor driver, which is powered by a battery pack, powers the Arduino Uno in addition to receiving information from the Arduino Uno. Upon information reception, the motor driver communicates with the motors to execute the respective commands. Thus, commands outlined on the end system can be executed by the vehicle.</p>
        <i>Mechanical Component</i>
        <u>Wheels</u>
        <p>Two wheels stabilize the back end of the chassis. One castor (undriven wheel) is placed at the front of the chassis.</p>
        <u>Chassis</u>
        <p>The chassis is designed to handle the load of the subsequent electrical components outlined above.</p>
        <u>Chassis Cover</u>
        <p>The chassis cover was designed on SolidWorks to protect the electrical components mounted on the chassis from harsh environmental conditions.</p>
        <i>Software Component</i>
        <u>Python Program</u>
        <p>Python uses OpenCV to view a webcam. Python then uses MediaPipe (external library) to track hand gesture positions. The number of north-facing fingers dictates the desired movement requested of the vehicle. The information containing the desired movement is then sent to the vehicle where it is executed.</p>
        <u>Arduino</u>
        <p>Arduino IDE reads the information provided by the Python program. The data is then transmitted from the transceiver connected to the end system to the transceiver mounted on the vehicle chassis.</p>
        <b>What were the results?</b>
        <p>Upon completion of this project, our team was able to successfully use hand gestures to control the speed and direction of an autonomous vehicle.</p>
      </HandGestureRobotPageStyle>
    </>
  );
};

export default HandGestureRobot;
