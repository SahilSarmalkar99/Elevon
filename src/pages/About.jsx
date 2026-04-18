import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutContent from '../components/About/AboutContent'
import AwardsSection from '../components/About/AwardsSection'
import Testimonials from "../components/Testimonials"
import TrustedSection from '../components/About/TrustedSection'
import TeamSection from '../components/About/TeamSection'
import FAQ from "../components/FAQ"
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <AwardsSection />
      <Testimonials  />
      <TrustedSection />
      <TeamSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default About