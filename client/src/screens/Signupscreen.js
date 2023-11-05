import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import axios from "axios";
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import InfoSection2 from '../components/InfoSection2';
import { InfoDataFour } from '../data/InfoData';

AOS.init({
    duration : 2000
});

function Signupscreen() {
  const [email, setemail] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [street, setstreet] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setzip] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [birthday, setbirthday] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();


  async function Signup() {

    if (firstname && lastname && email && street && city && state && zip && phonenumber && birthday){
  const user = {

        firstname,
        lastname, 
        email, 
        street,
        city, 
        state,
        zip, 
        phonenumber,
        birthday

      }

      try {
        setloading(true);
        const result = (await axios.post('/api/users/signup', user)).data
        setloading(false);
        seterror(true);
        Swal.fire('OOps', 'Please provide missing fields', 'error');
        
        return result;
      } catch (error) {
        setloading(false);
        seterror(false);
        Swal.fire('Congratulations, you have registered to our newsletter! Thank you!').then(result=>{
          window.location.href="/littleheavenbedandbreakfast";
          return result;
      })
      }
    } 
    else {
        Swal.fire('OOps', 'Please provide missing fields', 'error');
        return console.log(error); 
    }
    
    
  }

  return (
    <div>
        {loading ? (<Loader/>) : (
    <div className="row justify-content-center mt-5">

        
            <InfoSection2 {...InfoDataFour}/>
        
          <div  className="col-md-3 mt-5 justify-content-center" style={{textAlign : 'center'}}>
          {error && (<Error message='Invalid Credentials'/>)}
            <div className="bs">
              <h2>Signup Here</h2>
              <br/>
              <h4>First Name:</h4> 
              <input type="text" className="form-control" placeholder="first name" style={{textAlign : 'center'}}
              value={firstname} onChange={(e)=> {setfirstname(e.target.value)}}/>
              <br/>
              <h4>Last Name:</h4> 
              <input type="text" className="form-control" placeholder="last name" style={{textAlign : 'center'}}
              value={lastname} onChange={(e)=> {setlastname(e.target.value)}}/>
              <br/>
              <h4>Email:</h4>
              <input type="text" className="form-control" placeholder="email" style={{textAlign : 'center'}}
              value={email} onChange={(e)=> {setemail(e.target.value)}}/>
              <br/>
                <h4>Address:</h4>
              <input type="text" className="form-control" placeholder="street" style={{textAlign : 'center'}}
              value={street} onChange={(e)=> {setstreet(e.target.value)}}/>
              <input type="text" className="form-control" placeholder="city" style={{textAlign : 'center'}}
              value={city} onChange={(e)=> {setcity(e.target.value)}}/>
              <input type="text" className="form-control" placeholder="state" style={{textAlign : 'center'}}
              value={state} onChange={(e)=> {setstate(e.target.value)}}/>
              <input type="text" className="form-control" placeholder="zip-code" style={{textAlign : 'center'}}
              value={zip} onChange={(e)=> {setzip(e.target.value)}}/>
              <br/>
                <h4>Phone Number:</h4>
              <input type="text" className="form-control" placeholder="phonenumber" style={{textAlign : 'center'}}
              value={phonenumber} onChange={(e)=> {setphonenumber(e.target.value)}}/>
              <br/>
              <h4>Birthday: Please use the following format : MM/DD !</h4> 
              <input type="text" className="form-control" placeholder="birthday (mm/dd) only" style={{textAlign : 'center'}}
              value={birthday} onChange={(e)=> {setbirthday(e.target.value)}}/>

              <button style={{position: 'relative', marginTop: '40px'}} className="btn btn-primary mt-12" onClick={Signup}>Signup</button>
              {loading && (<Loader/>)}
            </div>
          </div>
        </div>
  
        )} 
          </div>
  )
}

export default Signupscreen