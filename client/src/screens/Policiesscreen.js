import React from 'react';
import Hero from '../components/Hero';
import { SliderDataTen } from '../data/SliderData';

const Policiesscreen = () => {
  return (
    <>
    <Hero slides={ SliderDataTen } />
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Policies</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange', marginLeft: '3rem', marginRight: '3rem'}}>at Little Heaven Bed & Breakfast</h4>
      <br/>
      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Cancellations:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          We understand that things can happen that prevent us from doing the things we planned. We ask that if you wish to cancel your reservations you let us know 48 hours before your reservation. We will refund your money either by check or through direct deposit.
      </p>
      <br/>   


      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Prices:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          are based on the occupancy of the room, the features, and the dates that the room is being booked for. Prices do go up for Friday and Saturday.
      </p>
      <br/>


      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Room Accommodations:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
        
          Check in is at 3:00 p.m. and check out is at 11:00 a.m. every day. In your room you will find the following items: A welcome package, a gift of goodies, an iron and ironing board, four luxurious towels, high quality blankets, hand soap, shampoo, conditioner, body wash, body lotion, make up remover, disposable shower caps, personal wipes, toothbrush and toothpaste, an elegant bathrobe, water bottles, and wine cups. We want you to have the best experience possible, please contact the cabin in advance if you would like any special requests. Thank you once again for choosing to stay at Little Heaven Bed and Breakfast. 
      </p>
      <br/>


      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Children:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          We ask that only people 18 years of age or older book a room, and all guests be at least 12 years of age or older. We want to maintain the cabin a quiet, adult friendly space for everyone's convenience and comfort. 
      </p>
      <br/>


      {/* <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Minimum Stay:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          We please ask that you have a minimum of two nights stay so we can provide the best service possible. 
      </p> */}
      <br/>


      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Breakfast:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          The cabin will provide fresh coffee every morning beginning at 6:30am. Breakfast will begin at 8:00am and last until 9:00am. If you have any dietary preferences or restrictions, please call the cabin in advance AND let us know at check in. 
      </p>
  </>
  )
}

export default Policiesscreen
