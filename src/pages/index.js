import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partner from '@/components/Partner'
import About from '@/components/About'
import Property from '@/components/Properties'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Testimonial from '@/components/Testimonial'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'
import MobileMenu from '@/components/MobileMenu'
import { useState } from 'react'

export default function Home() {
  const [active,setActive] = useState(false);

  const toggle=()=>{
    setActive(!active)
  }
  
  return (
    <>
    {
      active &&
      <MobileMenu toggle={toggle}/>

    }
      <Navbar toggle={toggle}/>
      <main className='max-w-[100.5rem] m-auto'>
        <Hero/>
        <Partner/>
        <About/>
        <Services/>
        <Property/>
        <Testimonial/>
        <Blog/>
        <NewsLetter/>
        <Footer/>
      </main>
    </>
  )
}
