const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).send("Welcome to Auth page using routes");
});

router.route("/register").get((req, res) => {
    res.status(200).send("Welcome to Auth Resister page using routes");
});

module.exports = router;