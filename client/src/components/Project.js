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
      <Card number="1" />
      <Card number="2" />
      <Card number="3" />
      <Card number="4" />
    </Carousel>
    </>
  )
}

export default Project