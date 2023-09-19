import React from 'react';
import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import { SliderDataEleven } from '../data/SliderData';
import Cardsthree from '../components/Cardsthree';

const Thingstodoscreen = () => {
  return (
    <>
      <Hero slides={ SliderDataEleven } />
      <br/>
      <Cardsthree />
    </>
  )
}

export default Thingstodoscreen
