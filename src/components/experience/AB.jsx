const AmenBankProject = () => {
  return (
    <>
      <div className="experience amen-bank">
        <p className="experience-company">Amen Bank</p>
        <div className="experience-description">
          <p>
            Developed a Django-based online banking application emphasizing security, responsiveness, and interactivity. Managed databases, enhanced styling, and enabled client-side validation using HTML, SCSS, and JavaScript.
          </p>
          <ul>
            <li>Implemented HTTPS, robust authentication, and authorization for enhanced security.</li>
            <li>Performed unit and integration testing to ensure the reliability of the application.</li>
          </ul>
          <p>Keywords: online banking, Django, security, responsiveness, interactivity, HTML, SCSS, JavaScript, HTTPS, authentication, authorization, unit testing</p>
          <p>Project duration: Summer 2023 (July-August)</p>
        </div>
        <div className="github-link">
          <a href="https://github.com/Ramyrahmeni/AmenBank-FullStackWebApp" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
        </div>
      </div>
      <div className="experience-toolkit-container">
        <div className="experience-toolkit">
          <img src="/toolkit-logos/django.png" alt="Django logo" />
          <img src="/toolkit-logos/html.png" alt="HTML logo" />
          <img src="/toolkit-logos/sass.svg" alt="SCSS logo" />
          <img src="/toolkit-logos/javascript.png" alt="JavaScript logo" />
        </div>
      </div>
    </>
  );
};

export default AmenBankProject;
