import React from 'react';
import Image from "../assets/Frans2.jpg"

class About extends React.Component {
    
    render () {
        
        return (
                <section className="b-bot-hi3" id="about">
                  <div className="about-con">
                    <h2 className="section-title fs-800 paths b-bot-hi3">Let me introduce myself</h2>
                    <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info load-hidden">
                          <p className="about-wrapper__info-text">
                          Hi there! 👋
                          </p>
                          <p className="about-wrapper__info-text">
                          Welcome! I'm Frans Dressler, a Physics major at the Technical University of Munich. With a profound interest in technology and innovation, I am pursuing my studies in a vibrant academic environment that pushes the boundaries of research and development.
                          </p>
                          <p className="about-wrapper__info-text">
                          Outside the classroom, I am passionate about programming. This hobby not only allows me to sharpen my technical skills but also gives me a creative outlet to build and explore new projects. I enjoy the challenge of solving complex problems and the continuous learning that programming affords.
                          </p>
                          <p className="about-wrapper__info-text">
                          My academic journey and personal interests are guided by a commitment to excellence and a curiosity about the digital world. I look forward to connecting with like-minded individuals and exploring opportunities where I can contribute, learn, and grow.
                          </p>
                          <p className="about-wrapper__info-text">
                          Thank you for visiting my page!
                          </p>
                          <a rel="noreferrer" class="btn-glitch paths" glitch-content="See projects" href="/projects"
                    >See projects</a>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__image load-hidden">
                          <div className="card">
                              <img
                                alt="Profile"
                                class="img-fluid"
                                height="auto"
                                src={Image}
                              />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="about-con">
                    <h2 className="section-title fs-800 paths b-bot-hi3">Skillset</h2>
                    <div className="skills-wrapper">
                    <div class="skill-card">
                      <div class="skill-card-info">
                        <p class="title"><i className="fa-brands fa-html5 fa-4x"></i></p>
                      </div>
                    </div>
                    <div class="skill-card">
                      <div class="skill-card-info">
                        <p class="title"><i className="fa-brands fa-css3 fa-4x"></i></p>
                      </div>
                    </div>
                    <div class="skill-card">
                      <div class="skill-card-info">
                        <p class="title"><i className="fa-brands fa-js fa-4x"></i></p>
                      </div>
                    </div>
                    <div class="skill-card">
                      <div class="skill-card-info">
                        <p class="title"><i className="fa-brands fa-python fa-4x"></i></p>
                      </div>
                    </div>
                    <div class="skill-card">
                      <div class="skill-card-info">
                        <p class="title"><i className="fa-brands fa-react fa-4x"></i></p>
                      </div>
                    </div>
                    
                      
                    </div>
                  </div>

                </section>
        )
    }
}

export default About;