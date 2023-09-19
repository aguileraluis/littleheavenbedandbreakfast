import React from 'react';


export default function TitleTwo({title, paragraph}) {
  return (
    <div className="section-title">
        <h1 data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-anchor-placement='center bottom'
            style={{color: 'rgba(240, 116, 8, 0.848)'}}
        >{title}</h1>
  
        <p data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-anchor-placement="center bottom"
          style={{fontSize: '1.5rem', color: 'black'}}
        >{paragraph}</p>
  
        <h2 data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-anchor-placement='center bottom'
            style={{color: 'rgba(240, 116, 8, 0.848)'}}
        >Check Room Availabilty Below</h2>
    </div>
  )
}
