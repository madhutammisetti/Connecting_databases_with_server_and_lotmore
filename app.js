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