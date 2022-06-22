import React from 'react'
import Image from 'next/image'

import type { NextComponentType, NextPageContext } from 'next'
interface Feature {
    name: string
    standard: string | boolean
    premium: string | boolean
    enterprise: string | boolean
    backgroundColor?: string
    bottomBorder?: boolean
}
interface Props {
    featureTableData: Feature[]
}

const Features: NextComponentType<NextPageContext, {}, Props> = (
    props: Props
) => {
    return (
        <div className='w-full p-2 bg-white shadow mb-2'>
            <div className='max-w-8xl mx-auto justify-between items-center py-10'>
                <div className='py-8 px-4 text-center'>
                    <h1 className='text-violet'>
                        Select your edition and build vision today
                    </h1>
                    <h6 className='text-gray-500'>
                        Try it for free. Then pay as you grow.
                    </h6>
                </div>
                <div className='py-20 px-4 text-center max-w-6xl mx-auto'>
                    <div className='p-2 shadow-lg'>
                        <table className="table-fixed w-full overflow-hidden">
                            <thead>
                                <tr>
                                    <th className='text-left p-3'><h5 className='text-gray-500'>FEATURES</h5></th>
                                    <th className='p-3'><h2 className='text-purple -mt-8'>Standard</h2></th>
                                    <th className='p-3'><h2 className='text-purple -mt-8'>Premium</h2></th>
                                    <th className='p-3'><h2 className='text-purple -mt-8'>Enterprise</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.featureTableData.map((row, index) => {
                                    return (
                                        <tr key={row.name} style={{
                                            backgroundColor: row.backgroundColor ? row.backgroundColor : (index % 2 == 0 ? '#F5F3FCBF' : '#fff'),
                                            borderRadius: '10px',
                                            borderBottom: row.bottomBorder ? '2px #ccc solid' : ''
                                        }}>
                                            <td className='text-left p-3'>{row.name}</td>
                                            <td className='px-4 text-sm'>
                                                {typeof row.standard === 'string' ? row.standard : null}
                                                {typeof row.standard === 'boolean' && row.standard ? 
                                                    <Image src='/svg/checkmark.svg' layout='intrinsic' width={15} height={15} alt='checkmark' />
                                                : null}
                                            </td>
                                            <td className='px-4 text-sm'>
                                                {typeof row.premium === 'string' ? row.premium : null}
                                                {typeof row.premium === 'boolean' && row.premium ? 
                                                    <Image src='/svg/checkmark.svg' layout='intrinsic' width={15} height={15} alt='checkmark' />
                                                : null}
                                            </td>
                                            <td className='px-4 text-sm'>
                                                {typeof row.enterprise === 'string' ? row.enterprise : null}
                                                {typeof row.enterprise === 'boolean' && row.enterprise ? 
                                                    <Image src='/svg/checkmark.svg' layout='intrinsic' width={15} height={15} alt='checkmark' />
                                                : null}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features