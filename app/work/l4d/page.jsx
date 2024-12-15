import React from "react";
import Image from "next/image";
import persona from '../../../public/persona4.svg'
import personatwo from '../../../public/persona5.svg'
import personathree from '../../../public/persona6.svg'
import SmallCard from '../../components/SmallCard';
import Mockup from "../../../public/l4dmockup.svg" 
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import password from '../../../public/forumpasswordfeature.png';
import responsive from '../../../public/l4d.png'
import Video from '../../components/Video';
import hash from '../../../public/hashingpassword.png'
import ProjectIntro from '../../components/ProjectIntro'
import Personas from "@/app/components/Personas";
import Responsive from "@/app/components/Responsive";
import ImageZoom from "@/app/components/ImageZoom";

 function Left4Dead () {
    const intialwireArray = infoData.initialLeft4Dead;
    const middlewireArray = infoData.middleLeft4Dead;
    const finalwireArray = infoData.finalLeft4Dead;

    return (
        <div className="tw-py-10">
            <ProjectIntro projectname='Redesigned GamingSite' description='The objective of this project was to choose a siter to redesign.The objective of this project was to choose a siter to redesign.The objective of this project was to choose a siter to redesign.The objective of this project was to choose a siter to redesign.' srcname={Mockup} />

            <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
            <div className="tw-container tw-mx-auto tw-my-20">
                <div className=" tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Initial Wireframing </h3>
                       
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row-reverse  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Refined Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Final Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="tw-bg-gradient-to-r tw-from-moreblue tw-to-bluegreen  tw-mt-40 md:tw-mt-0">
                <div className="tw-container tw-mx-auto">
                    <h3 className=" tw-text-5xl md:tw-text-7xl  tw-text-center tw-py-10 tw-text-white">Key Features</h3>
                    <div className="tw-grid tw-grid-cols-1  tw-gap-3 tw-p-5 ">
                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center">
                            <div className="md:tw-w-1/2 tw-py-7">
                                <h3 className="tw-text-white">Password Security</h3>
                                <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!</p>
                            </div>
                            <div className="md:tw-w-1/2">
                                <ImageZoom src={password}/>
                                <ImageZoom src={hash} />
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-col md:tw-flex-row  tw-items-center">
                            <div className="md:tw-w-1/2 tw-py-7">
                                <h3 className="tw-text-white">Sessions and cookies</h3>
                                <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!</p>
                            </div>
                            <div className="md:tw-w-1/2 tw-flex tw-items-center">
                                <Video srclink='../video/cookie_session.webm' />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Responsive repsonsive={responsive} />
            <div className="tw-h-full ">
                <div className="tw-m-auto  md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/L4Dfinalvid.mp4' />
                </div>
            </div>
        </div>
    )
}

export default Left4Dead;

