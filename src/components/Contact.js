import React from 'react';

class Contact extends React.Component {
    
    render () {
        
        return (
            <section id="contact" className="container-full">
              <div class="container">
                <h2 class="section-title paths b-bot-hi2">Contact</h2>
                <div class="contact-wrapper load-hidden">
                  <p class="contact-wrapper__text">If you are interested, feel free to contact me and ask my some questions.</p>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    class="cta-btn cta-btn--resume"
                    href="mailto:frans.dressler@gmx.de"
                    >Send me an Email
                    </a>
                </div>
              </div>
            </section>
        )
    }
}

export default Contact;