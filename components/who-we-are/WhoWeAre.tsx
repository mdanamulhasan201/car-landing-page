import React from 'react'
import Image from 'next/image'
import bgImg from '@/public/whoWeAre/background.png'

export default function WhoWeAre() {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-0">
                <Image 
                    src={bgImg} 
                    alt='background'
                    fill
                    className='object-cover'
                    priority
                    quality={100}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <div className='relative z-10 container px-4 sm:px-6 lg:px-8' id="who-we-are">
                this section is for who we are
            </div>
        </div>
    )
}
