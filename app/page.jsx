
import React from "react";
import Image from "next/image";
import Button from "./components/Button";
import background from '../public/Vector 12 (4).svg'
import me from '../public/male-placeholder-image.jpeg'
import anotherme from '../public/Mask group.png'
import yellowlines from '../public/Group 33.svg'
import Flippo from "../public/Group 34.png";

export default function Home() {
    return (
        <main>
            <div className="mb-40  ">
              <div className=" relative w-full border-2  ">
                <Image src={background}  alt="this is a background"/>
                <div className=" grid md:grid-cols-2  absolute top-0">
                  <div >
                    <div>
                      <Image src={me} alt="this is me"/>
                    </div>
                  </div>
                  <div className="p-6 md:p-5 lg:p-10 xl:p-20  sm:max-w-96 lg:max-w-none -mt-16 sm:-mt-48  md:mt-0 bg-moreblue md:bg-transparent">
                    <div>
                      <h1 className="text-5xl md:text-7xl text-white">Portfilio</h1>
                      <p className="md:text-base lg:text-xl xl:text-3xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                      <Button text="Learn More"/>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative grid md:grid-cols-3 p-10 mt-[500px] md:mt-[10px] bg-gradient-to-t from-moreblue to-bluegreen md:h-auto ">
              <div className=" md:order-first flex flex-col md:col-span-2 justify-center p-1 w-full md:w-3/4 md:ml-20">
                <h2 className="text-5xl md:text-7xl text-white">About Me</h2>
                <h3 className="text-white">The One and Only</h3>
                <p className="text-white lg:text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta laboriosam odit, dolore, sint dicta qui sapiente cum temporibus est rerum expedita fuga eligendi optio! Consectetur amet quaerat doloremque quis ipsa.</p>
              
              </div>
              
              <div className="order-first relative w-64 md:w-fit mx-auto md:mr-10">
                <Image src={anotherme} alt="another photo of me"/>
                
              </div>
            </div>
            <div className="mt-32">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 w-full border-2">
                <Image src={Flippo} className="mx-auto" alt="Project name" />
                <Image src={Flippo} className="mx-auto" alt="Project name" />
                <div className="order-first md:order-none flex justify-center align-middle my-auto">
                    <h2 className="m">Works</h2>
                </div>
                <Image src={Flippo} className="mx-auto" alt="Project name" />
                <Image src={Flippo} className="mx-auto" alt="Project name" />
                <Image src={Flippo} className="mx-auto" alt="Project name" />
                <div></div>
                <Image src={Flippo} className="mx-auto" alt="Project name" />
                <div></div>
              </div>
              <div className="w-1/2 border-2 ml-auto -mt-96 h-96 bg-gradient-to-b from-moreblue to-bluegreen"></div>
            </div>
            <div className=" bg-orange overflow-hidden">
              <div className="  whitespace-nowrap p-3">
                <p className="animate-leftright text-white md:text-xl lg:text-2xl">I Love Design I Love People I Love Food I Love Music I Love Design I Love People I Love Food I Love Family I Love It All I Love Design I Love People I Love Food I Love Music I Love Design I Love People I Love Food I Love Family I Love It All</p>
                <p className="text-white md:text-xl lg:text-2xl animate-rightleft">I Love Design I Love People I Love Food I Love Music I Love Design I Love People I Love Food I Love Family I Love It All I Love Design I Love People I Love Food I Love Music I Love Design I Love Family I Love It All I Love Food </p>
            </div>
          </div>
              
        </main>
    );
  }