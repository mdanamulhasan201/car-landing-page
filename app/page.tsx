// import Banner from '@/components/banner/Banner'
import Hero from '@/components/banner/Hero'
import HowWorks from '@/components/how-works/HowWroks'
import WhoWeAre from '@/components/who-we-are/WhoWeAre'
import React from 'react'
import SuccessStories from '@/components/success-stories/SuccessStories'
import Success from '@/components/success/Success'
import ChoosePlan from '@/components/choose-plan/ChoosePlan'
import WhyChoose from '@/components/WhyChoose'
import ContactUs from '@/components/contact-us/ContactUs'

export default function Home() {
  return (
    <>
      <div className='bg-[#F2F8FE]'>
        {/* <Banner /> */}
        <Hero />
        <Success />
      </div>
      <HowWorks />
      <WhoWeAre />
      <SuccessStories />
      <ChoosePlan />
      <WhyChoose />
      <ContactUs/>
    </>
  )
}
