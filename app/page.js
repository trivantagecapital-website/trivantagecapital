import React from 'react'
import CTASection from '../components/CTASection'
import Hero from '../components/Hero'
import PhilosophySection from '../components/PhilosophySection'
import StrategicOfferings from '../components/StrategicOfferings'
import BlogsSection from '../components/BlogsSection'
import YouTubeSection from '../components/YouTubeSection'
import ComplaintDataPopup from '../components/ComplaintDataPopup'

const page = () => {
  return (
    <div>
      <Hero/>
      <PhilosophySection/>
      <StrategicOfferings />
      <BlogsSection/>
      <YouTubeSection/>
      <CTASection/>
      <ComplaintDataPopup />
    </div>
  )
}

export default page