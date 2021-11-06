import React from 'react'

const Card = ({ title, img , text}) => {
  return (
    <>
    <div className="card">
      <img className="card-img-top"src={img} alt="project img" width="200px" height="130px"></img>
      <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="card-text">{text}</div>
      <div className="button-div">
      <button className="btn btn-primary">Visit Project</button>
      <button className="btn btn-primary">Visit ReadMe</button>
      </div>
      </div>
    </div>
    </>
  )
  
}

export default Card