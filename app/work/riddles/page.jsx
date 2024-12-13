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
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-h-[800px]">
                <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="">
                        <h1 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">Riddles</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative md:tw-w-8/12 tw-bg-bluegreen md:tw-bg-transparent  tw-border-2 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-border-8 tw-z-40">
                        <Image src={Mockup} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                    </div>
                </div>
                <div className="tw-absolute  md:tw-w-1/2 tw-inset-x-0 tw-ml-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
            </div>
            <div className="tw-bg-yellow">
                <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="">
                        <h1 className="tw-text-5xl md:tw-text-7xl tw-text-black">And Their was a Great PERN!</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" tw-my-72 md:tw-my-5 tw-border-2 tw-h-[600px]">
                <div className=' tw-my-auto '>
                    <Carousel wireframeslides = {intialwireArray}/>
                </div>
            </div>
            <div className=" tw-my-72  md:tw-my-5 tw-border-2 tw-h-[600px]">
                <div className=' tw-my-auto '>
                    <Carousel wireframeslides = {finalwireArray}/>
                </div>
            </div>
            <div className="tw-my-56 sm:tw-my-44">
                <div className=" tw-border-2">
                    <Image src={repsonsive} className=" mx-auto" alt="Project name" />
                </div>
            </div>
            <div className="tw-h-full tw-border-2">
                <div className="tw-m-auto tw-w-[300px] md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/RiddlesVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Riddles;