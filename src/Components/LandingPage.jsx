import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'
import PhotoGallery from './PhotoGallery'


export default function LandingPage() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Skills />
        <PhotoGallery />
        <Project />
        <Footer />
    </div>
  )
}
