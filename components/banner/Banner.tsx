'use client'
import React, { useEffect } from 'react'
import carBg from '@/public/banner/carBg.png'
import grayBg from '@/public/banner/grayBg.png'
import blueBg from '@/public/banner/blueBg.png'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import Navbar from '@/components/shared/Navbar'

export default function Banner() {
  useEffect(() => {
    gsap.from('.animate', {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  return (
    <div className="relative h-screen flex flex-col text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${carBg.src}), url(${blueBg.src}), url(${grayBg.src})`,
      }}
    >
      <div className='pt-5 '>
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className='container  flex flex-col gap-7'>
          <h1 className="text-[32px] sm:text-[44px] lg:text-[64px] font-[700] leading-[38px] sm:leading-[70px] lg:leading-[76px] font-syne animate">
            Driven by Luxury, <br /> Defined by You
          </h1>
          <p className='font-nunito-sans text-[14px] md:text-[18px] font-[400] leading-[21px] md:leading-[27px] animate'>
            Laskar & Co Auto bridges the gap for small to mid-sized businesses, offering tailored,
            <br />
            reliable, and affordable transportation solutions to drive growth and efficiency.
          </p>
          <div className='flex flex-col gap-5'>
            <div>
              <Button className="font-nunito-sans  text-[18px] font-[600] leading-[18px] border-b rounded-none px-10 md:px-28 pb-5">Book a consultation Now</Button>

            </div>
            <div className=''>
              <Button className=" bg-[#1978D8] hover:bg-[#1979d8d8] py-[22px] px-[20px] text-white cursor-pointer rounded-full text-[16px] font-[400 ]  transition duration-300 ease-in-out transform hover:scale-105">
                Contact Us
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}