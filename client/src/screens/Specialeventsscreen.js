import React from 'react';
import TextSection from '../components/TextSection';
import InfoSection6 from '../components/InfoSection6';
import { InfoDataSeven } from '../data/InfoData';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tour from '../images/pumpkin.jpg';
import Directions from '../images/christmas.jpg';
import Policies from '../images/policy.jpg';
import Treats from '../images/thanksgiving.JPEG';
import { Link } from 'react-router-dom';

const Specialeventsscreen = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <h1>Special Events & Celebrations</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>It is a high honor to be able to host your celebration with your loved ones.</h4>
      <TextSection paragraph="Whether you are having a birthday party or a big celebration, let us host your event here! Little Heaven Bed & Breakfast is secluded so you can enjoy your party to the biggest. We have a commercial kitchen with seating, outdoor space, a pond, and of course six guest rooms with six guest bathrooms. Call the cabin for more information and pricing."/>
        
        <section stle={{fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem',width: '100%', height: '100%' }}>
    <div style={{ display: 'block', width: 'auto', padding: '7%', justifyContent: 'center' }}>
            
            <h1 style={{ textAlign: 'center', marginBottom: '4rem', color: 'rgba(240, 116, 8, 0.848)' }}>Check out our upcoming events!</h1>
         
            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <article className="room" data-aos='zoom-in-down'
                  data-aos-duration='1200'
                  data-aos-anchor-placement='center top'>
                  <h2 className="room-info">October</h2>
                  <br />
                  <div className="img-container">
                    <img src={Tour} alt="single card" className="smallimg" />
                    <Link to={'https://www.facebook.com/events/698739138355698?acontext=%7B%22event_action_history%22%3A[]%7D'} className="btn-primary room-link">
                      <h2 style={{ color: 'white', textDecoration: 'underline' }}>Go to Facebook Page.</h2>
                    </Link>
                  </div>
                </article>
                  <br/>
                  <br/>
                <article className="room" data-aos='zoom-in-down'
                  data-aos-duration='1200'
                  data-aos-anchor-placement='center bottom'>
                  <h2 className="room-info">November</h2>
                  <br />
                  <div className="img-container">
                    <img src={Treats} alt="single card" className="smallimg" />
                    <Link to={'https://www.facebook.com/events/s/thanksgiving-dinner-celebratio/1053085902489168/?mibextid=RQdjqZ&paipv=0&eav=AfYwHHZR7XVCiBUQulFbkiOhDtl5qvAtbNmmTUTH2Nx8qIrmKoaPVoYjt2JuDPc-g34&_rdr'} className="btn-primary room-link">
                      <h2 style={{ color: 'white', textDecoration: 'underline' }}>Go to Facebook Page</h2>
                    </Link>
                  </div>
                </article>
             <br/>
             <br/>
                <article className="room" data-aos='zoom-in-down'
                  data-aos-duration='1200'
                  data-aos-anchor-placement='center bottom'>
                  <h2 className="room-info">December</h2>
                  <br />
                  <div className="img-container">
                    <img src={Directions} alt="single card" className="smallimg" />
                    <Link to={'https://www.facebook.com/events/281155201478354/?paipv=0&eav=AfaX1-YT36A8bMddkUJ3WaoDb6WwfsGCOhzo8WNEX_HK5sakwWhN77-xGztD33ObaK0&_rdr'} className="btn-primary room-link">
                      <h2 style={{ color: 'white', textDecoration: 'underline' }}>Go to Facebook Page</h2>
                    </Link>
                  </div>
                </article>
  
            </Row>
            </div>

            <h1 style={{ textAlign: 'center', marginBottom: '4rem', color: 'rgba(240, 116, 8, 0.848)' }}>Don't miss out on the fun! We look forward to seeing you at the Cabin. Thank you!</h1>
</section>

  </>
  )
}

export default Specialeventsscreen
