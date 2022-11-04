const express = require('express');
const Router = express.Router();

//Calling My Controllers

const { 
    ProductData,
    GetProductData,
    UpdateMyProductData,
    DeleteProductData
 } = require('../controller/ProductManagementController');


 //Calling My Controllers

 //Calling My Middlewares
 const { UploadProductImage } = require('../middlewares/UploadMedia');
 //Calling My Middlewares

Router.post('/ProductData',UploadProductImage.array('images',20),ProductData);
Router.get('/GetProductData',GetProductData);
Router.post('/UpdateMyProductData',UpdateMyProductData);
Router.delete('/DeleteProductData',DeleteProductData);

module.exports = Router;