import React from 'react'
import Hero from '../components/Hero'
import { SliderDataTen } from '../data/SliderData'
import Cards from '../components/Cards'
import TextSection from '../components/TextSection'
import GalleryThree from '../components/GalleryThree'

const Policiesscreen = () => {
  return (
    <>

 
    <Hero slides={ SliderDataTen } />
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Policies</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>at Little Heaven Bed & Breakfast</h4>
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
          are based on the occupancy of the room, the features, and the dates that the room is being booked for. Prices do go up for the weekend: Friday, Saturday, Sunday.
      </p>
      <br/>
      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Room Accomodations:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          Our rooms feature a queen or king-size bed, one or two sitting chairs, a desk, a high definition TV, a tub or standing shower, toilet, an iron, ironing board, a fireplace, and windows. If you wish to request any additional items please let the cabin know with time. 
      </p>
      <br/>
      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Children:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          We ask that only people 18 years of age or older book a room, and all guests be at least 12 years of age or older. We want to maintain the cabin a quiet, adult friendly space for everyone's convenience and comfort. 
      </p>
      <br/>
      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Minimum Stay:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          We please ask that you have a minimum of two nights stay so we can provide the best service possible. 
      </p>
      <br/>
      <b><p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>Breakfast:</p></b><p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0',paddingBottom: '0', marginLeft: '3rem', marginRight: '3rem'}}>
          The cabin will provide fresh coffee every morning beginning at 6:00am. Breakfast will begin at 8:00am and last until 9:00am. If you have any dietary preferences or restrictions, please call the cabin in advance AND let us know at check in. 
      </p>
  </>
  )
}

export default Policiesscreen
