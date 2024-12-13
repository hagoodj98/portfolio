import React from "react";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import SmallCard from '../../components/SmallCard';
import Mockup from "../../../public/l4dmockup.svg" 
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import password from '../../../public/forumpasswordfeature.png';
import responsive from '../../../public/l4d.png'
import Video from '../../components/Video';
import hash from '../../../public/hashingpassword.png'

 function Left4Dead () {
    const intialwireArray = infoData.initialLeft4Dead;
    const middlewireArray = infoData.middleLeft4Dead;
    const finalwireArray = infoData.finalLeft4Dead;

    return (
        <div className="tw-py-10">
            <div className=" tw-relative">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-h-[800px]">
                    <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="">
                            <h1 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">Redesign Gaming Site</h1>
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
            <div className="tw-container tw-mx-auto md:tw-mt-0">
                <div className="tw-grid  tw-grid-cols-1 gap-3 md:tw-grid-cols-2 tw-justify-items-center">
                    <div className="tw-py-10 md:tw-py-0 tw-flex tw-items-center">
                        <h3 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen">Personas</h3>
                    </div>
                    <Image src={Flippo} className=" " alt="Project name" />
                    <Image src={Flippo} className="" alt="Project name" />
                    <Image src={Flippo} className="" alt="Project name" />
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-my-20">
                <div className=" tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                    <div className="tw-bg-yellow md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">Initial Wireframing</h3>
                        <p className="tw-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row-reverse  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                    <div className="tw-bg-yellow md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">Refined Wireframing</h3>
                        <p className="tw-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                    <div className="tw-bg-yellow md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-black">Final Wireframing</h3>
                        <p className="tw-text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-bg-gradient-to-r tw-from-moreblue tw-to-bluegreen  tw-mt-40 md:tw-mt-0">
                <div className="tw-container tw-mx-auto">
                    <h3 className=" tw-text-5xl  tw-text-center tw-p-2 tw-text-white">Key Features</h3>
                    <div className="tw-grid tw-grid-cols-1   tw-gap-3 tw-p-5 ">
                        <div className="tw-flex tw-items-center">
                            <div className="tw-w-1/2">
                                <h3 className="tw-text-white">Password Security</h3>
                                <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!</p>
                            </div>
                            <div className="tw-w-1/2">
                                <Image src={password}/>
                                
                                <Image src={hash} />
                            </div>
                        </div>
                        <div className="tw-flex">
                            <div className="tw-w-1/2">
                                <h3 className="tw-text-white">Sessions and cookies</h3>
                                <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!</p>
                            </div>
                            <div className="tw-w-1/2 tw-flex tw-items-center">
                                <Video srclink='../video/cookie_session.webm' />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-my-56 sm:tw-my-44">
                <div >
                    <Image src={responsive} className=" tw-mx-auto" alt="Project name" />
                </div>
            </div>
            <div className="tw-h-full ">
                <div className="tw-m-auto  md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/L4Dfinalvid.mp4' />
                </div>
            </div>
        </div>
    )
}

export default Left4Dead;

