import React from 'react'

const Card = (props) => {
  return (
    <div className='p-5'>
      <h3 className='text-9xl'>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Card
