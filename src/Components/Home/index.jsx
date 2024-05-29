import React from 'react'
import About from './About'
import Breeds from './Breeds'
import NavBar from './NavBar'
import Contact from './Contact'
import SocialLinks from './SocialLinks'
import Home from './Main'

export default function index() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Breeds />
        <Contact />
        <SocialLinks />
    </div>
  )
}
