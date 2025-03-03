'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import logo from '@/public/logo/logo.png'
import color_logo from '@/public/logo/color_logo.png'
import { Menu, User, X } from 'lucide-react'
import { gsap } from 'gsap'
import Link from 'next/link'
import CustomImage from '../Reusable/CustomImage'

// Add imageLoaded state at the top of your component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  // Removed imageLoaded state
  const menuRef = useRef(null)
  const navLinksRef = useRef<HTMLDivElement | null>(null)
  const menuIconRef = useRef(null)
  const closeIconRef = useRef(null)
  const backdropRef = useRef(null)

  useEffect(() => {
    // Initial setup - set everything to the correct starting state
    if (closeIconRef.current) {
      gsap.set(closeIconRef.current, { opacity: 0, scale: 0, display: 'none' })
    }
    setIsInitialized(true)
  }, [])
  // Update handleLinkClick to include active link tracking
  const handleLinkClick = (path: string) => {
    closeMenu()
    setIsOpen(false)
    setActiveLink(path)
  }
  const toggleMenu = () => {
    if (!isOpen) {
      // Opening menu
      openMenu()
    } else {
      // Closing menu
      closeMenu()
    }

    setIsOpen(!isOpen)
  }

  const openMenu = () => {
    // Animate menu icon to close icon
    if (menuIconRef.current && closeIconRef.current) {
      gsap.to(menuIconRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(menuIconRef.current, { display: 'none' })
          gsap.set(closeIconRef.current, { display: 'block' })
          gsap.to(closeIconRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    }
    // Animate menu open
    if (menuRef.current) {
      gsap.set(menuRef.current, { display: 'block' })
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        }
      )
    }
    // Animate backdrop
    if (backdropRef.current) {
      gsap.set(backdropRef.current, { display: 'block', opacity: 0 })
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    // Animate nav links with staggered effect
    if (navLinksRef.current) {
      gsap.fromTo(
        navLinksRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.3
        }
      )
    }
  }

  const closeMenu = () => {
    // Animate close icon to menu icon
    if (menuIconRef.current && closeIconRef.current) {
      gsap.to(closeIconRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(closeIconRef.current, { display: 'none' })
          gsap.set(menuIconRef.current, { display: 'block' })
          gsap.to(menuIconRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
          })
        }
      })
    }

    // Animate menu close
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(menuRef.current, { display: 'none' })
        }
      })
    }

    // Animate backdrop
    if (backdropRef.current) {
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(backdropRef.current, { display: 'none' })
        }
      })
    }
  }

  return (
    <div className='container relative max-w-full px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between px-4 py-2 bg-[#036] rounded-full'>
        <div>
          <Image src={logo} alt='logo' width={183} height={183} className='w-[100px] sm:w-[120px] md:w-[183px]' />
        </div>
        <button
          className='flex items-center justify-center bg-white rounded-full p-2 md:p-3 z-50'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-[24px] h-[24px]  md:w-[30px] md:h-[30px]">
            <Menu
              ref={menuIconRef}
              className='absolute top-0 left-0 w-full h-full text-[#1978D8] cursor-pointer'
            />
            <X
              ref={closeIconRef}
              className='absolute cursor-pointer border rounded-full p-1 top-0 left-0 w-full h-full text-[#1978D8] opacity-0 scale-0 hidden'
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay - positioned at the top */}
      <div
        ref={menuRef}
        className={`absolute top-[0px] right-5 lg:right-10 h-auto w-80 bg-white text-black z-40 shadow-lg rounded-xl hidden ${!isInitialized ? 'opacity-0' : ''}`}
      >
        <div className='flex flex-col pt-4 px-6 space-y-4 relative min-h-[400px]'> 
          <CustomImage
            src={color_logo.src}
            alt="Laskar Logo"
            className="w-[122px]"
            sizes="122px"
          />
          <div ref={navLinksRef} className='flex mb-48 flex-col items-start space-y-4'>
            <ul className='flex flex-col space-y-4 w-full mt-5'>
              <li>
                <Link
                  href='/'
                  onClick={() => handleLinkClick('/')}
                  className={`text-[20px] font-nunito-sans font-[500] transition-colors block w-full px-4 py-2 rounded-full text-left ${activeLink === '/' ? 'bg-[#036] text-white ' : 'hover:text-[#036]'
                    }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='#how-it-works'
                  onClick={() => handleLinkClick('#how-it-works')}
                  className={`text-[20px] font-nunito-sans font-[500] transition-colors block w-full px-4 py-2 rounded-full text-left ${activeLink === '#how-it-works' ? 'bg-[#036] text-white' : 'hover:text-[#036]'
                    }`}
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href='#who-we-are'
                  onClick={() => handleLinkClick('#who-we-are')}
                  className={`text-[20px] font-nunito-sans font-[500] transition-colors block w-full px-4 py-2 rounded-full text-left ${activeLink === '#who-we-are' ? 'bg-[#036] text-white' : 'hover:text-[#036]'
                    }`}
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  onClick={() => handleLinkClick('#services')}
                  className={`text-[20px] font-nunito-sans font-[500] transition-colors block w-full px-4 py-2 rounded-full text-left ${activeLink === '#services' ? 'bg-[#036] text-white' : 'hover:text-[#036]'
                    }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#why-choose-us'
                  onClick={() => handleLinkClick('#why-choose-us')}
                  className={`text-[20px] font-nunito-sans font-[500] transition-colors block w-full px-4 py-2 rounded-full text-left ${activeLink === '#why-choose-us' ? 'bg-[#036] text-white' : 'hover:text-[#036]'
                    }`}
                >
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-4 left-6 right-6">
            <button className='bg-[#1978D8] flex items-center justify-center gap-2 text-white rounded-full py-2 px-4 text-center w-full'>
              <User className='text-white'/>
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      <div
        ref={backdropRef}
        className={`fixed inset-0 bg-black/50 z-30 hidden ${!isInitialized ? 'opacity-0' : ''}`}
        onClick={toggleMenu}
      />
    </div>
  )
}