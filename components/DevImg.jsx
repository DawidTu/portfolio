import React from 'react'
import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc, imageStyles }) => {
  return (
    <div className={`${containerStyles}`}>
        <Image className={`${imageStyles}`} src={imgSrc} fill priority alt=''/>
    </div>
  )
}

export default DevImg