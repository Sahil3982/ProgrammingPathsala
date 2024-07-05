import React from 'react'
import mainimg from '../assets/mainimg.svg'
const Maincom = () => {
    return (
        <div className="flex justify-between items-center px-16">
            <div className="">
                <img className="size-96" src={mainimg} />
            </div>
            <div>
                <b className="text-3xl">
                    How to design your site footer<br></br> like we did
                </b>
                <p className="py-6 align-middle">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec<br></br> tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.<br></br> Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. <br></br>Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae<br></br> nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo<br></br> faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit<br></br> venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className="bg-green p-2 px-8 rounded text-white hover:scale-105 hover:transition-transform">
                    Learn more
                </button>
            </div>
        </div>
    )
}

export default Maincom