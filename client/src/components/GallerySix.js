import React, { useState } from 'react'; 
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Boutique from '../images/boutique.jpg';

const images = [
    Boutique
]

const GallerySix = () => {

    const [data, setData] = useState({img: '', i:0});

    return (
        <>
            {data.img && 
            <div style={{
                width: '80%',
                height: '100vh', 
                background: 'black', 
                position: 'fixed', 
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <img src={data.img} alt="" style={{width: 'auto', maxWidth: '80%', maxHeight: '90%'}}/>
              

            </div>
        }
          <div className="gallery">
           
                {images.map((image, i) => (
                    <div className="pics" key={i}>
   <img
                        key={i}
                        src={image}
                        style={{width: "100%", height: 'auto', display: "flex", cursor: 'pointer'}}
                        alt=""
    
                    />
                    </div>
                 
                ))}
    

        </div>
        </>
      
           
        )
    } 

export default GallerySix;
