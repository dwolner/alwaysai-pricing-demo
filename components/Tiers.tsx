import React from 'react'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface priceData {
    title: string
    description: string
    tag: string
    features: string[]
}
interface Props {
    pricingData: priceData[]
}

const Tiers: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return (
        <div className='w-full p-2 bg-purple bg-opacity-5 shadow'>
            <div className='max-w-8xl mx-auto justify-between items-center py-10'>
                <div className='py-8 px-4 text-center'>
                    <h1 className='text-violet'>
                        Simple, transparent pricing
                    </h1>
                    <h6 className='text-gray-500'>
                        No surprise fees.
                    </h6>
                </div>
                <div className='py-10 px-4 text-center max-w-5xl mx-auto'>
                    <div className='bg-white rounded-xl p-4 flex flex-wrap justify-center'>
                        {props.pricingData.map(item => {
                            return (
                                <div key={item.title} className='basis-full sm:basis-1/2 md:basis-1/3 flex justify-center'>
                                    <div className='text-left flex flex-wrap max-w-2xs p-4 rounded-xl group hover:bg-purple hover:-translate-y-10 transition-all'>
                                        <div className='w-full flex justify-end'>
                                            <button className='invisible group-hover:visible bg-darkpurple px-4 py-2 rounded-full text-gray-200 text-xs tracking-widest'>
                                                {item.tag}
                                            </button>
                                        </div>
                                        <div className='mb-14 h-24 p-4'>
                                            <h3 className='group-hover:text-white'>
                                                {item.title}
                                            </h3>
                                            <p className='text-sm text-gray-500 group-hover:text-white mt-2'>
                                                {item.description}
                                            </p>
                                        </div>
                                        <ul className='p-4'>
                                            {item.features.map(text => {
                                                return (
                                                    <li key={text} className='text-sm text-gray-500 group-hover:text-white flex py-1'>
                                                        <div className='bg-lightpurple w-5 px-1 mr-2 rounded-full'>
                                                            <Image src='/svg/checkmark_small.svg' layout='intrinsic' width={15} height={10} alt='checkmark' />
                                                        </div>
                                                        {text}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className='w-full p-4'>
                                            <button className='bg-purple group-hover:bg-red w-full mb-6 md:px-4 p-2.5 rounded-lg text-white text-xs md:text-sm'>
                                                Request Pricing
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiers