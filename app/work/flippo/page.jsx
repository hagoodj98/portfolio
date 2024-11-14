import React from "react";
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import Image from "next/image";
import him from "../../../public/Group 34.png";

 function Flippo () {
    const storyBoarding = infoData.storyBoarding;

    return (
        <div>
            <h1>Meet Flippo, The Body Builder</h1>
            <Image src={him}/>
            <div className=" my-72  md:my-5 border-2 h-[600px]">
                <div className=' my-auto '>
                    <Carousel wireframeslides = {storyBoarding}/>
                </div>
            </div>
            <h3>Fun Fact</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi iure velit ipsa quas minus maiores, asperiores eum ipsam eligendi nesciunt atque voluptatum eveniet tenetur amet. Incidunt ad eos ipsam.</p>
            <p>The Joke goes like this:</p>
            <div className="h-96 border-2">
                <div className="m-auto w-[300px] md:w-[800px] border-2 h-full ">
                    <Video />video
                </div>
            </div>
        </div>
    )
}

export default Flippo;