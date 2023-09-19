import React, { useState } from 'react'; 
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import imageone from '../images/exteriorone.jpg';
import imagethree from '../images/exteriortwo.jpg';
import imagefour from '../images/exteriorthree.jpg';
import imagefive from '../images/exteriorfour.jpg';
import imagesix from '../images/exteriorfive.jpg';
import imageseven from '../images/exteriorsix.jpg';
import imagetwo from '../images/exteriorseven.jpg';
import imageeight from '../images/exterioreight.jpg';
import imagenine from '../images/exteriornine.jpg';
import imageten from '../images/exteriorten.jpg';
import imageeleven from '../images/exterioreleven.jpg';
import imagetwelve from '../images/exteriortwelve.jpg';
import imagethirteen from '../images/exteriorthirteen.jpg';
import outside from '../images/outside.jpg';


const images = [
    imageone,
    imagetwo,
    imagethree,
    imageseven,
    imagefour,
    imagefive,
    imagesix,
    imageseven,
    imageeight,
    imagenine,
    imageten,
    imageeleven,
    imagetwelve,
    imagethirteen, 
    outside
]

const GalleryFour = () => {

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

export default GalleryFour;
