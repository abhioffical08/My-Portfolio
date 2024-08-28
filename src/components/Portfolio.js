import React, { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const Portfolio = () => {

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.typedText', {
      strings: ["Java Developer", "Ethical Hacker", "ECE Engineer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });
    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.top-header', {});
    sr.reveal('.about-info', { delay: 100 });
    sr.reveal('.contact-info', { delay: 100 });
    sr.reveal('.skills-box', { delay: 100 });
    sr.reveal('.form-control', { delay: 100 });

    // Cleanup Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const myMenuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  useEffect(() => {
    const headerShadow = () => {
      const navHeader = document.getElementById("header");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    };

    window.onscroll = headerShadow;
  }, []);

  useEffect(() => {
    const scrollActive = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          activeLink?.classList.add('active-link');
        } else {
          activeLink?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  return (
    <div className="container">
      <nav id="header">
        <div className="nav-logo">
          <p className="nav-name">Resume</p>
          <span>.</span>
        </div>
        <div className="nav-menu" id="myNavMenu">
          <ul className="nav_menu_list">
            <li className="nav_list">
              <a href="#home" className="nav-link active-link">Home</a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a href="#about" className="nav-link">About</a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a href="#projects" className="nav-link">Projects</a>
              <div className="circle"></div>
            </li>
            <li className="nav_list">
              <a href="#contact" className="nav-link">Contact</a>
              <div className="circle"></div>
            </li>
          </ul>
        </div>
        <div className="nav-button">
          <a href="Abhishek_Vairagar_BE_2023(new).pdf">
            <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
          </a>
        </div>
        <div className="nav-menu-btn">
          <i className="uil uil-bars" onClick={myMenuFunction}></i>
        </div>
      </nav>

      <main className="wrapper">
        <section className="featured-box" id="home">
          <div className="featured-text">
            <div className="featured-text-card">
              <span>Abhishek Vairagar</span>
            </div>
            <div className="featured-name">
              <p>I'm <span className="typedText"></span></p>
            </div>
            <div className="featured-text-info">
              <p>Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.</p>
            </div>
            <div className="featured-text-btn">
              <button className="btn blue-btn" onClick={() => window.location.href = 'https://www.linkedin.com/in/abhishekvofficial-718644237/'}>Hire Me</button>
              <a href="Abhishek_Vairagar_BE_2023(new).pdf">
                <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
              </a>
            </div>
            <div className="social_icons">
              <div className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/abhishekvofficial-718644237/'}><i className="uil uil-linkedin-alt"></i></div>
              <div className="icon" onClick={() => window.location.href = 'https://github.com/abhioffical08'}><i className="uil uil-github-alt"></i></div>
              <div className="icon" onClick={() => window.location.href = 'https://www.instagram.com/vairagarabhi_008?utm_source=qr&igsh=NnM3NHo0cW1mcnBj'}><i className="uil uil-instagram"></i></div>
              <div className="icon" onClick={() => window.location.href = 'https://dribbble.com/Official_abhi08'}><i className="uil uil-dribbble"></i></div>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src="black.png" alt="avatar" />
            </div>
          </div>
          <div className="scroll-icon-box">
            <a href="#about" className="scroll-btn">
              <i className="uil uil-mouse-alt"></i>
              <p>Scroll Down</p>
            </a>
          </div>
        </section>
{/* ****************************************** */}
        <section className="section" id="about">
          <div className="top-header">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="about-info">
                <h3>My introduction</h3>
                <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                  frameworks and libraries,which allows me to implement interactive features.
                  Additionally, I have Internship experirence with websites management systems.
                </p>
                <div className="about-btn">
                  <a href="Abhishek_Vairagar_BE_2023(new).pdf">
                    <button className="btn">Download CV <i className="uil uil-import"></i></button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Front-End</h3>
                </div>
                <div className="skills-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Bootstrap</span>
                  <span>TypeScript</span>
                  <span>AngularJs</span>
                  <span>React</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Back-End</h3>
                </div>
                <div className="skills-list">
                  <span>Node.js</span>
                  <span>Java</span>
                  <span>Python</span>
                  <span>PHP</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Database</h3>
                </div>
                <div className="skills-list">
                  <span>MySQL</span>
                  <span>SQL Server</span>
                  <span>MongoDB</span>
                  <span>Postgres</span>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* *********************************************** */}
        <section className="section" id="projects">
          <div className="top-header">
            <h1>My Projects</h1>
          </div>
          <div className="project-box">
            <h3>Project Experience</h3>
            <p>Details about your projects.</p>
          </div>
          <div className="project-box">
            <h3>Another Project</h3>
            <p>Details about another project.</p>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="top-header">
            <h1>Contact Me</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="contact-info">
                <h3>Let's talk about everything!</h3>
                <p>Contact me to discuss your project or just say hello!</p>
              </div>
            </div>
            <div className="col">
              <form action="https://formspree.io/f/xnqkgdpo" method="POST">
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-control">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <div className="form-control">
                  <button type="submit" className="btn blue-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social_icons">
              <div className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/abhishekvofficial-718644237/'}><i className="uil uil-linkedin-alt"></i></div>
              <div className="icon" onClick={() => window.location.href = 'https://github.com/abhioffical08'}><i className="uil uil-github-alt"></i></div>
              <div className="icon" onClick={() => window.location.href = 'https://www.instagram.com/vairagarabhi_008?utm_source=qr&igsh=NnM3NHo0cW1mcnBj'}><i className="uil uil-instagram"></i></div>
              <div className="icon" onClick={() => window.location.href = 'https://dribbble.com/Official_abhi08'}><i className="uil uil-dribbble"></i></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Abhishek Vairagar. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
