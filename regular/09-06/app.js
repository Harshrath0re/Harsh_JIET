const { Console } = require("console");
const express = require("express");
const app =express();
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get("/", (req,res) =>{
    res.status(200).send("hello world");
});

app.get("/about-us", (req,res) =>{
    res.status(200).send("This is about us page");
});

app.get("/pokemon", (req,res) =>{
    axios.get("https://pokeapi.co/api/v2/ability/7/")
    .then((response) => {
        console.log(response.data);
        return res.status(200).send(response.data);
    })
    .catch((error) =>{
        return res.status(500).send("error");
    });
});

app.post("/login", (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    // req.body.password("123456789")
    const pass = "123456789";
    if(password === pass){
      res.status(200).send("correct password");
    }else {
        res.status(401).send("password incorrect");
    }
});

const PORT =9000;

app.listen(PORT, () => {
    console.log(`MY server is running on port 9000`);
});