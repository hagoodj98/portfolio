import React from 'react'

const Card = (props) => {
  return (
    <>
      <h3 className='tw-text-9xl'>{props.title}</h3>
      <p>{props.text}</p>
    </>
  )
}

export default Card
