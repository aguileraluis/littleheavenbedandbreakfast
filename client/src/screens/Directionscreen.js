import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import TextSection from '../components/TextSection'
import InfoSection3 from '../components/InfoSection3'
import { InfoDataThree } from '../data/InfoData'
import { SliderDataNine } from '../data/SliderData'
import start from "../video/start.MP4";
import finish from "../video/finish.MP4";

const Directionscreen = () => {
  return (
    <div>

 
    <Hero slides={ SliderDataNine } />
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Directions</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Hamptonville NC Directions to the Bed & Breakfast</h4>
      <h2>Little Heaven Bed & Breakfast</h2>
      <br/>
        <h6 style={{textAlign: 'center', fontSize: '30px'}}>1065 Tuckda Way, Hamptonville NC, 27020</h6>
    
      <br/>
      <br/>
      <TextSection paragraph="We are right off of Interstate-77, the exit is exit 79. Whether you are traveling north or south, you are going to take the exit (79) and make a right turn towards Hamptonville. After 2 miles you will make a right turn onto Rena road. You will follow Rena Rd. for about 3 miles and make a right turn onto Fletch Rd. Fletch Rd will convert to Tuckda Way after 0.2 miles, tucked at the very end of the road and up a hill. The entrance to the cabin is on the left hand side with a sign in the grass. Please call the cabin for anymore information on how to get here."/>
      <section className="section-title">
      <iframe title="maps" style={{border: '0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.9213773935658!2d-80.8497166235676!3d36.16846780305424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88517dd6ea01da51%3A0x587d85be8508c2fb!2s1065%20Tuckda%20Way%2C%20Hamptonville%2C%20NC%2027020!5e0!3m2!1sen!2sus!4v1692767888649!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <br/>
      <br/>
      <h1>Arriving at Little Heaven Bed & Breakfast</h1>
      <br/>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>The drive up to the Cabin is breathtaking</h4>
    <div className="section-title">
    <video style={{width: '50%', height: '50%', position: 'relative', display: 'inline-block', marginRight: '1rem'}} src={start} controls />
      </div>
      <div className="section-title">
    <video style={{width: '50%', height: '50%', position: 'relative', display: 'inline-block', marginRight: '1rem'}} src={finish} controls />
      </div>
    </div>
  )
}

export default Directionscreen
