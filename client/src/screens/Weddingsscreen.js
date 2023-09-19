import React from 'react';
import { SliderDataFive } from "../data/SliderData";
import Hero from "../components/Hero";
import videoOne from '../video/videoonee.mp4';
import Gallery from '../components/Gallery';
import TextSection from '../components/TextSection';
import love from "../video/love.MP4";
import Cardstwo from '../components/Cardstwo';



const Weddingsscreen = () => {
  return (
    <>
      <Hero slides={ SliderDataFive } />

    
    <section className="section-title">
    <video style={{width: '40%',marginTop: '10%', height: '50%', position: 'relative', display: 'inline-block', textAlign: 'center'}} src={love} controls />
      </section>
  
      
      
      <h2 style={{color: 'black', paddingLeft: '1rem', paddingRight: '1rem'}}>
          A Southern Wedding
          <br/>
          <br/>
        </h2>
        <p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '0', marginLeft: '4rem', marginRight: '4rem'}}>It is our dream and honor to be able to host your dream wedding at Little Heaven Bed & Breakfast. We invite you to elope as a couple for an intimate, natural, and peaceful escape. Bring your friends to witness your vows or have a party with your closest friends and family. We have up to 6 guest rooms and 6 bathrooms with a commercial kitchen. </p>
     
      <Gallery />
      <Cardstwo />
  
       </>
  )
}



export default Weddingsscreen
