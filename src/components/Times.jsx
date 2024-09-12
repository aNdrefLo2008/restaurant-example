import React from 'react'
import timeImg from '../assets/timeImg.svg'

function Times() {
  return (
    <div className='bg-background w-full mt-6 sm:mt-32 px-10' id='times'>
        <div className='flex sm:gap-24 gap-6 sm:text-left text-center justify-center items-center sm:flex-row flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl sm:text-4xl font-semibold'>
                    Öffnungszeiten
                </h1>
                <div>
                    <h3 className='font-medium text-base sm:text-2xl'>BRAUHAUS</h3>
                    <p className='font-light text-sm sm:text-xl'>Montag Donnerstag, Sonntag: 11.00 ca. 24.00 Uhr <br /> Freitag + Samstag: 11.00 Uhr ca. 01.00 Uhr</p>
                </div>
                <div>
                    <h3 className='font-medium text-base sm:text-2xl'>KÜCHE</h3>
                    <p className='font-light text-sm sm:text-xl'>Montag Donnerstag: 11.30 ca. 23.00 Uhr
                        <br />
                        Sonntag: 11.30 ca. 23.00 Uhr
                        <br />
                        Freitag + Samstag: 11.30 ca. 23.00 Uhr (kalte Küche bis 24.00)
                    </p>
                </div>
            </div>
            <div>
                <img src={timeImg} className='sm:h-[520px]'/>
            </div>
        </div>
    </div>
  )
}

export default Times