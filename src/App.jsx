import React, { useState, useEffect } from 'react'
import './App.css'
import Benefits from './components/Benefits'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import CTA from './components/CTA'
import Times from './components/Times'
import { motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className='bg-background text-text h-full w-screen font-body scroll-smooth relative'>
      <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 1 }}
                >
          <div className='hidden sm:block bg-blur-blue blur-[400px] h-96 w-96 rounded-full absolute -right-20 -top-20'></div>
          <div className='hidden sm:block bg-primary-darker blur-[400px] h-96 w-96 rounded-full absolute -left-72 top-[800px]'></div>
          <div className='hidden sm:block bg-accent blur-[250px] h-96 w-96 rounded-full absolute left-[600px] top-64'></div>
        </motion.div>
        <Navbar />
        <Hero />
        <Benefits /> 
        <Menu />
        <Times />
        <Testimonials />
        <FAQs />
        <CTA />
      </div>
    </>
  )
}

export default App
