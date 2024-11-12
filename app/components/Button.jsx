'use client';

import React from 'react'
import Button from '@mui/material/Button';

const ButtonReveal = (props) => {
  console.log(props);
  
  return (
    <div>
      <Button  className='bg-orange text-white' >{props.text}</Button>
    </div>
  )
}

export default ButtonReveal;
