    //   anything
const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const { response } = require('express');
    //   server      // anything
const server = express();

server.use(express.json())
server.use(cors())

server.use('/api/v1',routes)

const port= 5001

const users=[
{  id:1,
 username:"allen",
 password:"xyz",
 name:"Allen eben",
},
{ id:4,
 username:"kojo",
 password:"passmeby",
 name:"kojo Mensah",
},
{     id:5,
 username:"kevin",
 password:"pass",
 name:"kevin owusu"
}]

// server
// app.get("/",(req,res)=>{
//     console.log(req);
//     res.send("Hello World,from express");
// })

// app.get('/users',(req,res)=>{
//     res.send("users users")
// })

// app.get("/login",(req,res)=>{
//     res.send("login")
// })
// server.get('/api/vi/allusers', function(request,respond){
//     response.status(200).send("allusers")
// })
// server.get ('/',function(request,response){
//     response.status(200).send("hello home")
// })

// server.post("/login", function (request,response){
    
//     // console.log(request.body);
//     const {username,password} = request.body
//     // const password = request.body.password
//    // console.log(username);
//     let user = users.filter(arrayelement => arrayelement.username==="kofi")
//                                                                     // username
//     console.log(user);
//     if (user.length == 1){
//         if (user[0].password === password){
//         console.log(user.length)
//         response.send("login successful")
//     }
//     response.send("user or password wrong")
// } else {
// //     response.send{"user does not exist"}
// // }
// // })
//         console.log(user.length)
//         response.send({success:false,message:"login failed"})
//     }
    
//     response.send("login")
// })
server.listen(port,()=>console.log(`server is running at port ${port}.......`))

// console.log("helloooooo")

// app.get()

// function displayname(name){
    
//     return name;
// }

// displayname('kojo')