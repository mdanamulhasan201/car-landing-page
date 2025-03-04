'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ChevronUp, Send } from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import carImage from '@/public/contact/carImage.png'
import CustomImage from '../Reusable/CustomImage'
import { gsap } from 'gsap';

type FormData = {
    fullName: string
    businessName: string
    email: string
    phone: string
    message: string
}

export default function ContactUs() {
    const [isFormOpen, setIsFormOpen] = useState(true);
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef.current) {
            const content = formRef.current;
            const timeline = gsap.timeline();

            if (isFormOpen) {
                gsap.set(content, { 
                    display: 'block',
                    height: 'auto',
                    overflow: 'hidden'
                });
                const height = (content as HTMLElement).offsetHeight;
                
                timeline
                    .set(content, { height: 0 })
                    .to(content, {
                        height: height,
                        duration: 0.5,
                        ease: 'power2.out'
                    })
                    .fromTo(content, 
                        { opacity: 0, y: -15 },
                        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
                        '-=0.3'
                    );
            } else {
                timeline
                    .to(content, {
                        opacity: 0,
                        y: -15,
                        duration: 0.8,
                        ease: 'power3.inOut'
                    })
                    .to(content, {
                        height: 0,
                        duration: 1,
                        ease: 'power4.inOut',
                        onComplete: () => {
                            gsap.set(content, { display: 'none' });
                        }
                    },
                    '-=0.4'
                );
            }
        }
    }, [isFormOpen]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
        reset() // Clear form after submission
    }
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left side - Image */}
                <div className="rounded-lg overflow-hidden lg:h-[600px] flex items-center">
                    <div className="w-full">
                        <CustomImage
                            src={carImage.src}
                            alt="Luxury Car"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
                {/* Right side - Form */}
                <div className="bg-[#F2F8FE] rounded-[8px] p-8 relative">
                    <h2 className="text-[24px] md:text-[32px] leading-[38px] text-center font-[700] text-[#036] mb-5 font-syne">
                        Get in Touch with<br />
                        Laskar & Co Auto
                    </h2>
                    <div className='my-5 w-full'>
                        <button
                            onClick={() => setIsFormOpen(!isFormOpen)}
                            className='w-full border-t border-b py-4 px-4 border-[#E9E9EA]'
                        >
                            <div className='flex items-center justify-between'>
                                <span className='text-[#4A4C56] text-[18px] font-[500]'>Contact Form</span>
                                <ChevronUp className={`text-[#4A4C56] transition-transform duration-300 ${isFormOpen ? '' : 'rotate-180'}`} />
                            </div>
                        </button>
                    </div>
                    {isFormOpen && (
                        // Update the form render condition to always render but control visibility with GSAP
                        <form 
                            ref={formRef} 
                            onSubmit={handleSubmit(onSubmit)} 
                            className="space-y-6"
                            style={{ display: isFormOpen ? 'block' : 'none' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    {/* Update the placeholders with red asterisk */}
                                    <input
                                        {...register('fullName', {
                                            required: 'Full name is required',
                                            minLength: {
                                                value: 2,
                                                message: 'Name must be at least 2 characters'
                                            }
                                        })}
                                        type="text"
                                        placeholder="Full Name*"
                                        className={`w-full bg-white px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-[#E5E7EB]'} focus:outline-none focus:border-[#036] text-[16px] placeholder:after:content-['*'] placeholder:after:text-red-500 placeholder:after:ml-0.5`}
                                    />
                                    {errors.fullName && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.fullName.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        {...register('businessName')}
                                        type="text"
                                        placeholder="Business Name"
                                        className="w-full bg-white px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[#036] text-[16px]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    {/* Update other required fields similarly */}
                                    <input
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        type="email"
                                        placeholder="Email Address*"
                                        className={`w-full bg-white px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-[#E5E7EB]'} focus:outline-none focus:border-[#036] text-[16px] placeholder:after:content-['*'] placeholder:after:text-red-500 placeholder:after:ml-0.5`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                            pattern: {
                                                value: /^[0-9-+()]{10,}$/,
                                                message: 'Invalid phone number'
                                            }
                                        })}
                                        type="tel"
                                        placeholder="Phone Number*"
                                        className={`w-full bg-white px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-[#E5E7EB]'} focus:outline-none focus:border-[#036] text-[16px] placeholder:after:content-['*'] placeholder:after:text-red-500 placeholder:after:ml-0.5`}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <textarea
                                    {...register('message', {
                                        required: 'Message is required',
                                        minLength: {
                                            value: 10,
                                            message: 'Message must be at least 10 characters'
                                        }
                                    })}
                                    placeholder="How can we help?"
                                    rows={4}
                                    className={`w-full bg-white px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-[#E5E7EB]'} focus:outline-none focus:border-[#036] text-[16px] resize-none`}
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                                )}
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2  w-auto px-5 py-2 bg-[#1978D8] text-white rounded-[50px] hover:bg-[#1565C0] transition-colors text-[16px] font-[400]"
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <Send className="w-6 h-6 text-[#003366]" />
                                    </div>
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
