import React from "react";
import MusicCover from "../../public/GOOD.jpg";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

 function Music () {

    return (
        <div>
            <div className="tw-flex tw-flex-col md:tw-flex-row-reverse tw-gap-2 md:tw-h-[800px]">
                <div className="tw-border-2 md:tw-w-1/2 tw-flex tw-flex-col tw-justify-center  tw-p-5">
                    <div className="tw-flex tw-flex-col ">
                        <h2 className="tw-text-3xl tw-text-center md:tw-text-4xl tw-text-bluegreen">Check Out My Latest Single</h2>
                        <div className="tw-mx-auto">
                            <Link href='https://jaiquez.hearnow.com/'><Button text="Learn More"/></Link>
                        </div>
                    </div>
                </div>
                <div className="tw-relative md:tw-w-1/2 tw-bg-bluegreen md:tw-bg-transparent  tw-border-2 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
                    <div className="tw-border-8 tw-mx-auto">
                        <Image src={MusicCover} className="tw--mt-10 md:tw-mt-0 tw-mx-auto" alt="Project name" />
                    </div>
                </div>
               
            </div>
            <div className="tw-w-5/6 tw-p-4">
                <h3 className="tw-text-4xl md:tw-text-6xl">Like my music? You can JOIN the family.   <span className="tw-inline-block"><Button text="Welcome to me!"/></span></h3>
            </div>
        </div>
    )
}

export default Music;