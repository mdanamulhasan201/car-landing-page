'use client'
import React from 'react'
import Link from 'next/link'
import logo from '@/public/logo/color_logo.png'
import CustomImage from '../Reusable/CustomImage'

export default function Footer() {
    return (
        <footer className="bg-[#f2f8fe] py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Logo Section */}
                    <div className="md:col-span-5">
                        <CustomImage
                            src={logo.src}
                            alt="Laskar & Co Logo"
                            width={500}
                            height={300}
                            className="w-[233px]"
                        />
                    </div>

                    {/* Company Links */}
                    <div className="md:col-span-3 relative">
                        <div className="absolute right-10 top-0 bottom-0 border-r border-dashed border-[#c2c6cb] hidden md:block"></div>
                        <h3 className="text-[#1D1F2C] text-[18px] font-[600] mb-6 font-syne">Company</h3>
                        <ul className="space-y-4 font-[400] font-nunito-sans">
                            <li><Link href='#how-it-works'
                                className="text-[#4A4C56] hover:text-[#036] text-[14px] md:text-[16px]">How It Works</Link></li>
                            <li><Link href="#who-we-are" className="text-[#4A4C56] hover:text-[#036] text-[14px] md:text-[16px]">Who We Are</Link></li>
                            <li><Link href="#why-choose-us" className="text-[#4A4C56] hover:text-[#036] text-[14px] md:text-[16px]">Why Choose Us</Link></li>
                            <li><Link href="/" className="text-[#4A4C56] hover:text-[#036] text-[14px] md:text-[16px]">FAQ</Link></li>
                        </ul>
                    </div>
                    {/* Newsletter Section */}
                    <div className="md:col-span-4">

                        <div className="md:col-span-4">
                            <h3 className="text-[#1D1F2C] text-[18px] font-[600] mb-6 font-syne">Newsletter</h3>
                            <div className="flex  items-stretch md:items-center gap-2 md:gap-0 rounded-[8px] p-1 border border-[#BEDAF7]">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full md:flex-1 px-4 py-2 bg-transparent focus:outline-none text-[#4A4C56] placeholder:text-[#4A4C56]"
                                />
                                <button className="md:w-auto bg-[#1978D8] text-white px-4 md:px-6 lg:px-8 py-2 rounded-[8px] font-[400] hover:bg-[#1565C0] transition-colors text-[14px] md:text-[15px] lg:text-[16px]">
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#E5E7EB] mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#4A4C56] font-nunito-sans font-[400 ] text-[14px]">
                            © {new Date().getFullYear()}laskar@ All Rights Reserved.
                        </p>
                        <div className="flex gap-8">
                            <Link href="/" className="text-[#4A4C56] font-nunito-sans font-[400 ] text-[14px]">
                                Terms of Service
                            </Link>
                            <Link href="/" className="text-[#4A4C56] font-nunito-sans font-[400 ] text-[14px]">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="text-[#4A4C56] font-nunito-sans font-[400 ] text-[14px]">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
