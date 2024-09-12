import React, { useState, useEffect } from 'react'
import heroimg from '../assets/heroimg.svg'

import { motion } from 'framer-motion';

function Hero() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  // <div className='sm:block hidden absolute left-[40%] top-[20%] w-96 h-96 rounded-full bg-primary blur-[250px]'></div> 

  return (
    <div className='min-h-screen max-w-screen pt-20 ' id='home'>
        <div className='flex text-center sm:text-start sm:flex-row flex-col justify-center gap-6 mt-16 sm:mt-0 sm:gap-24 items-center'>
            <div className='sm:-mt-32 -mt-10 '>

                <motion.div
                className=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                transition={{ duration: 1 }}
                >
                    <h1 className='font-head sm:font-bold sm:text-[62px] font-semibold text-3xl'>The art of <span className='bg-gradient-to-r from-[#C7AEAE] to-[#3F545A] bg-clip-text transparent'>speed</span> <br className='sm:br-header br-header-sm' />food quality </h1>
                </motion.div>

                <motion.div
                    className=""
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
                    transition={{ duration: 1 }}>
                    <h4 className='font-light sm:max-w-full max-w-96 sm:text-2xl text-sm mt-2'>Choosing colors or typography for your website? <br />Use the Toolbar below to realize your choices.</h4>
                </motion.div>

                <motion.div
                    className=""
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
                    transition={{ duration: 1 }}>
                <div className='mt-10 overflow-visible flex justify-center sm:justify-start items-center gap-4'>
                    <button className='rounded-full button-shadow transition hover:-translate-y-1 duration-500 hover:scale-110 sm:px-8 sm:py-4 sm:text-xl px-5 text-sm py-2 bg-primary text-background font-semibold'>Get Started</button>
                    <button className='hover:bg-text border-gray hover:text-background duration-500 transition rounded-full sm:px-8 sm:py-4 sm:text-xl border text-white px-5 text-sm py-2 font-semibold'>How does it work</button>
                </div>
                </motion.div>
                
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                    transition={{ duration: 1 }}>
                    <div className='flex gap-4 mt-8 sm:justify-start justify-center items-center'>
                        <div className='mt-4 flex gap-1 justify-start items-center'>
                            <h3 className='sm:font-bold font-semibold sm:text-2xl text-xl'>1000+</h3>
                            <h4 className='sm:font-light font-extralight sm:text-2xl text-xl'>Clients</h4>
                        </div>
                        <div className='mt-4 flex gap-1 justify-start items-center'>
                            <h3 className='sm:font-bold font-semibold sm:text-2xl text-xl' >200+</h3>
                            <h4 className='sm:font-light font-extralight sm:text-2xl text-xl'>Reviews</h4>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                    className=""
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                    transition={{ duration: 1 }}>
                <img src={heroimg} className='sm:h-[800px] h-[500px]'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero