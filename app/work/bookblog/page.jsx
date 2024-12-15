import React from "react";
import Image from "next/image";
import Flippo from "../../../public/perndatabaserelationship.png";
import Database from "../../../public/perndatabase.png";
import NodeExpress from "../../../public/nodeexpress1.png";
import NodeExpress2 from "../../../public/nodeexpress2.png";
import Restful from "../../../public/restfulapi.png";
import Mockup from "../../../public/booknotesmockup.svg"
import Restful2 from "../../../public/resfulapi2.png"
import Card from '../../components/Card';
import Carousel from "@/app/components/Carousel";
import repsonsive from '../../../public/book notes.png'
import Video from '../../components/Video';
import  infoData  from "../../components/datai";
import ProjectIntro from '../../components/ProjectIntro'
import Responsive from "@/app/components/Responsive";
import ImageZoom from "@/app/components/ImageZoom";

const BookBlog = () => {
 
    const intialwireArray = infoData.bookInitial;
    const middlewireArray = infoData.bookMiddle;
    const finalwireArray = infoData.bookFinal
    
    
    return (
        <div className="tw-py-10">
            <ProjectIntro projectname='Book Blog' description='sd' srcname={Mockup} />
           
            <div className="tw-bg-yellow tw-mt-28 tw-py-20">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="md:tw-w-1/2">
                        <h1 className="tw-text-5xl md:tw-text-7xl tw-text-black">And Their was a Great PERN!</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-black"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-3xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 ">
                <div className="tw-bg-bluegreen tw-text-white tw-text-base tw-p-5">
                    <Card  title="P" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
                <div className="tw-bg-moreblue tw-text-white tw-text-base tw-p-5">
                    <Card  title="E" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
                <div className="tw-bg-yellow tw-text-base tw-p-5">
                    <Card  title="R" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
                <div className="tw-bg-orange tw-text-white tw-text-base tw-p-5">
                    <Card  title="N" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?"/>
                </div>
            </div>
           
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-10">
                <div className="tw-border-2 lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h1 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen">Postgres</h1>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-2xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-w-full tw-flex tw-flex-col tw-gap-3  tw-mx-auto ">
                        <ImageZoom src={Flippo} alt="database relationship"/>
                        <br />
                        <ImageZoom src={Database}  alt="data being sent to the database "/>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 ">
                <div className="tw-border-2 tw-bg-orange  lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                    <div className="tw-py-10">
                        <h3 className="tw-text-5xl md:tw-text-7xl tw-text-white">Express and NodeJS</h3>
                        <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                        <div>
                            <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-2xl tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
                <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto ">
                        <ImageZoom src={NodeExpress}/>
                        
                        <ImageZoom src={NodeExpress2}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 md:tw-h-[800px]">
                    <div className=" md:tw-w-1/2 lg:tw-w-8/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className="tw-py-10 md:tw-py-0">
                            <h3 className="tw-text-5xl md:tw-text-4xl tw-text-orange">RestFul API</h3>
                            <div className="tw-w-28"><hr className="tw-h-2 tw-bg-bluegreen"/> </div>
                            <div>
                                <p className="md:tw-text-base lg:tw-text-xl xl:tw-text-2xl tw-text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-w-1/2 lg:tw-w-4/12   tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className=" tw-flex tw-flex-col tw-gap-3 tw-mx-auto tw-z-40">
                            <ImageZoom src={Restful} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                            <br />
                            <ImageZoom src={Restful2} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw-container tw-mx-auto">
                <h3 className="tw-text-center tw-py-10 md:tw-py-0 tw-text-5xl md:tw-text-7xl md:tw-my-24 tw-text-moreblue">Front-End</h3>
                <div className="tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px]">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Initial Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row-reverse  tw-h-[600px] tw-mt-60 md:tw-mt-0">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12   tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Refined Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto  '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="tw-flex tw-flex-col md:tw-flex-row  tw-h-[600px] tw-mt-60 md:tw-mt-0">
                    <div className="tw-from-moreblue tw-to-bluegreen tw-bg-gradient-to-t  md:tw-w-4/12 tw-p-6 tw-py-14 md:tw-p-3">
                        <h3 className="tw-text-5xl md:tw-text-4xl md:tw-my-24 tw-text-white">Final Wireframing</h3>
                        <p className="tw-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:tw-w-8/12 tw-my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <Responsive repsonsive={repsonsive} />
            <div className="tw-container tw-mx-auto tw-h-auto ">
                <div className="tw-m-auto  md:tw-w-[800px] tw-border-2 tw-h-full ">
                   <Video srclink='../video/booknotesfinalVID.mp4' /> 
                </div>
            </div>
        </div>
    )
}

export default BookBlog;