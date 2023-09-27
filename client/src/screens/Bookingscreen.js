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
    duration: 2000
});

function Bookingscreen() {
    const { roomid } = useParams();
    const { fromdate } = useParams();
    const { todate } = useParams();
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    const [room, setroom] = useState();
    const totaldays = (moment.duration((moment(todate, 'MM-DD-YYYY')).diff(moment(fromdate, 'MM-DD-YYYY'))).asDays());
    var [totalamount, settotalamount] = useState(0);
    const [wine, setwine] = useState(false);
    const [chocolate, setchocolate] = useState(false);
    const [flowers, setflowers] = useState(false);
    const [taxes, settaxes] = useState(0);
    const [salestax, setsales] = useState(0);
    const [IsActive, setIsActive] = useState(false);
    const [IsActiveTwo, setIsActiveTwo] = useState(false);
    const [IsActiveThree, setIsActiveThree] = useState(false); 


    console.log(fromdate)
    console.log(todate)

    useEffect(() => {

        let grandtotal = 0;
        const fetchSingle = async () => {
            try {
                setloading(true);
                const data = (await axios.post('/api/rooms/getroombyid', { roomid, fromdate, todate, totaldays })).data;
                let name = (data.name);

                if (name.includes("Joy")) {
                    let joytotal = JSON.parse(localStorage.getItem("Joy"));
                
                    joytotal ? grandtotal += joytotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                       
                    } if (wine) {
                        (grandtotal += 40.00);
                      
                    } if (chocolate) {
                        (grandtotal += 39.55);
                       
                    }
                    else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)
                    }
                    let tax = (joytotal * 0.06);
                    let ocutax = tax.toFixed(2);
                    settaxes(ocutax);

                    let salestax = (joytotal * 0.0675);

                    let match = salestax.toFixed(2);

                    setsales(match);

                    grandtotal = grandtotal += tax += salestax

                    settotalamount(grandtotal.toFixed(2));

                } if (name.includes("Faith")) {
                    const faithtotal = JSON.parse(localStorage.getItem("Faith"))

                    faithtotal ? grandtotal += faithtotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                    

                    } if (wine) {
                        (grandtotal += 40.00);
                    

                    } if (chocolate) {
                        (grandtotal += 39.55);
                    

                    }
                    else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)
                    }
                    let tax = (faithtotal * 0.06);
                    let ocutax = tax.toFixed(2);
                    settaxes(ocutax);

                    let salestax = (faithtotal * 0.0675);
                    let match = salestax.toFixed(2);

                    setsales(match);

                    grandtotal = grandtotal += tax += salestax

                    settotalamount(grandtotal.toFixed(2));

                } if (name.includes("Love")) {
                    const lovetotal = JSON.parse(localStorage.getItem("Love"))

                    lovetotal ? grandtotal += lovetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                     

                    } if (wine) {
                        (grandtotal += 40.00);
                       

                    } if (chocolate) {
                        (grandtotal += 39.55);
                      

                    }
                    else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)
                    }
                    let tax = (lovetotal * 0.06);
                    let ocutax = tax.toFixed(2);
                    settaxes(ocutax);

                    let salestax = (lovetotal * 0.0675);
                    let match = salestax.toFixed(2);

                    setsales(match);

                    grandtotal = grandtotal += tax += salestax

                    settotalamount(grandtotal.toFixed(2));

                } if (name.includes("Hope")) {
                    const hopetotal = JSON.parse(localStorage.getItem("Hope"))

                    hopetotal ? grandtotal += hopetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                       

                    } if (wine) {
                        (grandtotal += 40.00);
                     

                    } if (chocolate) {
                        (grandtotal += 39.55);
                    

                    }
                    else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                   
                    }

                    let tax = (hopetotal * 0.06);
                    let ocutax = tax.toFixed(2);
                    settaxes(ocutax);

                    let salestax = (hopetotal * 0.0675);
                    let match = salestax.toFixed(2);

                    setsales(match);

                    grandtotal = grandtotal += tax += salestax

                    settotalamount(grandtotal.toFixed(2));

                } if (name.includes("Grace")) {
                    const gracetotal = JSON.parse(localStorage.getItem("Grace"))

                    gracetotal ? grandtotal += gracetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
                   

                    } if (wine) {
                        (grandtotal += 40.00);
               

                    } if (chocolate) {
                        (grandtotal += 39.55);
                     

                    }
                    else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)
                    }
                    let tax = (gracetotal * 0.06);
                    let ocutax = tax.toFixed(2);
                    settaxes(ocutax);

                    let salestax = (gracetotal * 0.0675);
                    let match = salestax.toFixed(2);

                    setsales(match);

                    grandtotal = grandtotal += tax += salestax

                    settotalamount(grandtotal.toFixed(2));

                } if (name.includes("Peace")) {
                    const peacetotal = JSON.parse(localStorage.getItem("Peace"))

                    peacetotal ? grandtotal += peacetotal : grandtotal = 0;

                    if (flowers) {
                        (grandtotal += 45.99)
     

                    } if (wine) {
                        (grandtotal += 40.00);
   

                    } if (chocolate) {
                        (grandtotal += 39.55)
                    }
                    else {
                        settotalamount(0);
                        setflowers(flowers);
                        setchocolate(chocolate);
                        setwine(wine)
                    }
                    let tax = (peacetotal * 0.06);
                    let ocutax = tax.toFixed(2);
                    settaxes(ocutax);

                    let salestax = (peacetotal * 0.0675);
                    let match = salestax.toFixed(2);

                    setsales(match);

                    grandtotal = grandtotal += tax += salestax

                    settotalamount(grandtotal.toFixed(2));
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

    function setnewamount(e) {

        if (e === 39.55) {

            IsActive ? setIsActive(false) : setIsActive(true);
            !IsActive ? setchocolate(true) : setchocolate(false);
            var total = totalamount += 39.55;
            settotalamount(total);
        }
        if (e === 45.99) {

            IsActiveTwo ? setIsActiveTwo(false) : setIsActiveTwo(true);
            !IsActiveTwo ? setflowers(true) : setflowers(false);
            var totaltwo = totalamount += 45.99;
            settotalamount(totaltwo);
        }
        if (e === 40.00) {

            IsActiveThree ? setIsActiveThree(false) : setIsActiveThree(true);
            !IsActiveThree ? setwine(true) : setwine(false);
            var totalthree = totalamount += 40.00;
            settotalamount(totalthree);

        } 
        else {
       
        }
  
   
}

    async function onToken(token) {

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
            Swal.fire('Congratulations', 'Your room booked successfully', 'success').then(result => {
                window.location.href = '/signup'
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

        <>
        
        <div style={{ textAlign: 'center' }}>
                    <br/>
                    {/* onClick={() => setnewamount(40.00)} */}
                            <h2>Additional Packages</h2>
                            <br/>
                            <h6>* Call the Cabin in advance to set up details on added packages</h6>
                            <button id="flowers" onClick={() => setnewamount(45.99)} style={{margin: '10px', backgroundColor: IsActiveTwo ? 'darkorange' : '' }}>A dozen roses: <b>$45.99</b>.</button>
                            <br/>
                            <button id="wine" style={{margin: '10px', backgroundColor: IsActiveThree ? 'darkorange' : '' }}>* Coming Soon * A bottle of wine <b>$40.00</b>.</button>
                            <br/>
                            <button id="chocolate" onClick={() => setnewamount(39.55)} style={{margin: '10px', backgroundColor: IsActive ? 'darkorange' : '' }}>A box of delicious strawberries dipped in dark chocolate <b>$39.55</b>.</button>
                        </div>

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
                                <h5>Total nights : { totaldays } night stay</h5>
                                <h5>Room Occupancy Tax: ${taxes} </h5>
                                <h5>Room Sales Tax: ${salestax} </h5>
                                <h5>Total Amount : {totalamount}</h5>
                                
                                
                            </b>
                        </div>


                        <div style={{ float: "right" }}>

                            <StripeCheckout
                                amount={totalamount * 100}
                                token={onToken}
                                currency={'USD'}
                                stripeKey="pk_live_51KWrgOEQ6YTqHunyjTvuPENEm4gD2k3W6z1hKXQqKpU1wVW88fyZ02eec3TTpdDyrHivYVdGVXbC1CKJk4776Fls00EQI9Kmbl"                    
                                // stripeKey="pk_test_51KWrgOEQ6YTqHunyX0uoWgUrVGqOACgCQPEcX947w2u602fVYWIlA6OWheyblRORUwhc47omYPsCrQNAaV7zAtXz00XZIzQEdg"                    
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
        </>
        
    )
}

export default Bookingscreen;