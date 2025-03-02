import Banner from '@/components/banner/Banner'
import Carousel from '@/components/carousel/carousel'
import HowWorks from '@/components/how-works/HowWroks'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className='bg-[#F2F8FE]'>
        <Banner />
        <Carousel />
      </div>

      <HowWorks />
    </>
  )
}
