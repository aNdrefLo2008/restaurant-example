import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import logoimg from '../assets/logoimg.png'
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion';


function Navbar() {
  const [menu, setMenu] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleBar, setIsVisibleBar] = useState(true)

  useEffect(() => {
    // Trigger the animation after a small delay or immediately
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Adjust delay as needed (e.g., 500ms)

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
        <motion.div
                className=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisibleBar ? 1 : 0, y: isVisibleBar ? 0 : -50 }}
                transition={{ duration: 1 }}
                >
            <div className='blur-gradient z-50 w-screen fixed backdrop-blur-lg rounded-none pt-2 hidden sm:flex justify-around sm:gap-40 gap-20 items-center pr-10 font-semibold text-base sm:pt-4'>
                <img src={logo} className='h-16'/>

                <a href='#home' className='cursor-pointer navbar-shadow hover:opacity-100 opacity-75 transition duration-300'>Home</a>
                <a href='#benefits' className='cursor-pointer navbar-shadow hover:opacity-100 opacity-75 transition duration-300'>Benefits</a>
                <a href='#menu' className='cursor-pointer navbar-shadow hover:opacity-100 opacity-75 transition duration-300'>Menu</a>
                <a href='#times' className='cursor-pointer navbar-shadow hover:opacity-100 opacity-75 transition duration-300'>Times</a>
                <a href='#book' className='cursor-pointer navbar-shadow hover:opacity-100 opacity-75 transition duration-300'>Book Now</a>
                
            </div>
        </motion.div>   

        <div className={`z-50 w-full fixed backdrop-blur-lg pt-2 sm:hidden font-medium text-base flex px-10 justify-between items-center`}>
            <motion.div
                className=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                transition={{ duration: 1 }}>
                    <img src={logoimg} className='h-12'/>
            </motion.div>
            {
                menu ? 
                <RxCross1 className='' size={32} onClick={() => {
                    setMenu(!menu)
                }}/>
                : 
                <motion.div
                className=""
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                transition={{ duration: 1 }}>
                    <HiMenuAlt2 onClick={() => {
                        setMenu(!menu)
                    }
                    } className='' size={32}/>
                </motion.div>
            }
            
        </div>
        {
                menu && 
                        <div className={`navbar-animation backdrop-blur-md sm:hidden border border-gray fixed gap-5 flex justify-center items-center rounded-2xl p-4 flex-col left-[70%] top-20 z-50`}>
                            <a href='#home' className='cursor-pointer'>Home</a>
                            <a href='#benefits' className='cursor-pointer'>Benefits</a>
                            <a href='#menu' className='cursor-pointer'>Menu</a>
                            <a href='#times' className='cursor-pointer'>Times</a>
                            <a href='#book' className='cursor-pointer'>Book Now</a>
                        </div>
            }
    </>
  )
}

export default Navbar