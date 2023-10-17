import React from 'react';
import wallone from '../images/sunsetimg.jpg';
import imageseven from '../images/littleheavenb&b.jpg';


export default function Title({title, titletwo, paragraph}) {
  return (
    <div className="section-title" style={{backgroundImage: `url(${wallone})`}}>
      <br/>
      <br/>
      <br/>
        <h2 style={{color: 'black'}}
        data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-anchor-placement='center bottom'
        >{title}</h2>
       
        
      <br/>
        <h4 style={{color: 'brown', paddingRight: '1rem', paddingLeft: '1rem', outlineColor: 'orange'}}>- A Yadkin Valley Bed and Breakfast</h4>
        <br/>
        <p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.4rem', color: 'black', backgroundColor: 'orange', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem', borderRadius: '2rem', padding: '40px'}}>{paragraph}</p>
       
        <img 
              className='supimg'
              alt='TravelImage'
              src={imageseven}
            />
     <br/> <br/>
  
       
    </div>
    

  )
}
