const express = require('express');
const app = express();

const router = require('./router/auth-router.js');
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js")

// middleware
app.use(express.json());

//mounting
app.use("/api/auth", router);

app.use(errorMiddleware);

connectDB().then( () => {

    const PORT = 5000;
    app.listen(PORT , () => {
        console.log(`server is running at PORT ${PORT}`);
    });
}).catch((err) => {
    console.log("error: " , err);
})

