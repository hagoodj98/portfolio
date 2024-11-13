import React from "react";
import Image from "next/image";
import Flippo from "../../../public/Group 34.png";
import SmallCard from '../../components/SmallCard';

 function Left4Dead () {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-2 md:h-[800px]">
                <div className="border-2 md:w-1/2 flex flex-col justify-center p-5">
                    <div className="">
                        <h1 className="text-5xl md:text-7xl text-bluegreen">Redesign Gaming Site</h1>
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
            <div className="bg-gradient-to-r from-moreblue to-bluegreen my-10">
                <h3 className=" text-5xl text-center p-2 text-white">Key Features</h3>
                <div className="grid  lg:grid-cols-3 gap-3 p-5 ">
                    <SmallCard  subtitle="01" smallcardtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!"/>
                    <SmallCard  subtitle="02" smallcardtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!"/>
                    <SmallCard  subtitle="03" smallcardtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa perspiciatis labore cupiditate reiciendis accusamus magnam quas cumque ea sint velit molestias minima, numquam sed beatae blanditiis eligendi, totam mollitia!"/>
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
                
            </div>
        </div>
    )
}

export default Left4Dead;

