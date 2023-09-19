import React from 'react';
export default function TitleThree({paragraph}) {
  return (
    <div className="section-title">
        <h2 style={{color: 'black'}}>
          A Yadkin Valley Bed & Breakfast
        </h2>

        <p data-aos="fade-right"
      style={{fontSize: '1.5rem', color: 'black'}}
        >{paragraph}</p>     data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
         
        <p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black'}}
        >{paragraph}</p>
    </div>
  )
}
