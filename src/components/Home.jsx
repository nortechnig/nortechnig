import React from 'react'
import News from './News';
import High from './High';
import Values from './Values';
import About from './About';
import Courses from './Courses';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
      <About />
      <Courses />
      <High />
      <Values />
      <News />
      <Footer />
    </div>
  )
}

export default Home