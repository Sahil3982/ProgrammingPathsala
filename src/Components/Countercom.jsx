import React from 'react'
import Countercard from './Countercard'

const Countercom = () => {
    return (
        <div className='flex justify-around bg-gray-100 p-10'>
            <div className=''>
                <b className="text-4xl">
                    Helping a local <p className='text-green'>business reinvent itself </p>         </b>
                <p className="py-6">
                    We reached here with our hard work and dedication
                </p>
            </div>
            <div>
                <Countercard />
            </div>
        </div>
    )
}

export default Countercom