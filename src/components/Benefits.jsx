import React, { useState, useEffect } from 'react'
import firstbenefit from '../assets/1stben.svg'
import secondbenefit from '../assets/2ndben.svg'
import thirdbenefit from '../assets/3rdben.svg'
import fourthbenefit from '../assets/4thben.svg'
import { motion } from 'framer-motion'

function Benefits() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 500; // Adjust as needed
      setIsVisible(window.scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-screen text-text bg-background py-12' id='benefits' >
      <div className='cards flex flex-wrap lg:gap-20 md:gap-12 gap-4 justify-center items-center px-6 cards' onMouseMove={e => {
          for(const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                  x = e.clientX - rect.left,
                  y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          };
        }}>
        
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
          transition={{ duration: 1 }}>

            <div className=' card relative rounded-3xl'>
              <div className='flex flex-col gap-4 justify-center items-center p-8 card-content'>
                <img src={firstbenefit} className='h-26 sm:h-40'/>
                <div className='flex flex-col gap-2 items-center'>
                  <h2 className='text-xl lg:text-3xl font-semibold'>Efficiency</h2>
                  <h4 className='text-base sm:text-xl font-light max-w-40 sm:max-w-60 text-center'>Streamlined kitchen and tech cut wait times</h4>
                </div>
              </div>
            </div>

        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
          transition={{ duration: 1 }}>
          <div className=' card relative rounded-3xl'>
            <div className='flex flex-col gap-4 justify-center items-center p-8 card-content'>
              <img src={secondbenefit} className='h-26 sm:h-40'/>
              <div className='flex flex-col gap-2 items-center'>
                <h2 className='text-xl lg:text-3xl font-semibold'>Ambiance</h2>
                <h4 className='text-base sm:text-xl font-light max-w-40 sm:max-w-60 text-center'>Modern design elevates dining experience</h4>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
          transition={{ duration: 1 }}>
          <div className=' card relative rounded-3xl'>
            <div className='flex flex-col gap-4 justify-center items-center p-8 card-content'>
                <img src={thirdbenefit} className='h-26 sm:h-40'/>
                  <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-xl lg:text-3xl font-semibold'>Sustainability</h2>
                    <h4 className='text-base sm:text-xl font-light max-w-40 sm:max-w-60 text-center'> Eco-friendly practices, local ingredients</h4>
                </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
          transition={{ duration: 1 }}>
          <div className='card relative rounded-3xl '>
            <div className='flex flex-col gap-4 justify-center items-center p-8 card-content'>
              <img src={fourthbenefit} className='h-26 sm:h-40'/>
                <div className='flex flex-col gap-2 items-center'>
                  <h2 className='text-xl lg:text-3xl font-semibold'>Productivity</h2>
                  <h4 className='text-base sm:text-xl font-light max-w-40 sm:max-w-60 text-center'> Optimized processes reduce customer wait times</h4>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Benefits