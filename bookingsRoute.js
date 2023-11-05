const express = require('express'); 
const router = express.Router(); 
const moment = require("moment"); 
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")('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')   
// const stripe = require("stripe")('sk_test_51KWrgOEQ6YTqHunycGNTeLAPX3Q8nqPDp9JIOElgp5Z4wLnufaa8VtZJTHm34MRDDsnZ3cGJdj7YsTVWATvAL1ui00I5io549i')   

const Booking = require("./models/booking"); 
const Room = require('./models/room');

router.post('/bookroom', async (req, res) => {

    const {
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
        description,
        descriptiontwo,
        token, 
    } = req.body; 

    try {

        const customer = await stripe.customers.create({
            email : token.email,
            source : token.id
        })

        const payment = await stripe.charges.create({

            amount : totalamount * 100,
            customer : customer.id,
            currency : 'usd',
            receipt_email : token.email


            }, {
                idempotencyKey : uuidv4()
            }
        )

        if (payment){

                const newbooking = new Booking({
                    room : room.name, 
                    roomid: room._id, 
                    fromdate : (moment(fromdate, 'MM-DD-YYYY')),
                    todate : (moment(todate, 'MM-DD-YYYY')),
                    firstname : firstname,
                    lastname : lastname,
                    phonenumber : phonenumber,
                    address : address,
                    email : email,
                    wine : wine, 
                    chocolate : chocolate,
                    flowers : flowers,
                    totalamount : totalamount, 
                    totaldays, 
                    transactionId : '1234', 
                    description: room.description, 
                    descriptiontwo: room.descriptiontwo
        
                })
        
                const booking = await newbooking.save(); 
        
                const roomtemp = await Room.findOne({_id : room._id}); 
        
                roomtemp.currentbookings.push({bookingid : booking._id, wine : wine, firstname : firstname, lastname : lastname, email : email, address : address, phonenumber : phonenumber, chocolate : chocolate, flowers : flowers, fromdate : moment(fromdate, 'MM-DD-YYYY'), todate : moment(todate, 'MM-DD-YYYY'), status : booking.status}); 
        
                await roomtemp.save();
        }

        res.send('Payment successful, your room is booked!')

    } catch (error) {
        return res.status(400).json({ error });
    }
});    

router.get("/getallbookings", async(req, res) => {

    try {
        const bookings = await Booking.find(); 
        res.send(bookings); 
    } catch (error){
        return res.status(400).json({ error }); 
    }
}); 



module.exports = router; 








// const express = require('express'); 
// const router = express.Router(); 
// const moment = require("moment"); 
// const { v4: uuidv4 } = require('uuid');
// // const stripe = require("stripe")('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')   
// const stripe = require("stripe")('sk_test_51KWrgOEQ6YTqHunycGNTeLAPX3Q8nqPDp9JIOElgp5Z4wLnufaa8VtZJTHm34MRDDsnZ3cGJdj7YsTVWATvAL1ui00I5io549i')   

// const Booking = require("./models/booking"); 
// const Room = require('./models/room');

// router.post('/bookroom', async (req, res) => {

//     const {
//         room, 
//         fromdate,
//         todate,
//         totalamount, 
//         totaldays,
//         wine, 
//         chocolate, 
//         flowers,
//         firstname, 
//         lastname,
//         email, 
//         address,
//         phonenumber,
//         description,
//         descriptiontwo,
//         token, 
//     } = req.body; 

//     try {

//         const customer = await stripe.customers.create({
//             email : token.email,
//             source : token.id
//         })

//         const payment = await stripe.charges.create({

//             amount : totalamount * 100,
//             customer : customer.id,
//             currency : 'usd',
//             receipt_email : token.email


//             }, {
//                 idempotencyKey : uuidv4()
//             }
//         )

//         if (payment){

//                 const newbooking = new Booking({
//                     room : room.name, 
//                     roomid: room._id, 
//                     fromdate : (moment(fromdate, 'MM-DD-YYYY')),
//                     todate : (moment(todate, 'MM-DD-YYYY')),
//                     firstname : firstname,
//                     lastname : lastname,
//                     address : address,
//                     email : email,
//                     phonenumber : phonenumber,
//                     wine : wine, 
//                     chocolate : chocolate,
//                     flowers : flowers,
//                     amount : totalamount.tofixed(2), 
//                     totaldays, 
//                     transactionId : '1234', 
//                     description: room.description, 
//                     rentPerDay : room.rentPerDay,
//                     descriptiontwo: room.descriptiontwo
        
//                 })
        
//                 const booking = await newbooking.save(); 
        
//                 const roomtemp = await Room.findOne({_id : room._id}); 
        
//                 roomtemp.currentbookings.push({bookingid : booking._id, wine : wine, chocolate : chocolate, flowers : flowers, fromdate : moment(fromdate, 'MM-DD-YYYY'), todate : moment(todate, 'MM-DD-YYYY'), first_name : firstname, last_name : lastname, email : email, address : address, phonenumber : phonenumber, totalamount : totalamount, status : booking.status}); 
        
//                 await roomtemp.save();
//         }

//         res.send('Payment successful, your room is booked!')

//     } catch (error) {
//         return res.status(400).json({ error });
//     }
// });    

// router.get("/getallbookings", async(req, res) => {

//     try {
//         const bookings = await Booking.find(); 
//         res.send(bookings); 
//     } catch (error){
//         return res.status(400).json({ error }); 
//     }
// }); 



// module.exports = router; 