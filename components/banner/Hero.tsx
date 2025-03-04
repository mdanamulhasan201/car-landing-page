'use client'
import React from 'react'
import carBg from '@/public/banner/carBg.png'
import grayBg from '@/public/banner/grayBg.png'
import blueBg from '@/public/banner/blueBg.png'
import CustomImage from '../Reusable/CustomImage'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className='relative flex flex-col text-center text-white'>
            <CustomImage
                src={carBg.src}
                alt="image"
                width={1920}
                height={900}
                className="w-full bg-cover bg-center h-[500px] md:h-[600px]  lg:h-full z-10"
                
            />
            <div className='pt-5 absolute top-0 left-0 right-0 z-20'>
                <Navbar />
            </div>
            <div className='absolute top-0 left-0 right-0'>
                <Image
                    src={grayBg}
                    alt="image"
                    width={1920}
                    height={900}
                    className="w-full bg-cover bg-center h-[500px] md:h-[600px] lg:h-full"
                />
            </div>
            <div className='absolute top-1 lg:top-2 left-0 right-0'>
                <Image
                    src={blueBg}
                    alt="image"
                    width={1920}
                    height={900}
                    className="w-full bg-cover bg-center h-[500px] md:h-[600px] lg:h-full"
                />
            </div>

            {/* Hero Content - Mobile Optimized */}
            <div className='absolute z-10 w-full h-full flex items-center justify-center top-0 left-0 px-4 md:px-6'>
                <div className="flex flex-col justify-center items-center">
                    <div className='container flex flex-col gap-4 md:gap-7 '>

                        <h1 className="lg:mt-20 xl:mt-0 mt-0 text-[28px] sm:text-[44px] md:text-[55px] xl:text-[60px] 2xl:text-[64px] font-[700] leading-[34px] sm:leading-[60px] md:leading-[70px] lg:leading-[75px] 2xl:leading-[76px] font-syne animate max-w-4xl mx-auto">
                            Driven by Luxury, <br className="hidden sm:block" /> Defined by You
                        </h1>
                        <p className='font-nunito-sans text-[14px] md:text-[18px] font-[400] leading-[21px] md:leading-[27px] animate max-w-3xl mx-auto'>
                            Laskar & Co Auto bridges the gap for small to mid-sized businesses, offering tailored,
                            <br className="hidden md:block" />
                            reliable, and affordable transportation solutions to drive growth and efficiency.
                        </p>
                        <div className='flex flex-col gap-5 mt-2 md:mt-4'>
                            <div>
                                <Button className="font-nunito-sans cursor-pointer text-[16px] md:text-[18px] font-[600] leading-[18px] border-b rounded-none px-6 sm:px-10 md:px-28 pb-4 md:pb-5 w-full sm:w-auto">Book a consultation Now</Button>
                            </div>
                            <div className='mt-1 md:mt-0'>
                                <Button className="bg-[#1978D8] hover:bg-[#1979d8d8] py-[18px] md:py-[22px] px-[16px] md:px-[20px] text-white cursor-pointer rounded-full text-[14px] md:text-[16px] font-[400] transition duration-300 ease-in-out transform hover:scale-105 w-auto">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}