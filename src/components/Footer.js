import React from 'react';

class Footer extends React.Component {
    
    render () {
        
        return (
        <footer class="footer navbar-static-bottom" id="footer">
            <div class="container">
              <div class="social-links">
                <a rel="noreferrer" href="https://www.instagram.com/frans_dressler/" target="_blank">
                  <i class="fa fa-instagram fa-inverse paths"></i>
                </a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/frans-dressler-b52496249/" target="_blank">
                  <i class="fa fa-linkedin fa-inverse paths"></i>
                </a>
                <a rel="noreferrer" href="https://github.com/FransDressler" target="_blank">
                  <i class="fa fa-github fa-inverse paths"></i>
                </a>
              </div>
      
              <hr />
              <p class="footer__text">
                © 2022 - Template developed by Frans Dressler
              </p>

            </div>
          </footer>
        )
    };
}

export default Footer;