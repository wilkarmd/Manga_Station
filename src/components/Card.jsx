import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

function Card({ title = "titulo", description = "descripcion", image }) {
  const cardBackgroundStyle = {
    backgroundImage: image ? `url(${image})` : 'none'
  };

  return (
    <Link to={{pathname: `/${title}`}}>
    <div className='Card' style={cardBackgroundStyle}>
      <div className='title-bar'>
        <h4>{title}</h4>
      </div>
      <div className='description-bar'>
        <p>{description}</p>
      </div>
    </div>
    </Link>
  );
}


export default Card