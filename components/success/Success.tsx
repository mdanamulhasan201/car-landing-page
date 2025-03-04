'use client'
import React, { useEffect, useState, useRef } from 'react'
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CustomImage from '../Reusable/CustomImage';

// Define the type for carousel items
interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image: string;
    icon?: string;
}
export default function Success() {
    const [data, setData] = useState<CarouselItem[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)
    const sliderRef = useRef<Slider | null>(null)

    // Keep only necessary useEffects
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth)
            window.addEventListener('resize', handleResize)
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, []);

    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        try {
            const response = await fetch('/data/carousel.json');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error loading carousel data:", error);
        }
    };




    // Don't render anything until data is loaded
    if (data.length === 0 || windowWidth === 0) {
        return <div className="container text-center  py-10">Loading...</div>
    }

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='container px-4 sm:px-6 lg:px-8 py-20' id='services'  >
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className='w-full md:w-8/12'>
                    <h1 className='text-[24px] md:text-[48px] font-syne font-[700] leading-[28px] md:leading-[57px] text-[#036]'>
                        Drive Your Business Forward with Laskar & Co Auto
                    </h1>
                </div>
                <div className='w-full md:w-4/12'>
                    <p className='font-nunito-sans text-[18px] font-[400] leading-[27px] text-[#4A4C56]'>
                        We&apos;re transforming corporate transportation with energy-efficient vehicles and
                        sustainable practices, reducing environmental impact while meeting business needs.
                    </p>
                </div>
            </div>

            {/* carousel */}
            <div className='mt-20 relative'>
                <Slider ref={sliderRef} {...settings} afterChange={(index) => setCurrentIndex(index)}>
                    {data.map((item: CarouselItem, index: number) => (
                        <div key={index} className='px-3 py-2'>
                            <div className={`bg-[#036] p-6 rounded-lg shadow-md w-full md:h-96 xl:h-72 transition-all duration-300 transform hover:scale-105 ${currentIndex === index ? 'bg-[#036] text-white' : 'bg-white text-black'}`}>
                                <div className='mb-4'>
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${currentIndex === index ? 'bg-[#365e86]' : 'bg-[#003366]'}`}>
                                        <CustomImage
                                            src={item.image || '/icons/placeholder-icon.svg'}
                                            alt={item.title}
                                            className="w-8 h-8"
                                        />
                                    </div>
                                </div>
                                <h2 className={`text-[22px] font-syne font-[600] mb-4 ${currentIndex === index ? 'text-white' : 'text-black'}`}>{item.title}</h2>
                                <p className={`font-nunito-sans text-[16px] font-[400] leading-[24px] ${currentIndex === index ? 'text-white' : 'text-black'}`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Custom Progress bar with navigation buttons */}
                <div className='mt-12 flex items-center justify-center '>
                    <div className='flex items-center w-full max-w-4xl'>
                        {/* Left arrow button */}
                        <div className=' w-8 h-8'>
                            <button
                                onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                                className={`rounded-full w-8 h-8 flex items-center justify-center shadow-md focus:outline-none  ${currentIndex === 0 ? 'bg-[#bedaf7]' : 'bg-[#1978d8]'}`}
                                aria-label="Previous slide"
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className='w-5 h-5 text-white' />
                            </button>
                        </div>

                        {/* Progress bar */}
                        <div className='relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mx-4'>
                            <div
                                className='absolute h-full bg-[#003366] rounded-full transition-all duration-500 ease-out'
                                style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                            ></div>
                        </div>

                        {/* Right arrow button */}
                        <div className=' w-8 h-8'>
                            <button
                                onClick={() => sliderRef.current && sliderRef.current.slickNext()}
                                className={` rounded-full w-8 h-8 flex items-center justify-center shadow-md focus:outline-none  ${currentIndex === data.length - 1 ? 'bg-gray-300' : 'bg-[#1978d8]'}`}
                                aria-label="Next slide"
                                disabled={currentIndex === data.length - 1}
                            >
                                <ChevronRight className='w-5 h-5 text-white' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}