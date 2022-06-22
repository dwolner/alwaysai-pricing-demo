import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface Link {
    text: String
    link: String
    icon?: String
    subLinks?: Link[]
}
interface Props {
    siteLinks: Link[]
}

const Nav: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return (
        <div className='w-full p-2 bg-white shadow'>
            <div className='flex max-w-8xl mx-auto justify-between items-center'>
                <div className='flex xl:flex-1'>
                    <Image src='/img/aai-logo-black-text.svg' layout='intrinsic' width={150} height={75} alt='alwaysAI Logo' />
                </div>
                <div className='hidden md:flex xl:flex-1 justify-center'>
                    {props.siteLinks.map(item => {
                        return (
                            <div key={item.link} className='px-6 text-sm'>
                                <Link href={item.link}>
                                    {item.text}
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='flex xl:flex-1 justify-end'>
                    <button className='bg-white md:px-4 p-2.5 mx-1 rounded-lg text-red border-2 border-red text-xs md:text-sm'>
                        Schedule a Demo
                    </button>
                    <button className='bg-red md:px-4 p-2.5 mx-1 rounded-lg text-white text-xs md:text-sm'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Nav