import React, { useState } from 'react'; 
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import imageone from '../images/map.png';
import imagetwo from '../images/gallerytwotwo.jpg';



const images = [
    
    imagetwo,
    imagetwo,
    imagetwo,


]

const GalleryThree = () => {

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
                width: '100%',
                height: '100vh', 
                background: 'black', 
                position: 'relative', 
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                <button style={{position: 'fixed', top: '10px', right: '10px'}}>X</button>
                <button onClick={() => imgAction('previous-img')}>Previous</button>
                <img src={data.img} alt="" style={{width: 'auto', maxWidth: '100%', maxHeight: '100%'}}/>
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
                        style={{width: "100%", display: "block", cursor: 'pointer'}}
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

export default GalleryThree;
