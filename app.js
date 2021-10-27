const express = require("express"); 
const path = require("path");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.listen (port, ()=>{
    console.log("Se levanto el puerto");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

