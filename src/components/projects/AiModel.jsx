const AiModel = () => {
    return (
      <>
        <div className="experience ai-fitness">
          <p className="experience-company">AI Fitness Model</p>
          <div className="experience-description">
            <p>
              Developed an AI fitness model utilizing OpenCV to assist users in their training sessions. The model focuses on real-time analysis of user movements to provide feedback on form correctness, ensuring safe and effective workouts. Additionally, the model utilizes computer vision techniques to accurately count repetitions and sets, enhancing user accountability and progress tracking.
            </p>
            <ul>
              <li>Implemented real-time pose estimation and movement analysis using OpenCV.</li>
              <li>Utilized machine learning algorithms to classify and evaluate exercise form.</li>
              <li>Integrated audio and visual feedback to guide users towards correct form execution.</li>
            </ul>
            <p>Keywords: AI, fitness, model, OpenCV, real-time analysis, computer vision, machine learning, exercise form, feedback, progress tracking</p>
          </div>
          <div className="github-link">
            <a href="https://github.com/Ramyrahmeni/AIFitnessModel" target="_blank" rel="noopener noreferrer" className="github-button">View on GitHub</a>
          </div>
        </div>
        <div className="experience-toolkit-container">
          <div className="experience-toolkit">
            <img src="/toolkit-logos/opencv.svg" alt="OpenCV logo" />
            <img src="/toolkit-logos/python.png" alt="Python logo" />
          </div>
        </div>
      </>
    );
  };
  
  export default AiModel;
  