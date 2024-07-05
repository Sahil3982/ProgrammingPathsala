import Countercom from './Components/Countercom'
import HeroSec from './Components/HeroSec'
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

        <Routes>
          <Route  path='/' />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
   
  )
}
