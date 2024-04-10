const FitnessApp = () => {
    return (
      <>
        <div className="experience ai-fitness">
          <p className="experience-company">Fitness App Development</p>
          <div className="experience-description">
            <p>
              Contributed to the development of a fitness app built using React and Django, where I played a key role in integrating an AI fitness model into the backend. This model leverages OpenCV for real-time analysis of user movements during workout sessions, ensuring correct form execution and enhancing safety. Additionally, it provides accurate tracking of repetitions and sets, improving user accountability and progress monitoring.
            </p>
            <ul>
              <li>Integrated the AI fitness model with the backend of the fitness app using Django.</li>
              <li>Enabled real-time pose estimation and movement analysis utilizing OpenCV.</li>
              <li>Utilized machine learning algorithms to evaluate exercise form and provide personalized recommendations.</li>
            </ul>
            <p>Keywords: fitness app, React, Django, AI, OpenCV, real-time analysis, exercise form, machine learning, progress monitoring</p>
          </div>
          <div className="github-link">
            <a href="https://github.com/Amine-Staali/PCD" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
          </div>
        </div>
        <div className="experience-toolkit-container">
          <div className="experience-toolkit">
            <img src="/toolkit-logos/opencv.svg" alt="OpenCV logo" />
            <img src="/toolkit-logos/python.png" alt="Python logo" />
            <img src="/toolkit-logos/react.png" alt="React logo" />
            <img src="/toolkit-logos/django.png" alt="Django logo" />
          </div>
        </div>
      </>
    );
  };
  
  export default FitnessApp;
  