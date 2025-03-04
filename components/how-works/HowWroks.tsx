'use client'
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import roundedLine from '@/public/works/Ellipse.png'
import CustomImage from '../Reusable/CustomImage';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HowWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const descriptionRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carSectionRef = useRef(null);
  const stepsRef = useRef(null);

  const stepsData = useMemo(() => [
    {
      id: 1,
      title: "Book a Consultation",
      description: "Schedule a session with us to discuss your company's fleet needs and customize your plan."
    },
    {
      id: 2,
      title: "Sign Up & Customize",
      description: "Complete your registration and customize your service package."
    },
    {
      id: 3,
      title: "Add & Assign Vehicles",
      description: "Add your vehicles to the system and assign them to your team members."
    },
    {
      id: 4,
      title: "Track & Optimize",
      description: "Monitor your fleet's performance and optimize operations in real-time."
    },
    {
      id: 5,
      title: "Manage Billing & Support",
      description: "Access billing information and get support whenever you need it."
    }
  ], []); // Empty dependency array since data is static

  const handleStepClick = (stepNumber: number) => {
    if (activeStep === stepNumber) {
      gsap.to(descriptionRefs.current[stepNumber - 1], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setActiveStep(0)
      });
    } else {
      setActiveStep(stepNumber);
      gsap.fromTo(descriptionRefs.current[stepNumber - 1], {
        height: 0,
        opacity: 0
      }, {
        height: 'auto',
        opacity: 1,
        duration: 0.3
      });
    }
  };
  // Animate the first step's description when the component mounts
  useEffect(() => {
    descriptionRefs.current = descriptionRefs.current.slice(0, stepsData.length);
    if (activeStep === 1) {
      gsap.fromTo(descriptionRefs.current[0], {
        height: 0,
        opacity: 0
      }, {
        height: 'auto',
        opacity: 1,
        duration: 0.3
      });
    }
  }, [stepsData, activeStep]);
  useEffect(() => {
    // Create a context to ensure proper cleanup
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 10%',
            toggleActions: 'play none none reverse'
          },
        }
      );
      // Car section animation
      gsap.fromTo(
        carSectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: carSectionRef.current,
            start: 'top 10%',
            toggleActions: 'play none none reverse'
          },
        }
      );
      // Steps animation
      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 10%',
            toggleActions: 'play none none reverse'
          },
        }
      );
    });
    // Cleanup function
    return () => ctx.revert();
  }, []);
  return (
    <div className='container px-4 sm:px-6 lg:px-8 py-16' id='how-it-works' ref={sectionRef}>
      <div className='flex flex-col lg:flex-row justify-between items-stretch gap-8'>
        <div className='md:hidden' ref={titleRef}>
          <h1 className='text-[#036] text-[40px] xl:text-[48px] font-[700] leading-[57px] font-syne mb-4 flex-grow-0'>How It Works</h1>
          <p className='text-[#4A4C56] text-[14px] md:text-[18px] font-[400] leading-[25px] mb-8 flex-grow-0'>
            Our mission is to simplify transportation for businesses with well-maintained, comfortable vehicles and a Corporate Car Management System designed to streamline operations.
          </p>
        </div>
        {/* left side */}
        <div className='bg-[#F6FAFE] border border-[#E8F2FC] py-10 px-2 md:px-8 rounded-lg w-full lg:w-[50%] flex flex-col' ref={carSectionRef}>
          <div className='relative flex-grow-0'>
            <div className='relative w-full max-w-2xl mx-auto'>
              <div className='relative z-10'>
                <CustomImage
                  src="/works/car3d.png"
                  alt="Car Image"
                  width={600}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className='absolute left-0 right-0 -bottom-[25%] w-[95%] mx-auto'>
                <div className="relative">
                  <CustomImage
                    src={roundedLine.src}
                    alt="Rounded Line"
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                  
                  />
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] sm:translate-y-[20%] md:translate-y-[30%]">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#0D74E0] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-28 md:mt-48 flex-grow'>
            <div className='mb-5'>
              <h1 className='text-[#036] text-[14px] md:text-[27px] font-[700] font-syne'>Tesla Model 3</h1>
              <p className='text-[#4A4C56] mt-2 text-[14px] md:text-[18px] font-normal'>A combination specification of the size and thickness of the device pipe</p>
            </div>
            <div>
              <h1 className='text-[#036] text-[12px] md:text-[21px] font-[600] font-syne'>Specification</h1>
              <div className='grid grid-cols-3 gap-4 mt-4'>
                <div className='bg-[#E1EEFB] p-4 rounded-lg'>
                  <div className='bg-[#003366] rounded-full p-1 md:p-3 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center'>
                    <CustomImage src="/works/car.png" alt="Channel1" width={24} height={24} className='w-6 md:w-12' />
                  </div>
                  <h1 className='text-[#036] text-[12px] md:text-[16px] font-[600] mt-2'>Channel1</h1>
                  <p className='text-[#4A4C56] text-[10px] md:text-[12px]'>A Sonic</p>
                </div>
                <div className='bg-[#E1EEFB] p-4 rounded-lg'>
                  <div className='bg-[#003366] rounded-full p-1 md:p-3 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center'>
                    <CustomImage src="/works/batch.png" alt="Expro One" width={24} height={24} className='w-6 md:w-12' />
                  </div>
                  <h1 className='text-[#036] text-[12px] md:text-[16px] font-[600] mt-2'>Expro One</h1>
                  <p className='text-[#4A4C56] text-[10px] md:text-[12px]'>600 Hz</p>
                </div>
                <div className='bg-[#E1EEFB] p-4 rounded-lg'>
                  <div className='bg-[#003366] rounded-full p-1 md:p-3 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center'>
                    <CustomImage src="/works/dashboard.png" alt="MacSonic" width={24} height={24} className='w-6 md:w-12' />
                  </div>
                  <h1 className='text-[#036] text-[12px] md:text-[16px] font-[600] mt-2'>MacSonic</h1>
                  <p className='text-[#4A4C56] text-[10px] md:text-[12px]'>400 km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='flex-1 w-full lg:w-[50%] flex flex-col' ref={stepsRef}>
          <div className='hidden md:block' ref={titleRef}>
            <h1 className='text-[#036] text-[40px] xl:text-[48px] font-[700] leading-[57px] font-syne mb-4 flex-grow-0'>How It Works</h1>
            <p className='text-[#4A4C56] text-[14px] md:text-[18px] font-[400] leading-[25px] mb-8 flex-grow-0'>
              Our mission is to simplify transportation for businesses with well-maintained, comfortable vehicles and a Corporate Car Management System designed to streamline operations.
            </p>
          </div>

          <div className='relative flex-grow'>
            {/* Vertical dotted line */}
            <div className='absolute left-6 top-12 h-4/5 border-l-2 border-dashed border-[#C7E1FB]'></div>
            <div className='space-y-10'>
              {stepsData.map((step, index) => (
                <div key={step.id} className='relative'>
                  <div className={`${activeStep === step.id ? 'bg-[#003366]' : 'bg-white border border-[#E1EEFB]'} rounded-lg p-6`}>
                    <div className='flex items-center gap-4'>
                      <div>
                        <div className={`${activeStep === step.id ? 'bg-white text-[#036]' : 'bg-[#E1EEFB] text-[#036]'} rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold z-10`}>
                          {step.id}
                        </div>
                      </div>
                      <div className='w-full'>
                        <h2
                          className={`${activeStep === step.id ? 'text-white' : 'text-[#1D1F2C]'} text-[20px] xl:text-[24px] font-syne font-[600] leading-[28px] mb-2 cursor-pointer flex items-center justify-between`}
                          onClick={() => handleStepClick(step.id)}
                        >
                          {step.title}
                        </h2>
                        <div
                          ref={(el: HTMLDivElement | null): void => {
                            if (el) {
                              descriptionRefs.current[index] = el;
                            }
                          }}
                          style={{ overflow: 'hidden', height: activeStep === step.id ? 'auto' : 0, opacity: activeStep === step.id ? 1 : 0 }}
                        >
                          <p className={`${activeStep === step.id ? 'text-[#E9E9EA] text-[16px] xl:text-[18px] font-[400] leading-[25px]' : ''}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}