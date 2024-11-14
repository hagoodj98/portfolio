import React from "react";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import background from '../../../public/Vector 12 (4).svg';
import me from '../../../public/male-placeholder-image.jpeg'
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Video from '../../components/Video';

import repsonsive from '../../../public/images.png';

 function Riddles () {
    const intialwireArray = infoData.initialRiddle;
    const finalwireArray = infoData.finalRiddle;

    return (
        <div>
            <div className="mb-40">
              <div className=" relative w-full border-2">
                <Image src={background}  alt="this is a background"/>
                <div className=" grid md:grid-cols-2  absolute top-0">
                  <div>
                    <div>
                      <Image src={me} alt="this is me"/>
                    </div>
                  </div>
                  <div className="p-6 md:p-5 lg:p-10 xl:p-20  sm:max-w-96 lg:max-w-none -mt-16 sm:-mt-48  md:mt-0 bg-moreblue md:bg-transparent">
                    <div>
                      <h1 className="text-5xl md:text-7xl text-white">Portfilio</h1>
                      <p className="md:text-base lg:text-xl xl:text-3xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                      <Button text="Learn More"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-yellow">
                <div className="border-2 md:w-1/2 flex flex-col justify-center p-5">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl text-black">And Their was a Great PERN!</h1>
                        <div className="w-28"><hr className="h-2 bg-black"/> </div>
                        <div>
                            <p className="md:text-base lg:text-xl xl:text-3xl text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" my-72 md:my-5 border-2 h-[600px]">
                <div className=' my-auto '>
                    <Carousel wireframeslides = {intialwireArray}/>
                </div>
            </div>
            <div className=" my-72  md:my-5 border-2 h-[600px]">
                <div className=' my-auto '>
                    <Carousel wireframeslides = {finalwireArray}/>
                </div>
            </div>
            <div className="my-56 sm:my-44">
                <div className=" border-2">
                    <Image src={repsonsive} className=" mx-auto" alt="Project name" />
                </div>
            </div>
            <div className="h-96 border-2">
                <div className="m-auto w-[300px] md:w-[800px] border-2 h-full ">
                    <Video />video
                </div>
            </div>
        </div>
    )
}

export default Riddles;