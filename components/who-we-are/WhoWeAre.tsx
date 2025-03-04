"use client"
import React, { useEffect, useRef } from 'react'
import bgImg from '@/public/whoWeAre/background.png'
import img from '@/public/whoWeAre/Corporate.png'
import Carimg from '@/public/whoWeAre/CarImage.png'
import CustomImage from '../Reusable/CustomImage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function WhoWeAre() {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const aspirationRef = useRef(null)
    const listRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            )

            // Description animation
            gsap.fromTo(
                descriptionRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: 'top 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            )

            // Aspiration section animation
            gsap.fromTo(
                aspirationRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: aspirationRef.current,
                        start: 'top 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            )

            // List items animation
            gsap.fromTo(
                listRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            )

            // Image container animation
            gsap.fromTo(
                imageRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            )
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative" id='who-we-are'>
            <CustomImage
                src={bgImg.src}
                alt='background'
                width={1920}
                height={880}
                className='w-full h-[880px] sm:h-[1000px] md:h-[1000px] lg:h-[880px] 2xl:h-[750px]'
            />
            <div className="container items-center absolute -top-10 xl:top-0 left-0 right-0 w-full h-full flex text-black px-4 sm:px-6 lg:px-8">
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
                    {/* left side */}
                    <div className='w-full lg:w-6/12'>
                        <h1 ref={titleRef} className='text-[#036] text-[24px] md:text-[48px] font-[700] font-syne leading-[28px] md:leading-[57px] mb-3'>
                            Who we Are
                        </h1>
                        <p ref={descriptionRef} className='text-[#4A4C56] text-[14px] leading-[21px] md:leading-[27px] md:text-[18px] font-[400px] font-nunito-sans'>
                            Laskar & Co Auto is a car management company dedicated to transforming corporate transportation for small to mid-sized businesses. We provide transparent, reliable, and tailored solutions, eliminating hidden fees and unpredictable billing to help businesses optimize and streamline their fleet operations with ease.</p>
                        <div ref={aspirationRef} className='hidden sm:block mt-10 mb-5'>
                            <h1 className='md:text-[32px] text-[18px] font-syne text-[#1978D8]'>Our Aspiration</h1>
                            <p className='text-[#4A4C56] text-[14px] leading-[21px] md:leading-[27px] md:text-[18px] font-[400px] font-nunito-sans'>We aim to redefine corporate car management for small and mid-sized businesses by delivering a seamless, transparent, and efficient experience.</p>
                        </div>
                        <ul ref={listRef} className='list-disc pl-5 mt-5 flex flex-col gap-5'>
                            <li className='text-[#4A4C56] text-[14px] leading-[21px] md:leading-[27px] md:text-[18px] font-[400px] font-nunito-sans'><span className='text-[#1978D8] font-[600px]'>Empowering Local Businesses</span> — Affordable, predictable transportation solutions that let businesses focus on growth and innovation.</li>

                            <li className='text-[#4A4C56] text-[14px] leading-[21px] md:leading-[27px] md:text-[18px] font-[400px] font-nunito-sans'><span className='text-[#1978D8] font-[600px]'>Simplifying Fleet Management</span> — A technology-driven approach that saves time, reduces costs, and streamlines operations.</li>

                            <li className='text-[#4A4C56] text-[14px] leading-[21px] md:leading-[27px] md:text-[18px] font-[400px] font-nunito-sans'>
                                <span className='text-[#1978D8] font-[600px]'>Driving Economic Growth</span> — Expanding partnerships that create jobs, boost revenue, and strengthen Metro Detroit&apos;s economy.
                            </li>
                        </ul>
                    </div>
                    {/* right side */}
                    <div ref={imageRef} className='w-full lg:w-6/12 flex justify-end sm:justify-center lg:justify-end'>
                        <div className='flex justify-end relative'>
                            <CustomImage
                                src={Carimg.src}
                                alt="image"
                                width={250}
                                height={500}
                                className='w-[130px] h-[104px] sm:w-[180px] sm:h-[110px] -left-28 sm:-left-36 sm:top-5 lg:w-[200px] lg:h-[180px] xl:w-[220px] xl:h-[180px] absolute  lg:-left-44 2xl:-left-40 lg:-top-10 xl:top-0 2xl:top-1 z-10'
                            />
                            <CustomImage
                                src={img.src}
                                width={500}
                                height={500}
                                alt='image'
                                className='w-[230px] sm:w-[260px] lg:w-[300px] xl:w-[400px] 2xl:w-[440px] mb-10 '
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}