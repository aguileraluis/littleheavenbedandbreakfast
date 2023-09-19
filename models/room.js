const mongoose = require('mongoose'); 

const roomSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    imageurls : [], 
    currentbookings: [], 
    type: {
        type: String, 
        required: true
    } ,
    description: {
        type: String
    }, 
    descriptiontwo: {
        type: String
    }, 
},
    {
        timestamps: true
    }
)

const roomModel = mongoose.model('rooms', roomSchema); 

module.exports = roomModel; 

