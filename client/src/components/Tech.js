import React from 'react'
//import IconDjango from 'react-devicon/django/line'

const Tech = () => {

  return (

    <section id="technology" className="active">

      <div id="particles-js">
        <div className="tech-col">
          <div className="project">
            <h3 className="title"> Technologies I have used </h3>
          </div>
          <div data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-offset="0" className="tech-icons aos-init aos-animate">
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-express-original-wordmark"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="IconDjango" width={100} height={100}></i>
            <i className="devicon-webpack-plain-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-github-plain-wordmark"></i>
            <i className="devicon-heroku-original colored"></i>
            <i className="devicon-postgresql-plain-wordmark colored"></i>
            <i className="devicon-jquery-plain-wordmark colored"></i>
            <i className="devicon-python-plain-wordmark colored"></i>
            <i className="devicon-mocha-plain"></i>
          </div>
        </div>
      <canvas className="particles-js-canvas-el" width="1654" height="600"></canvas></div>
  </section>


  )
}

export default Tech