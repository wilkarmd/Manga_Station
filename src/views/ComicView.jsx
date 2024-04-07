import React from 'react'

function ComicView({comics}) {
  
  return (
    <div>
      <h1>{comics.name}</h1>
      <h2>{comics.description}</h2>
      <img src={comics.image} alt={comics.name + " image"} />
    </div>
  )
}

export default ComicView