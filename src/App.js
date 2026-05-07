import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Location from './components/Location';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}

export default App;