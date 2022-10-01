import React from 'react'

const Card = ({ title, img , text, href, href2 }) => {


  return (
    <>
    <div className="card">
      <div>
      <img className="card-img-top"src={img} alt="project img" width="200px" height="130px"></img>
      </div>
      <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div className="card-text">{text}</div>
      <div className="button-div">
      <button className="btn btn-primary"><a href={href} target="_blank" rel="noreferrer">Visit Project</a></button>
      <button className="btn btn-primary"><a href={href2} target="_blank" rel="noreferrer">Visit ReadMe</a></button>
      <i>i</i>
      </div>
      </div>
    </div>
    </>
  )
  
}

export default Card