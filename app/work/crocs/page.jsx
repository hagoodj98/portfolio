import React from "react";
import Carousel from "@/app/components/Carousel";
import  infoData  from "../../components/datai";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import repsonsive from '../../../public/images.png';
import Video from '../../components/Video';
 function Crocs () {
    const intialwireArray = infoData.initialCroc;
    const middlewireArray = infoData.middleCroc;
    const finalwireArray = infoData.finalCroc;

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-2 md:h-[800px]">
                <div className="border-2 md:w-1/2 flex flex-col justify-center p-5">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl text-bluegreen">The Object</h1>
                        <div className="w-28"><hr className="h-2 bg-bluegreen"/> </div>
                        <div>
                            <p className="md:text-base lg:text-xl xl:text-3xl text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                        </div>
                    </div>
                </div>
                <div className="relative md:w-8/12 bg-bluegreen md:bg-transparent  border-2 flex justify-center md:items-center md:justify-normal ">
                    <div className="border-8 z-40">
                        <Image src={Flippo} className="-mt-10 md:mt-0 mx-auto" alt="Project name" />
                    </div>
                </div>
                <div className="absolute  md:w-1/2 inset-x-0 ml-auto  md:h-[800px] bg-bluegreen">
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 justify-items-center">
                    <h3>Personas</h3>
                    <Image src={Flippo} className="-mt-10 md:mt-0 " alt="Project name" />
                    <Image src={Flippo} className="-mt-10 md:mt-0 " alt="Project name" />
                    <Image src={Flippo} className="-mt-10 md:mt-0" alt="Project name" />
                </div>
            </div>
            <div>
                <h3 className="text-5xl md:text-4xl md:my-24 text-black">React</h3>
                <div className="flex flex-col md:flex-row border-2 h-[600px]">
                    <div className="bg-yellow md:w-4/12 p-4 md:p-3">
                        <h3 className="text-5xl md:text-4xl md:my-24 text-black">Initial Wireframing</h3>
                        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:w-8/12 my-auto '>
                        <Carousel wireframeslides = {intialwireArray}/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse my-72 border-2 h-[600px]">
                    <div className="bg-yellow md:w-4/12  p-4 md:p-3">
                        <h3 className="text-5xl md:text-4xl md:my-24 text-black">Refined Wireframing</h3>
                        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:w-8/12 my-auto '>
                        <Carousel wireframeslides = {middlewireArray}/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row border-2 h-[600px]">
                    <div className="bg-yellow md:w-4/12 p-4 md:p-3">
                        <h3 className="text-5xl md:text-4xl md:my-24 text-black">Final Wireframing</h3>
                        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic sapiente voluptatibus accusamus ipsa tenetur, eos impedit saepe exercitationem! Autem debitis dolorem facilis quasi corporis nihil repudiandae facere voluptatem enim.</p>
                    </div>
                    <div className='md:w-8/12 my-auto '>
                        <Carousel wireframeslides={finalwireArray}/>
                    </div>
                </div>
            </div>
            <div className="my-56 sm:my-44">
                <div className=" border-2">
                    <Image src={repsonsive} className=" mx-auto" alt="Project name" />
                </div>
            </div>
            <div className="h-96 border-2">
                <div className="m-auto w-[300px] md:w-[800px] border-2 h-full ">
                    <Video />video
                </div>
            </div>
        </div>
    )
}

export default Crocs;