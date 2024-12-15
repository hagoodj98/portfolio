import React from "react";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import background from '../../../public/Vector 12 (4).svg';
import me from '../../../public/male-placeholder-image.jpeg'
import Button from "../../components/Button";
import Carousel from "@/app/components/Carousel";
import Mockup from "../../../public/riddlemockup.svg"
import  infoData  from "../../components/datai";
import Video from '../../components/Video';
import ProjectIntro from '../../components/ProjectIntro'
import repsonsive from '../../../public/public api.png';
import ImageZoom from "@/app/components/ImageZoom";
import Responsive from "@/app/components/Responsive";

 function Riddles () {
    const intialwireArray = infoData.initialRiddle;
    const finalwireArray = infoData.finalRiddle;

    return (
        <div className="tw-py-10">
            <ProjectIntro projectname='Riddles' description='sd' srcname={Mockup} />

            <div className="tw-container tw-mx-auto md:tw-mt-40">
                <div className="  md:tw-my-5  tw-h-[600px]">
                    <div className=" tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                        <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                            <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Initial Wireframing</h3>
                            <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                        </div>
                        <div className='md:tw-w-8/12 tw-my-auto '>
                            <Carousel wireframeslides = {intialwireArray}/>
                        </div>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row-reverse  tw-h-[600px] tw-mt-40 md:tw-mt-0">
                        <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                            <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Final Wireframing</h3>
                            <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                        </div>
                        <div className='md:tw-w-8/12 tw-my-auto '>
                            <Carousel wireframeslides={finalwireArray}/>
                        </div>
                </div>
            </div>
            
            <Responsive repsonsive={repsonsive} />
            <div className="tw-container tw-mx-auto tw-h-full ">
                <div className="tw-m-auto  md:tw-w-[800px] tw-border-2 tw-h-full ">
                    <Video srclink='../video/RiddlesVID.mp4'/>
                </div>
            </div>
        </div>
    )
}

export default Riddles;