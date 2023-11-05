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
import emailjs from '@emailjs/browser';

AOS.init({
    duration: 2000
});

function Bookingscreen() {
    const [filled, setfilled] = useState(false);
    const [emailsent, setemailsent] = useState(false);
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
    const [addedroses, setaddedroses] = useState("");
    const [addedchocolate, setaddedchocolate] = useState("");
    const [taxes, settaxes] = useState(0);
    const [salestax, setsales] = useState(0);
    const [IsActive, setIsActive] = useState(false);
    const [IsActiveTwo, setIsActiveTwo] = useState(false);
    const [IsActiveThree, setIsActiveThree] = useState(false); 
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [address, setaddress] = useState('');

    useEffect(() => {

        let grandtotal = 0;
        const fetchSingle = async () => {
            try {
                setloading(true);
                const data = (await axios.post('/api/rooms/getroombyid', { roomid, fromdate, todate, totaldays })).data;
                localStorage.setItem('fromdate', fromdate);
                localStorage.setItem('todate', todate);
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
                        localStorage.setItem('total', 0);
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
                    localStorage.setItem('total', grandtotal.toFixed(2));

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
                        localStorage.setItem('total', 0);
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
                    localStorage.setItem('total', grandtotal.toFixed(2));

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
                        localStorage.setItem('total', 0);
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
                    localStorage.setItem('total', grandtotal.toFixed(2));

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
                        localStorage.setItem('total', 0);
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
                    localStorage.setItem('total', grandtotal.toFixed(2));

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
                        localStorage.setItem('total', 0);
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
                    localStorage.setItem('total', grandtotal.toFixed(2));

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
                        localStorage.setItem('total', 0);
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
                    localStorage.setItem('total', grandtotal.toFixed(2));
                }
                setroom(data)
                localStorage.setItem("room", JSON.stringify(data));
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
            localStorage.setItem('total', total);
        }
        if (e === 45.99) {

            IsActiveTwo ? setIsActiveTwo(false) : setIsActiveTwo(true);
            !IsActiveTwo ? setflowers(true) : setflowers(false);
            var totaltwo = totalamount += 45.99;
            settotalamount(totaltwo);
            localStorage.setItem('total', total);
        }
        if (e === 40.00) {

            IsActiveThree ? setIsActiveThree(false) : setIsActiveThree(true);
            !IsActiveThree ? setwine(true) : setwine(false);
            var totalthree = totalamount += 40.00;
            settotalamount(totalthree);
            localStorage.setItem('total', total);
        } 
        else {
       
        }
  
   
}

    async function onToken(token) {

        let bookingDetails = {
            room,
            fromdate,
            todate,
            firstname,
            lastname,
            email,
            address,
            phonenumber,
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
            Swal.fire('Congratulations! You are booked!', "Thank you so much for booking with us! We can't wait to see you at the Cabin!", 'success').then(result => {
                window.location.href = '/signup'
              })
                // return result;
            return result;
        } catch (error) {
            setloading(false);
            Swal.fire('OOps', 'Something went wrong', 'error');
            return console.log(error);
        }
    }
    const sendEmail = (e) => {
        setfilled(true)
        e.preventDefault();
        emailjs.sendForm('service_pkshh1d', 'template_ezsaj8t', e.target, 'MIDNfGnolFZme7E87');
        console.log("email sent");
        localStorage.clear();
      }

    return (

        <>
           <div>
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
        {loading ? (<></>) : (
      
    <div className="row justify-content-center mt-5"> 
          <div  className="col-md-5 mt-5 justify-content-center" style={{textAlign : 'center'}}>
          {error && (<Error message='Please provide your information to continue booking'/>)}
            <div className="bs">
            <h2>Please Provide Additional Details</h2>
       <br/>
          <form className="contact_form" onSubmit={sendEmail}>
            <label htmlFor="roomname">Room Name:</label>
            <input type="text" name="room_name" id="room_name" className="forminput" value={room.name}/>
            <label htmlFor="fromdate">From Date:</label>
            <input type="text" name="from_date" id="from_date" className="forminput" value={fromdate}/>
            <label htmlFor="todate">To Date:</label>
            <input type="text" name="to_date" id="to_date" className="forminput" value={todate}/>
            <label htmlFor="total">Total:</label>
            <input type="text" name="total" id="total" className="forminput" value={totalamount}/>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" value={firstname} onChange={e => setfirstname(e.target.value)} name="first_name" id="first_name" placeholder="Please provide first name" className="forminput"/>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" value={lastname} onChange={e => setlastname(e.target.value)} name="last_name" id="last_name" placeholder="Please provide last name"className="forminput"/>
            <label htmlFor="email">Email:</label>
            <input type="text" value={email} onChange={e => setemail(e.target.value)} name="email" id="email" placeholder="Please provide email"className="forminput" />
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="text" value={phonenumber} onChange={e => setphonenumber(e.target.value)} name="phone_number" id="phone_number" placeholder="Please provide phone number"className="forminput" />
            <label htmlFor="address">Address:</label>
            <input type="text" value={address} onChange={e => setaddress(e.target.value)} name="address" id="address" placeholder="Please provide address"className="forminput" />
            <label htmlFor="message">Additional Info:</label>
            <input type="text" name="message" id="message" placeholder="Have a question or dietary preferences/allergies?"className="forminput" />
            <label htmlFor="roses">Dozen Roses:</label>
            <input type="text" name="roses" id="roses" onChange={e => setaddedroses(e.target.value)} value={addedroses} placeholder="Did you order a dozen roses?"className="forminput" />
            <label htmlFor="chocolate">Chocolate Covered Strawberries:</label>
            <input type="text" name="chocolate" id="chocolate" onChange={e => setaddedchocolate(e.target.value)} value={addedchocolate} placeholder="Did you order chocolate covered strawberries?"className="forminput" />     
            <button type="submit" onClick={() => sendEmail} style={{position: 'relative', marginTop: '40px'}} className="btn btn-primary mt-12" >Information Verified</button>
          </form>
            </div>
          </div>
        </div>
        )} 
          </div>

                        <div className="m-5" data-aos="flip-left">
            { filled ? (
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
            <h5>Total nights : { totaldays.toFixed(0) } night stay</h5>
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
                <h2 style={{textAlign:"center"}}>Please complete form to continue with payment.</h2>
            )
            }
        </div>
        </>
        
    )
}

export default Bookingscreen;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import { useParams } from 'react-router-dom';
// import moment from 'moment';
// import StripeCheckout from 'react-stripe-checkout';
// import Swal from 'sweetalert2';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import emailjs from '@emailjs/browser';

// AOS.init({
//     duration: 2000
// });

// function Bookingscreen() {
//     const [filled, setfilled] = useState(false);
//     const { roomid } = useParams();
//     const { fromdate } = useParams();
//     const { todate } = useParams();
//     const [loading, setloading] = useState(true);
//     const [error, seterror] = useState();
//     const [room, setroom] = useState();
//     const totaldays = (moment.duration((moment(todate, 'MM-DD-YYYY')).diff(moment(fromdate, 'MM-DD-YYYY'))).asDays());
//     var [totalamount, settotalamount] = useState(0);
//     const [wine, setwine] = useState(false);
//     const [chocolate, setchocolate] = useState(false);
//     const [flowers, setflowers] = useState(false);
//     const [taxes, settaxes] = useState(0);
//     const [salestax, setsales] = useState(0);
//     const [IsActive, setIsActive] = useState(false);
//     const [IsActiveTwo, setIsActiveTwo] = useState(false);
//     const [IsActiveThree, setIsActiveThree] = useState(false); 
//     const [firstname, setfirstname] = useState('');
//     const [lastname, setlastname] = useState('');
//     const [email, setemail] = useState('');
//     const [phonenumber, setphonenumber] = useState('');
//     const [address, setaddress] = useState('');

//     useEffect(() => {

//         let grandtotal = 0;
//         const fetchSingle = async () => {
//             try {
//                 setloading(true);
//                 const data = (await axios.post('/api/rooms/getroombyid', { roomid, fromdate, todate, totaldays })).data;
//                 localStorage.setItem('fromdate', fromdate);
//                 localStorage.setItem('todate', todate);
//                 let name = (data.name);

//                 if (name.includes("Joy")) {
//                     let joytotal = JSON.parse(localStorage.getItem("Joy"));
                
//                     joytotal ? grandtotal += joytotal : grandtotal = 0;

//                     if (flowers) {
//                         (grandtotal += 45.99)
                       
//                     } if (wine) {
//                         (grandtotal += 40.00);
                      
//                     } if (chocolate) {
//                         (grandtotal += 39.55);
                       
//                     }
//                     else {
//                         settotalamount(0);
//                         localStorage.setItem('total', 0);
//                         setflowers(flowers);
//                         setchocolate(chocolate);
//                         setwine(wine)
//                     }
//                     let tax = (joytotal * 0.06);
//                     let ocutax = tax.toFixed(2);
//                     settaxes(ocutax);

//                     let salestax = (joytotal * 0.0675);

//                     let match = salestax.toFixed(2);

//                     setsales(match);

//                     grandtotal = grandtotal += tax += salestax
//                     settotalamount(grandtotal.toFixed(2));
//                     localStorage.setItem('total', grandtotal.toFixed(2));

//                 } if (name.includes("Faith")) {
//                     const faithtotal = JSON.parse(localStorage.getItem("Faith"))

//                     faithtotal ? grandtotal += faithtotal : grandtotal = 0;

//                     if (flowers) {
//                         (grandtotal += 45.99)
                    

//                     } if (wine) {
//                         (grandtotal += 40.00);
                    

//                     } if (chocolate) {
//                         (grandtotal += 39.55);
                    

//                     }
//                     else {
//                         settotalamount(0);
//                         localStorage.setItem('total', 0);
//                         setflowers(flowers);
//                         setchocolate(chocolate);
//                         setwine(wine)
//                     }
//                     let tax = (faithtotal * 0.06);
//                     let ocutax = tax.toFixed(2);
//                     settaxes(ocutax);

//                     let salestax = (faithtotal * 0.0675);
//                     let match = salestax.toFixed(2);

//                     setsales(match);

//                     grandtotal = grandtotal += tax += salestax
//                     settotalamount(grandtotal.toFixed(2));
//                     localStorage.setItem('total', grandtotal.toFixed(2));

//                 } if (name.includes("Love")) {
//                     const lovetotal = JSON.parse(localStorage.getItem("Love"))

//                     lovetotal ? grandtotal += lovetotal : grandtotal = 0;

//                     if (flowers) {
//                         (grandtotal += 45.99)
                     

//                     } if (wine) {
//                         (grandtotal += 40.00);
                       

//                     } if (chocolate) {
//                         (grandtotal += 39.55);
                      

//                     }
//                     else {
//                         settotalamount(0);
//                         localStorage.setItem('total', 0);
//                         setflowers(flowers);
//                         setchocolate(chocolate);
//                         setwine(wine)
//                     }
//                     let tax = (lovetotal * 0.06);
//                     let ocutax = tax.toFixed(2);
//                     settaxes(ocutax);

//                     let salestax = (lovetotal * 0.0675);
//                     let match = salestax.toFixed(2);

//                     setsales(match);

//                     grandtotal = grandtotal += tax += salestax
//                     settotalamount(grandtotal.toFixed(2));
//                     localStorage.setItem('total', grandtotal.toFixed(2));

//                 } if (name.includes("Hope")) {
//                     const hopetotal = JSON.parse(localStorage.getItem("Hope"))

//                     hopetotal ? grandtotal += hopetotal : grandtotal = 0;

//                     if (flowers) {
//                         (grandtotal += 45.99)
                       

//                     } if (wine) {
//                         (grandtotal += 40.00);
                     

//                     } if (chocolate) {
//                         (grandtotal += 39.55);
                    

//                     }
//                     else {
//                         settotalamount(0);
//                         localStorage.setItem('total', 0);
//                         setflowers(flowers);
//                         setchocolate(chocolate);
                   
//                     }

//                     let tax = (hopetotal * 0.06);
//                     let ocutax = tax.toFixed(2);
//                     settaxes(ocutax);

//                     let salestax = (hopetotal * 0.0675);
//                     let match = salestax.toFixed(2);

//                     setsales(match);

//                     grandtotal = grandtotal += tax += salestax
//                     settotalamount(grandtotal.toFixed(2));
//                     localStorage.setItem('total', grandtotal.toFixed(2));

//                 } if (name.includes("Grace")) {
//                     const gracetotal = JSON.parse(localStorage.getItem("Grace"))

//                     gracetotal ? grandtotal += gracetotal : grandtotal = 0;

//                     if (flowers) {
//                         (grandtotal += 45.99)
                   

//                     } if (wine) {
//                         (grandtotal += 40.00);
               

//                     } if (chocolate) {
//                         (grandtotal += 39.55);
                     

//                     }
//                     else {
//                         settotalamount(0);
//                         localStorage.setItem('total', 0);
//                         setflowers(flowers);
//                         setchocolate(chocolate);
//                         setwine(wine)
//                     }
//                     let tax = (gracetotal * 0.06);
//                     let ocutax = tax.toFixed(2);
//                     settaxes(ocutax);

//                     let salestax = (gracetotal * 0.0675);
//                     let match = salestax.toFixed(2);

//                     setsales(match);

//                     grandtotal = grandtotal += tax += salestax
//                     settotalamount(grandtotal.toFixed(2));
//                     localStorage.setItem('total', grandtotal.toFixed(2));

//                 } if (name.includes("Peace")) {
//                     const peacetotal = JSON.parse(localStorage.getItem("Peace"))

//                     peacetotal ? grandtotal += peacetotal : grandtotal = 0;

//                     if (flowers) {
//                         (grandtotal += 45.99)
     

//                     } if (wine) {
//                         (grandtotal += 40.00);
   

//                     } if (chocolate) {
//                         (grandtotal += 39.55)
//                     }
//                     else {
//                         settotalamount(0);
//                         localStorage.setItem('total', 0);
//                         setflowers(flowers);
//                         setchocolate(chocolate);
//                         setwine(wine)
//                     }
//                     let tax = (peacetotal * 0.06);
//                     let ocutax = tax.toFixed(2);
//                     settaxes(ocutax);

//                     let salestax = (peacetotal * 0.0675);
//                     let match = salestax.toFixed(2);

//                     setsales(match);

//                     grandtotal = grandtotal += tax += salestax
//                     settotalamount(grandtotal.toFixed(2));
//                     localStorage.setItem('total', grandtotal.toFixed(2));
//                 }
//                 setroom(data)
//                 localStorage.setItem("room", JSON.stringify(data));
//                 setloading(false);
//             } catch (error) {
//                 seterror(true);
//                 setloading(false);
//             }
//         }


//         fetchSingle().catch(console.error);
//     }, [roomid, fromdate, todate, totaldays, totalamount, firstname, lastname, address, phonenumber, wine, flowers, chocolate]);

//     function setnewamount(e) {

//         if (e === 39.55) {

//             IsActive ? setIsActive(false) : setIsActive(true);
//             !IsActive ? setchocolate(true) : setchocolate(false);
//             var total = totalamount += 39.55;
//             settotalamount(total);
//             localStorage.setItem('total', total);
//         }
//         if (e === 45.99) {

//             IsActiveTwo ? setIsActiveTwo(false) : setIsActiveTwo(true);
//             !IsActiveTwo ? setflowers(true) : setflowers(false);
//             var totaltwo = totalamount += 45.99;
//             settotalamount(totaltwo);
//             localStorage.setItem('total', total);
//         }
//         if (e === 40.00) {

//             IsActiveThree ? setIsActiveThree(false) : setIsActiveThree(true);
//             !IsActiveThree ? setwine(true) : setwine(false);
//             var totalthree = totalamount += 40.00;
//             settotalamount(totalthree);
//             localStorage.setItem('total', total);
//         } 
//         else {
       
//         }
  
   
// }

//     async function onToken(token) {

//         let bookingDetails = {
//             room,
//             firstname,
//             lastname,
//             email,
//             address,
//             phonenumber,
//             fromdate,
//             todate,
//             totalamount,
//             totaldays,
//             wine,
//             chocolate,
//             flowers,
//             token

//         }

//         try {
//             setloading(true);
//             const result = await axios.post('/api/bookings/bookroom', bookingDetails);
//             setloading(false);
//             Swal.fire('Congratulations! You are booked!', "Thank you so much for booking with us! We can't wait to see you at the Cabin!", 'success').then(result => {
//                 window.location.href = '/signup'
//               })
//                 // return result;
//             return result;
//         } catch (error) {
//             setloading(false);
//             Swal.fire('OOps', 'Something went wrong', 'error');
//             return console.log(error);
//         }
//     }
//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailjs.sendForm('service_pkshh1d', 'template_ezsaj8t', e.target, 'MIDNfGnolFZme7E87');
//         localStorage.clear();
//       }

//     function SubmitButton(){
//         if (firstname && lastname && phonenumber && email && address) {
//             return <button type="submit" onClick={() => setfilled(true)} style={{position: 'relative', marginTop: '40px'}} className="btn btn-primary mt-12" >Continue with Payment</button>
//         } else {
            
//         }
//     }

//     return (

//         <>
//            <div>
//            <div style={{ textAlign: 'center' }}>
//                     <br/>
//                     {/* onClick={() => setnewamount(40.00)} */}
//                             <h2>Additional Packages</h2>
//                             <br/>
//                             <h6>* Call the Cabin in advance to set up details on added packages</h6>
//                             <button id="flowers" onClick={() => setnewamount(45.99)} style={{margin: '10px', backgroundColor: IsActiveTwo ? 'darkorange' : '' }}>A dozen roses: <b>$45.99</b>.</button>
//                             <br/>
//                             <button id="wine" style={{margin: '10px', backgroundColor: IsActiveThree ? 'darkorange' : '' }}>* Coming Soon * A bottle of wine <b>$40.00</b>.</button>
//                             <br/>
//                             <button id="chocolate" onClick={() => setnewamount(39.55)} style={{margin: '10px', backgroundColor: IsActive ? 'darkorange' : '' }}>A box of delicious strawberries dipped in dark chocolate <b>$39.55</b>.</button>
//                         </div>
//         {loading ? (<></>) : (
      
//     <div className="row justify-content-center mt-5"> 
//           <div  className="col-md-5 mt-5 justify-content-center" style={{textAlign : 'center'}}>
//           {error && (<Error message='Please provide your information to continue booking'/>)}
//             <div className="bs">
//             <h2>Please Provide Additional Details</h2>
//        <br/>
//           <form className="contact_form" onSubmit={sendEmail}>
//             <label htmlFor="roomname">Room Name:</label>
//             <input type="text" name="room_name" id="room_name" className="forminput" defaultValue={room.name}/>
//             <label htmlFor="fromdate">From Date:</label>
//             <input type="text" name="from_date" id="from_date" className="forminput" defaultValue={fromdate}/>
//             <label htmlFor="todate">To Date:</label>
//             <input type="text" name="to_date" id="to_date" className="forminput" defaultValue={todate}/>
//             <label htmlFor="total">Total:</label>
//             <input type="text" name="total" id="total" className="forminput" defaultValue={`${totalamount}`}/>
//             <label htmlFor="firstname">First Name:</label>
//             <input type="text" defaultValue={firstname} onChange={e => setfirstname(e.target.value)} name="first_name" id="first_name" placeholder="Please provide first name" className="forminput"/>
//             <label htmlFor="lastname">Last Name:</label>
//             <input type="text" defaultValue={lastname} onChange={e => setlastname(e.target.value)} name="last_name" id="last_name" placeholder="Please provide last name"className="forminput"/>
//             <label htmlFor="email">Email:</label>
//             <input type="text" defaultValue={email} onChange={e => setemail(e.target.value)} name="email" id="email" placeholder="Please provide email"className="forminput" />
//             <label htmlFor="phonenumber">Phone Number:</label>
//             <input type="text" defaultValue={phonenumber} onChange={e => setphonenumber(e.target.value)} name="phone_number" id="phone_number" placeholder="Please provide phone number"className="forminput" />
//             <label htmlFor="address">Address:</label>
//             <input type="text" defaultValue={address} onChange={e => setaddress(e.target.value)} name="address" id="address" placeholder="Please provide address"className="forminput" />
//             <label htmlFor="message">Additional Info:</label>
//             <input type="text" name="message" id="message" placeholder="Have a question or dietary preferences/allergies?"className="forminput" />
//             { flowers ? <input type="text" name="roses" id="room_name" className="forminput" defaultValue="* Dozen Roses : 45.99"/> : ""}
//             { chocolate ? <input type="text" name="chocolate" id="room_name" className="forminput" defaultValue="* Chocolate Covered Strawberries : 39.55"/> : ""}
//             { flowers ? <input type="text" name="wine" id="room_name" className="forminput" defaultValue="wine"/> : ""}
//             <SubmitButton/>
//           </form>
//             </div>
//           </div>
//         </div>
  
//         )} 
//           </div>
      

//                         <div className="m-5" data-aos="flip-left">
//             {loading ? (<Loader />) : filled ? (

//                 <div className="row justify-content-center mt-5 bs">

//                     <div className="col-md-6">
//                         <h1>{room.name}</h1>
//                         <img src={room.imageurls[0]} className="bigimg" alt="bigimage" />
//                     </div>

//                     <div className="col-md-6">
//                         <div style={{ textAlign: 'right' }}>
//                             <h1>Booking Details</h1>
//                             <hr />

//                             <b>
//                                 <h4>Your Booking</h4>
//                                 <h5>From Date : {fromdate}</h5>
//                                 <h5>To Date : {todate}</h5>            
//                             </b>
//                         </div>


//                         <div style={{ textAlign: 'left' }}>
//                             <b>
//                                 <h1>Amount</h1>
//                                 <hr />
//                                 { wine ? (<h5>Wine: $40.00 </h5>) : (<h5>Wine: $0.00</h5>)}
//                                 { chocolate ? (<h5>Dozen Chocolate Strawberries: $39.55</h5>) : (<h5>Dozen Chocolate Strawberries: $0.00</h5>)}
//                                 { flowers ? (<h5>Dozen Roses: $45.99</h5>) : (<h5>Dozen Roses: $0.00</h5>) }
//                                 <h5>Total nights : { totaldays.toFixed(0) } night stay</h5>
//                                 <h5>Room Occupancy Tax: ${taxes} </h5>
//                                 <h5>Room Sales Tax: ${salestax} </h5>
//                                 <h5>Total Amount : {totalamount}</h5>
                                
                                
//                             </b>
//                         </div>


//                         <div style={{ float: "right" }}>

//                             <StripeCheckout
//                                 amount={totalamount * 100}
//                                 token={onToken}
//                                 currency={'USD'}
//                                 // stripeKey="pk_live_51KWrgOEQ6YTqHunyjTvuPENEm4gD2k3W6z1hKXQqKpU1wVW88fyZ02eec3TTpdDyrHivYVdGVXbC1CKJk4776Fls00EQI9Kmbl"                    
//                                 stripeKey="pk_test_51KWrgOEQ6YTqHunyX0uoWgUrVGqOACgCQPEcX947w2u602fVYWIlA6OWheyblRORUwhc47omYPsCrQNAaV7zAtXz00XZIzQEdg"                    
//                             >
//                                 <div style={{paddingRight: '120px', paddingBottom: '30px'}}>
//                                 <button className="btn btn-primary">Pay Now</button>
//                                 </div>
                    
//                             </StripeCheckout>
                       

//                         </div>

//                     </div>
//                 </div>
//             ) : (
//                 <h2 style={{textAlign:"center"}}>Please complete form to continue with payment.</h2>
//             )
//             }
//         </div>
//         </>
        
//     )
// }

// export default Bookingscreen;