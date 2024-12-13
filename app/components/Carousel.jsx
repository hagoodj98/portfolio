'use client';

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Flippo from "../../public/Group 34.png";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styles from '../styles/home.module.css'

const CarouselControlled = (props) => {

  return (
    <>
        <Carousel indicators={false} prevIcon={<span className='tw-text-moreblue'><ArrowBackIosRoundedIcon /></span> } nextIcon={<span className='tw-text-moreblue'><ArrowForwardIosRoundedIcon /></span>} className='md:tw-h-[700px] ' >
            {
                props.wireframeslides?.map(piece => (
                        <Carousel.Item key={piece.id} className='  tw-mt-11 tw-h-[500px]'>
                           <div className={styles.background} style={{backgroundImage: `url(${piece.image})`}} >

                           </div>
                        </Carousel.Item>
                ))
            }
        </Carousel>
    </>
  )
}

export default CarouselControlled;


/*

  <Carousel.Caption className='tw-absolute tw-right-1'>
                                <h3 className='tw-text-black'>{piece.subtitle}</h3>
                                <p className='tw-text-black'>{piece.caption}</p>
                            </Carousel.Caption>
                             <Image src={piece.image} width= '500' height='100' className='tw-mx-auto tw-mt-9'  alt="nothing" text="First slide" />
            */