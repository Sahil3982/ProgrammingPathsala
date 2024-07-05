import React from 'react'
import CountUp from 'react-countup';
const Countercard = ({image , number , name}) => {
    return (
        <div>
            <CountUp start={0} end={number} delay={2}>
                {({ countUpRef }) => (
                    <div className='flex items-center gap-4'>
                        <img className='size-12 h-min' src={image} />
                        <div className=''>
                        <span className='font-bold text-3xl' ref={countUpRef} />
                        <p className='text-sm'>{name}</p>
                        </div>
                    </div>
                )}
            </CountUp>
        </div>
    )
}

export default Countercard