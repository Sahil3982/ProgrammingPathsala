import React from 'react'
import Countercard from './Countercard'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

const Countercom = () => {
    return (
        <div className='flex justify-around bg-gray-100 p-10'>
            <div className=''>
                <b className="text-4xl">
                    Helping a local <p className='text-green'>business reinvent itself </p>         </b>
                <p className="py-5">
                    We reached here with our hard work and dedication
                </p>
            </div>
            <div className=' flex flex-col '>
                <div className='flex justify-between items-center gap-10 p-5'>

                    <Countercard image={image1} number={2245341} name='Members' />
                    <Countercard image={image2} number={46328} name='Clubs' />

                </div>
                <div className='flex justify-between items-center gap-10 p-5'>

                    <Countercard image={image3} number={828867} name='Event Bookings'/>
                    <Countercard image={image4} number={1926436} name='Payments' />

                </div>
            </div>
        </div>
    )
}

export default Countercom