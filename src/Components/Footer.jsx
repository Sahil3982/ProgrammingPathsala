import React from 'react'
import LaptopCard from './LaptopCard'
import laptop1 from '../assets/laptop1.svg'
import laptop2 from '../assets/laptop2.svg'
import laptop3 from '../assets/laptop3.svg'
const Footer = () => {
  return (
    <div className='p-5'>
        <center>
            <h1 className='text-4xl font-bold'>Caring is the new marketing</h1>
            <p className='align-end pt-5'>The Nextcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community, read about how our community<br/> are increasing their membership income and lot's more.​</p>
        </center>
        <div className='flex flex-wrap p-5 justify-around'>
            <LaptopCard img={laptop1} text='Creating Streamlined Safeguarding Processes with OneRen'/>
            <LaptopCard img={laptop2} text='What are your safe guarding responsibilities and how can you manage them?'/>
            <LaptopCard img={laptop3} text='Revamping the Membership Model with Triathlon Australia'/>
        </div>
    </div>
  )
}

export default Footer