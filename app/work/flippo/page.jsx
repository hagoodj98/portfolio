import React from "react";
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import Character from '../../../public/character.png'
import Image from "next/image";
import him from "../../../public/flippo.svg";
import Storyboards from '../../../public/flippostoryboards.png'
import lightbulb from '../../../public/HUZwDRn.png'
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
                            <Image src={him} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Flippo himself" />
                        </div>
                    </div>
                
                </div>
                <div className="tw-absolute  -tw-z-20 tw-h-96  md:tw-w-1/2 tw-inset-x-0 tw-bottom-0 md:tw-top-0 tw-mr-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
            </div>
            <div className="tw-container tw-mx-auto">
                <div className=" tw-my-10">
                    <h2 className="tw-text-end tw-text-2xl md:tw-text-4xl tw-text-bluegreen">.....A character in the making</h2>
                    <Image src={Character} alt="Flippo from all angles"/>
                </div>
                <div className=" tw-mx-auto tw-my-24    ">
                    <div className=' tw-my-auto '>
                        <h2 className="tw-text-2xl md:tw-text-4xl tw-text-bluegreen">StoryBoarding.....</h2>
                        <Image src={Storyboards} alt="storyboards"/>
                    </div>
                </div>
                <div className=" tw-mx-auto tw-my-24 tw-w-1/2">
                    <h3 className="tw-text-center tw-text-moreblue">"Hello World I am Flippo."</h3>
                    <div className="tw-w-28 tw-mx-auto">
                        <Image src={lightbulb} />
                    </div>
                    <p className="tw-text-center"><span className="font-semibold">Interesting fact:</span> Flippo parties at least 12 times a week and works out about 15 hours everyday of the week.</p>
                </div>
                
                <div className="tw-container tw-mx-auto  tw-h-full ">
                    <div className="tw-mx-auto  md:tw-w-[800px] tw-border-2  tw-h-full ">
                        <Video srclink='../video/fba1-376a-48c9-8b1a-c3ececf9d855.webm' />
                        <div>
                            <p>The Joke goes like this:</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Flippo;