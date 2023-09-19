import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import moment from 'moment';
import 'antd/dist/antd';
import { DatePicker, Space } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SliderDataFour } from "../data/SliderData"; 
import Hero from '../components/Hero';
import TitleTwo from '../components/TitleTwo';
import { ReactDOM } from 'react';

AOS.init({
    duration: 2000
});

const { RangePicker } = DatePicker;

function Homescreen() {
    const [rooms, setrooms] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
    const [IsActive, setIsActive] = useState(false);
    const [IsActiveTwo, setIsActiveTwo] = useState(false);
    const [IsActiveThree, setIsActiveThree] = useState(false);


    const [fromdate, setfromdate] = useState();
    const [todate, settodate] = useState();

    const [duplicaterooms, setduplicaterooms] = useState([]);

    const [searchkey, setsearchkey] = useState('');
    const [type, settype] = useState('All')

    useEffect(() => {
        const fetchData = async () => {
            try {
                localStorage.clear();
                setloading(true);
                const data = (await axios.get('/api/rooms/getallrooms')).data
                setrooms(data);
                setduplicaterooms(data);
                setloading(false);
            } catch (error) {
                localStorage.clear()
                seterror(true);
                console.log(error);
                setloading(false);
            }
            setTimeout(() => {
                setloading(false);
            }, 1500);

        }
        fetchData().catch(console.error);
    }, [])

    function filterByDate(dates) {
        var fromdate = (moment((dates[0]).$d).format('DD-MM-YYYY'));
        var todate = (moment((dates[1]).$d).format('DD-MM-YYYY'));
        setfromdate(fromdate);
        settodate(todate);

        let temprooms = [];
     
        var availability = false;
      
        for (const room of duplicaterooms) {

            let days = [];
            let joytotalprice = 0;
            let faithtotalprice = 0;
            let lovetotalprice = 0;
            let hopetotalprice = 0;
            let gracetotalprice = 0;
            let peacetotalprice = 0;

            while (moment(moment(fromdate, "DD-MM-YYYY")).isSameOrBefore(moment(todate, "DD-MM-YYYY"))) {
                console.log("yes");
                days.push(moment(fromdate, "DD-MM-YYYY"));
                fromdate = moment(fromdate, "DD-MM-YYYY").add(1, 'days');
            }

            for (var day of days) {
                var Monday = "Mon";
                var Tuesday = "Tue";
                var Wednesday = "Wed";
                var Thursday = "Thu";
                var Friday = "Fri";
                var Saturday = "Sat";
                var Sunday = "Sun";


                var date = (day._d).toString();
                console.log(date);

                for (var cuarto of rooms) {
                    console.log(cuarto)
                    if (cuarto.name.includes("Joy")) {
                        console.log("Joy");
                        if (date.includes(Sunday)) {
                            console.log("Sunday")
                            joytotalprice += 259
                        } else if (date.includes(Monday)) {
                            console.log("Monday")
                            joytotalprice += 259
                        } else if (date.includes(Tuesday)) {
                            console.log("Tuesday")
                            joytotalprice += 259

                        } else if (date.includes(Wednesday)) {
                            console.log("Wednesday")
                            joytotalprice += 259

                        } else if (date.includes(Thursday)) {
                            console.log("Thursday")
                            joytotalprice += 259

                        } else if (date.includes(Friday)) {
                            console.log("Friday")
                            joytotalprice += 279
                        } else if (date.includes(Saturday)) {
                            console.log("Saturday")
                            joytotalprice += 279
                        } 

                        cuarto.totalamount = joytotalprice;
                        
                        localStorage.setItem('Joy', JSON.stringify(joytotalprice));
                        console.log(room.rentPerDay);
                    }
                    if (cuarto.name.includes("Faith")) {
                        console.log("Faith");
                        if (date.includes(Sunday)) {
                            console.log("Sunday")
                            faithtotalprice += 229
                        } else if (date.includes(Monday)) {
                            console.log("Monday")
                            faithtotalprice += 229
                        } else if (date.includes(Tuesday)) {
                            console.log("Tuesday")
                            faithtotalprice += 229

                        } else if (date.includes(Wednesday)) {
                            console.log("Wednesday")
                            faithtotalprice += 229

                        } else if (date.includes(Thursday)) {
                            console.log("Thursday")
                            faithtotalprice += 229

                        } else if (date.includes(Friday)) {
                            console.log("Friday")
                            faithtotalprice += 249
                        } else if (date.includes(Saturday)) {
                            console.log("Saturday")
                            faithtotalprice += 249
                        } 

                        cuarto.totalamount = faithtotalprice;
                       
                        localStorage.setItem('Faith', JSON.stringify(faithtotalprice));
                        console.log(faithtotalprice)
                    }
                    if (cuarto.name.includes("Love")) {
                        console.log("Love");
                        if (date.includes(Sunday)) {
                            console.log("Sunday")
                            lovetotalprice += 289
                        } else if (date.includes(Monday)) {
                            console.log("Monday")
                            lovetotalprice += 289
                        } else if (date.includes(Tuesday)) {
                            console.log("Tuesday")
                            lovetotalprice += 289

                        } else if (date.includes(Wednesday)) {
                            console.log("Wednesday")
                            lovetotalprice += 289

                        } else if (date.includes(Thursday)) {
                            console.log("Thursday")
                            lovetotalprice += 289

                        } else if (date.includes(Friday)) {
                            console.log("Friday")
                            lovetotalprice += 319
                        } else if (date.includes(Saturday)) {
                            console.log("Saturday")
                            lovetotalprice += 319
                        } 

                        cuarto.totalamount = lovetotalprice;
                        localStorage.setItem('Love', JSON.stringify(lovetotalprice));
                        console.log(lovetotalprice)
                    }
                    if (cuarto.name.includes("Hope")) {
                        console.log("Hope");
                        if (date.includes(Sunday)) {
                            console.log("Sunday")
                            hopetotalprice += 249
                        } else if (date.includes(Monday)) {
                            console.log("Monday")
                            hopetotalprice += 249
                        } else if (date.includes(Tuesday)) {
                            console.log("Tuesday")
                            hopetotalprice += 249

                        } else if (date.includes(Wednesday)) {
                            console.log("Wednesday")
                            hopetotalprice += 249

                        } else if (date.includes(Thursday)) {
                            console.log("Thursday")
                            hopetotalprice += 249

                        } else if (date.includes(Friday)) {
                            console.log("Friday")
                            hopetotalprice += 269
                        } else if (date.includes(Saturday)) {
                            console.log("Saturday")
                            hopetotalprice += 269
                        } 
                        cuarto.totalamount = hopetotalprice;
                        localStorage.setItem('Hope', JSON.stringify(hopetotalprice));
                        console.log(hopetotalprice)
                    }
                    if (cuarto.name.includes("Grace")) {
                        console.log("Grace");
                        if (date.includes(Sunday)) {
                            console.log("Sunday")
                            gracetotalprice += 249
                        } else if (date.includes(Monday)) {
                            console.log("Monday")
                            gracetotalprice += 249
                        } else if (date.includes(Tuesday)) {
                            console.log("Tuesday")
                            gracetotalprice += 249

                        } else if (date.includes(Wednesday)) {
                            console.log("Wednesday")
                            gracetotalprice += 249

                        } else if (date.includes(Thursday)) {
                            console.log("Thursday")
                            gracetotalprice += 249

                        } else if (date.includes(Friday)) {
                            console.log("Friday")
                            gracetotalprice += 269
                        } else if (date.includes(Saturday)) {
                            console.log("Saturday")
                            gracetotalprice += 269
                        } 
                        cuarto.totalamount = gracetotalprice;
                        localStorage.setItem('Grace', JSON.stringify(gracetotalprice));
                        console.log(gracetotalprice)
                    }
                    if (cuarto.name.includes("Peace")) {
                        console.log("Peace");
                        if (date.includes(Sunday)) {
                            console.log("Sunday")
                            peacetotalprice += 249
                        } else if (date.includes(Monday)) {
                            console.log("Monday")
                            peacetotalprice += 249
                        } else if (date.includes(Tuesday)) {
                            console.log("Tuesday")
                            peacetotalprice += 249

                        } else if (date.includes(Wednesday)) {
                            console.log("Wednesday")
                            peacetotalprice += 249

                        } else if (date.includes(Thursday)) {
                            console.log("Thursday")
                            peacetotalprice += 249

                        } else if (date.includes(Friday)) {
                            console.log("Friday")
                            peacetotalprice += 269
                        } else if (date.includes(Saturday)) {
                            console.log("Saturday")
                            peacetotalprice += 269
                        } 

                        cuarto.totalamaount = peacetotalprice;
                
                        localStorage.setItem('Peace', JSON.stringify(peacetotalprice));
                        console.log(peacetotalprice)
                    }
                }



            }



            if (room.currentbookings.length > 0) {

                for (var booking of room.currentbookings) {

                    var bookingfromdate = (moment((booking.fromdate)._i)._i);
                    var bookingtodate = (moment((booking.todate)._i)._i);

                    // console.log(fromdate);
                    // console.log(todate); 
                    // console.log(bookingfromdate); 
                    // console.log(bookingtodate); 

                    if (
                        !moment(moment(bookingfromdate, "DD-MM-YYYY")).isBetween(moment(fromdate, "DD-MM-YYYY"), moment(todate, "DD-MM-YYYY"))
                        && !moment(moment(bookingtodate, "DD-MM-YYYY")).isBetween(moment(fromdate, "DD-MM-YYYY"), moment(todate, "DD-MM-YYYY"))

                        && !moment(moment(fromdate, "DD-MM-YYYY")).isBetween(moment(bookingfromdate, "DD-MM-YYYY"), moment(bookingtodate, "DD-MM-YYYY"))
                        && !moment(moment(todate, "DD-MM-YYYY")).isBetween(moment(bookingfromdate, "DD-MM-YYYY"), moment(bookingtodate, "DD-MM-YYYY"))

                        && !moment(moment(fromdate, 'DD-MM-YYYY')).isSame(moment(bookingfromdate, "DD-MM-YYYY"))
                        && !moment(moment(fromdate, 'DD-MM-YYYY')).isSame(moment(bookingtodate, "DD-MM-YYYY"))
                        && !moment(moment(todate, 'DD-MM-YYYY')).isSame(moment(bookingfromdate, "DD-MM-YYYY"))
                        && !moment(moment(todate, 'DD-MM-YYYY')).isSame(moment(bookingtodate, "DD-MM-YYYY"))
                    ) {
                        availability = true;


                    } else {

                        availability = false;

                    }

                }
            }

            if (availability == true || room.currentbookings.length == 0) {
                temprooms.push(room);
            }

            setrooms(temprooms);
        }
    }

    // Change the price of date from Sunday to Thursday and the other ones are going to be Thursday through Sunday. Filter them out with the price and total price. 
    function filterBySearch() {

        const temprooms = duplicaterooms.filter(room => room.name.toLowerCase().includes(searchkey.toLowerCase()));

        setrooms(temprooms);
    }

    function filterByType(e) {

        if (e !== 'All') {

            settype(e);

            const temprooms = duplicaterooms.filter(room => room.type.toLowerCase() === e.toLowerCase());

            setrooms(temprooms);
        } else {
            settype("All");
            setrooms(duplicaterooms);
        }
    }

    function setnewamount(e) {

        if (e === 39.55) {
            console.log('flowers')
            IsActive ? setIsActive(false) : setIsActive(true);
            !IsActive ? (localStorage.setItem('chocolate', JSON.stringify(e))) : localStorage.removeItem("chocolate");
        }
        if (e === 45.99) {
            console.log('wine')
            IsActiveTwo ? setIsActiveTwo(false) : setIsActiveTwo(true);
            !IsActiveTwo ? (localStorage.setItem('flowers', JSON.stringify(e))) : localStorage.removeItem("flowers");
        }
        if (e === 40.00) {
            console.log('chocolate')
            IsActiveThree ? setIsActiveThree(false) : setIsActiveThree(true);
            !IsActiveThree ? (localStorage.setItem('wine', JSON.stringify(e))) : localStorage.removeItem("wine");

        } 
        else {
       
        }
  
   
}

    return (
        <>
        <div>
        <Hero slides={ SliderDataFour } />
        <TitleTwo title="Little Heaven Bed & Breakfast" paragraph="Our Yadkin Valley Lodging includes 6 guest rooms on two different levels each with it's own bathroom, writing tables and chairs. Every room has a high definition TV and a fireplace. Every room as been decorated with a different theme, still feeling rustic yet modern. All bathrooms have been completely gutted and rennovated for your relaxation and enjoyment. Every room has it's own AC for your convinience. The sheets and comforters are all top of the line with comfort as a priority. All rooms include an iron, ironing board, towels, body wash, shampoo, hand soap, toiletries and two robes."/>
        
         
        <div className="row justify-content-center mt-12" style={{position: 'relative', margin: '30px'}}>
            
            <div className="row mt-12 bs justify-content-center" style={{ width: 'auto', height: 'auto', position: 'relative' }} data-aos="flip-up">

                <div className="col-md-5">
                    <div className='form-control'>
                        <RangePicker format='MM-DD-YYYY' onChange={filterByDate} />
                    </div>
                </div>

                <div className="col-md-3" >
                    <input type="text" className="form-control" placeholder="search rooms"
                        value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBySearch}
                    />
                </div>

                <div className="col-md-3">
                    <select className="form-control" value={type} onChange={(e) => { filterByType(e.target.value) }}>
                        <option value="All">All</option>
                        <option value="King Bed">King Bed</option>
                        <option value="Queen Bed">Queen Bed</option>
                    </select>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <br/>

                            <h2>Additional Packages</h2>
                            <br/>
                            <h6>* Call the Cabin in advance to set up details on added packages</h6>
                            <button id="flowers" onClick={() => setnewamount(45.99)} style={{margin: '10px', backgroundColor: IsActiveTwo ? 'darkorange' : '' }}>A dozen roses: <b>$45.99</b>.</button>
                            <br/>
                            <button id="wine" onClick={() => setnewamount(40.00)} style={{margin: '10px', backgroundColor: IsActiveThree ? 'darkorange' : '' }}>A bottle of wine <b>$40.00</b>.</button>
                            <br/>
                            <button id="chocolate" onClick={() => setnewamount(39.55)} style={{margin: '10px', backgroundColor: IsActive ? 'darkorange' : '' }}>A box of delicious strawberries dipped in dark chocolate <b>$39.55</b>.</button>
                        
                        </div>
                
            </div>


            <div className="row justify-content-center  ">
            
                {loading ? (<Loader />) : (rooms.map(room => {
                    return (<div className="col-sm-12 mt-6" key={room.name} >
                        <Room room={room} fromdate={fromdate} todate={todate} rentPerDay2={room.rentPerDay2} rentPerDay3={room.rentperDay3} rentPerDay1={room.rentperDay1} key={room.name} totalamount={room.totalamount} />
                    </div>)
                })
                )}
            </div>
        </div>
        </div>
        </>
       
    )
}

export default Homescreen;