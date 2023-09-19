import React from 'react'; 
import Image from '../images/Imagetwelve.jpg';

const MainHeader = () => {
  return (
    <div className="mainheaderbanner">
        <div className="mainheaderContainer" style={{background: `url(${Image})`}}>
            <h1>Yadkin Valley Dining</h1>
            <p>Dining like never before</p>
        </div>
    </div>
  )
}

export default MainHeader
