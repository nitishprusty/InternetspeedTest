const express = require('express');
const app = express();
const ejs = require('ejs');

const hostname = "0.0.0.0";
const port = 3000;

app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",(req,res) => { 
    res.render("index");
});

app.get("/speed", (req,res) => { 
    res.render("speed");
});

app.get("/services", (req,res) => {
    res.render("services");
})

app.get("/products", (req,res) => {
    res.render("products");
});

app.get("/contact", (req,res) => {
    res.render("contact");
});

app.listen(port,hostname,()=>{
    console.log(`Server running at https://${hostname}:${port}/`);
});
