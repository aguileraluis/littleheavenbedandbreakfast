import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    duration : 2000
});

function Bookingscreen() {
    const { roomid } = useParams();
    const { fromdate } = useParams();
    const { todate } = useParams();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();
    const totaldays = (moment.duration((moment(todate, 'DD-MM-YYYY')).diff(moment(fromdate, 'DD-MM-YYYY'))).asDays());
    const [totalamount, settotalamount] = useState(0);
    const [wine, setwine] = useState(false);
    const [chocolate, setchocolate] = useState(false); 
    const [flowers, setflowers] = useState(false);
    const [taxes, settaxes] = useState(0)

    // console.log(total)



    useEffect(() => {
      
        const fetchSingle = async () => {
            try {
                setloading(true);
                const data = (await axios.post('/api/rooms/getroombyid', { roomid, fromdate, todate, totaldays })).data;
                let name = (data.name);

                if (name.includes("Joy")) {
                    let joytotal = JSON.parse(localStorage.getItem("Joy"));
                    let flowers = JSON.parse(localStorage.getItem('flowers')); 
                    let wine = JSON.parse(localStorage.getItem('wine'));
                    let chocolate = JSON.parse(localStorage.getItem('chocolate'));
                    let grandtotal = 0;
     
                    joytotal ? grandtotal += joytotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                        setflowers(true)
                    } if (wine) {
                        (grandtotal += 40.00);
                        setwine(true)
                    } if (chocolate) {
                        (grandtotal += 39.55);
                        setchocolate(true)        
                    }
                     else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)                        
                     }
                     let tax = (joytotal * 0.06);
                     settaxes(tax);
                     settotalamount(grandtotal);
            
                   
                }if (name.includes("Faith")) {
                    const faithtotal = JSON.parse(localStorage.getItem("Faith"))
                    let flowers = JSON.parse(localStorage.getItem('flowers')); 
                    let wine = JSON.parse(localStorage.getItem('wine'));
                    let chocolate = JSON.parse(localStorage.getItem('chocolate'));
                    let grandtotal = 0;

                    faithtotal ? grandtotal += faithtotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                        setflowers(true)

                    } if (wine) {
                        (grandtotal += 40.00);
                        setwine(true)
                  
                    } if (chocolate) {
                        (grandtotal += 39.55);
                        setchocolate(true)
             
                    }
                     else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)                        
                    }
                    let tax = (faithtotal * 0.06);
                     settaxes(tax);
                    settotalamount(grandtotal);   

                } if (name.includes("Love")) {
                    const lovetotal = JSON.parse(localStorage.getItem("Love"))
                    let flowers = JSON.parse(localStorage.getItem('flowers')); 
                    let wine = JSON.parse(localStorage.getItem('wine'));
                    let chocolate = JSON.parse(localStorage.getItem('chocolate'));
                    let grandtotal = 0;

                    lovetotal ? grandtotal += lovetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                        setflowers(true)

                    } if (wine) {
                        (grandtotal += 40.00);
                        setwine(true)
                  
                    } if (chocolate) {
                        (grandtotal += 39.55);
                        setchocolate(true)
             
                    }
                     else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)                        
                    }
                    let tax = (lovetotal * 0.06);
                     settaxes(tax);
                    settotalamount(grandtotal);   
                    
                } if (name.includes("Hope")) {
                    const hopetotal = JSON.parse(localStorage.getItem("Hope"))
                    let flowers = JSON.parse(localStorage.getItem('flowers')); 
                    let wine = JSON.parse(localStorage.getItem('wine'));
                    let chocolate = JSON.parse(localStorage.getItem('chocolate'));
                    let grandtotal = 0;

                    hopetotal ? grandtotal += hopetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                        setflowers(true)

                    } if (wine) {
                        (grandtotal += 40.00);
                        setwine(true)
                  
                    } if (chocolate) {
                        (grandtotal += 39.55);
                        setchocolate(true)
             
                    }
                     else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)                        
                    }
                    let tax = (hopetotal * 0.06);
                     settaxes(tax);
                    settotalamount(grandtotal); 

                } if (name.includes("Grace")) {
                    const gracetotal = JSON.parse(localStorage.getItem("Grace"))
                    let flowers = JSON.parse(localStorage.getItem('flowers')); 
                    let wine = JSON.parse(localStorage.getItem('wine'));
                    let chocolate = JSON.parse(localStorage.getItem('chocolate'));
                    let grandtotal = 0;

                    gracetotal ? grandtotal += gracetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                        setflowers(true)

                    } if (wine) {
                        (grandtotal += 40.00);
                        setwine(true)
                  
                    } if (chocolate) {
                        (grandtotal += 39.55);
                        setchocolate(true)
             
                    }
                     else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)                        
                    }
                    let tax = (gracetotal * 0.06);
                     settaxes(tax);
                    settotalamount(grandtotal); 

                } if (name.includes("Peace")) {
                    const peacetotal = JSON.parse(localStorage.getItem("Peace"))
                    let flowers = JSON.parse(localStorage.getItem('flowers')); 
                    let wine = JSON.parse(localStorage.getItem('wine'));
                    let chocolate = JSON.parse(localStorage.getItem('chocolate'));
                    let grandtotal = 0;

                    peacetotal ? grandtotal += peacetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                        setflowers(true)

                    } if (wine) {
                        (grandtotal += 40.00);
                        setwine(true)
                  
                    } if (chocolate) {
                        (grandtotal += 39.55);
                        setchocolate(true)
             
                    }
                     else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)                        
                    }
                    let tax = (peacetotal * 0.06);
                     settaxes(tax);
                    settotalamount(grandtotal); 
                } 
                setroom(data)
                setloading(false);
            } catch (error) {
                seterror(true);
                setloading(false);
            }
        }

        fetchSingle().catch(console.error);
    }, [roomid, fromdate, todate, totaldays, totalamount, wine, flowers, chocolate]);

 

    async function onToken(token){

        let bookingDetails = {
            room,
            fromdate,
            todate,
            totalamount,
            totaldays,
            wine, 
            chocolate, 
            flowers,

            token

        }

        try {
            setloading(true);
            const result = await axios.post('/api/bookings/bookroom', bookingDetails);
            setloading(false);
            Swal.fire('Congratulations', 'Your room booked successfully', 'success').then(result=>{
                window.location.href='/littleheavenbedandbreakfast'
                return result;
            });

            localStorage.clear();
            return result;
        } catch (error) {
            setloading(false);
           Swal.fire('OOps', 'Something went wrong', 'error'); 
            return console.log(error);
        }
    }

   

    return (

        <div className="m-5" data-aos="flip-left">
            {loading ? (<Loader />) : room ? (

                <div className="row justify-content-center mt-5 bs">

                    <div className="col-md-6">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className="bigimg" alt="bigimage" />
                    </div>

                    <div className="col-md-6">
                        <div style={{ textAlign: 'right' }}>
                            <h1>Booking Details</h1>
                            <hr />

                            <b>
                                <h4>Your Booking</h4>
                                <h5>From Date : {fromdate}</h5>
                                <h5>To Date : {todate}</h5>            
                            </b>
                        </div>


                        <div style={{ textAlign: 'left' }}>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                { wine ? (<h5>Wine: $40.00 </h5>) : (<h5>Wine: $0.00</h5>)}
                                { chocolate ? (<h5>Dozen Chocolate Strawberries: $39.55</h5>) : (<h5>Dozen Chocolate Strawberries: $0.00</h5>)}
                                { flowers ? (<h5>Dozen Roses: $45.99</h5>) : (<h5>Dozen Roses: $0.00</h5>) }
                                <h5>Total days : { totaldays } day stay</h5>
                                <h5>Room Occupancy Tax: ${taxes} </h5>
                                <h5>Total Amount : {totalamount}</h5>
                                
                                
                            </b>
                        </div>


                        <div style={{ float: "right" }}>

                            <StripeCheckout
                                amount={totalamount * 100}
                                token={onToken}
                                currency={'USD'}
                                stripeKey="pk_live_51KWrgOEQ6YTqHunyjTvuPENEm4gD2k3W6z1hKXQqKpU1wVW88fyZ02eec3TTpdDyrHivYVdGVXbC1CKJk4776Fls00EQI9Kmbl"                    
                            >
                                <div style={{paddingRight: '120px', paddingBottom: '30px'}}>
                                <button className="btn btn-primary">Pay Now</button>
                                </div>
                    
                            </StripeCheckout>


                            

                        </div>

                    </div>
                </div>
            ) : (
                <Error error={error} />
            )
            }
        </div>
    )
}

export default Bookingscreen;