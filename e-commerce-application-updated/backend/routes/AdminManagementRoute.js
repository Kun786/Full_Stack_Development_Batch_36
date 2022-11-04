const express = require('express');
const Router = express.Router();


//Accquiring Middlewares
const { AuthorizeAdmin } = require('../middlewares/AdminAuthorization')
//Accquiring Middlewares

//Accquiging Controllers
const {
    AdminRegister,
    AdminLogin
} = require('../controller/AdminManagementController')
//Accquiging Controllers

//Defining Routes
Router.post('/AdminRegister', AdminRegister);
Router.post('/AdminLogin',AdminLogin);
//Defining Routes

module.exports = Router;