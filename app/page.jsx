
import React from "react";
import Image from "next/image";
import Button from "./components/Button";
import me from '../public/male-placeholder-image.jpeg'
import Book from "../public/booknotesmockup.svg"
import LeftDead from "../public/l4dmockup.svg" 
import Crocs from "../public/crocsmockup.svg"
import Riddle from "../public/riddlemockup.svg"
import Flippo from "../public/flippo.svg";
import anotherme from '../public/Mask group.png'
import yellowlines from '../public/Group 33.svg'
import ImageZoom from "@/app/components/ImageZoom";


export default function Home() {
    return (
        <main>
            <div className="tw-mb-30">
              <div className="tw--z-40 tw-relative tw-w-full  tw-bg-gradient-to-b tw-h-80 tw-from-moreblue tw-to-bluegreen">
              </div>
              <div className="tw-container tw-mx-auto tw--mt-36">
                  <div className="tw-w-64 tw-border-2 tw-mx-auto">
                    <ImageZoom src={me} alt="this is me"/>
                  </div>
                  <div className="tw-p-6 ">
                    <div className="tw-mx-auto md:tw-w-1/2 tw-flex tw-flex-col tw-items-center">
                      <h1 className="tw-text-6xl  lg:tw-text-7xl tw-text-bluegreen btn-primary">My Portfilio</h1>
                      <p className=" md:tw-text-center md:tw-text-base   ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                      <Button text="Learn More"/>
                    </div>
                  </div>
                </div>
            </div>
            <div className="tw-relative tw-bg-gradient-to-t tw-from-moreblue tw-to-bluegreen tw-mt-16 md:tw-mt-[200px]">
              <div className="tw-container tw-mx-auto tw-relative tw-flex tw-flex-col-reverse lg:tw-flex-row  tw-p-10 md:tw-mt-[10px] md:tw-h-auto ">
                <div className=" tw-flex tw-flex-col tw-py-8 tw-justify-center md:tw-col-span-2 tw-w-full md:tw-w-3/4 md:tw-ml-20">
                  <h2 className="tw-text-3xl md:tw-text-5xl tw-text-white">About Me  </h2>
                  <p className="tw-text-white ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta laboriosam odit, dolore, sint dicta qui sapiente cum temporibus est rerum expedita fuga eligendi optio! Consectetur amet quaerat doloremque quis ipsa.</p>
                </div>
                <div className=" tw-relative tw-w-64  lg:tw-w-fit tw-mx-auto ">
                  <ImageZoom src={anotherme} alt="another photo of me"/>
                </div>
                <Image className="tw-absolute -tw-bottom-40 tw-left-9 md:tw-left-36 tw-w-14 lg:tw-w-16" src={yellowlines} />
              </div>
              
            </div>
            
            <div className="tw-container tw-mx-auto tw-mt-32">
              <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3 tw-w-full ">
                <div className="tw-order-first md:tw-order-none tw-flex tw-justify-center tw-items-center tw-my-auto">
                    <h2 className="tw-text-3xl md:tw-text-5xl tw-mx-auto tw-py-10 tw-text-bluegreen">Works</h2>
                </div>
                <div className="tw-h-[390px] tw-group tw-relative tw-overflow-hidden tw-bg-[url('../public/booknotesmockup.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/work/bookblog">
                        <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                          <h3 className="tw-text-white">BookBlog Project</h3>
                        </div>
                  </a>
                </div>
                <div className="tw-h-[390px] tw-group tw-relative tw-overflow-hidden  tw-bg-[url('../public/crocsmockuplap.svg')] tw-bg-no-repeat tw-bg-center  tw-bg-cover">
                  <a href="/work/crocs">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h3 className="tw-text-white">The Object Project</h3>
                      </div>
                  </a>
                </div>
                <div className="tw-relative tw-overflow-hidden tw-h-[390px] tw-group tw-bg-[url('../public/riddlemockup.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover ">
                  <a href="/work/riddles">
                    <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                      <h3 className="tw-text-white">Riddles Project</h3>
                    </div>
                  </a>
                </div>
                <div className=" tw-h-[390px] tw-group tw-relative tw-overflow-hidden tw-group tw-bg-[url('../public/l4dmockup.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/work/l4d">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h3 className="tw-text-white"> GameSite Project</h3>
                      </div>
                  </a>
                </div>
                <div className="tw-h-[390px] tw-group tw-relative tw-overflow-hidden tw-group tw-bg-[url('../public/flippo.svg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/work/flippo">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h3 className="tw-text-white">Animate Project</h3>
                      </div>
                  </a>
                </div>
                <div className=" tw-h-[390px] tw-group tw-relative tw-overflow-hidden tw-group tw-bg-[url('../public/VinylRecordMockup.jpg')] tw-bg-no-repeat tw-bg-center tw-bg-cover">
                  <a href="/music">
                      <div className="tw-absolute tw-flex tw-justify-center tw-items-center tw-bg-yellow tw-w-full tw-h-full tw-opacity-0 group-hover:tw-opacity-100">
                        <h3 className="tw-text-white">Music Project</h3>
                      </div>
                  </a>
                </div>
               
                <div></div>
                <div></div>
              </div>
              
            </div>
            <div className="tw-w-1/2  tw-ml-auto tw--mt-96 tw-h-96 tw-bg-gradient-to-b tw-from-moreblue tw-to-bluegreen"></div>
            <div className=" tw-my-10 tw-overflow-hidden">
              <div className="  tw-whitespace-nowrap tw-p-3">
                <p className="tw-animate-leftright tw-text-bluegreen tw-text-2xl md:tw-text-3xl lg:tw-text-9xl tw-opacity-25">I Love Design I Love Code I Love Food I Love Video Games I Love Music I Love Design I Love People I Love Food I Love Family I Love It All I Love Design I Love People I Love Food I Love Music I Love Design I Love People I Love Food I Love Family I Love It All</p>
                <p className="tw-text-bluegreen tw-text-2xl md:tw-text-3xl lg:tw-text-9xl tw-animate-rightleft tw-opacity-25">I Love Design I Love People I Love Food  I Love Video Games I Love Music I Love Design I Love People I Love Food I Love Family I Love It All I Love Design I Love People I Love Food I Love Music I Love Design I Love Family I Love It All I Love Food </p>
            </div>
          </div>
              
        </main>
    );
  }