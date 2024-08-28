import React, { useEffect } from "react";
import Typed from "typed.js";

const Featured = () => {
  useEffect(() => {
    // Initialize Typed.js effect
    const options = {
      strings: ["Full Stack Developer", "Java Developer", "ReactJs Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    };

    const typed = new Typed(".typedText", options);

    // Cleanup function to destroy Typed.js instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  

  return (
      <section className="featured-box" id="home">
        <div className="featured-text">
          <div className="featured-text-card">
            <span>Abhishek Vairagar</span>
          </div>
          <div className="featured-name">
            <p>
              I'm <span className="typedText"></span>
            </p>
          </div>
          <div className="featured-text-info">
            <p>
              Experienced frontend developer with a passion for creating visually stunning
              and user-friendly websites.
            </p>
          </div>
          <div className="featured-text-btn">
            <button
              className="btn blue-btn"
              onClick={() => window.location.href = 'https://www.linkedin.com/in/abhishekvofficial-718644237/'}
            >
              Hire Me
            </button>
            <a href="Abhishek Vairagar_ReactJs-Developer_2023 Resume.pdf">
              <button className="btn">
                Download CV <i className="uil uil-file-alt"></i>
              </button>
            </a>
          </div>
          <div className="social_icons">
            <div className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/abhishekvofficial-718644237/'}>
              <i className="uil uil-linkedin-alt"></i>
            </div>
            <div className="icon" onClick={() => window.location.href = 'https://github.com/abhioffical08'}>
              <i className="uil uil-github-alt"></i>
            </div>
            <div className="icon" onClick={() => window.location.href = 'https://www.instagram.com/vairagarabhi_008?utm_source=qr&igsh=NnM3NHo0cW1mcnBj'}>
              <i className="uil uil-instagram"></i>
            </div>
            <div className="icon" onClick={() => window.location.href = 'https://dribbble.com/Official_abhi08'}>
              <i className="uil uil-dribbble"></i>
            </div>
          </div>
        </div>
        <div className="featured-image">
          <div className="image">
            <img src="black.png" alt="Avatar" />
          </div>
        </div>
        <div className="scroll-icon-box">
          <a href="#about" className="scroll-btn">
            <i className="uil uil-mouse-alt"></i>
            <p>Scroll Down</p>
          </a>
        </div>
      </section>
  );
};

export default Featured;
