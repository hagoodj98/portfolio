import React from "react";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Image from "next/image";
import Mockup from "../../../public/crocsmockup.svg"
import Flippo from "../../../public/Group 34.png";
import repsonsive from '../../../public/crocs.png';
import Video from '../../components/Video';
import persona from '../../../public/persona.svg'
import personatwo from '../../../public/persona2.svg'
import personathree from '../../../public/persona3.svg'
 function Crocs () {
    const intialwireArray = infoData.initialCroc;
    const middlewireArray = infoData.middleCroc;
    const finalwireArray = infoData.finalCroc;

    console.log(middlewireArray);
    

    return (
        <div className="tw-py-10">
            <div className=" tw-relative">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-h-[800px]">
                    <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="">
                            <h1 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">The Object</h1>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className=" tw-z-40">
                            <Image src={Mockup} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                        </div>
                    </div>
                    
                </div>
                <div className="tw-absolute  -tw-z-20 tw-h-96  md:tw-w-1/2 tw-inset-x-0 tw-bottom-0 md:tw-top-0 tw-ml-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
            </div>
            <div className="tw-container tw-mx-auto md:tw-mt-16">
                <div className="tw-grid  tw-grid-cols-1 gap-3 md:tw-grid-cols-2 tw-justify-items-center">
                    <div className="tw-py-10 md:tw-py-0 tw-flex tw-items-center">
                        <h3 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">Personas</h3>
                    </div>
                    <Image src={persona} className=" " alt="Project name" />
                    <Image src={personatwo} className="" alt="Project name" />
                    <Image src={personathree} className="" alt="Project name" />
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-my-20">
            
                <div className="tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px]">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t md:tw-w-4/12  tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Initial Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row-reverse tw-mt-40 md:tw-mt-0  tw-h-[600px]">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Refined Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-mt-40 md:tw-mt-0   tw-h-[600px]">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Final Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-my-56 sm:tw-my-44">
                <div className=" ">
                    <Image src={repsonsive} className=" tw-mx-auto" alt="Project name" />
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-h-full ">
                <div className="tw-m-auto  tw-h-full ">
                    <Video srclink='../video/crocsfinalVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Crocs;