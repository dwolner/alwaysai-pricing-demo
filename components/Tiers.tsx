import React from 'react'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface priceData {
    title: String
    description: String
    tag: String
    features: String[]
}
interface Props {
    pricingData: priceData[]
}

const Tiers: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return (
        <div className='w-full p-2 bg-purple bg-opacity-5 shadow'>
            <div className='max-w-8xl mx-auto justify-between items-center'>
                <div className='py-8 px-4 text-center'>
                    <h1 className='text-violet'>
                        Simple, transparent pricing
                    </h1>
                    <h6 className='text-gray-500'>
                        No surprise fees.
                    </h6>
                </div>
                <div className='py-10 px-4 text-center max-w-5xl mx-auto'>
                    <div className='bg-white rounded-xl p-4 flex'>
                        {props.pricingData.map(item => {
                            return (
                                <div key={item.title} className='p-4 basis-1/3 flex justify-center'>
                                    <div className='text-left flex flex-wrap max-w-2xs'>
                                        <div className='mb-4 h-24'>
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <p className='text-sm text-gray-500 mt-2'>
                                                {item.description}
                                            </p>
                                        </div>
                                        <ul>
                                            {item.features.map(text => {
                                                return (
                                                    <li className='text-sm text-gray-500 flex py-1'>
                                                        <div className='bg-purple bg-opacity-5 w-5 px-1 mr-2 rounded-full'>
                                                            <Image src='/svg/checkmark_small.svg' layout='intrinsic' width={15} height={10} alt='checkmark' />
                                                        </div>
                                                        {text}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <button className='bg-purple w-full md:px-4 p-2.5 mt-8 rounded-lg text-white text-xs md:text-sm'>
                                            Request Pricing
                                        </button>
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