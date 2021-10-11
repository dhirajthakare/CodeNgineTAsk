const express = require("express");
const app  = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

const cors = require("cors");
app.use(cors());
const crypto = require("crypto");
const key = "password";
const algo = "aes256";

var mysql = require('mysql');
var con = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'CodeNgine'
});
con.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("connection done");
    }
})

app.post("/register",(req,res)=>{

    cipher = crypto.createCipher(algo,key);
    const encryptedPass = cipher.update(req.body.Password,'utf8','hex')+cipher.final('hex');
    con.query("INSERT INTO `user`( `Name`, `Email`, `Password`) VALUES ('"+req.body.Name+" ', '"+req.body.Email+"','"+encryptedPass+"')",function(err,responce){
        if(err){
            res.status(400).json(err)
        }else{
            res.json("Registration succesfully ")
        }
    })
})

app.post("/login" , (req,res)=>{
    con.query(" select * from user where Email ='"+req.body.Email+"'",function(err,responce){

        if(err){
            res.status(400).json(err)
        }else{

         if(responce[0]){
            decipher = crypto.createDecipher(algo,key);
            decryptedPass = decipher.update(responce[0].Password,'hex','utf8')+decipher.final('utf8');
           
           if(decryptedPass == req.body.Password){
               res.json(responce[0].id);
           }else{
               res.status(400).json("Password Is Invalid Please Try Agin");
           }
         }else{
            res.status(400).json("User is not available");
         }
            
        }
    })
})

app.get("/department" , (req,res)=>{
    con.query(" select * from department ",function(err,responce){

        if(err){
            res.status(400).json(err)
        }else{
            res.json(responce);
    
        }
    })
})

app.get("/department/:id" , (req,res)=>{
    con.query(" select * from department where id = "+req.params.id,function(err,responce){

        if(err){
            res.status(400).json(err)
        }else{
            res.json(responce[0]);
        }
    })
})

app.get("/user" , (req,res)=>{
    con.query(" select * from user ",function(err,responce){

        if(err){
            res.status(400).json(err)
        }else{
            res.json(responce);
    
        }
    })
})

app.get("/user/:id" , (req,res)=>{
    con.query(" select * from user where id = "+req.params.id,function(err,responce){

        if(err){
            res.status(400).json(err)
        }else{
            res.json(responce[0]);
        }
    })
})
app.listen(3000);

