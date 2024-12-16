

import React from 'react'
import Button from '../components/Button'
import background from '../../public/Vector 16.svg'
import Link from 'next/link'

const footer = () => {
  return (
    <main>
      
      <div className="tw-container tw-py-20 tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-items-center  lg:tw-h-[500px] ">
        <div className='tw-flex tw-flex-col tw-items-center tw-p-4 sm:tw-p-16 tw-max-w-5xl'>
          <h2 className='tw-text-4xl md:tw-text-4xl lg:tw-text-7xl tw-text-bluegreen'>Thanks for Visiting</h2>
          <p className='tw-text-base tw-text-center lg:tw-text-2xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita hic reiciendis explicabo corporis, praesentium nostrum! Voluptates, earum maxime quam odit rem elige</p>
          <div>
            <a href="mailto:west00brook@gmail.com"><Button text="Contact Me" /></a>
          </div>
        </div>
      </div>
      <div className='tw-bg-bluegreen'>
        <div className='tw-container tw-mx-auto tw-flex tw-justify-center '>
          <footer className='  tw-justify-center lg:tw-justify-between  tw-py-6  '>
            <p className='tw-text-white'>©  2024 Copyright by Jaiquez. All rights reversed</p>
            <hr />
          </footer>
        </div>
      </div>
     
     
    </main>
  )
}

export default footer
