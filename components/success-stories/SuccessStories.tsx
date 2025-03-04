'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bgImg from '@/public/successStories/bgImage.png'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Add this interface before the component
interface SuccessStory {
  title: string;
  description: string;
  image: string;
  user: string;
  position: string;
  company: string;
}

export default function SuccessStories() {
  const [data, setData] = useState<SuccessStory[]>([])
  const [activeSlide, setActiveSlide] = useState(0)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const sliderContainerRef = useRef(null)

  useEffect(() => {
    fetchSuccessStories()

    // Create a context to ensure proper cleanup
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
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

      // Slider container animation
      gsap.fromTo(
        sliderContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sliderContainerRef.current,
            start: 'top 10%',
            toggleActions: 'play none none reverse'
          },
        }
      )
    });

    // Cleanup function
    return () => ctx.revert();
  }, [])

  const fetchSuccessStories = async () => {
    try {
      const res = await fetch('/data/successStories.json')
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.error('Error loading success stories data:', error)
    }
  }

  // Custom dots component
  const CustomDots = ({ slides, currentSlide }: { slides: SuccessStory[], currentSlide: number }) => {
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    React.useEffect(() => {
      buttonRefs.current.forEach((button, index) => {
        gsap.to(button, {
          width: index === currentSlide ? '50px' : '10px',
          backgroundColor: index === currentSlide ? '#036' : '#BEDAF7',
          duration: 0.4,
          ease: "power2.inOut"
        });
      });
    }, [currentSlide]);

    return (
      <div className="flex justify-center gap-2">
        {Array.from({ length: slides.length }).map((_, i) => (
          <button
            key={i}
            ref={(el: HTMLButtonElement | null): void => {
              buttonRefs.current[i] = el;
            }}
            className={`h-[10px] cursor-pointer rounded-full transition-colors duration-300 bg-[#BEDAF7]`}
            onClick={() => sliderRef?.slickGoTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    );
  };

  let sliderRef: Slider | null = null

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    responsive: [
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
    ],
  }

  return (
    <div className="relative pb-48 " ref={sectionRef}>
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center
          [background-size:200%_110%]
          sm:[background-size:90%_100%]
          md:[background-size:85%_100%]
          lg:[background-size:80%_100%]
          xl:[background-size:90%_110%]"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          opacity: 0.07
        }}
      ></div>

      <div className="container top-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-[24px] md:text-[48px] font-[700] text-[#036] text-center mb-10 font-syne"
        >
          Success Stories From Our Clients
        </h2>

        <div className="relative" ref={sliderContainerRef}>
          <Slider
            ref={(slider: Slider | null): void => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {data.map((story, index) => (
              <div key={index} className="px-3 pt-2 pb-16">
                <div className="relative">
                  <div className="bg-[#BEDAF7] rounded-lg p-6 md:p-8 mb-6 relative">
                    <h3 className="text-center text-[20px] font-[700] text-[#0F1016] mb-4">
                      &ldquo;{story.title}&rdquo;
                    </h3>
                    <p className="text-[#1D1F2C] opacity-[0.7] leading-[28px] font-font-nunito-sans text-center mb-2 text-[18px] font-[400]">
                      {story.description}
                    </p>

                    {/* Triangle pointer */}
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2 flex-shrink-0 bg-gray-200 border-2 border-white shadow-md">
                      {story.image && (
                        <Image
                          width={100}
                          height={100}
                          src={story.image}
                          alt={story.user}
                          className="w-[62px] h-full "
                        />
                      )}
                    </div>
                    <div className="ms-2">
                      <h4 className="text-[20px] font-[600] font-syne text-[#1D1F2C]">{story.user}</h4>
                      <p className="text-[#4A4C56] text-[16px] font-[400] font-nunito-sans opacity-[0.5]">
                        {story.position}, {story.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom dots navigation */}
          <CustomDots
            slides={data}
            currentSlide={activeSlide}
          />
        </div>
      </div>
    </div>
  )
}
