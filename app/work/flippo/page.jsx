import React from "react";
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import Character from '../../../public/character.png'
import Image from "next/image";
import him from "../../../public/flippo.svg";
import Storyboards from '../../../public/flippostoryboards.png'
 function Flippo () {
    const storyBoarding = infoData.storyBoarding;
    return (
        <div>
            <div className=" tw-relative">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 md:tw-h-[800px]">
                    <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="">
                            <h1 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">Meet Flippo, The Body Builder</h1>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className=" tw-z-40">
                            <Image src={him} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                        </div>
                    </div>
                
                </div>
                <div className="tw-absolute  -tw-z-20 tw-h-96  md:tw-w-1/2 tw-inset-x-0 tw-bottom-0 md:tw-top-0 tw-mr-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
            </div>
            <div className="tw-container tw-mx-auto">
                <h2 className="tw-text-end">.....A character in the making</h2>
                <Image src={Character}/>
            </div>
            <div className="tw-container tw-mx-auto tw-my-24  md:tw-my-5  ">
                <div className=' tw-my-auto '>
                    <h2>StoryBoarding.....</h2>
                    <Image src={Storyboards} />
                </div>
            </div>
            <div className="tw-container tw-mx-auto">
                <h3>Fun Fact</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi iure velit ipsa quas minus maiores, asperiores eum ipsam eligendi nesciunt atque voluptatum eveniet tenetur amet. Incidunt ad eos ipsam.</p>
                <p>The Joke goes like this:</p>
            </div>
            
            <div className="tw-container tw-mx-auto tw-h-full ">
                <div className="tw-m-auto tw-w-[300px] md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/fba1-376a-48c9-8b1a-c3ececf9d855.webm' />
                </div>
            </div>
        </div>
    )
}

export default Flippo;