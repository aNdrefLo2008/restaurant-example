import React from 'react'
import timeImg from '../assets/timeImg.svg'

function Times() {
  return (
    <div className='bg-background w-full mt-6 sm:mt-32 px-10' id='times'>
        <div className='flex sm:gap-24 gap-6 sm:text-left text-center justify-center items-center sm:flex-row flex-col'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl sm:text-3xl font-semibold'>
                    Opened Times
                </h1>
                <div>
                    <h3 className='font-medium text-base sm:text-xl'>NYC</h3>
                    <p className='font-light text-sm sm:text-base'>Monday to Thursday: 11.00 to 24.00 <br />Friday to Sunday: 11.00 to 01.00</p>
                </div>
                <div>
                    <h3 className='font-medium text-base sm:text-xl'>London</h3>
                    <p className='font-light text-sm sm:text-base'>Monday to Thursday: 11.00 to 24.00
                        <br />
                        Friday to Sunday : 11.30 to 2.00
                        <br />
                    </p>
                </div>
            </div>
            <div>
                <img src={timeImg} className='sm:h-[420px] h-[200px]'/>
            </div>
        </div>
    </div>
  )
}

export default Times