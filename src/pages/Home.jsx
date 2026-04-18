import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import ProcessSection from '../components/Home/ProcessSection'
import Projects from '../components/Home/Projects'
import Services from '../components/Home/Services'
import Pricing from '../components/Home/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import BlogSection from '../components/Home/BlogSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProcessSection />
      <Projects />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Home