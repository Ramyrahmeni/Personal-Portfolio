import { useEffect, useState } from "react";
import AmenBankProject from "../components/experience/AB";
import AiModel from "../components/projects/AiModel";
import WaterCare from "../components/projects/WC";
import FitnessApp from "../components/projects/FA";
import "./Projects.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image.png";
import image3 from "../assets/image4.png";
const Project = () => {
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
      <p className="experience-header">Projects</p>
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
            <p>ramy-MB:Projects ramy-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                cd Projects/AiModel &#8594;
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <AiModel />}
            </div>
          </div>
        </div>
        <div class="demo"><img src={image3} alt="project image" /></div>
      </div>
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
            <p>ramy-MB:Projects ramy-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                cd Projects/FitnessApp &#8594;
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <FitnessApp />}
            </div>
          </div>
        </div>
        <div class="demo"><img src={image1} alt="project image" /></div>
      </div>
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
            <p>ramy-MB:Projects ramy-portfolio$ ls</p>
            <div className="experience-terminal-btns">
              <button
                onClick={handleFSAClick}
                className="experience-terminal-btn terminal-btn1"
              >
                cd Projects/WaterCare &#8594;
              </button>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-experience-text">
              {fsa && <WaterCare />}
            </div>
          </div>
        </div>
        <div class="demo"><img src={image2} alt="project image" /></div>
      </div>
      
    </div>
    
    </>
  );
};

export default Project;
