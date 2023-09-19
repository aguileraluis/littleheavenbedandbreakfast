const express = require('express'); 
const router = express.Router(); 
const moment = require("moment"); 
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")('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')   

const Booking = require("./models/booking"); 
const Room = require('./models/room');

router.post('/bookroom', async (req, res) => {

    const {
        room, 
        fromdate,
        todate,
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
                    fromdate : moment(fromdate, 'DD-MM-YYYY'),
                    todate : moment(todate, 'DD-MM-YYYY'),
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
        
                roomtemp.currentbookings.push({bookingid : booking._id, wine : wine, chocolate : chocolate, flowers : flowers, fromdate : moment(fromdate, 'DD-MM-YYYY'), todate : moment(todate, 'DD-MM-YYYY'), status : booking.status}); 
        
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