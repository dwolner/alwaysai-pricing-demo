import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface Link {
    text?: String
    link?: String
    icon?: String
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
            <div className='py-2 text-sm' style={{ fontWeight: first ? '700' : '500', color: first ? '#333' : '#666' }}>
                <Link href={item.link}>
                    {item.text}
                </Link>
            </div>
        )
    }
    return (
        <div className='w-full p-2 bg-white px-4'>
            <div className='flex flex-wrap max-w-8xl mx-auto justify-between'>
                <div className='max-w-sm'>
                    <Image src='/img/aai-logo-black-text.svg' layout='intrinsic' width={150} height={75} alt='alwaysAI Logo' />
                    <p className='leading-6 text-gray-500 font-normal py-4'>
                        alwaysAI is a software company located in San Diego, CA. We make computer vision come alive on the edge - where work and life happen.
                    </p>
                    <div className='py-4'>
                        {props.socialLinks.map(item => {
                            return (
                                <a href={item.link} key={item.icon} className='mx-2'>
                                    <button className='bg-gray-200 rounded-full p-3 pt-3 pb-2'>
                                        <Image src={`/svg/${item.icon}.svg`} layout='intrinsic' width={20} height={15} alt={item.icon} />
                                    </button>
                                </a>
                            )
                        })}
                    </div>
                </div>
                    {props.siteLinks.map(item => {
                        let first = true
                        return (
                            <div key={item.link} className='px-6 py-6'>
                                {innerLink(item, first)}
                                {item.subLinks.map(item => {
                                    let first = false
                                    return (
                                        innerLink(item, first)
                                    )
                                })}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default Footer