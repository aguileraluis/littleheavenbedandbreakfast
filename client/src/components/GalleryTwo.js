import React, { useState } from 'react'; 
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import imageone from '../images/insideone.jpg';
import imagethree from '../images/insidethree.jpg';
import imagefour from '../images/insidefour.jpg';
import imagefive from '../images/insidefive.jpg';
import imagesix from '../images/insidesix.jpg';
import imageseven from '../images/insideseven.jpg';
import imageeight from '../images/insideeight.jpg';
import imagenine from '../images/insidenine.jpg';
import imageten from '../images/insideten.jpg';
import imageeleven from '../images/inside.jpg';
import imagetwelve from '../images/insideeleven.jpg';
import imagethirteen from '../images/insidetwelve.jpg';
import imagefourteen from '../images/insidethirteen.jpg';
import imagefifteen from '../images/insidefourteen.jpg';
import imageseventeen from '../images/insidesixteen.jpg';
import imageeighteen from '../images/insideseventeen.jpg';
import imagenineteen from '../images/insideeighteen.jpg';
import imagetwenty from '../images/insidenineteen.jpg';
import imagetwentyone from '../images/insidetwenty.jpg';
import imagetwentytwo from '../images/insidetwentyone.jpg';
import imagetwentythree from '../images/insidetwentytwo.jpg';
import imagetwentyfour from '../images/insidetwentythree.jpg';


const images = [
    imageeleven, 
    imagetwelve, 
    imagethirteen, 
    imagefourteen,
    imagefifteen,
    imageseventeen,
    imageeighteen,
    imagenineteen,
    imagetwenty,
    imagetwentyone,
    imagetwentytwo,
    imagetwentythree,
    imagetwentyfour,
    imagenine,
    imageten, 
    imageone,
    imagethree,
    imageseven,
    imagesix,
    imageseven, 
    imageeight,
    imagefour,
    imagefive,
]

const GalleryTwo = () => {

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
        <div>
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
                        style={{width: "80%", height: 'auto', display: "inline-block", cursor: 'pointer'}}
                        alt=""
                        onClick={() => viewImage(image, i)}
                    />
                    </div>
                 
                ))}
            </Masonry>
                </ResponsiveMasonry>

        </div>
        </div>
      
           
        )
    } 

export default GalleryTwo;
