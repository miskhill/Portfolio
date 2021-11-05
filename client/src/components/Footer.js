import React from 'react'

const Footer = () => {

  return (
    <section id="contact-me">
    <footer className="contact-info">
      <h3 className="title"> Contact Me </h3>
      <div
        className="contact">

          <div>
            <a href="mailto: gary.smith80@hotmail.com">
              <i className="far fa-envelope"></i> <h4> Email </h4>
            </a>
          </div>

          <div>
            <a href="https://github.com/miskhill" >
              <i className="fab fa-github"></i> <h4> Github </h4>
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/gary-smith-dev/" >
              <i className="fab fa-linkedin"></i> <h4> LinkedIn </h4>
            </a>
          </div>

      </div>
      <div className="top-arrow">
        <a href="#top">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  </section>
  )
}

export default Footer