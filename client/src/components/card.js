import React from 'react'

const Card = ({ title, img , text}) => {
  return (
    <>
    <div className="card">
      <img className="card-img-top"src={img} alt="project img" width="200px" height="130px"></img>
      <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="card-text">{text}</div>
      <button className="btn btn-primary">Go to Project</button>
      <button className="btn btn-primary">Go to ReadMe</button>
      </div>
    </div>
    </>
  )
  
}

export default Card