const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth-controllers.js");
const authMiddleware =require("../middlewares/auth-middleware.js")

const validate = require("../middlewares/validate-middleware.js");
const signupSchema = require("../validators/auth-validator.js");

router.route("/").get(authControllers.home);

router.route("/register").post( validate(signupSchema), authControllers.register);

router.route("/login").post(authControllers.login);

router.route("/user").get( authMiddleware,authControllers.user);

module.exports = router;