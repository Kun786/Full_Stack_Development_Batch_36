const express = require('express');
const Router = express.Router();

//Accquiring Middlewares

//Accquiring Middlewares

//Accquiging Controllers
const {
    PayWithStripe
} = require('../controller/PayWithStripe');
//Accquiging Controllers

//Defining Routes
Router.post('/PayWithStripe', PayWithStripe);//Defining Routes

module.exports = Router;