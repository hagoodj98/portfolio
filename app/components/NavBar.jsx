'use client';

import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (

      <nav>
        <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/work">Work</Link> 
                <ul>
                    <li><Link href="/work/bookblog">Book Blog help</Link></li>
                    <li><Link href="/work/l4d">GameSite</Link></li>
                    <li><Link href="/work/crocs">Crocs</Link></li> 
                    <li><Link href="/work//riddles">Riddles</Link></li> 
                    <li><Link href="/work/flippo">Flippo</Link></li> 
                </ul>
            </li>
            <li><Link href="/music">Music</Link></li>
        </ul>
      </nav>
  )
}

export default NavBar;
