import React from 'react';
import Tippspiel from '../assets/tippspiel.png';
import Learnist from '../assets/Learnist.png';
import Orion from '../assets/ORION.jpg';
import Ferienhäuser from '../assets/ferienhäuser.png';
import BaumaschinenDressler from '../assets/bau-shop-dr.png';
import FaceRecognition from '../assets/face-recognition.png'
import Gymquiz from '../assets/gymquiz.jpeg';
import MachineLearning from '../assets/machine-learning.jpeg';
import Countdown from '../assets/countdown.png';
import Todolist from '../assets/todolist.png';

class Projects extends React.Component {
    
    render () {
        
        return (
    <section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <h2 class="section-title white-text paths b-bot-hi1">Projects</h2>
          <div class="flex project-card-container">
          <div className='project-card'>
                <img src={Orion} alt="Orion"/>
                <h3>O.R.I.O.N</h3>
                <p>An assisstant for my MacBook that is controlled via Speech. He is able to control multiple apps and do simple tasks on my MacBook. There is currently no public GitHub folder for him. I'm currently experimenting with Retrieval Augmented Generation to give him somewhat of a long term memory.</p>
                <div className="flex link-box">
                </div>
          </div>
          <div className='project-card'>
                <img src={BaumaschinenDressler} alt="Online Shop for small company"/>
                <h3>Baumaschinen & Geräte GmbH Dressler</h3>
                <p>I build an online shop system for a small german construction company. The company owner has its own administrator page where it can add and rework the products for the page.</p>
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/FransDressler/baumachinen-shop"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                    <button class="project-link-btn link-btn-dark"><a href="https://baumachinen-shop.vercel.app/">See Live</a></button>
                </div>
          </div>
          <div className='project-card'>
                <img src={Ferienhäuser} alt="Landing Page for vacation homes on Poel"/>
                <h3> Landingpage for vacation homes</h3>
                <p>I build a landing page for vacation homes with a backend booking system and an administrator page.</p>
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/FransDressler/ferienhaus-poel"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                    <button class="project-link-btn link-btn-dark"><a href="https://ferienhaus-poel.vercel.app/">See Live</a></button>
                </div>
            </div>
            <div className='project-card'>
                <img src={FaceRecognition} alt="Online Shop for small company"/>
                <h3>Face-Recognition</h3>
                <p>I build a website in which you can register and use the link of a foto to detect the faces in it. This side had the purpose to learn more about apis.</p>
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/FransDressler/my_programming_exercises/tree/main/face-recognition"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                    <button class="project-link-btn link-btn-dark"><a href="https://face-recognition-frans.vercel.app/">See Live</a></button>
                </div>
            </div>
          <div className='project-card'>
                <img src={Countdown} alt="Countdown Timer Preview"/>
                <h3>Countdown Timer</h3>
                <p>I build a working countdown timer using React.js and Sass. The Countdown starts when you start the app and resets when you reload the page. It starts at 3 days. I can also change the countdown to a set target date instead of three days but that wasn't the aim for this project.</p>
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/FransDressler/my_programming_exercises/tree/main/launch_countdown_timer"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                    <button class="project-link-btn link-btn-dark"><a href="https://countdown-timer-frans.vercel.app/">See Live</a></button>
                </div>
            </div>
            <div className='project-card'>
                <img src={Todolist} alt="Todo-Website Preview"/>
                <h3>Todo-Website</h3>
                <p>I build a online todo list in which you are able to adde tasks. Delete completed ones and also toggle between light and dark mode. I used Next.js to build this.</p>
                
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/FransDressler/my_programming_exercises/tree/main/todo_app"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                    <button class="project-link-btn link-btn-dark"><a href="https://todolist-frans.vercel.app/">See Live</a></button>
                </div>
            </div>
            <div className='project-card'>
                <img src={Tippspiel} alt="Tippspiel Website"/>
                <h3>Tipping game website</h3>
                <p>Together with a friend I build a tipping website for our school for the soccer worldcup. The website alowed you to bet on different games. The winning price for the best tipper was a cake <br/><br/> Sadly the website is currently offline but will be online again for the next worldcup.</p>
                {/* <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href=""><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                    <button class="project-link-btn link-btn-dark"><a href="">See Live</a></button>
                </div> */}
            </div>

            {/* <div className='project-card'>
                <img src={MachineLearning} alt="Machine Learning"/>
                <h3> AI rt</h3>
                <p>In the year 2022 I build an artificial intelligence together with a friend to try to imitate the hume creation process of art. We focussed on photo to art augmentation.</p>
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/FransDressler/AIrt"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                </div>
            </div> */}

            <div className='project-card'>
                <img src={MachineLearning} alt="Machine Learning"/>
                <h3> Price Predicting Model</h3>
                <p>Here I worked on an Machine Learning Model to predict market Prices. Therefore I build a model with around 95% accuracy which was able to adapt if there was newer data. I was hired to this job and it was my first job experience. Since I was hired I can't publish the code.</p>
            </div>

            {/* <div className='project-card'>
                <img src={Learnist} alt="Learnist Logo"/>
                <h3>Worked as a python tutor</h3>
                <p>I also worked as a python tutor for children. I explained to them the basic concepts of python. The company that hired my was Learnist and I'm still working there.</p>
            </div> */}

            <div className='project-card'>
                <img src={Gymquiz} alt="Gym quiz website"/>
                <h3> Gym Quiz</h3>
                <p>I'm currently also building a quiz app. This project is again together with a friend where I do the frontend and he does the backend.</p>
                <div className="flex link-box">
                    <button class="project-link-btn link-btn-light"><a href="https://github.com/123Gurkensalat/NewCirclesQuiz"><i className="fa fa-github fa-inverse"></i> GitHub</a></button>
                </div>
            </div>






            {/* <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text load-hidden">
                <h3 class="project-wrapper__text-title">Tippspiel Website</h3>
                <div>
                  <p class="mb-4"> Together with a friend I build a tipping website for our school for the soccer worldcup. The website alowed you to bet on different games. The winning price for the best tipper was a cake <br/><br/> Sadly the website is currently offline but will be online again for the next worldcup.</p>
                </div>
                  <a
                  rel="noreferrer"
                  target="_blank"
                  class="cta-btn cta-btn--hero"
                  href="#!"
                >
                  See Live
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  class="cta-btn text-color-main"
                  href="#!"
                >
                  Source Code
                </a> */}
            {/*   </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image load-hidden">
                <a rel="noreferrer" href="#!" target="_blank">
                  <div
                    data-tilt
                    data-tilt-max="4"
                    data-tilt-glare="true"
                    data-tilt-max-glare="0.5"
                    class="thumbnail rounded js-tilt"
                  >
                    <div class="card">
                      <img
                        alt="Project Image"
                        class="img-fluid border-light"
                        src="assets/tippspiel.png"
                      />
                    </div>
                  </div>
                </a>
              </div>*/}
            </div>
          </div> 

        </div>
        </section>
        )
    }
}

export default Projects;