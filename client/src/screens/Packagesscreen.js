import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

import { SliderDataTwo} from '../data/SliderData';




const Theareascreen = () => {
  return (
    <>
      <Hero slides={SliderDataTwo} />
      <br/>
      <Cards />
    </>
  )
}

export default Theareascreen
