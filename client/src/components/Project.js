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
    <Carousel breakPoints={breakPoints}>
      <Card number="Connect 4" />
      <Card number="Movie Generator" />
      <Card number="GCW Esports" />
      <Card number="Hospitality Hub" />
    </Carousel>
    </>
  )
}

export default Project