import React, { useState, useEffect } from 'react'
import firstMenuImg from '../assets/1Menu.svg'
import secondMenuImg from '../assets/2Menu.svg'
import thirdMenuImg from '../assets/3Menu.svg'
import fourthMenuImg from '../assets/4Menu.svg'
import fifthMenuImg from '../assets/5Menu.svg'
import sixthMenuImg from '../assets/6Menu.svg'
import { motion } from 'framer-motion';

function Menu() {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleText, setIsVisibleText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 1000;
      const triggerPoint2 = 800;
      setIsVisible(window.scrollY > triggerPoint);
      setIsVisibleText(window.scrollY > triggerPoint2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    

    <div className='mt-10 sm:mt-20'>
      <div className='flex flex-col gap-6 sm:gap-32 justify-center items-center'>
      
        <motion.div
              initial={{ opacity: 0, y:100 }}
              animate={{ opacity: isVisibleText ? 1 : 0, y: isVisibleText ? 0 : 100 }}
              transition={{ duration: 1, ease: "easeOut" }}>
          <h2 id='menu' className='text-2xl sm:text-4xl font-semibold'>
            Our Specialities
          </h2>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 sm:gap-40 px-10 sm:px-20 justify-center items-center'>
          
          <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <div className='flex flex-col relative inner-glow sm:gap-6 gap-4 black-gradient p-6 rounded-2xl overflow-hidden'>
              <div className='bg-text blur-[100px] h-28 w-28 rounded-full absolute bottom-0 left-32'></div>
              <img src={firstMenuImg}/>
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-base sm:text-xl'>Pizza</h2>
                <h4 className='font-light text-sm sm:text-base'>Iconic Italian dish with toppings</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
            transition={{ 
              duration: 1,
              ease: "easeOut", 
              delay: 0.25
            }}>
            <div className='flex flex-col sm:gap-6 gap-4 black-gradient inner-glow p-6 rounded-2xl overflow-hidden relative'>
              <div className='bg-text blur-[100px] h-28 w-28 rounded-full absolute bottom-0 left-32'></div>
              <img src={secondMenuImg}/>
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-base sm:text-xl'>Sushi</h2>
                <h4 className='font-light text-sm sm:text-base'>Japanese rice and seafood rolls</h4>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
            transition={{ 
              duration: 1,
              ease: "easeOut", 
              delay: 0.50
            }}>
            <div className='flex flex-col sm:gap-6 gap-4 black-gradient inner-glow p-6 rounded-2xl overflow-hidden relative'>
              <div className='bg-text blur-[100px] h-28 w-28 rounded-full absolute -bottom-20 left-32'></div>
              <img src={thirdMenuImg}/>
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-base sm:text-xl'>Taco</h2>
                <h4 className='font-light text-sm sm:text-base'>Mexican folded tortilla with fillings</h4>
              </div>
            </div>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
            transition={{ 
              duration: 1,
              ease: "easeOut", 
              delay: 0.75
            }}>
            <div className='flex flex-col sm:gap-6 gap-4 black-gradient p-6 inner-glow rounded-2xl'>
              <img src={fourthMenuImg}/>
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-base sm:text-xl'>Soup</h2>
                <h4 className='font-light text-sm sm:text-base'>Warm broth with vegetables or meat</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
            transition={{ 
              duration: 1,
              ease: "easeOut", 
              delay: 1
            }}>
            <div className='flex flex-col sm:gap-6 gap-4 black-gradient inner-glow p-6 rounded-2xl'>
              <img src={fifthMenuImg}/>
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-base sm:text-xl'>Salad</h2>
                <h4 className='font-light text-sm sm:text-base'>Fresh mix of greens and veggies</h4>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y:100 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 :100 }}
            transition={{ 
              duration: 1,
              ease: "easeOut", 
              delay: 1.25
            }}>
            <div className='flex flex-col sm:gap-6 gap-4 black-gradient p-6 inner-glow rounded-2xl'>
              <img src={sixthMenuImg}/>
              <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-base sm:text-xl'>Pasta</h2>
                <h4 className='font-light text-sm sm:text-base'>Italian noodles with various sauces</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Menu