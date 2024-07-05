import Budscom from './Components/Budscom'
import Countercom from './Components/Countercom'
import Footer from './Components/Footer'
import HeroSec from './Components/HeroSec'
import Maincom from './Components/Maincom'
import Navbar from './Components/Navbar'
import Ourclient from './Components/Ourclient'
import Home from './Pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
export default function App() {
  return (

    <>

      <BrowserRouter>
      <Navbar />
      <HeroSec />
      <Ourclient />
      <Countercom />
      <Maincom />
      <Budscom />

        <Routes>
          <Route  path='/' />
          <Route path='/home' element={<Home/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
   
  )
}
