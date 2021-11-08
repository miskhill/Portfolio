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
    <div className="tech-col">
    <div className="contact-info">
    <h3 className="title">Projects</h3>
    </div>
    </div>
    
    

    <Carousel breakPoints={breakPoints}>
      <Card title="Connect 4" href="https://github.com/miskhill/Project1" img="https://i.imgur.com/zAxT5UI.png" text="Classic game built with JavaScript, CSS & HTML" id="connect4"/>
      <Card title="Movie Generator" img="https://i.imgur.com/HjjLtGN.jpg" text="Built with React, Express, JavaScript & Bootstrap"/>
      <Card title="GCW Esports" img="https://i.imgur.com/oAyjrg2.jpg" text="Built with React, Express, MongoDB & Mongoose"/>
      <Card title="Hospitality Hub"img="https://i.imgur.com/l3crfLq.png" text="Built with Python, Django, Postgres, React & Express"/>
    </Carousel>
    </>
  )
}

export default Project