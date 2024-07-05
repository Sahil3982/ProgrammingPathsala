import React from 'react'
import budsimg from '../assets/budsimg.svg'
import clientlogo1 from '../assets/clientlogo1.svg'
import { FaArrowRightLong } from 'react-icons/fa6'
const Budscom = () => {
    return (
        <div className="flex justify-around items-center bg-gray-100 gap-8 p-8">
            <div className="">
                <img className="size-96" src={budsimg} />
            </div>
            <div className='w-screen'>
                <p className="py-6 align-middle">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <strong className='text-2xl text-green'>Tim Smith</strong>
                <p className='py-4'>British Dragon Boat Racing Association</p>
                <div className='flex justify-start gap-32 items-center gap-2'>
                    <img  className=' size-96 h-min'  src={clientlogo1} />
                    <strong className='text-2xl text-green flex items-center gap-5 hover:scale-110 hover:transition-transform'>Meet all customers <span> <FaArrowRightLong /></span> </strong>
                </div>
            </div>
        </div>
    )
}

export default Budscom