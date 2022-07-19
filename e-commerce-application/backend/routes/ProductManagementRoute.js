const express = require('express');
const Router = express.Router();

//Calling My Controllers

const { ProductData } = require('../controller/ProductManagementController');

Router.post('/ProductData',ProductData)

module.exports = Router;