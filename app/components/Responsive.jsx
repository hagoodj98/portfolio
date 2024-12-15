import React from 'react'
import Image from 'next/image'

const Responsive = (props) => {
  return (
    <div className="tw-container tw-mx-auto tw-my-56 sm:tw-my-44">
                <div >
                    <Image src={props.repsonsive} className=" tw-mx-auto" alt="Project name" />
                </div>
    </div>
  )
}

export default Responsive
