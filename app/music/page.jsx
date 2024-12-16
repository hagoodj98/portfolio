import React from "react";
import MusicCover from "../../public/GOOD.jpg";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import ImageZoom from "../components/ImageZoom";
 function Music () {

    return (
        <div className="tw-py-10">
            <div className=" tw-relative">
                <div className="tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 md:tw-h-[800px]">
                    <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center tw-p-5">
                        <div className=" ">
                            <h1 className="tw-text-3xl md:tw-text-5xl tw-text-bluegreen ">Check Out My Latest Single</h1>
                            <div className="tw-mx-auto">
                                <Link href='https://jaiquez.hearnow.com/'><Button text="Learn More"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="tw-relative md:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                        <div className="">
                            <ImageZoom src={MusicCover} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Flippo himself" />
                        </div>
                    </div>
                </div>
                <div className="tw-absolute  -tw-z-20 tw-h-96  md:tw-w-1/2 tw-inset-x-0 tw-bottom-0 md:tw-top-0 tw-mr-auto  md:tw-h-[800px] tw-bg-bluegreen">
                </div>
            </div>
            
            <div className="tw-container tw-mx-auto tw-flex tw-justify-center tw-py-24 ">
                <h3 className="tw-text-5xl md:tw-text-7xl tw-text-bluegreen ">Like my music? You can  <span><a href="" className="tw-no-underline tw-text-orange">JOIN the family</a></span></h3>
            </div>
        </div>
    )
}

export default Music;