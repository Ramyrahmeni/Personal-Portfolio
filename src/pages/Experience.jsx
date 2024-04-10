import { useEffect, useState } from "react";
import AmenBankProject from "../components/experience/AB";
import "./Experience.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image.png";
import image3 from "../assets/image4.png";
const Experience = () => {
  const [fsa, setFSA] = useState(true);
  const [bloomberg, setBloomberg] = useState(false);
  const [sig, setSIG] = useState(false);

  const handleFSAClick = () => {
    setFSA(true);
    setBloomberg(false);
    setSIG(false);
  };

  const handleBloombergClick = () => {
    setBloomberg(true);
    setFSA(false);
    setSIG(false);
  };

  const handleSIGClick = () => {
    setSIG(true);
    setFSA(false);
    setBloomberg(false);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <>
    <div className="experience-container">
      <p className="experience-header">Experience</p>
      <div className="experience-terminal-container">
        <div className="experience-terminal-header">
          <div className="header-btns">
            <div className="header-btn header-btn1"></div>
            <div className="header-btn header-btn2"></div>
            <div className="header-btn header-btn3"></div>
          </div>
          <div className="header-text">
            <p>ramy-portfolio &#8212; -bash</p>
          </div>
        </div>
        <div className="terminal-body">
          <div className="terminal-bg-text">
            <p>ramy-MB:Experience ramy-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                cd Amen_Bank_Internship/ &#8594;
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <AmenBankProject />}
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
};

export default Experience;
