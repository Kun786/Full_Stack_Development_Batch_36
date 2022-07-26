const express = require('express');
const Router = express.Router();

//Calling My Controllers

const { 
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteProductData
 } = require('../controller/ProductManagementController');

Router.post('/ProductData',ProductData);
Router.get('/GetProductData',GetProductData);
Router.post('/UpdateMyProductData',UpdateMyProductData);
Router.delete('/DeleteProductData',DeleteProductData);

module.exports = Router;