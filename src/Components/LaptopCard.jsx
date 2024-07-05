import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
const LaptopCard = ({img , text}) => {
  return (
    <div className=''>
        <div>
            <img  className='size-72 rounded-lg' src={img} />
        </div>
        <div className='w-60 shadow-md h-40 bg-white relative bottom-32 left-6 rounded-lg position p-3  hover:scale-105 hover:transition-transform'>
                <center className=' font-semibold'>{text}</center>
                <center className='p-3 text-2xl font-bold text-green flex items-center gap-2 justify-center hover:scale-110 hover:transition-transform'>Readmore  <FaArrowRightLong /></center>
        </div>
    </div>
  )
}

export default LaptopCard