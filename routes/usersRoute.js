const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup", async(req, res) => {

    const newuser = new User({name : req.body.name, email : req.body.email, phonenumber: req.body.phonenumber, address: req.body.address});

    try {
        const user = await newuser.save()
        res.send("User Registered Successfully")
        return user;
    } catch (error) {
        return res.status(400).json({ error });
    }
}); 

router.post("/login", async(req, res) => {
    
    const { email, password, phonenumber, address } = req.body; 

    try {
        const user = await User.findOne({email : email, password : password});
        if (user) {

            const temp = {
              email : user.email, 
              password : user.password, 
              isAdmin : user.isAdmin, 
              _id : user._id  
            }
            res.send(temp); 
        } 
        else {
            return res.status(400).json({ message : 'Login failed, email or password is incorrect' }); 
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
    
})

module.exports = router; 