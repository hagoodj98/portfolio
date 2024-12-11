import React from "react";
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import Character from '../../../public/character.png'
import Image from "next/image";
import him from "../../../public/flippo.svg";

 function Flippo () {
    const storyBoarding = infoData.storyBoarding;
    return (
        <div>
            <h1>Meet Flippo, The Body Builder</h1>
            <Image src={him}/>
            <div>
                <Image src={Character}/>
            </div>
            <div className=" my-72  md:my-5 border-2 h-[600px]">
                <div className=' my-auto '>
                    <Carousel wireframeslides = {storyBoarding}/>
                </div>
            </div>
            <h3>Fun Fact</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi iure velit ipsa quas minus maiores, asperiores eum ipsam eligendi nesciunt atque voluptatum eveniet tenetur amet. Incidunt ad eos ipsam.</p>
            <p>The Joke goes like this:</p>
            <div className="h-full border-2">
                <div className="m-auto w-[300px] md:w-[800px] border-2 h-full ">
                    <Video srclink='../video/fba1-376a-48c9-8b1a-c3ececf9d855.webm' />
                </div>
            </div>
        </div>
    )
}

export default Flippo;