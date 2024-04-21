import React from 'react';
import Typewriter from "typewriter-effect";

class Home extends React.Component {
    
    render () {
        
        return (
            <section id="hero" class="jumbotron flex dir-col">
              <div class="container">
                <h1 class="hero-title load-hidden">
                  Hi, my name is <br class="mobile-break"/><span data-text="Frans Dressler" class="hero-name glitch">Frans Dressler</span>
                  <br/>
                  <Typewriter
                  options={{
                    strings: [
                      '<span style="color: #FB2576;filter: drop-shadow(0 1px 3px);">Frontend Developer</span>',
                      '<span style="color: #31E1F7;filter: drop-shadow(0 1px 3px);">Machine Learning Engeneer</span>',
                      '<span style="color: #ffbe0b;filter: drop-shadow(0 1px 3px);">Physicist</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
                </h1>
                <p class="hero-cta load-hidden">
                  <a rel="noreferrer" class="btn-glitch paths" glitch-content="Know more" href="/about"
                    >Know more</a>
                </p>
              </div>
              <a rel="noreferrer" href="#footer" class="back-to-top">
                <i class="fa fa-angle-down fa-3x paths" aria-hidden="true"></i>
              </a>
            </section>
        )
    }
}

export default Home;