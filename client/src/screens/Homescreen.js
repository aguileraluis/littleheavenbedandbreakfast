import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import moment from 'moment';
import 'antd/dist/antd';
import { DatePicker, Space } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
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
    const [availaibity, setavailability] = useState(false);

    const [fromdate, setfromdate] = useState();
    const [todate, settodate] = useState();

    const [duplicaterooms, setduplicaterooms] = useState([]);
    const [bookedrooms, setbookedrooms] = useState([]);
    const [availablesearchrooms, setavailablesearchrooms] = useState([]);
    const [availableresults, setavailableresults] = useState([]);
    const [kingrooms, setkingrooms] = useState([]);
    const [queenrooms, setqueenrooms] = useState([]);

    const [searchkey, setsearchkey] = useState('');
    const [present, setpresent] = useState(false);
    const [type, settype] = useState('All')

    var temprooms = [];
    var days = [];

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
                setloading(false);
            }
            setTimeout(() => {
                setloading(false);
            }, 1500);

        }
        fetchData().catch(console.error);
    }, [])

    function filterByDate(dates) {
        var fromdate = (moment((dates[0]).$d).format('MM-DD-YYYY'));
        var todate = (moment((dates[1]).$d).format('MM-DD-YYYY'));

        setfromdate(fromdate);
        settodate(todate);


        var availability = false;

        setrooms(duplicaterooms)

        for (const room of duplicaterooms) {

            var joytotalprice = 0;
            var faithtotalprice = 0;
            var lovetotalprice = 0;
            var hopetotalprice = 0;
            var gracetotalprice = 0;
            var peacetotalprice = 0;


            while ((moment(moment(fromdate, "MM-DD-YYYY")).isBefore(moment(todate, "MM-DD-YYYY")))) {
                days.push(moment(fromdate, "MM-DD-YYYY"));
                fromdate = moment(fromdate, "MM-DD-YYYY").add(1, 'days');
                // setfromdate(fromdate);
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

                for (var cuarto of rooms) {





                    if (cuarto.name.includes("Joy")) {
                            cuarto.totalamount = 0;
                        if (date.includes(Sunday)) {

                            joytotalprice += 279
                        } else if (date.includes(Monday)) {

                            joytotalprice += 279
                        } else if (date.includes(Tuesday)) {

                            joytotalprice += 279

                        } else if (date.includes(Wednesday)) {

                            joytotalprice += 279

                        } else if (date.includes(Thursday)) {

                            joytotalprice += 279

                        } else if (date.includes(Friday)) {

                            joytotalprice += 299
                        } else if (date.includes(Saturday)) {

                            joytotalprice += 299
                        }

                        localStorage.setItem('Joy', JSON.stringify(joytotalprice));
                        cuarto.totalamount = joytotalprice;

                    }
                    if (cuarto.name.includes("Faith")) {

                        if (date.includes(Sunday)) {

                            faithtotalprice += 279
                        } else if (date.includes(Monday)) {

                            faithtotalprice += 279
                        } else if (date.includes(Tuesday)) {

                            faithtotalprice += 279

                        } else if (date.includes(Wednesday)) {

                            faithtotalprice += 279

                        } else if (date.includes(Thursday)) {

                            faithtotalprice += 279

                        } else if (date.includes(Friday)) {

                            faithtotalprice += 299
                        } else if (date.includes(Saturday)) {

                            faithtotalprice += 299
                        }

                        cuarto.totalamount = faithtotalprice;

                        localStorage.setItem('Faith', JSON.stringify(faithtotalprice));

                    }
                    if (cuarto.name.includes("Love")) {

                        if (date.includes(Sunday)) {

                            lovetotalprice += 299
                        } else if (date.includes(Monday)) {

                            lovetotalprice += 299
                        } else if (date.includes(Tuesday)) {

                            lovetotalprice += 299

                        } else if (date.includes(Wednesday)) {

                            lovetotalprice += 299

                        } else if (date.includes(Thursday)) {

                            lovetotalprice += 299

                        } else if (date.includes(Friday)) {

                            lovetotalprice += 319
                        } else if (date.includes(Saturday)) {

                            lovetotalprice += 319
                        }

                        cuarto.totalamount = lovetotalprice;
                        localStorage.setItem('Love', JSON.stringify(lovetotalprice));

                    }
                    if (cuarto.name.includes("Hope")) {

                        if (date.includes(Sunday)) {

                            hopetotalprice += 279
                        } else if (date.includes(Monday)) {

                            hopetotalprice += 279
                        } else if (date.includes(Tuesday)) {

                            hopetotalprice += 279

                        } else if (date.includes(Wednesday)) {

                            hopetotalprice += 279

                        } else if (date.includes(Thursday)) {

                            hopetotalprice += 279

                        } else if (date.includes(Friday)) {

                            hopetotalprice += 299
                        } else if (date.includes(Saturday)) {

                            hopetotalprice += 299
                        }
                        cuarto.totalamount = hopetotalprice;
                        localStorage.setItem('Hope', JSON.stringify(hopetotalprice));

                    }
                    if (cuarto.name.includes("Grace")) {

                        if (date.includes(Sunday)) {

                            gracetotalprice += 279
                        } else if (date.includes(Monday)) {

                            gracetotalprice += 279
                        } else if (date.includes(Tuesday)) {

                            gracetotalprice += 279

                        } else if (date.includes(Wednesday)) {

                            gracetotalprice += 279

                        } else if (date.includes(Thursday)) {

                            gracetotalprice += 279

                        } else if (date.includes(Friday)) {

                            gracetotalprice += 299
                        } else if (date.includes(Saturday)) {

                            gracetotalprice += 299
                        }
                        cuarto.totalamount = gracetotalprice;
                        localStorage.setItem('Grace', JSON.stringify(gracetotalprice));

                    }
                    if (cuarto.name.includes("Peace")) {

                        if (date.includes(Sunday)) {
                            peacetotalprice += 279
                        } else if (date.includes(Monday)) {

                            peacetotalprice += 279
                        } else if (date.includes(Tuesday)) {

                            peacetotalprice += 279

                        } else if (date.includes(Wednesday)) {

                            peacetotalprice += 279

                        } else if (date.includes(Thursday)) {

                            peacetotalprice += 279

                        } else if (date.includes(Friday)) {

                            peacetotalprice += 299
                        } else if (date.includes(Saturday)) {

                            peacetotalprice += 299
                        }
                        cuarto.totalamount = peacetotalprice;
                        localStorage.setItem('Peace', JSON.stringify(peacetotalprice));

                    }
                }
            }

            // fromdate = moment(fromdate, "MM-DD-YYYY")._i;
            if (room.currentbookings.length > 0) {

                // fromdate = moment(fromdate, "MM-DD-YYYY")._i;
                // setfromdate((moment(fromdate, "MM-DD-YYYY")._i))
                // console.log(fromdate);
                // console.log(todate);
                for (var booking of room.currentbookings) {
                    var bookingfromdate = (moment((booking.fromdate)._i)._i);
                    var bookingtodate = (moment((booking.todate)._i)._i);
                    fromdate = (moment(fromdate, "MM-DD-YYYY")._i)
                    todate = (moment(todate, "MM-DD-YYYY")._i)
                    if (
                        !moment(moment(fromdate, "MM-DD-YYYY")).isBetween(moment(bookingfromdate, "MM-DD-YYYY"), moment(bookingtodate, "MM-DD-YYYY"))
                        && !moment(moment(todate, "MM-DD-YYYY")).isBetween(moment(bookingfromdate, "MM-DD-YYYY"), moment(bookingtodate, "MM-DD-YYYY"))
                        && !moment(moment(bookingfromdate, "MM-DD-YYYY")).isBetween(moment(fromdate, "MM-DD-YYYY"), moment(todate, "MM-DD-YYYY"))
                        && !moment(moment(bookingtodate, "MM-DD-YYYY")).isBetween(moment(fromdate, "MM-DD-YYYY"), moment(todate, "MM-DD-YYYY"))
                        && !moment(moment(fromdate, 'MM-DD-YYYY')).isSame(moment(bookingfromdate, "MM-DD-YYYY"))
                        // && !moment(moment(fromdate, 'MM-DD-YYYY')).isSame(moment(bookingtodate, "MM-DD-YYYY"))
                        && !moment(moment(todate, 'MM-DD-YYYY')).isSame(moment(bookingfromdate, "MM-DD-YYYY"))
                        && !moment(moment(fromdate, 'MM-DD-YYYY')).isSame(moment(todate, 'MM-DD-YYYY'))
                        // && !moment(moment(todate, 'MM-DD-YYYY')).isSame(moment(bookingtodate, "MM-DD-YYYY"))
                    ) {
                        setavailability(true);
                    } else {
                        setavailability(false);
                        temprooms.push(room);
                    }
                    if (availability === true || room.currentbookings.length === 0) {
                        // temprooms.push(room);
                        bookedrooms.push(booking);

                    }
                }
            }

            days = [];

            // setduplicaterooms(bookedrooms);

        }

        // setrooms(temprooms);

        var merged = duplicaterooms.concat(temprooms);
        // var available = merged.sort((a, b) => (a.name > b.name) ? 1 : -1);
        var available = merged.filter(item => !temprooms.some(itemremoved => itemremoved._id === item._id));


        if (available.length === 0) {
            Swal.fire('We are sorry!', 'There are no available rooms for selected dates, please try again', 'error').then(result => {
                window.location.href = '/littleheavenbedandbreakfast'
            });
        }
        setrooms(available);
        setavailablesearchrooms(available)

        days = [];
        setbookedrooms([]);
        setpresent(false);
        setsearchkey("")

    }



    function filterBySearch() {


        var newtemprooms = rooms.filter(room => room.description.toLowerCase().includes(searchkey.toLowerCase()));

        newtemprooms.forEach(room => {
            temprooms.push(room);
        })

        // setrooms(temprooms);

        if (searchkey.length === 0) {
            setrooms(availablesearchrooms);
            setpresent(false);
        } else {
            setrooms(temprooms);
            setavailableresults(temprooms);
            setpresent(true);
        }

    }

    function filterByType(e) {

        // if (e !== 'All') {

        if (present === true) {
            if (e === 'King Bed') {
                settype(e);

                var newtemprooms = availableresults.filter(room => room.type.toLowerCase() === e.toLowerCase());

                newtemprooms.forEach(item => {
                    kingrooms.push(item);
                })
                setrooms(kingrooms);
            } else if (e === 'Queen Bed') {
                settype(e);

                var newrooms = availableresults.filter(room => room.type.toLowerCase() === e.toLowerCase());

                newrooms.forEach(item => {
                    queenrooms.push(item);
                })
                setrooms(queenrooms);
            }

            else if (e === 'All') {
                settype(e)
                setrooms(availableresults);
            }

        } if (present === false) {
            if (e === 'King Bed') {
                settype(e);

                var secondnewtemprooms = availablesearchrooms.filter(room => room.type.toLowerCase() === e.toLowerCase());

                secondnewtemprooms.forEach(item => {
                    kingrooms.push(item);
                })
                setrooms(kingrooms);
            } else if (e === 'Queen Bed') {
                settype(e);

                var secondnewrooms = availablesearchrooms.filter(room => room.type.toLowerCase() === e.toLowerCase());

                secondnewrooms.forEach(item => {
                    queenrooms.push(item);
                })
                setrooms(queenrooms);
            }

            else if (e === 'All') {
                settype(e)
                setrooms(availableresults);
            }


            // if (e === 'King Bed' && present) {
            //     settype(e);
            //     var newtemprooms = availablesearchrooms.filter(room => room.type.toLowerCase() === e.toLowerCase());
            //     newtemprooms.forEach(room => {
            //         kingrooms.push(room);

            //     })
            //     setrooms(kingrooms);

            // } else {
            //     settype(e);
            //     setrooms(d);
            // }

            // if (e === 'Queen Bed') {
            //     settype(e);
            //     var secondnewtemprooms = availablesearchrooms.filter(room => room.type.toLowerCase() === e.toLowerCase());
            //     secondnewtemprooms.forEach(room => {
            //         queenrooms.push(room);

            //     })
            //     setrooms(queenrooms);

            // } else {
            // settype("All");
            // if (present === true) {
            //     setrooms(availableresults)
            // } else {
            //     setrooms(availablesearchrooms);
            // }

            // setrooms(availablesearchrooms);
        }
        setkingrooms([]);
        setqueenrooms([]);

    }

    const disablePastDates = current => current && current < moment().endOf("day");
    days = [];


    return (
        <>
            <div>
                <Hero slides={SliderDataFour} />
                <TitleTwo title="Little Heaven Bed & Breakfast" paragraph="Our Yadkin Valley Lodging includes 6 guest rooms on two different levels each with its own bathroom, writing tables and chairs. Every room has a high definition TV and a fireplace. Every room as been decorated with a different theme, still feeling rustic yet modern. All bathrooms have been completely gutted and renovated for your relaxation and enjoyment. Every room has its own AC for your convenience. The sheets and comforters are all top of the line with comfort as a priority. All rooms include an iron, ironing board, towels, body wash, shampoo, hand soap, toiletries and two robes. * Check in is at 3:00 p.m. every day. Thank you for choosing to stay at Little Heaven Bed and Breakfast. We cannot wait to see you at the Cabin!" />


                <div className="row justify-content-center mt-12" style={{ position: 'relative', margin: '30px' }}>

                    <div className="row mt-12 bs justify-content-center" style={{ width: 'auto', height: 'auto', position: 'relative' }} data-aos="flip-up">


                        <div className="col-md-5">
                            <div className='form-control'>
                                <RangePicker
                                    dropdownClassName="dropdown-class-name-1"
                                    format='MM-DD-YYYY'
                                    onChange={filterByDate}
                                    disabledDate={current => disablePastDates(current)}
                                />

                            </div>
                        </div>
                        <br />


                        <div className="col-md-4" >
                            <input type="text" className="form-control" placeholder="search rooms"
                                value={searchkey} onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBySearch}
                            />
                        </div>
                        <br />
                        {present === true ? (
                            <div className="col-md-3">
                                <select className="form-control" value={type} onChange={(e) => { filterByType(e.target.value) }}>
                                    <option value="All">All</option>
                                    <option value="King Bed">King Bed</option>
                                    <option value="Queen Bed">Queen Bed</option>
                                </select>
                            </div>
                        ) : <div></div>}
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