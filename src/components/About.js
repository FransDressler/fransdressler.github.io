import React from 'react';
import Image from "../assets/Frans.jpg"

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
                            I'm a Frontend and Machine Learning developer, and I've been programming for two years now. Though I'm relatively new to this field, I've already worked on a few cool projects, which I'll share on this website soon.
                          </p>
                          <p className="about-wrapper__info-text">
                            Besides coding, I have two favorite pastimes: playing basketball and reading. These hobbies keep me happy and help me see things from different perspectives. I'm living in the north of Germany near Rostock.
                          </p>
                          <p className="about-wrapper__info-text">
                            I love learning new things, and I'm always excited to take on fresh challenges in the world of Frontend and Machine Learning. Let's connect and explore together!
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
                    <div class="skill-card">
                      <div class="skill-card-info">
                        <p class="title"><i className="fa-brands fa-vuejs fa-4x"></i></p>
                      </div>
                    </div>
                      
                    </div>
                  </div>

                </section>
        )
    }
}

export default About;