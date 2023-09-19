const express = require("express");
const app = express(); 
const dbConfig = require('./db'); 
const roomsRoute = require('./routes/roomsRoute'); 
const bookingsRoute = require('./bookingsRoute'); 
const usersRoute= require('./routes/usersRoute');
const path = require("path");
require('dotenv').config({ path: "./config.env" });
const fs = require('fs');


app.use(express.json());

app.use('/api/rooms', roomsRoute); 
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingsRoute); 

__dirname = path.resolve();

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    })
} else {
    app.get("/", function (req, res) {
        res.send("Api running")
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`)); 

