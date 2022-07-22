const ProductModel = require('../models/ProductManagementModel')
const ProductData = async(req, res) => {
    try {
        const { ProductName, ProductPrice } = req.body;
        
        const DocToCreate = new ProductModel({
            ProductName,
            ProductPrice
        })

        const DocToSave = await DocToCreate.save();
        //Hey Please Save this Data to My DataBase //IOBlocking await
        res.json({
            Message:'You Have Reached the Api End Point',
            Body:DocToSave
        })
    } catch (error) {
        res.json({
            Message:error.mesage,
            Body:null
        })
    }
}

const GetProductData = (req, res) => {

}

module.exports = {
    ProductData,
    GetProductData
}