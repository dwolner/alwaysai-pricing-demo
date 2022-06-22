import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface Link {
    text?: string
    link?: string
    icon?: string
    backgroundColor?: string
    subLinks?: Link[]
}

const SocialLink: NextComponentType<NextPageContext, {}, Link> = (
    props: Link
) => {
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    return (
        <a href={props.link} key={props.icon} className='mx-2'>
            <button 
                className='group bg-gray-200 rounded-full p-3 pt-3 pb-2' 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...isHovering && {backgroundColor: props.backgroundColor}
                }}
            >
                <Image src={`/svg/${props.icon}.svg`} className='group-hover:invert' layout='intrinsic' width={20} height={15} alt={props.icon} />
            </button>
        </a>
    )
}
export default SocialLink