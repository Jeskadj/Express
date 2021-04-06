const express = require('express');
const users=require('./users')
const router = express.Router();
router.get('/',function(request,response){
    response.status(200),send("hello home")
})


router.post("/login", function (request,response){
    
    // console.log(request.body);
    const {username,password} = request.body
    // const password = request.body.password
   // console.log(username);
    let user = users.filter(arrayelement => arrayelement.username==="kofi")
                                                                    // username
    console.log(user);
    if (user.length == 1){
        if (user[0].password === password){
        console.log(user.length)
        response.send("login successful")
    }
    response.send("user or password wrong")
} else {
//     response.send{"user does not exist"}
// }
// })
        console.log(user.length)
        response.send({success:false,message:"login failed"})
    }
    
    response.send("login")
})

router.get('/allusers', function(request,response){
        response.status(200).send("allusers")
    })

module.exports = router