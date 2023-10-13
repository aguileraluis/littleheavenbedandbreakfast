import './App.css';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Adminscreen from './screens/Adminscreen';
import Loginscreen from './screens/Loginscreen';
import Thelodgescreen from './screens/Thelodgescreen';
import Signupscreen from './screens/Signupscreen';
import Weddingsscreen from './screens/Weddingsscreen';
import Packagesscreen from './screens/Packagesscreen';
import Specialeventsscreen from './screens/Specialeventsscreen';
import Theareascreen from './screens/Theareascreen';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Tourscreen from './screens/Tourscreen'
import Breakfastscreen from './screens/Breakfastscreen';
import Directionscreen from './screens/Directionscreen';
import Policiesscreen from './screens/Policiesscreen';
import Ourstoryscreen from './screens/Ourstoryscreen';
import Diningscreen from './screens/Diningscreen';
import Thingstodoscreen from './screens/Thingstodoscreen';
import Localwineriesscreen from './screens/Localwineriesscreen';
import Boutiquescreen from './screens/Boutiquescreen';
import Sendemailscreen from './screens/Sendemailscreen';


function App() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useLayoutEffect(
      () => {
      window.scrollTo(0,0);
    }, 
    [location.pathname]);

    useEffect(() => {
      Aos.init({})
    }, [])

  return (
    <div className="App">
   
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>
 
    <Routes>
      <Route path="/littleheavenbedandbreakfast" element={<Homescreen/>}/>
      <Route path="/*" element={<Thelodgescreen />}/>
      <Route path="/book/:roomid/:fromdate/:todate/" element={<Bookingscreen/>}/>
      <Route path="/mjhbedandbreakfast12345" element={<Adminscreen/>}/>
      <Route path="/login" element={<Loginscreen/>}/>
      <Route path="/signup" element={<Signupscreen/>}/>
      <Route path="/yadkinvalleywinecountry" element={<Thelodgescreen/>}/>
      <Route path="/weddings" element={<Weddingsscreen/>}/>
      <Route path="/packages" element={<Packagesscreen/>}/>
      <Route path="/specialevents" element={<Specialeventsscreen/>}/>
      <Route path="/thearea" element={<Theareascreen/>}/>
      <Route path="/tour" element={<Tourscreen />}/>
      <Route path="/breakfast" element={<Breakfastscreen />}/>
      <Route path="/directions" element={<Directionscreen />}/>
      <Route path="/policies" element={<Policiesscreen />}/>
      <Route path="/story" element={<Ourstoryscreen />}/>
      <Route path="/dining" element={<Diningscreen />}/>
      <Route path="/sendemail" element={<Sendemailscreen />}/>
      <Route path="/thingstodo" element={<Thingstodoscreen />}/>
      <Route path="/localwineries" element={<Localwineriesscreen />}/>
      <Route path="/boutique" element={<Boutiquescreen />}/>
      <Route path="*" element={<Thelodgescreen />} />
      <Route path="/" element={<Thelodgescreen />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App;