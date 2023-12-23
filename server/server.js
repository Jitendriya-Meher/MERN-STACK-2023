const express = require('express');
const app = express();
const cors = require('cors');

const authRoute = require('./router/auth-router.js');
const contactRoute = require("./router/contact-router.js");
const serviceRoute = require("./router/service-router.js");

const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js")

// middleware
app.use(express.json());
app.use(cors());

//mounting
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data",serviceRoute);

app.use(errorMiddleware);

connectDB().then( () => {

    const PORT = 5000;
    app.listen(PORT , () => {
        console.log(`server is running at PORT ${PORT}`);
    });
}).catch((err) => {
    console.log("error: " , err);
});