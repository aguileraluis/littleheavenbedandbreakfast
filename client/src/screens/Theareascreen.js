import React from 'react';
import Hero from '../components/Hero';
import { SliderDataSix } from '../data/SliderData';
import Packages from '../components/Packages';

const Packagesscreen = () => {
  return (
    <>
      <Hero slides={ SliderDataSix } />
      <Packages />
    </>
  )
}

export default Packagesscreen
