import React from 'react'
import CTASection from './components/CTASection'
import Hero from './components/Hero'
import PhilosophySection from './components/PhilosophySection'
import StrategicOfferings from './components/StrategicOfferings'
import BlogsSection from './components/BlogsSection'

const page = () => {
  return (
    <div>
      <Hero/>
      <PhilosophySection/>
      <StrategicOfferings />
      <BlogsSection/>
      <CTASection/>
    </div>
  )
}

export default page