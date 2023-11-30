const express = require('express');
const app = express();

const router = require('./router/auth-router.js');

//mounting
app.use("/api/auth", router);

app.get('/', (req, res) => {
     
    res.status(200).send("Welcome to Home Page");
});

app.get('/register', (req, res) => {
     
    res.status(200).send("Welcome to Register Page");
});

const PORT = 5000;
app.listen(PORT , () => {
    console.log(`server is running at PORT ${PORT}`);
});