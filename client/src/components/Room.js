import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Features from '../components/Features';

AOS.init({
    duration : 2000
});

function Room({ room, fromdate, todate }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div key={room.name} style={{height: '50%', textAlign: 'center', marginBottom: '8px'}} className="row" data-aos='fade-up'>

            <Features style={{textAlign: 'center'}} image={room.imageurls[0]} imagetwo={room.imageurls[1]} roomname={room.name} type={room.type} roomdescriptiontwo={room.descriptiontwo} rentperday1={room.rentPerDay1} rentperday2={room.rentPerDay2} rentperday3={room.rentPerDay3} totalamount={room.totalamount} key={room.name}/>
            <div style={{float: "middle", color: 'orange', textAlign: 'center', marginBottom: '10px', paddingRight: '5%', paddingTop: '10px', paddingBottom: '10px'}}>
            <button className="btn btn-primary" onClick={handleShow}>View Details</button>
            </div>
            
                <div style={{ float: "right", color: 'orange', textAlign: 'center', marginBottom: '10px', paddingRight: '5%', paddingTop: '10px', paddingBottom: '20px'}}>


                {(
                    <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                    
                <button style={{marginTop: '10px', marginLeft: '8px'}}className="btn btn-primary">Book Now</button>
        
                </Link>
                )} 
                   
            </div>



            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><h2>{room.name}</h2></Modal.Title>        
                </Modal.Header>
                <Modal.Body> 

                    <Carousel style={{margin: '20px'}}>
                        { room.imageurls.map(url => {
                            return <Carousel.Item>
                            <img 
                            className="d-block w-100 h-80 big-img"
                            src={ url }
                            alt="pictures"
                            key={room.name}
                        />
                    </Carousel.Item>
                        })}
                        
                </Carousel>

                    <br/>
                <p style={{textAlign: 'left', fontSize: '23px'}}>{room.description}</p>
                <Modal.Footer>
                   
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Room;

