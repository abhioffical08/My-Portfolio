import React from "react";

const About = () => {

  const skills = [
      { name: 'HTML', percentage: 90, color: '#0dadec' },
      { name: 'CSS', percentage: 85, color: '#0dadec' },
      { name: 'JavaScript', percentage: 70, color: ' #0dadec' },
      { name: 'React-Js', percentage: 80, color: ' #0dadec' },
      { name: 'Java', percentage: 85, color: ' #0dadec' },
  ];
    
  return (

    <section className="section" id="about">
      <div className="top-header">
        <h1>About <span>Me</span> </h1>
      </div>
      
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My Introduction</h3>
            <p>I am well-versed in HTML, CSS and JavaScript, and other cutting-edge
              frameworks and libraries, which allows me to implement interactive features.
              Additionally, I have internship experience with websites management systems.
            </p>
            <div className="about-btn">
              <a href="Abhishek_Vairagar_BE_2023(new).pdf">
                <button className="btn">Download CV <i className="uil uil-import"></i></button>
              </a>
            </div>
          </div>
        </div>
        <div className="skills-section">
            <h2>Skills</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus veniam neque id enim, non culpa iste quas reprehenderit officia.</p>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="name">
                            <div className="label">{skill.name}</div>
                            <div className="percentage">{skill.percentage}%</div>
                        </div>
                        <div className="bar">
                            <div className="progress" 
                                 style={{ background: skill.color, width: `${skill.percentage}%` }}>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* <div className="col">
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
              <span>Core-JAVA</span>
              <span>JDBC</span>
              <span>JPA With Hibernate</span>
              <span>Spring</span>
              <span>SpringBoot</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>DataBase</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>Postman</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>

  );
};

export default About;
