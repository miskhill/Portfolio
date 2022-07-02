import React from 'react'
import Card from './card'
import Carousel from 'react-elastic-carousel'


const Project = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]

  return (
    
    <>
    <div className="tech-div">
    <div className="tech-col">
    <div className="contact-info">
    <h3 className="title" id="project-title">Projects</h3>
    </div>
    </div>
    
    

    <Carousel breakPoints={breakPoints}>
      <Card title="Connect 4" href="https://miskhill.github.io/Project1/" href2="https://github.com/miskhill/Project1#readme" img="https://i.imgur.com/zAxT5UI.png" text="Classic game built with JavaScript, CSS & HTML" id="connect4"/>
      <Card title="Movie Generator" href="https://movieproject2.netlify.app" href2="https://github.com/miskhill/Project-2#readme" img="https://i.imgur.com/HjjLtGN.jpg" text="Built with React, Express, JavaScript & Bootstrap"/>
      <Card title="GCW Esports" href="https://lolfirematches.herokuapp.com/" href2="https://github.com/CosmasC128/Project-3#readme" img="https://i.imgur.com/oAyjrg2.jpg" text="Built with React, Express, MongoDB & Mongoose"/>
      <Card title="Hospitality Hub" href="https://hhub-app.herokuapp.com/" href2="https://github.com/miskhill/Project4#readme" img="https://i.imgur.com/l3crfLq.png" text="Built with Python, Django, Postgres, React & Express"/>
    </Carousel>

    <div>
    <h2 className="h2desc">Project Descriptions</h2>
    <div className="description">
      <div className="projdescription" id="connect">
        <div>
        <h3 className="h3desc">Connect 4</h3>
        </div>
          <li className="list">Classic desktop game</li>
          <li className="list">7 day timeframe</li>
          <li className="list">JavaScript, CSS, HTML</li>
      </div>
      
      <div className="projdescription" id="movie">
      <div>
        <h3 className="h3desc">Random Movie Generator</h3>
      </div>

        <li className="list">Save time deciding what movie you want to watch by randomising your choice.</li>
        <li className="list">React | JavaScript | HTML | CSS</li>
        <li className="list">2 person team- 48 hour timeframe.</li>
        <li className="list">I was responsible for implementing the API and accessing all relevant information.</li>
      </div>
      <div>
        
      </div>
      <div className="projdescription" id="gcw">
        <div>
        <h3 className="h3desc">GCW Esports</h3>
        </div>
        <li className="list">GCW Fire Esports - Quick access to popliar Esport games rated by your peers. </li>
        <li className="list">League of Legends based and themed.</li>
        <li className="list">3 person team with a 10 day timeframe.</li>
        <li className="list">Focus on team dynamics with Git | GitHub version control, merge conflicts.</li>
        <li className="list">I implemented Back-End set up, functionality for likes and views as well as styling with bootstrap and CSS.</li>
      </div>
      <div className="projdescription" id="hhub">
        <div>
        <h3 className="h3desc">Hospitality Hub</h3>
        </div>
        <li className="list">An application to allow Businesses and Employees to register, login, post jobs, apply to jobs and rate each other.</li>
        <li className="list">3 person team with a 10 day timeframe for completion.</li>
        <li className="list">Responsible for implementing the Back-End together with the team and accessing/displaying the profile pages for business and employee with functionality for ratings.</li>
      </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Project