import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
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
      <TextSection paragraph="The morning in the mountains, full of fresh air, nature, animals, and coffee! The smell of the coffee will signal that Breakfast soon follows. Coffee will be available from 6:30am every morning. Next, a full, delicous and authentic breakfast is served with seating starting between 8:00am until 9:00am. Guests can enjoy their breakfast indoors or outdoors. We believe in giving the best taste to our guests. You will leave wanting more."/>
      <InfoSection8 {...InfoDataFive} />
      
      <TextSection paragraph="Please reach out to the Bed & Breakfast if you have any dietary requirements so we can appropriately accomade you. There is always a delicous alternative. Let us know when you check in so we can provide the best service possible."/>

      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Afternoon treats</h4>
      <TextSection paragraph="Afternoon treats await you as you curve that afternoon hunger. We pride in making the most delicious and homemade deserts. We also have a cooler filled with local brewed beer. If you would like any additional treats, just let us know."/>
      <InfoSection3 {...InfoDataSix} />
      <TextSection paragraph="'I met Maria at Breakfastime restaurant in Jonesville NC, she shared her journey of opening Little Heaven Bed & Breakfast and I just knew that God wanted me to help her. I developed and designed this website for her and Jonathan. Stepping foot on the cabin during the rennovations definitley brought me back to the country that I so much adore and love. Every time we would meet we would enjoy delicous hot coffee at the kitchen bar. The final results are incredible. I've personally have seen the amount of time, effort, faith and love that they have poured into this bed and breakfast. I personally LOVE breakfast and coffee. There is something about breakfast that reminds me of home. Maria and Jonathan have made this bed and breakfast their home and I am more than honored to have been able to see first hand the exquisite transformation. Their goal has always been you, the guest. They have done everything possible so that you can enjoy your stay here with them. Maria and Jonathan just radiate love and acceptance. I invite you to stay at Little Heaven Bed & Breakfast and truly feel that love and acceptance that they have to offer, whether it be in a cup of coffee or a plate of food. I love you guys, always. Congratulations on such a MAGNIFICENT bed and breakfast! I can't wait to enjoy more of Maria's cooking and stop by for coffee just to say hello.' -Luis"/>
     
  </>
  )
}

export default Breakfastscreen
