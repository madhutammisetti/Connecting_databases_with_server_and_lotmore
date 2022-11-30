/*This file contains programs for static files calling and connection mysql and mongodb databses 
to server and template engines(ejs,) */

// const express = require("express");
// const app = express();

// app.use(express.static("./public"))

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/public/index.html")
// })

// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })

/***************************************************************************** */



/*****connecting mysql database to server**********/

// const express = require("express");
// const app = express();
// const mysql = require("mysql")

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"071436"
// })

// db.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("DB connected")
//     }
// })

// app.get("/vechicals" , (req,res)=>{
//     let sqlquery = 'SELECT * FROM vehicals.bikes;'
//     db.query(sqlquery,(err,data)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(data)
//         }
//     })
// })


// app.get("/countries" , (req,res)=>{
//     let sqlquery = 'SELECT * FROM world.country;'
//     db.query(sqlquery,(err,data)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send(data)
//         }
//     })
// })

// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })

/***************************************************************************** */

/*****connecting mongodb database to server**********/

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose")

// const url = "mongodb+srv://madhu:<password>@madhufirstdatabase.edqe0k5.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(url,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>{
//     console.log("Db connected")
// }).catch((err)=>{
//     console.log(err);
// })


// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })

/***************************************************************************** */

/*****Template Engine (ejs)**********/

// const express = require("express");
// const app = express();
// app.set("viewengine" , "ejs")

// app.get('/',(req,res)=>{
//     res.render('index.ejs',{title:"Welcome to EJS",
//                                 names:["jack","madhu"]})
// })

// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })


/***************************************************************************** */

/***********Render Video with the help of streams**********/

// const fs = require("fs")
// const http = require("http");

// const file = "./video.mp4";

// const {createReadStream} = require("fs")

// const server = http.createServer( (req,res)=>{
//     res.writrHead(200,{'content-Type':'video/mp4'})
//     createReadStream(file).pipe(res)
// })

/***************************************************************************** */

/***********Pratice Problems**********/
/*Create a table in mysql , insert data init and create any get route and display data
which is stored in the database */

// const express = require("express");
// const app = express();
// const mysql = require("mysql")

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"071436"
// })

// db.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("DB connected")
//     }
// })

// app.get("/countries" , (req,res)=>{
//     let sqlquery = 'SELECT * FROM world.country;'
//     db.query(sqlquery,(err,data)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send(data)
//         }
//     })
// })

// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })


/*On calling the get api get the data from database and send ejs file as response
and display that data dynamically in ejs file */

// const express = require("express");
// const app = express();
// const mysql = require("mysql")
// app.set("viewengine" , "ejs")

// const db = mysql.createConnection({
//         host:"localhost",
//         user:"root",
//         password:"071436"
//     })
// db.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("DB connected")
//     }
// })


// app.get("/countries" , (req,res)=>{
//     let sqlquery = 'SELECT * FROM world.country;'
//     db.query(sqlquery,(err,data)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.render("countries.ejs",{countryDetails:data})
//         }
//     })
// })


// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })



/*Create a Post route /register , user must send data email,phno,password,confrom password. If password
and confrom password matches then send response user registered else 
give a sutiable response with status code */

// const express = require("express");
// const app = express();

// app.use(express.json())

// //sending data from postman .

// app.post('/',(req,res)=>{
//     console.log(req.body)
//     const {password,confrompassword} = req.body;
//     if(password === confrompassword){
//         res.json({sucess:"user registred"})
//     }else{
//         res.status(417).json({fail:"password not matched"})
//     }
// })

// app.listen(8080,()=>{
//     console.log("Server satrted runnning on port 8080")
// })
