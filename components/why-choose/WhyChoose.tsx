'use client'
import React, { useRef, useEffect } from 'react'
import { DollarSign, Package, Shuffle } from 'lucide-react'
import carLogo from '@/public/chooseUs/car.png'
import CustomImage from '../Reusable/CustomImage'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function WhyChoose() {
    const titleRef = useRef(null);
    const featuresRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 20%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                }
            );

            // Features grid animation
            gsap.fromTo(
                featuresRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 20%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                }
            );

            // Button animation
            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: 'top 20%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#F8FAFF] py-24" id="why-choose-us">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 ref={titleRef} className="text-[25px] leading-[28px] md:leading-[58px] md:text-[48px] font-[700] text-[#036] text-center mb-16 font-syne">
                    Why Businesses Choose<br />
                    Laskar & Co Auto
                </h2>

                <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto relative">
                    {/* Predictable Costs */}
                    <div className="flex flex-col items-center text-center relative pb-8 md:pb-0 px-5">
                        <div className="w-16 h-16 bg-[#036] rounded-full flex items-center justify-center mb-6">
                            <DollarSign className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-[24px] md:text-[24px] font-[600] text-[#1D1F2C] mb-3 font-syne">
                            Predictable Costs
                        </h3>
                        <p className="text-[14px] md:text-[18px] text-[#4A4C56] font-nunito leading-[21px] md:leading-[27px]">
                            Transparent pricing with no hidden fees.
                        </p>
                        {/* Vertical dotted line for desktop */}
                        <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] border-r border-dashed border-[#036]"></div>
                        {/* Horizontal dotted line for mobile */}
                        <div className="md:hidden absolute bottom-0 left-0 w-full h-[1px] border-b border-dashed border-[#036]"></div>
                    </div>

                    {/* All-inclusive Packages */}
                    <div className="flex flex-col items-center text-center relative pb-8 md:pb-0 px-5">
                        <div className="w-16 h-16 bg-[#036] rounded-full flex items-center justify-center mb-6">
                            <Package className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-[24px] md:text-[24px] font-[600] text-[#1D1F2C] mb-3 font-syne">
                            All-inclusive Packages
                        </h3>
                        <p className="text-[14px] md:text-[18px] text-[#4A4C56] font-nunito leading-[21px] md:leading-[27px]">
                            Insurance, fuel, and fleet tracking included.

                        </p>
                        {/* Vertical dotted line for desktop */}
                        <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] border-r border-dashed border-[#036]"></div>
                        {/* Horizontal dotted line for mobile */}
                        <div className="md:hidden absolute bottom-0 left-0 w-full h-[1px] border-b border-dashed border-[#036]"></div>
                    </div>

                    {/* Total Flexibility */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[#036] rounded-full flex items-center justify-center mb-6">
                            <Shuffle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-[24px] md:text-[24px] font-[600] text-[#1D1F2C] mb-3 font-syne">
                            Total Flexibility
                        </h3>
                        <p className="text-[14px] md:text-[18px] text-[#4A4C56] font-nunito leading-[21px] md:leading-[27px]">
                            Whether you prefer short-term access or an ongoing subscriptions—your choice.

                        </p>
                    </div>
                </div>

                <div ref={buttonRef} className="mt-16 text-center">
                    <button className="inline-flex flex-col md:flex-row border px-10 md:px-20 py-3 rounded-[12px] border-[#D2D2D5] p-2 items-center gap-2 text-[#4A4C56] text-[14px] font-[400] ">
                        <span className="text-[18px]">
                            <CustomImage src={carLogo.src} width={100} height={100} alt="Car Logo" className="w-5 h-5" />
                        </span>
                        Get started today and simplify your business travel!
                    </button>
                </div>
            </div>
        </div>
    )
}
