const mongoose = require("mongoose"); 

var mongoURL = 'mongodb+srv://luisaguilera26:Knu081895!@cluster0.xkmo1.mongodb.net/bedandbreakfast'; 

mongoose.connect(mongoURL, { useUnifiedTopology : true, useNewUrlParser : true }); 

var connection = mongoose.connection; 

connection.on('error', ()=> {
    console.log('Mongo DB Connection failed'); 
}); 

connection.on('connected', ()=> {
    console.log('Mongo DB Connection Successful'); 
}); 

module.exports = mongoose; 

