'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import logo from '@/public/logo/logo.png'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
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

    // Animate menu open (left to right)
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      })
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
        { x: -50, opacity: 0 },
        {
          x: 0,
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
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(closeIconRef.current, { display: 'none' })
          gsap.set(menuIconRef.current, { display: 'block' })
          gsap.to(menuIconRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    }

    // Animate nav links out first
    if (navLinksRef.current) {
      gsap.to(
        navLinksRef.current.children,
        {
          x: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: 'power2.in'
        }
      )
    }

    // Animate menu close (right to left)
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: '-100%',
        duration: 0.5,
        delay: 0.1,
        ease: 'power2.in'
      })
    }

    // Animate backdrop
    if (backdropRef.current) {
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.5,
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
          <div className="relative w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[30px] md:h-[30px]">
            <Menu
              ref={menuIconRef}
              className='absolute top-0 left-0 w-full h-full text-[#1978D8] cursor-pointer'
            />
            <X
              ref={closeIconRef}
              className='absolute cursor-pointer  top-0 left-0 w-full h-full text-[#1978D8] opacity-0 scale-0 hidden'
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay - positioned on left side */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-56 sm:w-64 md:w-80 bg-[#036] z-40 shadow-lg transform -translate-x-full transition-opacity ${!isInitialized ? 'opacity-0' : ''}`}
      >
        <div className='flex flex-col pt-20 md:pt-24 px-6 md:px-8'>
          <div ref={navLinksRef} className='flex flex-col space-y-4 md:space-y-6'>
            <a href='/' className='text-white text-lg sm:text-xl font-medium hover:text-[#1978D8] transition-colors'>Home</a>
            <a href='/about' className='text-white text-lg sm:text-xl font-medium hover:text-[#1978D8] transition-colors'>About</a>
            <a href='/contact' className='text-white text-lg sm:text-xl font-medium hover:text-[#1978D8] transition-colors'>Contact</a>
            <a href='/services' className='text-white text-lg sm:text-xl font-medium hover:text-[#1978D8] transition-colors'>Services</a>
            <a href='/portfolio' className='text-white text-lg sm:text-xl font-medium hover:text-[#1978D8] transition-colors'>Portfolio</a>
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