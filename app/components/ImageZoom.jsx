'use client';

import React from 'react'
import Zoom from 'next-image-zoom';

const imageZoom = (props) => {
  return (
    <div>
        <Zoom src={props.src} alt={props.alt} responsive="true" />
    </div>
  )
}

export default imageZoom;
