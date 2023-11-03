const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup", async(req, res) => {

    const {firstname, lastname, email, phonenumber, birthday, street, city, state, zip} = req.body;

    try {
        var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://us21.api.mailchimp.com/3.0/lists/bef7e3f207/members',
  'headers': {
    'Authorization': 'Basic YW55c3RyaW5nOjk3ODBmYTVmYjBiYjJlMWFiNTk2NzU2YjlkYjk4MDNkLXVzMjE=',
    'Content-Type': 'application/json',
    'Cookie': 'ak_bmsc=6DF70036D2513234B0650DF2517C7009~000000000000000000000000000000~YAAQkGrcF2+pAICLAQAA4EsNkRVvoJBBIjnZLpk2CMhpknBToBNsPucRIFLm43ZOUidZPsAWlfTY2Zl3DNd8EA7qs914KU0qG7snJBRD87p0wuT6JuHGhYDdZ2dZ3kWip8vtFt0q4oXGtnACalES45vJZ4xDfwCoVvjuxg90pKiew2YdqVfeV705hZunpX6jZkugDDMLJnNtKsRrQjhcJ+XaB74m8uPi+guIby/TdFH6CxRxVoruxzvlg0cZMKs/z6YZhAwcpvIJN/4pmTGK7uK0Y6927Er9R2gcil0M1n8BEQg9PEy6SA5zosua1pPZ4Vso3teEZGPvRxAipUCwf4aAmDfMz5jDNZ9ZYbuY5pWcN//A93v50v9FWNTFx3rv1z8=; bm_sv=C5A0BD03A5CFF56353C9A12C252D5A4D~YAAQjWrcF1PQj36LAQAATJolkRVgDzJGEZWB8+P8exD+F+jeixJS1IxXWDrzGGcnLJOUR75NWArr3VMYPqWjDeesBWYJGTrktp+uWGpZ0A3JqL4eIkx0Ze1kPM+KbaqcwvFJNmEt+q4BM6XnWvjcOkFKebWEAWZklTj8/TKwCrZED598VtoJ34MUZMINfioyFwewW2vcuSJPANx/i9wYxJkjByQpm5MB100z74J1/Pl31xbZOg/ceJIy2olTigKbETeAhIfzSQ==~1'
  },
  body: JSON.stringify({
    "email_address": email,
    "merge_fields": {
      "FNAME": firstname,
      "LNAME": lastname,
      "ADDRESS": {
        "addr1": street,
        "city": city,
        "state": state,
        "zip": zip
      },
      "PHONE": phonenumber,
      "BIRTHDAY": birthday
    },
    "status": "subscribed"
  })

};
request(options, function (error, response) {

    
  if (error) throw new Error(error);
  console.log(response.body);
});
    
Swal.fire('Congratulations, you have registered to our newsletter! Thank you!', 'success').then(result=>{
    window.location.href="/littleheavenbedandbreakfast";
    return result;
})
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