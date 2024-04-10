import { useEffect, useRef } from "react";
import React from "react";
import "./Honors.css";
import cpc from "../assets/pixelcut-export.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TerminalContainer from "../components/Terminal";
import CertificationCard from "../components/CertificationCard";
import gsap from "gsap";

const Honors = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);


      
      
    // Fade in animation for Terminal
  }, []);



  return (
    <>
    <p className="honors-header">Prizes And Certifications</p>
      <Parallax
        pages={4}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        className="animation"
      >
        <ParallaxLayer offset={0} speed={0} style={{ zIndex: 1 }}>
          <div
            className="parallax-layer fadeInUp"
            style={{
              backgroundImage: `url(${cpc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100vh",
            }}
          />
        </ParallaxLayer>

        <TerminalContainer
          title="1st Place Ensi Competitive Programming Challenge"
          date="2023-12-10"
          header={
            <React.Fragment>
              <span style={{ color: "#4EC9B0" }}>ramy@host:</span>
              <span style={{ color: "#E4E500" }}>/prizes/ecpc$</span>
            </React.Fragment>
          }
          content={
            <React.Fragment>
              <p>
                  Last November, I had the privilege to participate in a
                  competitive programming event with my team. The contest lasted
                  for 5 hours, during which we engaged in intense problem-solving
                  sessions. Alongside my two teammates, we tackled a series of
                  complex problems, demonstrating our proficiency in algorithmic
                  thinking and coding skills.
                </p>
                <p>
                  Through collaborative efforts and strategic problem-solving, we
                  navigated through various challenges, applying efficient
                  algorithms and data structures to optimize our solutions.
                  Despite the time pressure and the complexity of the problems, we
                  remained focused and determined to achieve success.
                </p>
                <p>
                  In the end, our hard work paid off as we emerged victorious,
                  showcasing our skills and dedication to excellence in the field
                  of computer science. This experience not only enhanced our
                  problem-solving abilities but also strengthened our teamwork and
                  camaraderie, leaving us with valuable lessons and memories to
                  cherish.
                </p>
            </React.Fragment>
          }
        />

        <ParallaxLayer offset={2} speed={0.5} style={{ zIndex: 2 }}>
          <div className="certification-container fadeInUp">
          <CertificationCard
              title="Building Transformer-Based Natural Language Processing Applications"
              organization="Nvidia"
              keywords={["NLP", "Transformer", "Natural Language Processing"]}
            />
            <CertificationCard
              title="Advanced Learning Algorithms"
              organization="deep learning.ai"
              keywords={[
                "Deep Learning",
                "Neural Networks",
                "Machine Learning",
              ]}
            />
            <CertificationCard
              title="Supervised Learning"
              organization="deep learning.ai"
              keywords={[
                "Machine Learning",
                "Supervised Learning",
                "Classification",
              ]}
            />
            <CertificationCard
              title="Unsupervised Learning"
              organization="deep learning.ai"
              keywords={[
                "Machine Learning",
                "Unsupervised Learning",
                "Clustering",
              ]}
            />
            
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Honors;
