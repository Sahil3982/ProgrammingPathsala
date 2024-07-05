import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'
import { FaArrowRightLong } from "react-icons/fa6"
import { useState } from "react"
const Navbar = () => {
    const [ isOpen , SetisOpen] = useState(false)
    return (
        <>
            <div className="flex items-center justify-between px-10 m-2  ">
                <div>
                    <Link>
                        <img src={logo} />
                    </Link>
                </div>
                <div className="flex justify-around items-center gap-5 ">
                    <Link to='/home' className="hover:scale-110 hover:transition-transform">Home</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Features</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Community</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Blog</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Pricing</Link>
                    <Link><button className="bg-green p-2 px-8 rounded text-white hover:scale-105 hover:transition-transform flex items-center justify-center gap-3">Register Now  <FaArrowRightLong /></button></Link>
                </div>
            </div>
           {
            isOpen === true && (
                <div className="flex items-center justify-between px-10 m-2 lg:hidden ">
                <div>
                    <Link>
                        <img src={logo} />
                    </Link>
                </div>
                <div className="flex justify-around items-center gap-5 ">
                    <Link to='/home' className="hover:scale-110 hover:transition-transform">Home</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Features</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Community</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Blog</Link>
                    <Link className="hover:scale-110 hover:transition-transform">Pricing</Link>
                    <Link><button className="bg-green p-2 px-8 rounded text-white hover:scale-105 hover:transition-transform flex items-center justify-center gap-3">Register Now  <FaArrowRightLong /></button></Link>
                </div>
            </div>
            )
           }

           


        </>
    )
}

export default Navbar