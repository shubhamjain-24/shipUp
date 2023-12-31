import React from "react";
import "./LandingPage.css";
import img1 from '../../Images/icon.png'
import img2 from '../../Images/bg.png'

const LandingPage = () => {
  return (
    <>
      <div className="LP_mainContainer">
      <div className="LP_mainDiv">
        <div className="LP_subdiv1">
          <div className="LP_text1">
            Quick & Reliable <span className="LP_text1_color"> Warehousing and Logistics </span> Solution.
          </div>
          <div className="LP_text2">
            ShipUp Delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
          </div>
          <div className="LP_buttonsDiv">
            <div className="LP_button1">
                Join Now
            </div>
            <div className="LP_button2">
            <img src={img1} alt="" />
            </div>
            <div className="LP_buttonText">
                Play Demo
            </div>
          </div>
        </div>
        <div className="LP_subdiv2">
            <img className="LP_img" src={img2} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default LandingPage;
