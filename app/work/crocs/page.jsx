import React from "react";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Image from "next/image";
import Mockup from "../../../public/crocsmockup.svg"
import Flippo from "../../../public/Group 34.png";
import repsonsive from '../../../public/crocs.png';
import Video from '../../components/Video';
 function Crocs () {
    const intialwireArray = infoData.initialCroc;
    const middlewireArray = infoData.middleCroc;
    const finalwireArray = infoData.finalCroc;

    return (
        <div>
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-h-[800px]">
                <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="">
                        <h1 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">The Object</h1>
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
            <div>
                <div className="tw-grid tw-grid-cols-2 tw-justify-items-center">
                    <h3>Personas</h3>
                    <Image src={Flippo} className="tw--mt-10 md:tw-mt-0 " alt="Project name" />
                    <Image src={Flippo} className="tw--mt-10 md:tw-mt-0 " alt="Project name" />
                    <Image src={Flippo} className="tw--mt-10 md:tw-mt-0" alt="Project name" />
                </div>
            </div>
            <div>
                <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">React</h3>
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-border-2 tw-h-[600px]">
                    <div className="tw-bg-yellow md:tw-w-4/12 tw-p-4 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">Initial Wireframing</h3>
                        <p className="tw-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row-reverse tw-my-72 tw-border-2 tw-h-[600px]">
                    <div className="tw-bg-yellow md:tw-w-4/12  tw-p-4 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">Refined Wireframing</h3>
                        <p className="tw-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex flex-col md:tw-flex-row tw-border-2 tw-h-[600px]">
                    <div className="tw-bg-yellow md:tw-w-4/12 tw-p-4 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">Final Wireframing</h3>
                        <p className="tw-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-my-56 sm:tw-my-44">
                <div className=" tw-border-2">
                    <Image src={repsonsive} className=" tw-mx-auto" alt="Project name" />
                </div>
            </div>
            <div className="tw-h-full tw-border-2">
                <div className="tw-m-auto tw-w-[300px] md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/crocsfinalVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Crocs;