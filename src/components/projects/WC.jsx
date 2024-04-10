const WaterCare = () => {
    return (
      <>
        <div className="experience web-development">
          <p className="experience-company">Water Donation Project</p>
          <div className="experience-description">
            <p>
              Initiated and developed a web project during my first year of studies, aimed at raising funds to donate water to impoverished communities in need. The project was built from scratch using vanilla HTML, CSS, and JavaScript for the frontend, with PHP handling the backend functionalities. The website served as a platform to educate visitors about water scarcity issues and encourage donations to support water provision initiatives in developing countries.
            </p>
            <ul>
              <li>Designed and implemented the frontend using HTML, CSS, and JavaScript to create an engaging user experience.</li>
              <li>Developed backend functionalities using PHP to handle donation processing, user authentication, and data management.</li>
              <li>Integrated payment gateways and donation tracking systems to ensure transparency and accountability in fund utilization.</li>
            </ul>
            <p>Keywords: water donation, web project, HTML, CSS, JavaScript, PHP, fundraising, water scarcity, donation platform, community support</p>
          </div>
          <div className="github-link">
            <a href="https://github.com/Ramyrahmeni/WaterCare" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
          </div>
        </div>
        <div className="experience-toolkit-container">
          <div className="experience-toolkit">
            <img src="/toolkit-logos/html.png" alt="HTML logo" />
            <img src="/toolkit-logos/css.png" alt="CSS logo" />
            <img src="/toolkit-logos/javascript.png" alt="JavaScript logo" />
            <img src="/toolkit-logos/php.png" alt="PHP logo" />
          </div>
        </div>
      </>
    );
  };
  
  export default WaterCare;
  