import React from "react";
import MusicCover from "../../public/GOOD.jpg";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

 function Music () {

    return (
        <div>
            <div className="flex flex-col md:flex-row-reverse gap-2 md:h-[800px]">
                <div className="border-2 md:w-1/2 flex flex-col justify-center  p-5">
                    <div className="flex flex-col ">
                        <h2 className="text-3xl text-center md:text-4xl text-bluegreen">Check Out My Latest Single</h2>
                        <div className="mx-auto">
                            <Link href='https://jaiquez.hearnow.com/'><Button text="Learn More"/></Link>
                        </div>
                    </div>
                </div>
                <div className="relative md:w-1/2 bg-bluegreen md:bg-transparent  border-2 flex justify-center md:items-center md:justify-normal ">
                    <div className="border-8 mx-auto">
                        <Image src={MusicCover} className="-mt-10 md:mt-0 mx-auto" alt="Project name" />
                    </div>
                </div>
               
            </div>
            <div className="w-5/6 p-4">
                <h3 className="text-4xl md:text-6xl">Like my music? You can JOIN the family.   <span className="inline-block"><Button text="Welcome to me!"/></span></h3>
            </div>
        </div>
    )
}

export default Music;