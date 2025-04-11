import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Circle from './ui/Circle';
import Footer from './ui/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Layout({children}) {

    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-b from-[#DFEAF0] to-white'>
      <Navbar/>
      {/* <Circle className='absolute w-full rounded-br-[100px] rounded-bl-[100px] md:rounded-br-[300px] md:rounded-bl-[300px] h-[400px] md:h-[500px]' data-aos="fade-down"
    //  data-aos-easing="linear"
     data-aos-duration="1000"/> */}
      <main className='flex-grow z-20'>
        <div className='max-w-7xl mx-auto w-full'>
          {children}
        </div>
      </main>
    <Footer/>
    </div>
  )
}

export default Layout;