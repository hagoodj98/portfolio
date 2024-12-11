import React from "react";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import background from '../../../public/Vector 12 (4).svg';
import me from '../../../public/male-placeholder-image.jpeg'
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import Mockup from "../../../public/riddlemockup.svg"
import  infoData  from "../../components/datai";
import Video from '../../components/Video';

import repsonsive from '../../../public/public api.png';

 function Riddles () {
    const intialwireArray = infoData.initialRiddle;
    const finalwireArray = infoData.finalRiddle;

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-2 md:h-[800px]">
                <div className="border-2 md:w-1/2 flex flex-col justify-center p-5">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl text-bluegreen">Riddles</h1>
                        <div className="w-28"><hr className="h-2 bg-bluegreen"/> </div>
                        <div>
                            <p className="md:text-base lg:text-xl xl:text-3xl text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
                <div className="relative md:w-8/12 bg-bluegreen md:bg-transparent  border-2 flex justify-center md:items-center md:justify-normal ">
                    <div className="border-8 z-40">
                        <Image src={Mockup} className="-mt-10 md:mt-0 mx-auto" alt="Project name" />
                    </div>
                </div>
                <div className="absolute  md:w-1/2 inset-x-0 ml-auto  md:h-[800px] bg-bluegreen">
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
            <div className="h-full border-2">
                <div className="m-auto w-[300px] md:w-[800px] border-2 h-full ">
                    <Video srclink='../video/RiddlesVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Riddles;