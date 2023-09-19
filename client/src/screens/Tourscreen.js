import React, {useState} from 'react'; 
import Hero from '../components/Hero';
import InfoSection3 from '../components/InfoSection3';
import { InfoDataThree } from '../data/InfoData';
import Listings from '../components/Listings';
import Features from '../components/Features';
import { SliderDataSeven } from '../data/SliderData';
import Title from '../components/Title';
import love from "../video/love.MP4";
import Cards from '../components/Cards';
import GalleryTwo from '../components/GalleryTwo';
import GalleryFour from '../components/GalleryFour';
import TextSection from '../components/TextSection';




function Tourscreen() {


  return (
    <>
      <Hero slides={ SliderDataSeven } />

      <br/>
      <br/>
      <br/>
      <br/>
    
   
      <h1>Tour & Amenities</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Explore our Yadkin Valley Bed and Breakfast:</h4>
      <TextSection paragraph="Jonathan and Maria bought the cabin in December of 2021 once laying eyes on the property. They had a clear vision for what the bed and breakfast would be about. Together, their dream of having a bed and breakfast started to realize itself. The cabin has six rooms, each one with it's own bathroom, it has an open concept living area with high vaulted cielings. When you arrive to the cabin the first thing you notice is the massive windows all across the front. There is a wooden porch with rocking chairs that overlook the pond on the property and the massive open sky and mountains. Upon entering, you are invited to a very open space. The kitchen is right in the middle of the cabin with the dining area in the back. Construction began immediately and everything started to come into place. The cabin now has brand new walls, bathrooms, tiles, high speed WIFI internet, massive tubs, showers, high definition TV's and views that will just take your breathe away."
      />

      <TextSection paragraph="Maria, having her own boutique, knew that she had the creative eye to make the cabin as beautiful as can be. Jonathan, with his experience in sales, knew that he had the expertise to manage cabin and guarantee it's success by making every single person that enters happy, joyful, and at peace. We invite you to experience the beauty that Little Heaven Bed & Breakfast has to offer. We are surrounded by mountains, rivers, ponds, lakes, fine dining, a plethora of vineyards, and sunsets to just bask in.
      "/>
      <br/>
      <InfoSection3 {...InfoDataThree} />

      
      <TextSection paragraph="The open design of the main floor creates a welcoming atmosphere, allowing you to feel just at home. The kitchen, dining area, and the main living area are at the heart of the cabin for your enjoyment. The dining room is also used as a conference space allowing you to host your special events. Both Maria and Jonathan have meticulously thought out every picture on the wall, every chair, every table and all the many comforts that you will recieve. The main living area also has a high definition TV, rocking chairs, tables, and couches all for your relaxation."/>
      
      <h4 className="section-title" style={{textAlign: 'center', color: 'darkorange'}}>The Cabin Interior</h4>
      <p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '5%', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem'}}>The open design of the main floor creates a welcoming atmosphere, allowing you to feel just at home. The kitchen, dining area, and the main living area are at the heart of the cabin for your enjoyment. The dining room is also used as a conference space allowing you to host your special events. Both Maria and Jonathan have meticulously thought out every picture on the wall, every chair, every table and all the many comforts that you will recieve. The main living area also has a high definition TV, rocking chairs, tables, and couches all for your relaxation.</p>

      <GalleryTwo row justify-content-center mt-6/>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>The Exterior and Grounds</h4>
      <TextSection paragraph="Driving into the cabin you will immediately enjoy the openness all around you. 10 acres surround the cabin, giving home to a beautiful pond, ample wooded areas and vast open land. The front deck has rocking chairs so you can soak up the views and bask in the nature all around you. There is space for a bonfire near the pond, an enormity of space for outdoor events."/>
      <GalleryFour row justify-content-center mt-6/>
      <TextSection paragraph="'I attended a baby shower at Little Heaven Bed & Breakfast and the venue was just beautiful and the food was absolutely AMAZING!! Definitley planning a stay here.' - Leslie"/>
    </>
  )
}

export default Tourscreen;

// import { Link } from 'react-router-dom'
// import React from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import bgImg from "../video/videoonee.mp4"

// AOS.init({
//   duration: 3000
// });

// function Landingscreen() {
//   return (
//     <div>


//       {/* <div className="col-md-9 my-auto text-center" style={{ borderRight: '8px solid white' }}>

      
//         <h3 data-aos="zoom-in" style={{ color: 'white', fontSize: '160px' }}>Little Heaven</h3><h3 data-aos="zoom-in" style={{ color: 'white', fontSize: '160px' }}>Bed & Breakfast</h3>
//         <br />
//         <h1 data-aos="zoom-out" style={{ color: 'white' }}>"There is only one boss. The Guest"</h1>
//         <br />

//         <Link to='/home'>
//           <button className='btn landingbtn' style={{ color: 'black' }}>Get Started</button>
//         </Link>
//       </div> */}

//       <video className="video" autoPlay loop muted>
//           <source src={bgImg} type="video/mp4" />
//         </video>
//         <br/>
//         <br/>
//         <div className="banner col-md-12 my-auto text-center">
//         <div>       
//         <div>          
//         <h3 data-aos="zoom-in" style={{ color: 'rgba(230, 109, 4, 0.982)', fontSize: '110px', fontWeight: 'bold'}}>Little Heaven</h3>
//         <h3 data-aos="zoom-in" style={{ color: 'linear-gradient(to bottom, #000000 0%, #ff6600 100%)', fontWeight: 'bold', fontSize: '110px'}}>Bed &</h3>
//         <h3 data-aos="zoom-in" style={{ color: 'linear-gradient(to bottom, #000000 0%, #ff6600 100%)', fontWeight: 'bold', fontSize: '100px'}}>Breakfast</h3>
//         <br />
//         <h3 data-aos="zoom-out" style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>"Heaven On Earth"</h3>
//         <br/>
//         <Link to='/home'>
//           <button className='btn landingbtn' style={{ color: 'linear-gradient(to bottom, #ff6600 0%, #ffffff 100%)', fontWeight: 'bold', fontSize: '20px'}}>Get Started</button>
//         </Link>
//         </div>
//         </div>
//         </div>
//         </div>

//   )
// }

// export default Landingscreen