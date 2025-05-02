import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';

function Index() {
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className='z-50 md:mt-[120px] flex flex-col'>
      <Hero />
      {/* <CourseSection /> */}
      <Testimonials/>
      <FeatureSection/>
      <a
        href="https://wa.me/+916002113161" //ssa number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300 hover z-50"
         data-aos="flip-left"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </div>
  );
}

export default Index;
