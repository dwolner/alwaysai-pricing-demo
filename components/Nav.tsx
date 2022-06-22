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
    socialLinks: Link[]
}

const Nav: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return (
        <div className='w-full p-2 bg-white shadow'>
            <div className='flex flex-wrap max-w-8xl mx-auto justify-between items-center'>
                <div className='flex'>
                    <Image src='/img/aai-logo-black-text.svg' layout='intrinsic' width={150} height={75} alt='alwaysAI Logo' />
                </div>
                <div className='flex grow justify-center'>
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
                <div className='flex'>
                    <button className='bg-white px-4 py-2.5 mx-1 rounded-lg text-red border-2 border-red text-sm'>
                        Schedule a Demo
                    </button>
                    <button className='bg-red px-4 py-2.5 mx-1 rounded-lg text-white text-sm'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Nav