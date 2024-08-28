import React from 'react';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Offical Websites</h3>
          {/* <img src="black.png" alt="Avatar" /> */}
          <label>10+ Offical Business Website</label>
          <label>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, dolore autem. Sed, nam, cupiditate aliquam dolor ex aut aliquid officia aspernatur culpa commodi, velit maxime fuga nisi natus eligendi quam.
          </label>
        </div>
        <div className="project-box">
          {/* <i className="uil uil-briefcase-alt"></i> */}
          <i class="uil uil-shopping-cart"></i>
          <h3>E-commerce Websites</h3>
          <label>5+ Advertising Website</label>
          <label>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, dolore autem. Sed, nam, cupiditate aliquam dolor ex aut aliquid officia aspernatur culpa commodi, velit maxime fuga nisi natus eligendi quam.
          </label>
        </div>
        <div className="project-box">
          {/* <i className="uil uil-award"></i> */}
          <i class="uil uil-android-alt"></i>
          <h3>Android Application</h3>
          <label>5+ Web-App Design</label>
          <label>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, dolore autem. Sed, nam, cupiditate aliquam dolor ex aut aliquid officia aspernatur culpa commodi, velit maxime fuga nisi natus eligendi quam.
          </label>
        </div>
      </div>
    </section>
  );
};

export default Projects;
