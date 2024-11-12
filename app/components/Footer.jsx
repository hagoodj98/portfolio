

import React from 'react'
import Button from '../components/Button'
import background from '../../public/Vector 16.svg'
import Link from 'next/link'


const footer = () => {
  return (
    <main>
      <div className=" relative flex flex-col justify-center  bg-gradient-to-t from-moreblue to-bluegreen lg:bg-footer-background bg-contain bg-no-repeat bg-right lg:h-[46rem] border-2">
        <div className='flex flex-col lg:w-1/2 p-4 sm:p-16 max-w-5xl'>
          <h2 className='text-4xl md:text-4xl lg:text-7xl text-sortwhite  lg:text-moreblue'>Thanks for Visiting</h2>
          <p className='text-base lg:text-2xl text-sortwhite lg:text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita hic reiciendis explicabo corporis, praesentium nostrum! Voluptates, earum maxime quam odit rem elige</p>
          <div>
          <a href="mailto:west00brook@gmail.com"><Button text="Contact Me" /></a>
          </div>
        </div>
      </div>
      <div className='container'>
        <footer className='  flex flex-wrap lg:justify-between  py-3  '>
          <p >©  2024 Copyright by Jaiquez. All rights reversed</p>
          <ul className='flex gap-3 '>
            <li><Link className='text-lg no-underline text-black' href='#'>home</Link></li>
            <li><Link className='text-lg no-underline text-black'  href='#'>home</Link></li>
            <li><Link className='text-lg no-underline text-black'  href='#'>home</Link></li>
          </ul>
          <hr />
        </footer>
      </div>
     
    </main>
  )
}

export default footer
