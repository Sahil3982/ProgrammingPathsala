import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'
const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between px-10 m-2 ">
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
                    <Link><button className="bg-green p-2 px-8 rounded text-white hover:scale-105 hover:transition-transform ">Register Now</button></Link>
                </div>
            </div>

           


        </>
    )
}

export default Navbar