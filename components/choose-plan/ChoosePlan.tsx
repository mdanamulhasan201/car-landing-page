'use client'
import React, { useRef, useEffect } from 'react'
import { Check, DollarSign } from 'lucide-react'
import { Button } from '../ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function ChoosePlan() {
    const titleRef = useRef(null);
    const desktopPlanRef = useRef(null);
    const mobilePlanRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title section animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 3,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 10%',
                        end: 'bottom 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            );

            // Desktop plan animation
            gsap.fromTo(
                desktopPlanRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: desktopPlanRef.current,
                        start: 'top 10%',
                        end: 'bottom 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            );

            // Mobile plan animation
            gsap.fromTo(
                mobilePlanRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: mobilePlanRef.current,
                        start: 'top 10%',
                        end: 'bottom 10%',
                        toggleActions: 'play none none reverse'
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white [background:linear-gradient(209deg,#318CE7_-14.94%,#BEDAF7_107.26%)] py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="mb-12 text-center max-w-5xl mx-auto" ref={titleRef}>
                    <h2 className="text-[28px] md:text-[48px] font-[700] leading-[33px] md:leading-[50px] text-white mb-4 font-syne ">
                        A Smarter Way to Drive – Flexible Corporate Solutions
                    </h2>
                    <p className="text-[16px] md:text-[18px] font-[400] text-white leading-[21px] md:leading-[24px] font-nunito-sans mt-5">
                        Your business needs reliable transportation without the hassle of ownership. Our subscription plans offer predictable pricing, seamless management, and all-inclusive benefits—so you can stay focused on what matters most.
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-12 gap-6 bg-white rounded-[12px] p-10" ref={desktopPlanRef}>
                    {/* Desktop Layout */}
                    {/* Features Column */}
                    <div className="col-span-4">
                        <div className=" rounded-t-lg ">
                            <h1 className=" text-[32px] font-[700]  leading-[41px] "> <span className='text-[#036]'>Choose a plan</span> that works for you</h1>
                        </div>
                        <ul className="space-y-6 mt-3 ">
                            <li className="text-[20px] text-[#036] font-[500] font-nunito-sans">
                                Car Rentals <span className="text-[#4A4C56] opacity-70 text-[18px] font-[400]">(up to 15 days/month)</span>
                            </li>
                            <li className="text-[20px] text-[#036] font-[500] font-nunito-sans leading-[36px]">Bundled Insurance</li>
                            <li className="text-[20px] text-[#036] font-[500] font-nunito-sans leading-[36px]">Prepaid Gas Tank Refill</li>
                            <li className="text-[20px] text-[#036] font-[500] font-nunito-sans leading-[36px]">Access to Management System</li>
                            <li className="text-[20px] text-[#036] font-[500] font-nunito-sans leading-[36px]">Fleet Tracking & Expense Management</li>
                            <li className="text-[20px] text-[#036] font-[500] font-nunito-sans">
                                Free Vehicle Delivery <span className="text-[#4A4C56] opacity-70 text-[18px] font-[400]">(included in 25-day plan)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Laskar Column */}
                    <div className="col-span-4 bg-[#036] rounded-[12px]  pb-4">
                        <div className=" rounded-t-lg py-4 border-b border-gray-400">
                            <h3 className="text-[24px] font-[700] text-center text-white text-syne">Laskar & Co Auto</h3>
                        </div>
                        <ul className="space-y-10 p-6">
                            {[...Array(5)].map((_, i) => (
                                <li key={i} className="flex justify-center">
                                    {/* <CheckCircle  /> */}
                                    <Check className="w-6 h-6 p-[2px] bg-white rounded-full text-[#003366]" />
                                </li>
                            ))}
                        </ul>
                        <div className='px-5'>
                            <button className="w-full  py-3 bg-[#1978D8] text-white rounded-md text-[16px] font-semibold hover:bg-[#1565C0] transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Desktop Traditional Column */}
                    <div className="col-span-4 bg-[#036] rounded-[12px] ">
                        <div className="bg-[#036] rounded-t-lg py-4 border-b border-gray-400">
                            <h3 className="text-[24px] font-[700] text-center text-white text-syne">Traditional</h3>
                        </div>
                        <ul className="space-y-10  rounded-b-lg p-6">
                            {[...Array(6)].map((_, i) => (
                                <li key={i} className="flex justify-center">
                                    <DollarSign className="w-6 h-6 p-[2px] bg-white rounded-full text-[#003366]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-6 " ref={mobilePlanRef}>

                    {/* Mobile Laskar Section */}
                    <div className="bg-[#036] rounded-lg p-6">
                        <h3 className="text-[18px]  font-[700px] leading-[18px] font-syne text-white mb-6 text-center">Laskar & Co Auto</h3>
                        <ul className="space-y-6">
                            {[
                                'Car Rentals (up to 15 days/month)',
                                'Bundled Insurance',
                                'Prepaid Gas Tank Refill',
                                'Access to Management System',
                                'Fleet Tracking & Expense Management'
                            ].map((item, i) => {
                                const parts = item.match(/^(.*?)(\([^)]*\))?$/);
                                return (
                                    <li key={i} className="flex items-center justify-between text-white text-[14px] font-[700] text-syne">
                                        <span>
                                            {parts?.[1]}{' '}
                                            {parts?.[2] && <span className="text-white font-[400] text-[14px]">{parts[2]}</span>}
                                        </span>
                                        <Check className="w-6 h-6 p-[2px] bg-white rounded-full text-[#003366]" />
                                    </li>
                                );
                            })}
                        </ul>

                        <Button className="w-full mt-6 py-[24px] px-[24px] bg-[#1978D8]  rounded-md text-[16px] font-[400] text-syne">
                            <span className='text-white'> Get Started</span>
                        </Button>
                    </div>

                    {/* Mobile Traditional Section */}
                    <div className="bg-[#036] rounded-lg p-6">
                        <h3 className="text-[18px]  font-[700px] leading-[18px] font-syne text-white mb-6 text-center">Traditional</h3>
                        <ul className="space-y-6">
                            {[
                                'Car Rentals',
                                'Bundled Insurance',
                                'Prepaid Gas Tank Refill',
                                'Access to Management System',
                                'Fleet Tracking & Expense Management'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-between text-white text-[14px] font-[700] text-syne">
                                    <span>{item}</span>
                                    <DollarSign className="w-6 h-6 p-[2px] bg-white rounded-full text-[#003366]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
