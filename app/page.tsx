import Hero from '@/components/banner/Hero'
import HowWorks from '@/components/how-works/HowWroks'
import WhoWeAre from '@/components/who-we-are/WhoWeAre'
import React from 'react'
import SuccessStories from '@/components/success-stories/SuccessStories'
import Success from '@/components/success/Success'
import ChoosePlan from '@/components/choose-plan/ChoosePlan'

import ContactUs from '@/components/contact-us/ContactUs'
import WhyChoose from '@/components/why-choose/WhyChoose'

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
