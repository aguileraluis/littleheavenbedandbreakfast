import React from 'react'; 
import Hero from '../components/Hero';
import InfoSection3 from '../components/InfoSection3';
import { InfoDataThree } from '../data/InfoData';
import { SliderDataSeven } from '../data/SliderData';
import GalleryTwo from '../components/GalleryTwo';
import GalleryFour from '../components/GalleryFour';
import TextSection from '../components/TextSection';
import Photos from '../components/Photos';
import '../components/Photos.css';

function Tourscreen() {

  const galleryImagesOne = [
    {
      img: 'https://i.postimg.cc/tghVTx4f/air-4abc09be3d74ec9ac6a1.jpg'
    },
    {
      img: 'https://i.postimg.cc/R0QN9xPx/insideseven-35a637bc196718d1e605-1.jpg'
    },
    {
      img: 'https://i.postimg.cc/6pZ8jvn3/before-814eb50e135583d5fe63.jpg'
    },
    {
      img: 'https://i.postimg.cc/pdtpgLJB/insideeight-3ae9ed66b8e6c4a56d0b.jpg'
    },
    {
      img: 'https://i.postimg.cc/jdLwf9jy/backlodge-259c6bdea929a1a589d7.jpg'
    },
    {
      img: 'https://i.postimg.cc/NGPLQ4xF/sidelodge-fbb7335cb94b4095bf01.jpg'
    }
  ];

  const galleryImagesTwo = [
    {
      img: 'https://i.postimg.cc/tCRqnmXp/2N3A0022.jpg'
    },
    {
      img: 'https://i.postimg.cc/x1JSLwBD/2N3A0024.jpg'
    },
    {
      img: 'https://i.postimg.cc/yxQwZjP8/2N3A0039.jpg'
    },
    {
      img: 'https://i.postimg.cc/bYmXWYhf/2N3A0032.jpg'
    },
    {
      img: 'https://i.postimg.cc/cLYbx0VH/2N3A0068.jpg'
    },
    {
      img: 'https://i.postimg.cc/bv9VnLYf/2N3A0152.jpg'
    },
    {
      img: 'https://i.postimg.cc/2jKcn1Yy/2N3A0154.jpg'
    },
    {
      img: 'https://i.postimg.cc/HkQ6G3y8/2N3A0100.jpg'
    },
    {
      img: 'https://i.postimg.cc/j5jc7bky/2N3A0190.jpg'
    },
    {
      img: 'https://i.postimg.cc/qqhG1GrR/2N3A0147.jpg'
    },
    {
      img: 'https://i.postimg.cc/7PjvwsfK/2N3A9988.jpg'
    },
    {
      img: 'https://i.postimg.cc/L6PcXtP2/2N3A0163.jpg'
    },
    {
      img: 'https://i.postimg.cc/bJdMjk8X/2N3A0194.jpg'
    },
    {
      img: 'https://i.postimg.cc/MK1LxWkG/2N3A0193.jpg'
    },
    {
      img: 'https://i.postimg.cc/tCZdb7F0/image5.jpg'
    },
    {
      img: 'https://i.postimg.cc/SKrCd9b9/image4.jpg'
    },
    {
      img: 'https://i.postimg.cc/C1rDTV1L/image3.jpg'
    },
    {
      img: 'https://i.postimg.cc/WpKr5jC5/image2.jpg'
    },
    {
      img: 'https://i.postimg.cc/dtyCXpKw/image1.jpg'
    },
    {
      img: 'https://i.postimg.cc/25zB15LS/image0-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/vBTgvSzR/image0.jpg'
    },
    {
      img: 'https://i.postimg.cc/MHjnCMNd/image3-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/kMVwJjdh/image2-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/Sx4GGkYw/image1-Copy.jpg'
    },
  ];

  const galleryImagesThree = [
    {
      img: 'https://i.postimg.cc/fWX27HgS/littleheavenbedandbreakfast.jpg'
    },
    {
      img: 'https://i.postimg.cc/0jqCHsHM/littleheavenb-b.jpg'
    },
    {
      img: 'https://i.postimg.cc/rwYN2WPL/littleheavenbb.jpg'
    },
    {
      img: 'https://i.postimg.cc/J7dgKDRS/image2-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/XvSX5YZC/2N3A0212.jpg'
    },
    {
      img: 'https://i.postimg.cc/KvkWWGzj/image0-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/TYzsMzL9/image0.jpg'
    },
    {
      img: 'https://i.postimg.cc/rsdf7jq3/image1-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/rFrhJfnt/image1.jpg'
    },
    {
      img: 'https://i.postimg.cc/g2yg9nPz/image2.jpg'
    },
    {
      img: 'https://i.postimg.cc/V6hR9tXR/image3-Copy.jpg'
    },
    {
      img: 'https://i.postimg.cc/1X6jfBb6/image3.jpg'
    },
    {
      img: 'https://i.postimg.cc/g24BXntM/IMG-0015.jpg'
    },
    {
      img: 'https://i.postimg.cc/Px1WD7rt/2N3A0241.jpg'
    },
    {
      img: 'https://i.postimg.cc/dtNyhFm2/2N3A0186.jpg'
    },
   
    {
      img: 'https://i.postimg.cc/sDM20h7W/IMG-4021.jpg'
    },
    {
      img: 'https://i.postimg.cc/dtg0MVjx/IMG-4146.jpg'
    },
    {
      img: 'https://i.postimg.cc/FHcHhXPs/IMG-0024.jpg'
    },
    {
      img: 'https://i.postimg.cc/KzcG7kmR/IMG-1044.jpg'
    },
   
  ]

  return (
    <>
      <Hero slides={ SliderDataSeven } />
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Tour & Amenities</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Explore our Yadkin Valley Bed and Breakfast:</h4>
      <TextSection paragraph="Jonathan and Maria bought the cabin in December 2021 once laying eyes on the property. They had a clear vision for what the bed and breakfast would be about. Together, their dream of having a bed and breakfast started to realize itself. The cabin has six rooms, each one with its own bathroom, it has an open concept living area with high vaulted ceilings. When you arrive to the cabin the first thing you notice is the massive windows all across the front. There is a wooden porch with rocking chairs that overlook the pond on the property and the massive open sky and mountains. Upon entering, you are invited to a very open space. The kitchen is right in the middle of the cabin with the dining area in the back. Construction began immediately and everything started to come into place. The cabin now has brand-new walls, bathrooms, tiles, high speed Wi-Fi internet, massive tubs, showers, high definition TV's and views that will just take your breath away. Maria, having her own boutique, knew that she had the creative eye to make the cabin as beautiful as can be. Jonathan, with his experience in sales, knew that he had the expertise to manage cabin and guarantee it's success by making every single person that enters happy, joyful, and at peace. We invite you to experience the beauty that Little Heaven Bed & Breakfast has to offer. We are surrounded by mountains, rivers, ponds, lakes, fine dining, a plethora of vineyards, and sunsets to just bask in."
      />
     
      <h2 className="section-title" style={{textAlign: 'center', color: 'darkorange'}}>The Interior</h2>
      <br/>
      <p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1%', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem'}}>The open design of the main floor creates a welcoming atmosphere, allowing you to feel just at home. The kitchen, dining area, and the main living area are at the heart of the cabin for your enjoyment. The dining room is also used as a conference space allowing you to host your special events. Both Maria and Jonathan have meticulously thought out every picture on the wall, every chair, every table and all the many comforts that you will receive. The main living area also has a high definition TV, rocking chairs, tables, and couches all for your relaxation.</p>
      <br/>
      <Photos galleryImages={galleryImagesTwo} />
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 style={{textAlign: 'center', color: 'darkorange'}}>The Exterior and Grounds</h2>
      <p style={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1%', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem'}}> Driving into the cabin you will immediately enjoy the openness all around you. 10 acres surround the cabin, giving home to a beautiful pond, ample wooded areas and vast open land. The front deck has rocking chairs so you can soak up the views and bask in the nature all around you. There is space for a bonfire near the pond, an enormity of space for outdoor events.</p>
      <br/>
      
      
      <Photos galleryImages={galleryImagesThree} />
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 style={{textAlign: 'center', color: 'darkorange'}}>The Cabin Before Renovations Began:</h2>
      <br/>
      <Photos galleryImages={galleryImagesOne} />
      <br/>
      <br/>
    </>
  )
}

export default Tourscreen;


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