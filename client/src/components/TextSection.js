import React from 'react';


export default function TextSection({paragraph}) {
  return (
    <div className="section-title">  
        <p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black', marginLeft: '1rem', marginRight: '1rem'}}
        >{paragraph}</p>
    </div>
  )
}
