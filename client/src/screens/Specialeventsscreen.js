import React from 'react';
import TextSection from '../components/TextSection';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tour from '../images/pumpkin.jpg';
import Directions from '../images/christmas.jpg';
import Treats from '../images/thanksgiving.JPEG';
import { Link } from 'react-router-dom';
import Photos from '../components/Photos';
import '../components/Photos.css';


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
    },
    {
      img: 'https://i.postimg.cc/Zq0R7q2n/image9.jpg'
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

          <h1 style={{ textAlign: 'center', verticalAlign: 'middle', marginBottom: '4rem', color: 'rgba(240, 116, 8, 0.848)' }}>Check out our upcoming events!</h1>

          <Row>
            <Col>
              <article className="room" data-aos='zoom-in-down'
                data-aos-duration='1200'
                data-aos-anchor-placement='center top'>
                <h2 className="room-info">October</h2>
                <br />

                <div className="img-container">
                  <img src={Tour} alt="single card" className="smallimgtwo" />
                  <Link to={'https://www.facebook.com/events/698739138355698?acontext=%7B%22event_action_history%22%3A[]%7D'} className="btn-primary room-link">
                    <h2 style={{ color: 'white', textDecoration: 'underline' }}>Go to Facebook Page.</h2>
                  </Link>
                </div>
              </article>
            </Col>

            <Col>
              <article className="room" data-aos='zoom-in-down'
                data-aos-duration='1200'
                data-aos-anchor-placement='center bottom'>
                <h2 className="room-info">November</h2>
                <br />
                <div className="img-container">
                  <img src={Treats} alt="single card" className="smallimgtwo" />
                  <Link to={'https://www.facebook.com/events/s/thanksgiving-dinner-celebratio/1053085902489168/?mibextid=RQdjqZ&paipv=0&eav=AfYwHHZR7XVCiBUQulFbkiOhDtl5qvAtbNmmTUTH2Nx8qIrmKoaPVoYjt2JuDPc-g34&_rdr'} className="btn-primary room-link">
                    <h2 style={{ color: 'white', textDecoration: 'underline' }}>Go to Facebook Page</h2>
                  </Link>
                </div>
              </article>
            </Col>

            <Col>
              <article className="room" data-aos='zoom-in-down'
                data-aos-duration='1200'
                data-aos-anchor-placement='center bottom'>
                <h2 className="room-info">December</h2>
                <br />
                <div className="img-container" style={{ objectFit: "scale-down" }}>
                  <img src={Directions} alt="single card" className="smallimgtwo" />
                  <Link to={'https://www.facebook.com/events/281155201478354/?paipv=0&eav=AfaX1-YT36A8bMddkUJ3WaoDb6WwfsGCOhzo8WNEX_HK5sakwWhN77-xGztD33ObaK0&_rdr'} className="btn-primary room-link">
                    <h2 style={{ color: 'white', textDecoration: 'underline' }}>Go to Facebook Page</h2>
                  </Link>
                </div>
              </article>
            </Col>


          </Row>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4 style={{ textAlign: 'center', color: 'darkorange' }}>It is a high honor to be able to host your celebration with your loved ones.</h4>
        <TextSection paragraph="Whether you are having a birthday party or a big celebration, let us host your event here! Little Heaven Bed & Breakfast is secluded so you can enjoy your party to the biggest. We have a conference room, a commercial kitchen with seating, outdoor space, a pond, and of course six guest rooms with six guest bathrooms. Check out our conference room below! Call the cabin to reserve your special day now." />
       

      </section>

      <Photos galleryImages={galleryImages} />
      <br/>
      <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: 'rgba(240, 116, 8, 0.848)' }}>Don't miss out on the fun! We look forward to seeing you at the Cabin. Thank you!</h2>
      <br/>
    </>
  )
}

export default Specialeventsscreen
