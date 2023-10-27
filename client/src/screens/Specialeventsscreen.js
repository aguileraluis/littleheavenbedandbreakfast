import React from 'react';
import TextSection from '../components/TextSection';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import eventmenu from '../images/eventmenu.jpg';
import { Link } from 'react-router-dom';
import Photos from '../components/Photos';
import '../components/Photos.css';
import event from '../video/event.MP4';


const Specialeventsscreen = () => {

  const galleryImages = [
    {
      img: 'https://i.postimg.cc/503wByC0/image0.jpg'
    },
    {
      img: 'https://i.postimg.cc/mgHCd8HK/image1.jpg'
    },
    {
      img: 'https://i.postimg.cc/wv0mtrCR/image2.jpg'
    },
    {
      img: 'https://i.postimg.cc/yYJZdvvW/image3.jpg'
    },
    {
      img: 'https://i.postimg.cc/5yDjLWny/image4.jpg'
    },
    {
      img: 'https://i.postimg.cc/hGMjMdpH/image5.jpg'
    },
    {
      img: 'https://i.postimg.cc/pX8KCs84/image6.jpg'
    },
    {
      img: 'https://i.postimg.cc/TPPyz0LR/image8.jpg'
    }
  ]

  return (
    <>
      <br />
      <br />
      <br />
      <h1>Special Events & Celebrations</h1>
      <section stle={{ fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem', width: '50%', height: 'auto' }}>

        <div style={{ display: 'block', flexDirection: 'row' }}>

          <h1 style={{ textAlign: 'center', verticalAlign: 'middle', marginBottom: '4rem', color: 'darkorange' }}>Check out our upcoming events!</h1>
          <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                  <br/>
                    <p>Christmas Dinner Party</p>
                    <p>Come join the fun and celebration!</p>

                    <iframe width='300' height='540' src={event} title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    
                    <br/>
                    <button style={{backgroundColor: 'black'}}className='btn-primary'><a style={{color: 'white', textDecoration: "none"}}href="https://www.facebook.com/events/1494191691393241/?acontext=%7B%22event_action_history%22%3A[]%7D">Go to Facebook Event</a></button>
                </div>
                <div className='col-1'>
                <img className="smallimgthree" src={eventmenu} alt="menu"/>
                </div>
            </div>
        </div>



        </div>
        <br />
        <br />
        <br />
        <h4 style={{ textAlign: 'center', color: 'darkorange' }}>It is a high honor to be able to host your celebration with your loved ones.</h4>
        <TextSection paragraph="Whether you are having a birthday party or a big celebration, let us host your event here! Little Heaven Bed & Breakfast is secluded so you can enjoy your party to the biggest. We have a conference room, a commercial kitchen with seating, outdoor space, a pond, and of course six guest rooms with six guest bathrooms. Check out our conference room below! Call the cabin to reserve your special day now." />
      </section>
      <Photos galleryImages={galleryImages} />
      <br/>
      <br/>
      <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: 'rgba(240, 116, 8, 0.848)' }}>Don't miss out on the fun! We look forward to seeing you at the Cabin. Thank you!</h2>
      <br/>
      <br/>
    </>
  )
}

export default Specialeventsscreen
