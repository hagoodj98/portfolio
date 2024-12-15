import React from "react";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Image from "next/image";
import Mockup from "../../../public/crocsmockuplap.svg"
import Flippo from "../../../public/Group 34.png";
import repsonsive from '../../../public/crocsmockup.svg';
import Video from '../../components/Video';
import persona from '../../../public/persona.svg'
import personatwo from '../../../public/persona2.svg'
import personathree from '../../../public/persona3.svg'
import ProjectIntro from '../../components/ProjectIntro'
import Responsive from "@/app/components/Responsive";
import ImageZoom from "@/app/components/ImageZoom";
import Personas from "@/app/components/Personas";

 function Crocs () {
    const intialwireArray = infoData.initialCroc;
    const middlewireArray = infoData.middleCroc;
    const finalwireArray = infoData.finalCroc;

    console.log(middlewireArray);
    

    return (
        <div className="tw-py-10">
            <ProjectIntro projectname='The Object' description='sd' srcname={Mockup} />

            <Personas persona={persona} personatwo={personatwo} personathree={personathree} />
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
            <Responsive repsonsive={repsonsive} />

            <div className="tw-container tw-mx-auto tw-h-full ">
                <div className="tw-m-auto md:tw-w-[800px]  tw-h-full ">
                    <Video srclink='../video/crocsfinalVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Crocs;