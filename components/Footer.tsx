import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SocialLink from './SocialLink'

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
    socialLinks: Link[]
}

const Footer: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    const innerLink = (item: Link, first: Boolean) => {
        return (
            <div className='py-2 text-sm'>
                <Link href={item.link}>
                    <p className={`${first ? 'text-gray-700 font-bold' : 'text-gray-500 font-medium'} hover:text-red cursor-pointer group flex items-center`}>
                        {item.text}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-4 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all`"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </p>
                </Link>
            </div>
        )
    }
    return (
        <div className='w-full p-2 bg-white px-4'>
            <div className='flex flex-wrap max-w-8xl mx-auto justify-between border-b-2 py-6'>
                <div className='max-w-sm'>
                    <Image src='/img/aai-logo-black-text.svg' layout='intrinsic' width={150} height={75} alt='alwaysAI Logo' />
                    <p className='leading-6 text-gray-500 font-normal py-4'>
                        alwaysAI is a software company located in San Diego, CA. We make computer vision come alive on the edge - where work and life happen.
                    </p>
                    <div className='py-4'>
                        {props.socialLinks.map(link => <SocialLink key={link.icon} {...link} />)}
                    </div>
                </div>
                {props.siteLinks.map(item => {
                    let first = true
                    return (
                        <div key={item.link} className='px-6 py-6'>
                            {innerLink(item, first)}
                            {item.subLinks && item.subLinks.map(item => {
                                let first = false
                                return (
                                    innerLink(item, first)
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='flex max-w-8xl mx-auto justify-between py-6'>
                <div><p className='text-gray-500'>© 2021 alwaysAI, Inc.</p></div>
                <div><p className='text-gray-500'>Privacy Policy  |  Terms of Use</p></div>
            </div>
        </div>
    )
}
export default Footer