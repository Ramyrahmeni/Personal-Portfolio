import { useEffect, useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  // Questions, Work Opportunities, Connecting, Other
  const [subject, setSubject] = useState("Questions");
  // LOADING, ERROR, SUCCESS
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubject = (selectedButton) => {
    setSubject(selectedButton);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector(".contact-submit-btn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;
    setTimeout(() => {
      send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: `${firstName} ${surname}`,
          to_name: "Ramy", // Replace "Your Name" with your actual name
          subject,
          message,
          reply_to: email,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
        .then(() => {
          submitBtn.innerHTML = "Sent!";
        })
        .catch(() => {
          submitBtn.innerHTML = "Something went wrong!";
        });
    }, 2000);
  };
  
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="contact-container">
      {/* <h1>
        I would love to hear from you!<br></br>Get in touch 👋
      </h1> */}
      <h1>Contact</h1>
      <div className="contact-form">
        <form
          className="contact-form-container"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="contact-form-input">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name"
                  name="name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form-input">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name"
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="contact-form-input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-subject">
              <p>I&apos;m contacting you for...</p>
              <div className="subject-btns">
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Questions" ? "active-btn" : ""}`}
                >
                  Questions
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${
                    subject === "Work Opportunities" ? "active-btn" : ""
                  }`}
                >
                  Work Opportunities
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Connecting" ? "active-btn" : ""}`}
                >
                  Connecting
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Other" ? "active-btn" : ""}`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>
          <div className="contact-msg">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="contact-submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <div className="right-links">
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/mohamed-rami-rahmani-12b929265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="40px"
              height="40px"
            >
              <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
            </svg>
          </a>
          <a
            href="https://github.com/Ramyrahmeni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
            </svg>
          </a>
        </div>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default Contact;
