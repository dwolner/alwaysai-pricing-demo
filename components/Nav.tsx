import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface Link {
    text?: string
    link?: any
    icon?: string
    backgroundColor?: string
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
                                    <p className='hover:text-red cursor-pointer group flex items-center'>
                                        {item.text}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-4 h-5 w-5 transition-all opacity-0 group-hover:opacity-100"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    </p>
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