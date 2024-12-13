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
            <div className=" tw-my-72  md:tw-my-5 tw-border-2 tw-h-[600px]">
                <div className=' tw-my-auto '>
                    <Carousel wireframeslides = {storyBoarding}/>
                </div>
            </div>
            <h3>Fun Fact</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi iure velit ipsa quas minus maiores, asperiores eum ipsam eligendi nesciunt atque voluptatum eveniet tenetur amet. Incidunt ad eos ipsam.</p>
            <p>The Joke goes like this:</p>
            <div className="tw-h-full tw-border-2">
                <div className="tw-m-auto tw-w-[300px] md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/fba1-376a-48c9-8b1a-c3ececf9d855.webm' />
                </div>
            </div>
        </div>
    )
}

export default Flippo;