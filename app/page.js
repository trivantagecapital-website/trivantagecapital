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
    <main id="main-content" tabIndex={-1} className="flex-1">
      <Hero/>
      <PhilosophySection/>
      <StrategicOfferings />
      {/* <BlogsSection/> */}
      <YouTubeSection/>
      <CTASection/>
      <ComplaintDataPopup />
    </main>
  )
}

export default page