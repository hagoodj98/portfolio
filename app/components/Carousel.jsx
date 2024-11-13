'use client';

import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Flippo from "../../public/Group 34.png";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import  infoData  from "../components/datai"

const CarouselControlled = () => {

    console.log(infoData);
    

  return (
    <>
        <Carousel indicators={false} prevIcon={<span className='text-moreblue'><ArrowBackIosRoundedIcon /></span> } nextIcon={<span className='text-moreblue'><ArrowForwardIosRoundedIcon /></span>} className='md:h-[700px] ' >
            {
                infoData.map((i) => (
                        <Carousel.Item key={i.id} className=' border-2 mt-11 h-[500px]'>
                            <Image src={Flippo} className='mx-auto mt-9'  alt="nothing" text="First slide" />
                            <Carousel.Caption className='absolute bottom-1'>
                                <h3 className='text-black'>{i.subtitle}</h3>
                                <p className='text-black'>{i.caption}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                ))
            }
            
           
        </Carousel>
    </>
  )
}

export default CarouselControlled;


/*

<Carousel.Item className=' border-2 mt-11 h-[500px]'>
                <Image src={Flippo} className='mx-auto mt-9'  alt="nothing" text="First slide" />
                <Carousel.Caption className='absolute bottom-1'>
                <h3 className='text-black'>First slide label</h3>
                <p className='text-black'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            */