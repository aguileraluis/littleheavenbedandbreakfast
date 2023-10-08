import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import emailjs from '@emailjs/browser';

AOS.init({
    duration : 2000
});

function Sendemailscreen() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const room = localStorage.getItem('room');
  const newroom = JSON.parse(room);
  let fromdate = localStorage.getItem('fromdate');
  let todate = localStorage.getItem('todate');
  let total = localStorage.getItem('total');


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pkshh1d', 'template_ezsaj8t', e.target, 'MIDNfGnolFZme7E87');
    localStorage.clear();
    Swal.fire('Congratulations! You are booked!', "Thank you so much for booking with us! We can't wait to see you at the Cabin!", 'success').then(result => {
      window.location.href = '/yadkinvalleywinecountry'
    })
  }

  return (
    <div>
        {loading ? (<Loader/>) : (
    <div className="row justify-content-center mt-5"> 
          <div  className="col-md-5 mt-5 justify-content-center" style={{textAlign : 'center'}}>
          {error && (<Error message='Invalid Credentials'/>)}
            <div className="bs">
            <h2>Please complete your booking!</h2>
       <br/>
          <form className="contact_form" onSubmit={sendEmail}>
            <label htmlFor="roomname">Room Name:</label>
            <input type="text" name="room_name" id="room_name" className="forminput" value={newroom.name}/>
            <label htmlFor="fromdate">From Date:</label>
            <input type="text" name="from_date" id="from_date" className="forminput" value={fromdate}/>
            <label htmlFor="todate">To Date:</label>
            <input type="text" name="to_date" id="to_date" className="forminput" value={todate}/>
            <label htmlFor="total">Total:</label>
            <input type="text" name="total" id="total" className="forminput" value={total}/>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" name="first_name" id="first_name" placeholder="Please provide first name" className="forminput"/>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" name="last_name" id="last_name" placeholder="Please provide last name"className="forminput"/>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" placeholder="Please provide email"className="forminput" />
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="text" name="phone_number" id="phone_number" placeholder="Please provide phone number"className="forminput" />
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address" placeholder="Please provide address"className="forminput" />
            <label htmlFor="message">Additional Info:</label>
            <input type="text" name="message" id="message" placeholder="Have a question or dietary preferences/allergies?"className="forminput" />
            
            <button type="submit" style={{position: 'relative', marginTop: '40px'}} className="btn btn-primary mt-12" >Complete Booking</button>
          </form>
            </div>
          </div>
        </div>
  
        )} 
          </div>
  )
}

export default Sendemailscreen