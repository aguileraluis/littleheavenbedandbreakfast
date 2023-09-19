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
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();


  async function Signup() {

    if (name && email && address && phonenumber){
  const user = {

        name, 
        email, 
        address, 
        phonenumber

      }

      try {
        setloading(true);
        const result = (await axios.post('/api/users/signup', user)).data
        setloading(false);
        seterror(false);
        Swal.fire('Congratulations, you have registered to our newsletter! Thank you!', 'success').then(result=>{
            window.location.href="/littleheavenbedandbreakfast";
            return result;
        })
        return result;
      } catch (error) {
        setloading(false);
        seterror(true);
        Swal.fire('OOps', 'Something went wrong', 'error');
        return console.log(error);
      }
    } 
    else {
        Swal.fire('OOps', 'Something went wrong', 'error');
        return console.log(error); 
    }
    
    
  }

  return (
    <div>
        {loading ? (<Loader/>) : (
    <div className="row justify-content-center mt-5">

        
            <InfoSection2 {...InfoDataFour}/>
        
          <div  className="col-md-5 mt-5 justify-content-center" style={{textAlign : 'center'}}>
          {error && (<Error message='Invalid Credentials'/>)}
            <div className="bs">
              <h2>Signup Here</h2>
              <br/>
              <h4>Name:</h4> 
              <input type="text" className="form-control" placeholder="name" style={{textAlign : 'center'}}
              value={name} onChange={(e)=> {setname(e.target.value)}}/>
              <br/>
              <h4>Email:</h4>
              <input type="text" className="form-control" placeholder="email" style={{textAlign : 'center'}}
              value={email} onChange={(e)=> {setemail(e.target.value)}}/>
              <br/>
                <h4>Address:</h4>
              <input type="text" className="form-control" placeholder="address" style={{textAlign : 'center'}}
              value={address} onChange={(e)=> {setaddress(e.target.value)}}/>
              <br/>
                <h4>Phone Number:</h4>
              <input type="number" className="form-control" placeholder="phonenumber" style={{textAlign : 'center'}}
              value={phonenumber} onChange={(e)=> {setphonenumber(e.target.value)}}/>

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