import React, { useState } from 'react'
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

const Nav: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const linkDisplay = () => {
        return props.siteLinks.map((item) => {
            return (
                <div key={item.link} className='pl-6 text-sm'>
                    <Link href={item.link}>
                        <p className='hover:text-red cursor-pointer group flex items-center'>
                            {item.text}
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' className='ml-4 h-5 w-5 transition-all opacity-0 group-hover:opacity-100'>
                                <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path>
                            </svg>
                        </p>
                    </Link>
                </div>
            )
        })
    }
    const navActions = () => {
        return (
            <>
                <button className='bg-white px-4 p-2.5 mx-1 rounded-lg text-red hover:text-darkred border-2 border-red hover:border-darkred text-xs'>Schedule a Demo</button>
                <button className='bg-red hover:bg-darkred px-4 p-2.5 mx-1 rounded-lg text-white text-xs'>Sign Up</button>
            </>
        )
    }
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    return (
        <div className='w-full p-2 bg-white shadow'>
            <div className='flex max-w-8xl mx-auto justify-between items-center'>
                <div className='flex xl:flex-1'>
                    <Image src='/img/aai-logo-black-text.svg' layout='intrinsic' width={150} height={75} alt='alwaysAI Logo' />
                </div>
                <div className='hidden md:flex xl:flex-1 justify-center'>{linkDisplay()}</div>
                <div className='flex md:hidden justify-end'>
                    <button className='p-4' onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true' className='h-8 w-8 text-headerGray'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
                <div className='hidden md:flex xl:flex-1 justify-end'>{navActions()}</div>
            </div>
            {mobileNavOpen && (
                <div className='flex md:hidden flex-wrap justify-between items-center overflow-hidden'>
                    <div className='basis-full flex flex-grow justify-center p-2'>{navActions()}</div>
                    <div className='basis-full flex justify-center p-2 max-w-full'>{linkDisplay()}</div>
                </div>
            )}
        </div>
    )
}
export default Nav
