import React, { useState } from 'react'; 
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import loveone from '../images/loveone.jpg'
import lovetwo from '../images/lovetwo.jpg'
import lovethree from '../images/lovethree.jpg'
import lovefour from '../images/lovefour.jpg'
import lovefive from '../images/lovefive.jpg'
import lovesix from '../images/lovesix.jpg'
import loveseven from '../images/loveseven.jpg'
import loveeight from '../images/loveeight.jpg'
import lovenine from '../images/lovenine.jpg'

const images = [
    loveone,
    lovetwo,
    lovethree,
    lovefour,
    lovefive,
    lovesix,
    loveseven,
    loveeight,
    lovenine,
]

const Gallery = () => {

    const [data, setData] = useState({img: '', i:0});

    const viewImage = (img, i) => {
        setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img'){
            setData({img: images[i + 1], i: i + 1 })
        }
        if (action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1 })


        }
    }
    return (
        <>
            {data.img && 
            <div style={{
                width: 'auto',
                height: '100%', 
                background: 'black', 
                position: 'relative', 
                display: 'inline-block',
                justifyContent: 'center', 
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <button onClick={() => imgAction('previous-img')}>Previous</button>
                <img src={data.img} alt="" style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
                <button onClick={() => imgAction('next-img')}>Next</button>

            </div>
        }
          <div className="gallery">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350:1, 750: 2, 900: 3}}>
<Masonry columnsCount={3} gutter="20px">
                {images.map((image, i) => (
                    <div className="pics" key={i}>
   <img
                        key={i}
                        src={image}
                        style={{width: "80%", display: "inline-block", cursor: 'pointer'}}
                        alt=""
                        onClick={() => viewImage(image, i)}
                    />
                    </div>
                 
                ))}
            </Masonry>
                </ResponsiveMasonry>

        </div>
        </>
      
           
        )
    } 

export default Gallery;
