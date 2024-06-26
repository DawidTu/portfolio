'use client';
import React, {useState, useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero'
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Cta from '@/components/Cta';
// import Preloader from '../components/Preloader';

export default function Home() {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  
  //       setTimeout(() => {
  //         setIsLoading(false);
  //         document.body.style.cursor = 'default';
  //         window.scrollTo(0, 0);
  //       }, 2000);
  //     } catch (error) {
  //       console.error('Error loading locomotive-scroll:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  
  
  return (
    <main className='w-screen'>
      {/* <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Cta/>
    </main>
  );
}
