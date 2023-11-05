const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({


    room: {
        type: String, required: true
    },
    roomid: {
        type: String, required: true
    },
    fromdate: {
        type: String, required: true
    },
    todate: {
        type: String, required: true
    },
    totalamount: {
        type: Number, required: true
    },
    firstname: {
        type : String, required: true
    }, 
    lastname: {
        type: String, required: true
    }, 
    address: {
        type: String, required: true
    }, 
    email: {
        type: String, required: true
    },
    phonenumber: {
        type: Number, required: true
    },
    totaldays: {
        type: Number, required: true
    },
    flowers : {
        type: Boolean, required: false
    }, 
    chocolate : {
        type: Boolean, required: false
    }, 
    transactionId: {
        type: String, required: true
    },


}, {
    timestamps: true,
})

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel; 


// const mongoose = require("mongoose");

// const bookingSchema = mongoose.Schema({

//     room: {
//         type: String, required: true
//     },
//     roomid: {
//         type: String, required: true
//     },
//     firstname: {
//         type: String, required: true
//     }, 
//     lastname: {
//         type: String, required: true
//     },
//     email: {
//         type: String, required: true
//     }, 
//     address: {
//         type: String, required: true
//     }, 
//     phonenumber: {
//         type: String, required:true
//     },
//     fromdate: {
//         type: String, required: true
//     },
//     todate: {
//         type: String, required: true
//     },
//     totalamount: {
//         type: Number, required: true
//     },
//     totaldays: {
//         type: Number, required: true
//     },
//     rentPerDay: {
//         type: String, required: true
//     },
//     transactionId: {
//         type: String, required: true
//     },


// }, {
//     timestamps: true,
// })

// const bookingModel = mongoose.model('bookings', bookingSchema);

// module.exports = bookingModel; 
