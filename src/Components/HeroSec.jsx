import React from 'react'
import herologo from '../assets/herologo.svg'
const HeroSec = () => {
    return (
        <div className='p-8 m-16 flex justify-between items-center'>
            <div className=''>
                <b className='text-5xl'>Lessons and insights <div className='text-green'> from 8 years</div></b>
                <p className='py-6'>Where to grow your business as a photographer: site or social media?</p>
                <button className='bg-green p-2 px-8 rounded text-white hover:scale-105 hover:transition-transform'>Register</button>
            </div>
            <div>
                <img src={herologo} />
            </div>
        </div>
    )
}

export default HeroSec