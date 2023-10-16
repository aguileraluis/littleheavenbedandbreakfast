import React from 'react'
import Hero from '../components/Hero'
import { SliderDataEight } from '../data/SliderData'
import TextSection from '../components/TextSection'
import InfoSection3 from '../components/InfoSection3'
import InfoSection8 from '../components/InfoSection8'
import { InfoDataFive, InfoDataSix } from '../data/InfoData'

const Breakfastscreen = () => {
  return (
    <>
    <Hero slides={ SliderDataEight } />
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Breakfast & Afternoon Treats</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Dining is an important part of Little Heaven Bed & Breakfast - to us and your guests</h4>
      <TextSection paragraph="The morning in the mountains, full of fresh air, nature, animals, and coffee! The smell of the coffee will signal that Breakfast soon follows. Coffee will be available from 6:30am every morning. Next, a full, delicious and authentic breakfast is served with seating starting between 8:00am until 9:00am. Guests can enjoy their breakfast indoors or outdoors. We believe in giving the best taste to our guests. You will leave wanting more."/>
      <InfoSection8 {...InfoDataFive} />
      
      <TextSection paragraph="Please reach out to the Bed & Breakfast if you have any dietary requirements, so we can appropriately accomade you. There is always a delicious  alternative. Let us know when you check in, so we can provide the best service possible."/>

      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Afternoon treats</h4>
      <TextSection paragraph="Afternoon treats await you as you curve that afternoon hunger. We pride in making the most delicious and homemade deserts. We also have a cooler filled with local brewed beer. If you would like any additional treats, just let us know."/>
      <InfoSection3 {...InfoDataSix} />
  </>
  )
}

export default Breakfastscreen
