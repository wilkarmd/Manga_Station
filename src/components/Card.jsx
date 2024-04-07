import React from 'react'
import "./Card.css"

function Card({ title = "titulo", description = "descripcion", image }) {
  const cardBackgroundStyle = {
    backgroundImage: image ? `url(${image})` : 'none'
  };

  return (
    <div className='Card' style={cardBackgroundStyle}>
      <div className='title-bar'>
        <h4>{title}</h4>
      </div>
      <div className='description-bar'>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default Card